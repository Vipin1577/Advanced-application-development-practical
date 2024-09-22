const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req , res) => {
    res.send(`
    <html>
<head>
    <title>Document</title>
</head>
<body>
   <h1>Simlpe Wed Application</h1>
   <form action="/greet" method = "post">
    <label for="enter your number"></label>
    <input type="text" id="name"name="name" required>
    <button type="submit">submit</button>
   </form> 
</body>
</html>
    

    `);
});

app.post('/greet',(req,res) => {
    const name = req.body.name;
    res.send(`<h1> hello,${name}!</h1>`);

}
);
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=> {
console.log(`server is running on port ${PORT}`);
});