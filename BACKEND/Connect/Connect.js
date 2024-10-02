const mongoose=require("mongoose");
const connect= async()=>{
    try {
      await  mongoose.connect(`${process.env.URI}`).then(()=>console.log("Connected to db"));
    } catch (error) {
        console.log(error);
    }
};
connect();