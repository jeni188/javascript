// creating api using express
const express = require('express');
const app = express();
const port = 5000;

app.get("/",(req,res)=>{
    res.send("hello world");
});

app.listen(port,()=>{
    console.log(`Our app listining at http://localhost:${port}`);
});


app.get("/users/:name",(req,res)=>{
    const users =[
        {
            id:1,
            name:"ram",
            age:23,
        },
        {
            id:2,
            name:"shyam",
            age:24,
        },
    ];
    // res.json(users);
    const user = users.find((user) => user.name === String(req.params.name));
    res.json(user);
});


app.post("/postuser",(req,res)=>{
    const users =[
        {
            id:1,
            name:"ram",
            age:23,
        },
        {
            id:2,
            name:"shyam",
            age:24,
        },
    ];
    const user = {
        id:3,
        name:"hari",
        age:25,
    }
    users.push(user);
    res.json(users);
});
