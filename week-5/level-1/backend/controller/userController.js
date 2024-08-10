import { User } from "../schema.js/userSchema.js"


const getCard = async(req,res)=>{
    try {
        const card = await User.find({})
        return res.status(200).json({card:card})
    } catch (error) {
        console.log(error)
        return res.status(200).json({msg:"Failed to fetch Cards"})
    }
}

const newUser  = async(req,res)=>{
    try {
        const newCard = await User.create({
            name:req.body.name,
            description:req.body.description,
            interest:req.body.interest,
            linkedIn:req.body.linkedIn,
            twitter:req.body.twitter
        })
        return res.status(200).json({msg:"Card Created"});
    } catch (error) {
        return res.status(400).json({msg:"Failed to create card"});
    }
}
export {
    newUser,
    getCard
}