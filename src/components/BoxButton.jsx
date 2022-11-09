import React from 'react'
import Arrow from './icons/Arrow'

const BoxButton = ({ children }) => {
   return (
      <React.Fragment>
         <div className='px-[20px] py-[27px] mt-[30px] bg-white box__button__shadow'>
            <div className='flex items-center justify-between'>
               <span>How does this work?</span>
               <span><Arrow className='w-[20px] h-[20px] fill-black rotate-180' /></span>
            </div>
            {children}
         </div>
      </React.Fragment>
   )
}

export default BoxButton