const express=require('express') 
const {sendMail}=require("./controller/sendMail")   
const app=express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("ok tested");
  });
app.get("/sendmail",sendMail );
app.listen(4000,()=>{
    console.log('Server is running on port 8000')
})