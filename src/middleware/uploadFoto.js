const multer = require("multer");
const path = require("path");
const dir = path.join(process.cwd(), "src", "uploads");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1],
    );
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
