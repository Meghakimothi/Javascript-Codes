var myobject = {
    sayhello: function(){
        console.log("hello my dear friend")
    },
    name: 'nammu' 
}

var myarray = ['a','e','i'];
var string = 'hello';
var mynumber = 3;

console.log(typeof myarray);
console.log(typeof string);
console.log(typeof mynumber);
console.log(typeof myobject);
console.log(typeof null);         //object  (carefull!)
console.log(typeof Infinity);    //number
console.log(typeof (typeof 1));   //string
console.log(typeof NaN);         //number
console.log(typeof new Date());  //object