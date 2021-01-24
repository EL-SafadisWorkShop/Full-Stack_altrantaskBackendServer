const express = require("express");
const cors = require("cors");
const { connectDb } = require("./models");
const { createUser, getUser } = require("./controllers/user");

const { PORT = 4000 } = process.env;
const app = express();

app.use(cors());
app.use(express.json());

app.post("/", createUser);
app.get("/", getUser);

connectDb().then(() => {
  app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
});
