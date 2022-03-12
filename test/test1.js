// function debounse(fn,delay){
//   let timeout = null
//   return function () {
//     let arg=arguments
//     timer && clearTimeout(timeout)
//     timer = setTimeout(() => {
//       fn.apply(this,arg)
//     }, delay);
//   }
// }

// function throttle(fn, delay){
//   let timer = null;
//   let startTime = Date.now();
//   return function(){
//     let curTime = Date.now();
//     let remain = delay - (curTime - startTime);
//     let that = this;
//     let args = arguments;
//     clearTimeout(timer);
//     if(remain <= 0){
//       fn.apply(that,args);
//       startTime = Date.now();
//     }else{
//       timer = setTimeout(fn, remain);
//     }
//   }
// }

// function repeat(func, times, wait) {
//   return (str)=>{
//     for (var i = 1; i <= times; i++) {
//     (function (i) {
//       console.log(this);
//       setTimeout(func.bind(this,str), wait * i);
//     })(i)
//   }
//   }

// }
// const repeatFunc = repeat(console.log, 4, 1000)
// repeatFunc("hellworld")

function findTwo(arr, num) {
  let results = []
  arr.forEach(item => {
    let res = arr.find(reduce => reduce === num - item)
    if (res) {
      results = [item, num - item]
    }
  })
  console.log(results)
  return results
}
array = [2, 3, 1, 10, 4, 30]
n = 31
findTwo(array, n)