import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
   return (
      <React.Fragment>
         <div className='w-full mt-[30px] flex items-center justify-center text-[22px] font-bold flex-col'>
            <h1>NotFound</h1>
            <Link to='/'   >
               <div className='px-[8px] py-[6px] bg-[#004DFF] mt-[26px] text-white rounded-lg text-[15px] cursor-pointer'>
                  <span>Come back</span>
               </div>
            </Link>
         </div>
      </React.Fragment>
   )
}

export default NotFound