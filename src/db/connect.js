const mongoose = require("mongoose")



/**
 * Connects to a MongoDB database using the provided URI.
 * @param {string} URI - The URI of the MongoDB database to connect to.
 * @returns {Promise} A Promise that resolves to a Mongoose connection object.
 */
const connectDB = (URI)=>{
  console.log("object")
  return mongoose.connect(URI
  //   , {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  //   // useCreateIndex: true,
  //   // useFindAndModify: false
  // }
  )
}

module.exports = connectDB;