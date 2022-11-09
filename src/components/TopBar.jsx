import React from 'react'
import Battery from './icons/Battery'
import Cellular from './icons/Cellular'
import WiFi from './icons/WiFi'

const ToolList = [
   { icon: <Cellular /> },
   { icon: <WiFi /> },
   { icon: <Battery /> },
]

const TopBar = () => {
   const date = new Date()
   const handleTime = () => {
      return `${date.getHours()}:${date.getMinutes()}`
   }
   return (
      <React.Fragment>
         <div className='flex items-center justify-between px-[30px] py-[14px] sticky top-0 bg-white'>
            <div className='text-[15px] font-semibold'>
               <span>{handleTime()}</span>
            </div>
            <div className='flex items-center'>
               {ToolList.map((item, index) => (
                  <div key={index} className='mx-[5px]'>
                     <span>{item.icon}</span>
                  </div>
               ))}
            </div>
         </div>
      </React.Fragment>
   )
}

export default TopBar