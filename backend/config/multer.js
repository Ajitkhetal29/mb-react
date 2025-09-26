import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folder = file.fieldname === "gallery" ? "gallery" : "layouts";
    const projectName = req.body.name?.replace(/\s+/g, "_") || "temp";
    const dir = `uploads/projects/${projectName}/${folder}`;

    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname.replace(/\s+/g, "_")
    );
  },
});

export const upload = multer({ storage });
