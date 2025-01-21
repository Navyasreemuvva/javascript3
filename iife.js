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

//declaration way

let obj = {
    name : "abhi" ,
    id : 1 ,
    arr : [10 , 20 , 30],
    boolean : true ,
    demo : function()
    {
        console.log("hello")
    }
}

    console.log(obj);
    console.log(obj.name);