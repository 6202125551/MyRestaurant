const express = require('express')
const {getUserController, updateUserController,deleteProfileController} = require('../controllers/userControllers')
const authMiddleware = require('../middlewares/authMiddleware')
const router = express.Router()


router.get('/getUser',authMiddleware, getUserController)
router.put('/updateUser',authMiddleware, updateUserController )
router.delete('/deleteUser/:id', authMiddleware, deleteProfileController)
// forget password and reset password we can make it is easy

module.exports = router