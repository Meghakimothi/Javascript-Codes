//Write a function in javascript to find the average of n (n<10) using arrays.

function average(){
    var myarray = ['1','2','3','4','5','6','7','8','9'];
    var total =0,i,a;
    for(i=0;i<9;i++){
    total =total + (+myarray[i]);
    }
    a= total/ (myarray.length);
    console.log(a);
}
average();

    
      



