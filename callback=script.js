function fetchnum(callback){
setTimeout(()=>{
const num = [1,2,3,4,5,6,7,8]
console.log("number fetched",num)
callback(num)
},2000)
}


function multiplynum (num,callback){
setTimeout(()=>{
   let double =  num.map(function(numbers){
        return numbers * 2;
    });
    console.log("num duble",double)
    callback(double)
},1000)
};


function sum(number,callback){
setTimeout(()=>{
const sum = number.reduce(function(acc,n){
    return acc + n;
},0);
console.log("sum of num",sum);
callback(sum)


},500)
}

fetchnum((num)=>{
multiplynum(num,(double)=>{
    sum(double,(sum)=>{
        console.log("all steps are done",sum)
    })
})
})

