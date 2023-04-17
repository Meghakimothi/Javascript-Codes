// Write a function in javascript to get the name from the user and find how many vowels are there

function checkvowels(){
    var string = prompt('enter your name');
    // regex known as regular expression used to match,test & find characters from string
    const reg =/[aeiou]/gi;   //modifier gi global , case Irrelevant
    var chars = string.match(reg);
    console.log(chars.join());    //array converted to string
    console.log(chars.length);
}
checkvowels();




 



    
    


