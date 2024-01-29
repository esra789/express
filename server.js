const express= require ("express")
const app=express()
const port=7000

const Day=new Date().getDay()
const hour=new Date().getHours()

const middleware=(req,res,next)=>{
    if (Day<1 || Day>5|| hour>16 || hour<9){
        res.send("we are closed")

    }
    else{
        next()
    }
}
app.get("/",middleware,(req,res)=>{
    res.sendFile(__dirname+"/Public/Home.html")
})
app.get("/ContactUs",middleware,(req,res)=>{
    res.sendFile(__dirname+"/Public/ContactUs.html")
})
app.get("/OurServies",middleware,(req,res)=>{
    res.sendFile(__dirname+"/Public/OurServies.html")
})
app.listen(port,console.log("server is runing"))