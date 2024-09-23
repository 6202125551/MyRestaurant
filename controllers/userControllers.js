

const getUserController = (req, res) => {
    try {
        res.status(200).send('user data')
    } catch (error) {
        res.status(500).send('error', error)
    }
}


module.exports = getUserController