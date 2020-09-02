/* 
    To run the project rename this file to config.js
    Update your MongoDB url in const URI
*/
const mongoose = require('mongoose')
const URI = "mongodb+srv://<user>:<password>@cluster0.obxnn.mongodb.net/<database>?retryWrites=true&w=majority";
const connectDB = async () => {
    await mongoose.connect(URI, { 
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    });
    console.log('db connected...');
}

module.exports = connectDB;