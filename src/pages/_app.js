import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react";

export default function App({ Component, session, pageProps }) {
  return (
    <SessionProvider session={session}>
      <main>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  )
}
