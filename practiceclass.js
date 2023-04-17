//define a class "guvi_student" with variable mark1 and mark2 in it and method to print marks. 
//create two object (student1,student2) from the class "guvi_students" and print their marks using method defined in class



class guvi_student
{
 constructor(mark1,mark2) //initialize values
 {
     this.mark1 = mark1;
     this.mark2 = mark2;
 } 
 print_marks()  //function to print marks
 {
     return " Marks in subject 1 :" +this.mark1+ ", marks in subject 2 :" +this.mark2;
    
 }  

}
         //create object
var student1 = new guvi_student(50,55);   
var student2 = new guvi_student(40,70);
console.log(" student1  :-" + student1.print_marks());
//(student1.print_marks()); //call method
console.log(" student2 :- " + student2.print_marks()); //call method
