// try{
//     console.log("Try block starts here");
//     // error --> reference error
//     console.log(x);
//     console.log("try block ends here");
// }
// catch(err){
//     // we define this block , for what we wanted to do with error , basically it handles error
//     // uses -> retry logic , fallback mechanism , logging , custom error
//     console.log("I AM INSIDE CATCH BLOCK")
//     console.log("Your error is here : ", err)
// }
// finally{
//     console.log("I WILL RUN EVERYTIME , AS I AM FINALLY BLOCK")
// }

// CUSTOM ERRORS
// example i)
// try
// {
//     // Reference error
//     console.log(x)
// }
// catch 
// {
//     throw new Error("Bhai error pehle declare kardo !!!")
// }


let errorCode = 100;
if(errorCode == 100)
{
    throw new Error("Invalid JSON")
}