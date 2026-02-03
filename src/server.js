const express = require("express");
require("dotenv").config();
const { sequelize } = require("../src/infrastructure/config/koneksi.js");
const routerUser = require("./user/router.js");
const routerPendafaran = require("../src/pendaftaran/router.js");

const app = express();
const PORT = process.env.APP_PORT || 3000;
const HOST = process.env.APP_HOST || "127.0.0.1";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", async (req, res) => {
//   try {
//     await sequelize.authenticate();
//     return res
//       .status(200)
//       .json({ message: "Database berhasil terkoneksi cuy" });
//   } catch (error) {
//     return res.json({ message: error.message });
//   }
// });
app.use("/pendaftaran", routerPendafaran);
app.use("/user", routerUser);

app.listen(PORT, () => {
  console.log(`Server berjalan di ${HOST}: ${PORT}`);
});
