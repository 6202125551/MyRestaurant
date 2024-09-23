const User = require('../models/userModel')

const registerController = async(req, res) => {
    try {
       const {username, email, password, address, phone} = req.body
       // validation
       if(!username || !email || !password || !address || !phone){
          return res.status(500).json({
            status: 'Failed',
            msg: "Please provide all fields"
          })
       }
       // check user 
       const existing = await User.findOne({email})
       if(existing){
        return res.status(500).json({
            status: "Failed",
            msg : "User already exist"
        })
       }
       const newUser = await User.create({username,email,password,address,phone})
       res.status(201).json({
        status:"success",
        data: newUser
       })
       

    } catch (error) {
        res.status(500).json({
            status:"Failed",
            Error: error
        })
    }
}

const loginController = async(req, res) => {
    try {
      const {email, password} = req.body
      if(!email || !password){
        return res.status(500).json({
            status: "failed",
            msg: "Please provide all fields"
        })
      }
      const user = await User.findOne({email:email, password:password})
      if(!user){
        return res.status(404).json({
            status: "Failed",
            msg: "User not exist"
        })
      }
      res.status(200).json({
        status: "successfully logged in",
        User : user
      })
    } catch (error) {
        res.status(500).json({
            status:"Failed",
            Error: error
        })
    }
}

module.exports = {
    registerController,
    loginController
}