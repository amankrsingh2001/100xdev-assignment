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
       const {name,description,interest,linkedIn,twitter} = req.body.newData
    try {
        const newCard = await User.create({
            name:name,
            description:description,
            interest:interest,
            linkedIn:linkedIn,
            twitter:twitter
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