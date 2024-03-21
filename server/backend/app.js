const exp = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const conn = require('./config/db');

dotenv.config();

conn();

const PORT = process.env.PORT || 3000;

const app = exp();

//backend
app.use(cors());
app.use(exp.json());

const db = require('./routes/db_routes');
app.use('/api/db', db);

// frontend
app.get("*", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, (err) => {
    if (!err) {
        console.log("Server running on port " + PORT);
    } else {
        console.log("Could not run server. Server error: " + err);
    }
});