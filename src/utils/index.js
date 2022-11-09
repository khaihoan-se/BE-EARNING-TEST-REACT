
export const handleCuttingElements = (array, cout) => {
   const removeRepeats = Array.from(new Set(array))
   const newArr = []
   // eslint-disable-next-line
   removeRepeats.map((element, index) => {
      index < cout && newArr.push({
         name: element,
         index: index + 1,
      }) 
   })
   return newArr
}

export const handleDataCreateWallter = (array, cout) => {
   let index = 0
   const newArr = []
   for(index = 0; index < array.length; index += cout) {
      const coutArr = array.slice(index, index+cout);
      newArr.push({
         value: coutArr,
         primaryIndex: index + cout,
      })
   }
   return newArr
}

export const largestArrangement = (array) => {
   return Number(array.sort(function(a,b) {
      return Number('' + b + a) - Number('' + a + b)
   })).join('')
}
