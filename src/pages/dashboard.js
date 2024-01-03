import Baselayout from '@/components/Baselayout/Baselayout'
import Hamburgar from '@/components/Dashboard/Hamburgar'
import RightPanel from '@/components/Dashboard/RightPanel'
import React from 'react'

export default function dashboard() {
  return (
   <Baselayout >
      <div className='flex justify-center gap-x-6'>
        <Hamburgar/>
      <RightPanel/>
      </div>
    </Baselayout>
 
  )
}
