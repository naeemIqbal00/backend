const mongoose = require('mongoose');

async function initDb() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('[DB CONNECTION] MongoDB Connected...');

    } catch (error) {
        console.log("[DB CONNECTION] ERROR ", error);

    }

}

module.exports = { initDb }