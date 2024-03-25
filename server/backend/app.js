const exp = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const conn = require('./config/db');
const path = require('path');

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
app.use(exp.static(path.join(__dirname, 'build')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, (err) => {
    if (!err) {
        console.log("Server running on port " + PORT);
    } else {
        console.log("Could not run server. Server error: " + err);
    }
});