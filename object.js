var myobject = {
    sayhello: function(){
        console.log("hello my dear friend")
    },
    name: 'nammu'
}
myobject.sayhello();
console.log(myobject.name);

//adding values to object

//option 1 
myobject.from = "mumbai";
myobject.message = function(){
    console.log("I love to dance");
}

//option 2
myobject["birthplace"] = "maharastra";
myobject["message1"] = function(){ 
    console.log(" nice to meet you")
}

myobject.message1();
