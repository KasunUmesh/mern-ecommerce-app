import express from "express";
import mongoose from "mongoose";

const app = express();



app.get("/", (req, res) => {
    res.send("Hello World!");
})

mongoose.connect("mongodb://127.0.0.1:27017/ijse-ecommerce").then(() => {
    console.log("database connect success")
    app.listen(3000, () => {
        console.log(`Server started on port ${3000}`);
    })
  }).catch((err) => {
    console.log("can not connect database");
    console.log(err);
});

// app.listen(3000, () => {
//     console.log(`Server started on port ${3000}`);
// })