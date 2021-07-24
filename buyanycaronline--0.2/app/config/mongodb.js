var mongoose = require('mongoose');

module.exports = () => {
    // const url = process.env.MONGO_URI;
    const url = "mongodb://localhost:27017";
    return mongoose.connect(url);
};

