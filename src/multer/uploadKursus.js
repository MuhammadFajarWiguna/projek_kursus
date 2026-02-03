const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,path.join(process.cwd(), "src/uploads"));
  },
  filename: (req, file, cb) => {
    cb(null ,"kursus-"  + Date.now() + path.extname(file.originalname));
  
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

  if (!allowedTypes.includes(file.mimetype)) {
    cb(new Error("File harus berupa JPG / JPEG / PNG"), false);
  } else {
    cb(null, true);
  }
};

const uploadKursus = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 3 * 1024 * 1024,
  },
});

module.exports = uploadKursus;
