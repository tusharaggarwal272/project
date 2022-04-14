require('dotenv/config');
const express=require('express');
const app=express();
const connectdb=require('./db')
const usermodel=require('./models/user')
const otpmodel=require('./models/otpModel');
const userRouter=require('./routers/userRouter');
const authRouter=require('./routers/authRouter')

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/users',userRouter);
app.use('/users/verification',authRouter);

const port=process.env.port ||3000;

app.listen(port,()=>{
    console.log(`The server is running at port ${port}`);
})