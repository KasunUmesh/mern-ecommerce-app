import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import multer from "multer";
import cors from "cors";
import path from "path";


const port = 4000;
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL as string)
const db = mongoose.connection

db.on('error', (error) => {
    console.log("DB Connection Error: ", error);
})

db.on('open', () => {
    console.log("DB Connected");
})

app.listen(port, () => {
    console.log("Server is running on port: ", port);
})

app.get('/', (req, res) => {
    res.send("Hello World!");
})

// Image storage engine
const storage = multer.diskStorage({
    destination: 'src/upload/images',
    filename:(req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage: storage});

// Creating endpoint for images
app.use('images', express.static('src/upload/images'))
app.post("/upload", upload.single('product'), (req: express.Request, res: express.Response) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file?.filename}`
    })
})