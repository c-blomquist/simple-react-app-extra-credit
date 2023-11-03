const express = require("express");

// setting the port unless no port is inputted then automatically use port 3001
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});