/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let studentMarks = 48;
if (studentMarks >= 90 && 100 >= studentMarks) {
    console.log("You Achive A ");
}
else if (studentMarks >= 80 && 89 >= studentMarks) {
    console.log("You Achieve B");
}
else if (studentMarks >= 70 && 79 >= studentMarks) {
    console.log("You Achieve C");
}
else if (studentMarks >= 60 && 69 >= studentMarks) {
    console.log("Your Achieve D");
}
else {
    console.log("You are fail");
}
