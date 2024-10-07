const mongoose = require("mongoose");

const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://karthickraja:Ben12345@cluster0.hw5se.mongodb.net/e-commerce?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true, // It's a good practice to include this option
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = ConnectDB; // Correct export syntax
