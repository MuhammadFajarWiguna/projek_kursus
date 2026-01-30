const express = require("express");
require("dotenv").config();
const routerDaftar = require("./pendaftaran/route.js")


const app = express();
const PORT = process.env.APP_PORT || 3000;
const HOST = process.env.APP_HOST || "127.0.0.1";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/daftar/",routerDaftar)


app.listen(PORT, () => {
  console.log(`Server berjalan di ${HOST}: ${PORT}`);
});
