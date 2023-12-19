require("dotenv").config();
const express = require("express");
const PORT = 2000;
const app = express();
const connectDB = require("./db/connect")


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UserRouter = require("./routes/login");

app.use("/", UserRouter);


const start = async ()=>{
  // console.log('yes im connected 2000')
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, ()=>{
      console.log(`${PORT} yes im connected ,`)
    })
  } catch (error) {
    console.log(error.message);
  }
}

start();