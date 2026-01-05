import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const { category } = req.body;
    const dir = `uploads/gallery/${category}`;

    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const upload = multer({ storage });
