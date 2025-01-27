//events in dom
//--> it is an action performed by end-user on a web-page

//-->types

//--> 1. key-board event
         //key-up
         //key-down
         //key-press

//--> 2. mouse event
         //onmouseover
         //onmouseleave
         //dbclick
         
//--> 3. form event
         //input
         //focus
         //key-press

//--> 4. pointer event
        //click-event


 function event1(){
     console.log("hello-world")
 }

// let btn = document.getElementById("demo")
// console.log(btn);

// btn.onclick = function(){
    // let res = Math.random() * 1000
    // console.log(res);

//     let res = Math.round(Math.random() * 10000).toString(16)
//     console.log(res);
//     document.body.style.backgroundColor = `#${res}`
// }

// let btn1 = document.getElementById("demo1")
// console.log(btn1);
// let color = window.prompt("enter any color name")
// console.log(color);

// btn.innerHTML = color

// btn1.onmouseover = () => {
//     document.body.style.backgroundColor = `${color}`

// }

let video = document.getElementById("demo2")
console.log(video);

video.addEventListener("click", () = > {
    let res = video.classList.toggle("demo")
    if(res){
        video.play()
    }else{
        video.pause()
    }
})