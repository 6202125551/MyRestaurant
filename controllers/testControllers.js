

const testUserController = (req, res) => {
    try {
        res.status(200).send("hello world!!!!123")
    } catch (error) {
        console.log("errors : ", error)
    }
}


module.exports = {
    testUserController
}