import Login from '@/components/Login/Login'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      <Login/>
    </div>
  )
}
