var myvar = function(){
    return function(){console.log("hey this is strange");}
}
        var myinnerfunction = myvar();
        console.log(myinnerfunction);
  
