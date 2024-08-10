import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String
    },
    interest:{
        type:[String]
    },
    linkedIn:{
        type:String,
    },
    twitter:{
        type:String
    }
})

const User = mongoose.model("User",userSchema)

export {
    User
}