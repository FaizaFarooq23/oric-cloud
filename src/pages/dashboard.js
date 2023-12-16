import Hamburgar from '@/components/Dashboard/Hamburgar'
import RightPanel from '@/components/Dashboard/RightPanel'
import Sidebar from '@/components/Sidebar/Sidebar'
import React from 'react'

export default function dashboard() {
  return (
    <div className='flex my-1'>
      <Sidebar/>
      <Hamburgar/>
      <RightPanel/>
    </div>
  )
}
