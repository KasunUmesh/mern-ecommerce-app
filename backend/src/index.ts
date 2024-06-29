import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import multer from "multer";
import cors from "cors";
import path from "path";
import ProductModel from "../src/models/product.model";
import UserModel from "../src/models/user.model";
import { error } from 'console';


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
app.use('/images', express.static('src/upload/images'))
app.post("/upload", upload.single('product'), (req: express.Request, res: express.Response) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file?.filename}`
    })
})

app.post('/addproduct', async (req: express.Request, res: express.Response) => {
    let products = await ProductModel.find({});
    let id;
    if(products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }

    const product = new ProductModel({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    })
    console.log(product);
    await product.save();
    console.log("Product Saved");
    res.json({
        success: true,
        name: req.body.name,
    })    
})

// Creating API for deleting products
app.delete('/removeproduct', async(req: express.Request, res: express.Response) => {
    await ProductModel.findOneAndDelete({id: req.body.id});
    console.log("Product Deleted");
    res.json({
        success: true,
        name:req.body.name
    })
})

// Creating API for getting all products
app.get('/allproducts', async(req: express.Request, res: express.Response) => {
    let products = await ProductModel.find({});
    console.log("All Products Fetched");
    res.send(products);
})

// Creating endpoint for registration user
app.post('/signup', async(req: express.Request, res: express.Response) => {
    let check = await UserModel.findOne({email: req.body.email});
    if (check) {
        return res.status(400).json({
            success: false,
            errors: "Existing user found with same email"
        });
    }
    let cart: any = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cartData: cart
    })

    await user.save();
    const data = {
        user:{
            id: user.id
        },
    };
    const token = jwt.sign(data, "secret_ecom");
    res.json({success: true, token: token});
})

// Creting endpoint for login user
app.post('/login', async (req: express.Request, res: express.Response) => {
    let user = await UserModel.findOne({email: req.body.email});
    if (user) {
        const passMatch = req.body.password === user.password;
        if (passMatch) {
            const data = {
                user: {
                    id: user.id
                },
            };
            const token = jwt.sign(data, "secret_ecom");
            res.json({success: true, token: token});
        } else {
            res.json({success: false, error: "Wrong Password"});
        }
    } else {
        res.json({success: false, error: "Wrong Email"});
    }
});