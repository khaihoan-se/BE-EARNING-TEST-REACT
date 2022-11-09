import React from 'react'

const WallteList = (props) => {
   const { dataList } = props;
   return (
      <React.Fragment>
         <div className='grid__wallet w-full h-full mt-4'>
            {dataList.map(item => (
               <div key={item.index} className='box__shadow__wallet__item flex items-center px-[8px] py-[6px] overflow-hidden rounded-md cursor-pointer hover:opacity-60'>
                  <div className='min-w-[20px] min-h-[20px] flex items-center justify-center bg-[#BBCFFB] text-[#004DFF] rounded-full mr-1 text-[11px]'>
                     <span>{item.index}</span>
                  </div>
                  <div className='text-[14px]'><span>{item.name}</span></div>
               </div>
            ))}
         </div>
      </React.Fragment>
   )
}

export default React.memo(WallteList)