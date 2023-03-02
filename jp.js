const express = require("express");
const app = express();
const userRoutes = require("./Routes/user.routes")
app.use(express.json());
const port = 3004;

app.use("/users",userRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// in terminal:
// npm i nodemon -g
// nodemon index.js

