const express = require("express");
const app = express();
const PORT = 9000;

app.get("/song", (req, res) => {
    res.send("Server is ready");
});

app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
})