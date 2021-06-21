//nodemon --inspect server.js
//JqnmBfV9dxUYmZ2U- password

// importing
import express from "express";
import mongoose from 'mongoose';

// app config

const app = express();
const port = process.env.PORT || 9000;

//midlewares
//???
//db config
const connection_url = 'mongodb+srv://admin:JqnmBfV9dxUYmZ2U@cluster0.rmpgm.mongodb.net/whatsappdb?retryWrites=true&w=majority';
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// api routes
app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});
//listeners
app.listen(port, () => console.log(`listening as localhost: ${port}`));
