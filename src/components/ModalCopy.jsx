import React from 'react'

const ModalCopy = ({ children }) => {
   return (
      <React.Fragment>
         <div className='bg__modal__copy inset-0 sticky w-full h-full'>
            <div className='w-full h-full relative'>
               {children}
            </div>
         </div>
      </React.Fragment>
   )
}

export default ModalCopy