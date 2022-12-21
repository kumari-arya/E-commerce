require("dotenv").config();
const mongoose = require('mongoose');

const connectDM = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("SUCCESS");
    }
    catch(error){
        console.error("FAIL");
        process.exit(1);
    }
};

module.exports = connectDM;