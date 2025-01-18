let promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First")
})
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Second")
})
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,4000,"Third")
})

Promise.all([promise1,promise2,promise3])
.then((values)=>{
    console.log(values)
})
.catch((error)=>{
    console.error("error -: " +error)
})