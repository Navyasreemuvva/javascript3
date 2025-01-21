//asynchronus function
//making a waay for other functions to execute 1st

const { object } = require("webidl-conversions");

//two methods
//1) setTImeOut(call back function, delay-time)
//2) setinterval(call back function, dalay-time)
//both methods present inside the window object.
// function main(m, n){
//     setTimeout(() => {
//         for(let i=m; i<=n; i++){
//             console.log(i);
//         }
//     } , 5000)
// }
// main(1, 20)

// window.setTimeout(() => {
//     console.log("iam settimeout");
// },5000)
// window.setTimeout(() => {
//     console.log("iam setInterval");
// },3000)


// Promise
// --> used to look after the function
// --> it is an object
//1) pending phase
//2) reject phase
//3)
let online = window.Navigator.online

new Promise((resolve, reject) => {
    setTimeout(() => {
        if(online === true){
            return resolve()
        }else{
            return reject()
        }
    } , 2000)
})
.then(() => console.log("online")
)