const mongoose = require('mongoose');
const dbgr = require("debug")("development:mongoose");
const config = require("config");

const MONGO_URI = `${config.get("MONGODB_URI")}/Scatch`;
dbgr("Connection URI:", MONGO_URI);

if (mongoose.connection.readyState === 0) {
    mongoose.connect(MONGO_URI)
        .then(() => dbgr('MongoDB connection successful'))
        .catch(err => dbgr('MongoDB connection error:', err));
} else {
    dbgr('MongoDB already connected');
}

module.exports = mongoose.connection;
