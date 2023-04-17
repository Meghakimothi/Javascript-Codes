(function(){
    var first = "hello iam anonymous function";
    console.log(first);
})();

console.log(first);           //can't be access from outside
  
//passing anonymous funcn as any other variable - 
//first order function

var myfn = function(fn){
    var result = fn();
    console.log(result);
};
myfn(function(){return "hello world";});

