//function()
//{
    //console.log("hello");

//}
//consolr.log(demo);
//demo()
 //let operator = function(a)
 //{
   // console.log(a);
// //}
 //operator(10, 20, 30)

 //let operator = function(a)
 //{//
    // console.log(a);
    //  console.log(arguments[1]);
     // console.log(arguments[2]);
//}
// operator(10, 20, 30)
let demo1 = function()
{
    let a = Number(prompt("enter a value"))
    let b = Number(prompt("enter b value"))
    let c = Number(prompt("enter c value"))
   let d = a + b +c
   console.log(d);
    let e = a - b -c
    console.log(e);
     let f = a * b * c
     console.log(f)
   
    if( a >=b && a >= c)
   {
    console.log("a is gratest")

}else if(b >=a && b>=c)

{
   console.log("b is greatest")
}else{
   console.log("c is greatest")
}
}
demo1()