const User = require('../models/userModel')

const getUserController = async(req, res) => {
    try {
        const user =  await User.findById({_id:req.body.id})
        if(!user){
            return res.status(404).json({
                status: "failed",
                msg: "User not found"
            })
        }
        
        user.password = undefined;
        res.status(200).json({
            status:"success",
            user
        })


    } catch (error) {
        res.status(500).json({
            status:"success",
            msg: "Error in get user API"
        })
    }
}

const updateUserController = async (req, res) => {
   try {
       const user = await User.findById({_id:req.body.id})
       if(!user){
         return res.status(404).json({
            status:false,
            msg: "User not found"
         })
       }
       const {username, address,phone} = req.body
       if(username) user.username = username;
       if(address) user.address = address;
       if(phone) user.phone = phone ;
       await user.save()
       res.status(200).json({
        status: "success",
        msg: "user updated"
       })

   } catch (error) {
       console.log(error)
       res.status(500).json({
        status:false,
        msg: "error in update user api"
       })

   }
}

const deleteProfileController = async (req, res) => {
    try {
        await User.findByIdAndDelete({_id:req.params.id})
        return res.status(200).json({
            status:"success",
            msg: "Your accound has been deleted"
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status:false,
            msg: "Error in delete profile api"
        })
    }
}

module.exports = {
    getUserController,
    updateUserController,
    deleteProfileController
}