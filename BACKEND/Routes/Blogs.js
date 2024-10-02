const router = require("express").Router();
const Blog = require("../Models/Blog");

// POST - Create a new blog post
router.post("/post", async (req, res) => {
    try {
        const { title, desc } = req.body;
        const newPost = new Blog({ title, desc });
        await newPost.save();
        res.status(200).json({ message: "Successfully saved the data" });
    } catch (error) {
        res.status(400).json({ message: "Some error occurred", error });
    }
});

// GET - Retrieve all blog posts
router.get("/get", async (req, res) => {
    try {
        const data = await Blog.find().sort({createdAt:-1});
        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: "Some error occurred", error });
    }
});

//GET-RECENT
router.get('/getRecent', async (req, res) => {
    try {
        const data = await Blog.find()
            .sort({ createdAt: -1 })
            .limit(3);

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: "An error occurred while fetching recent posts", error });
    }
});

//GET-BY ID
router.get('/getBlog/:id', async (req, res) => {
    try {
        const {id}=req.params;
        const data=await Blog.findById(id);
        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: "An error occurred while fetching  post", error });
    }
});

// UPDATE BY ID
router.put('/updateBlog/:id', async (req, res) => {
    try {
        const {id}=req.params;
        const { title, desc } = req.body;
        await Blog.findByIdAndUpdate(id,{title, desc });
        res.status(200).json({message:"Data updated" });
    } catch (error) {
        res.status(400).json({ message: "An error occurred while fetching  post", error });
    }
});


module.exports = router;
