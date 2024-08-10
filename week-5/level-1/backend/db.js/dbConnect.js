import mongoose from "mongoose"

const dbConnect = async()=>{
    await mongoose.connect('mongodb+srv://amandev:amankrsingh@cluster0.yff37w4.mongodb.net/card')
    console.log('Db connected');
}   

export default dbConnect