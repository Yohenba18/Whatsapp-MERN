//nodemon --inspect server.js
//JqnmBfV9dxUYmZ2U- password

// importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
// import bodyParser from "body-parser";
// const express = require("express");
// const mongoose = require("mongoose");
// const Messages = require("./dbMessages.js");

// app config

const app = express();
const port = process.env.PORT || 9000;

//midlewares
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.urlencoded())
app.use(express.json());

//db config
const connection_url =
  "mongodb+srv://admin:JqnmBfV9dxUYmZ2U@cluster0.rmpgm.mongodb.net/whatsappdb?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// api routes
app.get("/", (req, res) => res.status(201).send("Hello World"));

app.get('/messages/sync', (req, res) => {
  Messages.find((err, data) => { 
  
      if (err) {
          res.status(500).send(err)
      } else {
          res.status(200).send(data)  //OK: 200
      }
  })
})

app.post("/messages/new", (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data); //CREATED: 201
        }
    })
})

//listeners
app.listen(port, () => console.log(`Listening on localhost:${port}`));
