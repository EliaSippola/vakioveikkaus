const exp = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = exp();

// frontend
app.get("/", (req, res) => {
    res.send("Hello World!");
});

//backend
app.use(cors());

const db = require('./routes/db_routes');
app.use('/db', db);

app.listen(PORT, (err) => {
    if (!err) {
        console.log("Server running on port " + PORT);
    } else {
        console.log("Could not run server. Server error: " + err);
    }
});