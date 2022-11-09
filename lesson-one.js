const largestArrangement = (array) => {
   return Number(array.sort(function(a, b) {
         return Number("" + b + a) - Number("" + a + b);
      }).join("")
   );
}
const arr = [11, 10, 1]
console.log(largestArrangement(arr));

// npm run case or yarn case