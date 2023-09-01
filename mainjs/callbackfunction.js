// // // pretend that this response is coming from the server

const students = [
    {name:"Jeni", subject:"Javascript"},
    {name:"Muna", subject:"Machine"},

]
function enrollStudent(student){
        students.push(student);
        console.log("the student has been enrolled");
}

function getStudents(){
    setTimeout(function(){
        let str ="";
        students.forEach(function(student){
            str +=`<li> ${student.name}</li>`
        });
        document.getElementById("students").innerHTML=str;
        console.log("the student has fetched enrolled");
    },1000);
}

let newStudent = {name:"sahan",subject:"python"}

enrollStudent(newStudent);
getStudents();




// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2) {
//   let sum;
//   sum = num1 + num2;
//   return sum;
// }

// let result = myCalculator(50, 5);
// myDisplayer(result);
 
