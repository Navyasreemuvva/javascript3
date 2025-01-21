//function main(a)
//{
   // console.log(a);
   // console.log(a());
//}
//main(function(){
   // return "i am cbf1"

//})
//main(function(){
    //return "i am cbf2"
//})
//function main1(task)
//{
   // console.log(task(10, 10));
//}
//main1(function(a, b){
  //  return a + b
//})

//main1(function(a, b){
  //  return a - b
//})

//main1(function(a, b){
   // return a * b
//})
//let a = () => console.log("hello");
//console.log(a);
//a()
//let b = () => {return "hello"}
//console.log(b);
//console.timeLog(b());
let operation = (a, b, task) => {
   console.log(task(a, b));
}
operation(a = Number(prompt("enter a for addition")) ,
          b = Number(prompt("enter b for addition")),
          (a , b) =>{
            return a+b
          })
operation(a = Number(prompt("enter a for sub")) ,
          b = Number(prompt("enter b for sub")),
          (a , b) =>{
            return a-b
          })