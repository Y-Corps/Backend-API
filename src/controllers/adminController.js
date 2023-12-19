const Blog1 = async (req, res) => {
    try {
        console.log("object")
        // const blog = await blogModel.find()
        res.status(200).send("blog1")
    } catch (error) {
        console.log("object")
        res.status(500).json({ msg: error })
    }
}


const Blog2 = async (req, res) => {
    try {
        // const blog = await blogModel.find()
        res.status(200).send("blog2")
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


const Blog3 = async (req, res) => {
    try {
        // const blog = await blogModel.find()
        res.status(200).send("blog3")
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = { Blog1, Blog2, Blog3 }