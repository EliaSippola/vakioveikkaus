const mong = require('mongoose');

// conn
const conn = async () => {
    try {
        await mong.connect(process.env.MONGODB_URL, {
        });
        console.log('Database connected succesfully');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = conn;