function fetchnumber(){
    return new Promise((resolve)=>{
       console.log("fetching start...")
  setTimeout(()=>{
const numbers = [1,2,3,4,5,6,7,8,9]
console.log("number fetched",numbers);
resolve(numbers)
  },1000)
    });
};

function multiply(numbers){
return new Promise((resolve) => {
    setTimeout(()=>{
     let dbl = numbers.map(n => n*2);
     console.log("double number",dbl);
     resolve(dbl)
    },1000)
})
}

function sumnumber(numbers){
return new Promise((resolve) => {
    setTimeout(() => {
        let sum = numbers.reduce((acc,n)=>{
return acc + n
        },0)
        console.log("sum number",sum);
        resolve(sum)
    }, 1000);
})
}


fetchnumber()
.then(nums => multiply(nums))
.then(dbl => sumnumber(dbl))
.then(sum =>{
    
    

})
.catch(err=> console.log("error",err))
setTimeout(() => {
    console.log("fetching done.....")
}, 5000);