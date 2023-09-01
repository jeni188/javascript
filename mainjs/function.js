// function greet(name){
//     console.log("hello,"+name+"!");

// }
// greet("jeni");
// greet("muna");

// return use garda variable declare hunxa
// function add(a,b){
//     return a+b;
// }
// const result = add(2,3);
// console.log(result);


// console use garda undefine hunxa
// function add(a,b){
//     console.log (a+b);
// }
// const result = add(2,3);
// console.log(result);

// anonymous function define without name

// const squ = function(x){
//     return x*x;
// };
// console.log(squ(5));

// let multiply =(a,b)=>a*b;
// const result = multiply(2,3);
//  console.log(result);

// callback function
// function add(a,b){
//     return a+b;

// }
// function sub(a,b){
//     return a-b;
//  }
// // function sum(add){
// //     return (add);
// // }

// // function sum(sub){
// //     return(sub)
// // }

// function calc(a,b,operation){
//     return operation(a,b);
// }
// const result=calc(4,3,add);
// console.log(result);

// asynchronous

// function fetchData(callback){
//     let data = "some data";
//     callback(data);
// }
// fetchData(function(data){
//     console.log(data);
// });

// function fetchdatafromserver(){
//     return new Promise((resolve,reject)=>{
//            setTimeout(()=>{
//             const data={ name: "john",age:50};
//            reject  (data);

//          },1000);
//     });
// }
// fetchdatafromserver().then((data)=>{
//     console.log("fetech data:",data);
// })
// .catch((error)=>{
//     console.log("Error fetching data:",error);
// });


// function fetchdatafromserver(){
//         return new Promise((resolve,reject)=>{
//                setTimeout(()=>{
//                 const data={ name: "john",age:50};
//                resolve  (data);
    
//              },1000);
//         });
//     }
//     async function fetchData(){
//         try{
//             const data = await  fetchdatafromserver();
//             console.log("fetch data:",data);
//         }catch(error){
//             console.log("error fetching data:",error);
//         }
//     }
    
//     fetchData();
//     console.log("this will be prented before the fetch data");

// function addNumbers(a,b) {
//     return a + b;
//     }
//     const result= addNumbers(15,16);
//     console.log(result);

