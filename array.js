(function ()
{
    console.log("hello");
})();

((a,b) => {
    console.log(a + b);
})(10,10);

(function demo()
{
    console.log("hello world");
})();

//declaration way
let arr = [10 , 20 , "hello" , true ,1n , undefined]
console.log(arr);

//Using new keyword
let arr1 = new Array(10 , 20 , "hello" , true)
console.log(arr1);