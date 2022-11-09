import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../components/icons/Arrow'
import { handleCuttingElements, handleDataCreateWallter } from '../utils'
import { data } from '../data'
import CreateWallteList from '../components/CreateWallteList'
import BoxButton from '../components/BoxButton'
import ModalCopy from '../components/ModalCopy'
import Dow from '../components/icons/Dow'
import Copy from '../components/icons/Copy'

const CreateWalletTwo = () => {
   const checkList = handleCuttingElements(data, 18)
   const newDataList = handleDataCreateWallter(checkList, 3)

   const [wallter, setWallter] = useState([])

   const [success, setSucess] = useState(false)
   const [error, setError] = useState(false)

   const [submit, setSubmit] = useState(false)

   const handleAddWallter = (value, id) => {
      setWallter([...wallter, value])
      document.querySelectorAll(`#${value.name}`).forEach((item) => {
         item.classList.toggle('active')
         // eslint-disable-next-line
         wallter.map(_item => {
            if(_item.name === item.textContent) {
               setWallter(wallter.filter(__item => __item.name !== item.textContent))
            }
         })
      })
   }

   const handleChecking = () => {
      if(wallter.length > 0) {
         document.getElementById('hidden_scroll').style.overflowY = 'hidden'
         setSucess(true)
         setError(false)
      } else {
         setError(true)
         setSucess(false)
      }
   }

   const handCheckBox = () => {
      const check_1 = document.getElementById('check_1').checked;
      const check_2 = document.getElementById('check_2').checked
      const check_3 = document.getElementById('check_3').checked
      if(check_1 && check_2 && check_3) {
         setSubmit(true)
      }
   }

   const handleOutModal = () => {
      document.getElementById('hidden_scroll').style.overflowY = 'auto'
      setSucess(false)
      setSubmit(false)
   }

   return (
      <React.Fragment>
         <div className='px-[30px]'>
            <Link to='/'>
               <div className='mt-[10px] flex items-center text-[17px] font-medium cursor-pointer'>
                  <span><Arrow className='w-[20px] h-[20px] fill-black' /></span>
                  <span>Create New Wallter</span>
               </div>
            </Link>
            <div className='flex items-center justify-between mt-[16px]'>
               <span className='text-[17px] font-medium text-[#004DFF]'>Auto Gen Seed Phrase?</span>
               <span className='text-[15px] font-normal'>2/6</span>
            </div>

            <CreateWallteList dataList={newDataList} handleAddWallter={handleAddWallter} />

            {error && (
               <div className='mt-[10px] text-[15px] text-[#FF0366]'>
                  <span>Wrong seed phrases. Please try again!</span>
               </div>
            )}
         </div>
         <BoxButton>
            <div className='w-full min-h-[56px] flex items-center justify-center uppercase bg-[#004DFF] mt-[26px] text-white rounded-xl text-[17px] font-bold'
               onClick={handleChecking}
            >
               <span>Submit</span>
            </div>
         </BoxButton>

         {success && (
            <ModalCopy>
               <div className='box__button__shadow px-[10px] pt-[5px] pb-[20px] absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center flex-col rounded-t-[20px]'>
                  <div className='mb-[30px]' onClick={handleOutModal}>
                     <span><Dow /></span>
                  </div>
                  <div className='w-[71px] h-[71px] bg-[#04B800] rounded-full flex items-center justify-center'>
                     <span>
                        <Copy className='w-[29px] h-[33px] fill-white' />
                     </span>
                  </div>
                  <div className='mt-[15px] text-[22px] font-bold text-[#04004D]'><span>Your wallet has been created!</span></div>

                  <div className='mt-[20px]'>
                     <div className='flex items-start'>
                        <input type="checkbox" name="" id="check_1" className='mt-[6px] mr-2' onChange={handCheckBox} />
                        <div className='text-[15px]'>
                           <span>Metanode cannot recover your seed phrase. You should back up your seed phrase and keep it safe, it’s your responsibility.</span>
                        </div>
                     </div>
                     <div className='flex items-start'>
                        <input type="checkbox" name="" id="check_2" className='mt-[6px] mr-2' onChange={handCheckBox} />
                        <div className='text-[15px]'>
                           <span>Your transaction data is one of the most important security keys which is needed for every incurred transaction. You should back up your data automatically and secure back up file with a strong pasword.</span>
                        </div>
                     </div>
                     <div className='flex items-start'>
                        <input type="checkbox" name="" id="check_3" className='mt-[6px] mr-2' onChange={handCheckBox} />
                        <div className='text-[15px]'>
                           <span>To keep your backup file safe, you should also keep secret your back up location and secure it.</span>
                        </div>
                     </div>
                  </div>

                  <div className={`w-full h-[56px] bg-[#004DFF] text-white uppercase rounded-xl mt-[20px] flex items-center justify-center cursor-pointer font-bold ${submit ? 'opacity-100 pointer-events-auto' : 'opacity-50 pointer-events-none'}`}
                     onClick={handleOutModal}
                  >
                     <span>i understand</span>
                  </div>
               </div>
            </ModalCopy>
         )}
      </React.Fragment>
   )
}

export default CreateWalletTwo