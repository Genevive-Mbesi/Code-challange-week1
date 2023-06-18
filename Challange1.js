let studentMarks =prompt("Enter your marks:");

if (studentMarks>100 || studentMarks< 0){
    console.log("Invalid Marks");
}

if( studentMarks>79 && studentMarks<=100){
  console.log("You score Grade A");
}
else if (studentMarks>=60 && studentMarks<79){
   console.log("You score Grade B");
}
else if (studentMarks>=49 && studentMarks<=59){
    console.log("You score Grade C");
}
else if (studentMarks>=40 && studentMarks<49){
    console.log("You score Grade D");
}
else if(studentMarks>= 0 && studentMarks <40){
    console.log("You score Grade E");
}