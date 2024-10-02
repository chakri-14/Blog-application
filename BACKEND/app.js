const express = require('express');
const app = express();  
const cors = require("cors");
const blogs = require("./Routes/Blogs");

require("dotenv").config();
require("./Connect/Connect");

app.use(cors());
app.use(express.json());
app.use("/api/v1", blogs);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
