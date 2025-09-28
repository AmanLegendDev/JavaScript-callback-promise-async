function fetchnumber(){
    return new Promise((resolve) => {
        setTimeout(() => {
            const numbers = [1,2,3,4,5,6,7,8]
            console.log("numbers fetched",numbers)
            resolve(numbers)

        }, 1000);
    })
};

function multyply(numbers){
    return new Promise((resolve) => {
        setTimeout(() => {
            const dbl = numbers.map(n => n*2)
            console.log("numbers dbl",dbl)
            resolve(dbl)
        }, 1000);
    })
};



function sumnumbers(numbers){
return new Promise((resolve) => {
    setTimeout(() => {
       
     const sum = numbers.reduce((acc,n)=>
        acc + n ,0
    )  
        console.log("sum of all numbers",sum)
        resolve(sum)
    }, 1000);
})
};



async function runall() {
    try{
        const nums = await fetchnumber();
        const dbl = await multyply(nums);
        const finalsum = await sumnumbers(dbl);


        let card = document.querySelector(".card");
        finalsum.forEach(function(dels){
           let h1 = document.createElement("h1")
            h1.innerHTML =`<h1>${dels.data}</h1>`
        })
card.appendChild(h1)

    }catch(err){
        console.error("error".err)
    }
}
runall()

setTimeout(() => {
    console.log("all steps are done")
}, 4000);



