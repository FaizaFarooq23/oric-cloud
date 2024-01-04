import { UserProvider } from '@/context/UserContext/GlobalProvider';
import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react";

export default function App({ Component, session, pageProps }) {
  return (

    <SessionProvider session={session}>
      <UserProvider>
        <main>
          <Component {...pageProps} />
        </main>
      </UserProvider>
    </SessionProvider>

  )
}
