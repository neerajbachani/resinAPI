const { connectDb } = require("./config/db");
const express = require("express");
const app = express();
const indexRouter = require("./index");

const port = 3000;

app.use(express.json());
app.use('/api', indexRouter); // Delegate all routes except root to indexRouter

// Handle root endpoint separately
app.get('/', (req, res) => {
    res.status(200).send({ message: "helo ji", status: true });
});

// Start the server
app.listen(port, async () => {
    await connectDb();
    console.log("server started on ", port);
});

