import React, { useState } from 'react'
import Arrow from '../components/icons/Arrow'
import { handleCuttingElements } from '../utils'
import { data } from '../data' 
import WallteList from '../components/WallteList'
import Copy from '../components/icons/Copy'
import BoxButton from '../components/BoxButton'
import ModalCopy from '../components/ModalCopy'
import { Link } from 'react-router-dom'
import Dow from '../components/icons/Dow'
import LoadingIcon from '../components/icons/LoadingIcon'

const CreateWallet = () => {
   const wallteListData = handleCuttingElements(data, 24)
   
   const [showCopy, setShowCopy] = useState(false)
   const [coutTime, setCoutTime] = useState(2)

   const handleClickCopy = (e) => {
      e.stopPropagation()
      document.getElementById('hidden_scroll').style.overflowY = 'hidden'
      setShowCopy(true)
      setTimeout(() => {
         setCoutTime(coutTime - 1)
      }, 1000)
      setTimeout(() => {
         document.getElementById('hidden_scroll').style.overflowY = 'auto'
         setShowCopy(false)
         setCoutTime(2)
      }, coutTime + 1998)
   }

   return (
      <React.Fragment>
         <div className='px-[30px]'>
            <div className='mt-[10px] flex items-center text-[17px] font-medium cursor-pointer'>
               <span><Arrow className='w-[20px] h-[20px] fill-black' /></span>
               <span>Create New Wallter</span>
            </div>
            <div className='text-[17px] font-medium mt-[16px] text-[#004DFF]'>
               <span>Auto Gen Seed Phrase?</span>
            </div>
            <WallteList dataList={wallteListData} />
            <div className='mt-[16px] flex items-center justify-between'>
               <div className='text-[13px] font-medium mr-2 overflow-hidden'>
                  <span>Tap to Copy or Carefully write down your seed phrase and store it in a safe place</span>
               </div>
               <div className='border-[1px] border-[#004DFF] min-w-[48px] min-h-[48px] flex items-center justify-center rounded-xl cursor-pointer'
                  onClick={handleClickCopy}
               >
                  <span>
                     <Copy className='w-[29px] h-[33px] fill-[#004DFF]' />
                  </span>
               </div>
            </div>
         </div>
         <BoxButton>
            <div className='w-full min-h-[56px] flex items-center justify-center uppercase bg-[#004DFF] mt-[26px] text-white rounded-xl text-[17px] font-bold'>
               <Link to='/create-wallet-two' className='w-full h-full flex items-center justify-center outline-none'>
                  <span>Next</span>
               </Link>
            </div>
         </BoxButton>
         {showCopy && (
            <ModalCopy>
               <div className='box__button__shadow px-[70px] pt-[5px] pb-[20px] absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center flex-col rounded-t-[20px]'>
                  <div className='mb-[30px]'>
                     <span><Dow /></span>
                  </div>
                  <div className='w-[71px] h-[71px] bg-[#04B800] rounded-full flex items-center justify-center'>
                     <span>
                        <Copy className='w-[29px] h-[33px] fill-white' />
                     </span>
                  </div>
                  <div className='mt-[15px] text-[22px] font-bold text-[#04004D]'><span>Saved to clipboard</span></div>
                  <div className='relative flex items-center justify-center text-[#FF0366] mt-[30px]'>
                     <span>
                        <LoadingIcon />
                     </span>
                     <span className='absolute'>{coutTime}</span>
                  </div>
               </div>
            </ModalCopy>
         )}
      </React.Fragment>
   )
}

export default CreateWallet