//nodemon --inspect server.js
//JqnmBfV9dxUYmZ2U- password

// importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
// const express = require("express");
// const mongoose = require("mongoose");
// const Messages = require("./dbMessages.js");

// app config

const app = express();
const port = process.env.PORT || 9000;

//midlewares
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
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listeners
app.listen(port, () => console.log(`Listening on localhost:${port}`));
