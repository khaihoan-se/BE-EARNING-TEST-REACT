import React from 'react'

const CreateWallteList = ({ dataList, handleAddWallter }) => {
   return (
      <React.Fragment>
         <div className='mt-4 w-full'>
            {  
               dataList.map((item, index) => (
                  <div key={index} className='w-full min-h-[57px] h-[57px] px-4 flex items-center border-[1px] border-[#D3D7DB] rounded-md mb-2'>
                     <div className='w-[100px] flex-1 '>
                        <div className='min-w-[20px] min-h-[20px] flex items-center justify-center border-[1px] border-[#004DFF] text-[#004DFF] rounded-full mr-1 text-[11px]'>
                           <span>{item.primaryIndex}</span>
                        </div>
                     </div>
                     <div id={item.primaryIndex} className='create__wallter w-full flex items-center justify-between ml-4'>
                        {item.value.map((ele, indexEle) => (
                           <div id={ele.name} key={indexEle} className={`flex items-center px-[8px] py-[6px] overflow-hidden rounded-md cursor-pointer hover:bg-[#BBCFFB] hover:text-[#004DFF] relative`}
                              onClick={() => handleAddWallter(ele, item.primaryIndex)}
                           >  
                              <span>{ele.name}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               ))
            }
         </div>
      </React.Fragment>
   )
}

export default CreateWallteList