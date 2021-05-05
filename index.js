const express = require("express");
const cors = require("cors");
const Router = require("./Routes");
const connectDB = require("./Db");

const server = express();

const port = 5000;
server.use(cors());
server.use(express.json());

connectDB();

server.use("/api/v1", Router);

server.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
