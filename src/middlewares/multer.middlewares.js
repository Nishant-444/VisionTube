import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    // my way
    const baseName = path.parse(file.originalname).name.replace(/\W+/g, "_");

    const ext = path.extname(file.originalname); // ".jpg", ".png", etc, including the leading dot

    const uniqueSuffix = `${Math.floor(Date.now() / 1000)}_${Math.floor(Math.floor(Math.random() * 10000))}`; // Epoch time (in seconds)_RandomNumber

    cb(null, `${baseName}_${uniqueSuffix}${ext}`);
  },
});

export const upload = multer({ storage });
