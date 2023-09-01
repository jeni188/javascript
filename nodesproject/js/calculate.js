const bmi =(w,h) => {
    if(w/h**2>=25){
        console.log(" this is over weight")
    }
    else if(w/h**2<=10){
        console.log("this is under weight")
    }
    else{
        console.log("this is not healthy")
    }
}

const add=(a,b) =>a+b;

const sub =(a,b)=>a-b;

const multi =(a,b)=>a*b;

module.exports = {add,sub,multi,bmi};