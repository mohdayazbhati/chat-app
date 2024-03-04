import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import { mongoDBURL, PORT } from "./config.js";


// routes
import AuthRoute from './routes/AuthRoute.js'
import UserRoute from './routes/UserRoute.js'
import PostRoute from './routes/PostRoute.js'
import UploadRoute from './routes/UploadRoute.js'
import ChatRoute from './routes/ChatRoute.js'
// import MessageRoute from './routes/MessageRoute.js'

const app = express();


// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// to serve images inside public folder
app.use(express.static('public')); 
app.use('/images', express.static('images'));


dotenv.config();
const PORT = process.env.PORT;

// const CONNECTION =process.env.MONGODB_CONNECTION;
// mongoose
//   .connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Listening at Port ${PORT}`)))
//   .catch((error) => console.log(`${error} did not connect`));


app.use('/auth', AuthRoute);
app.use('/user', UserRoute)
app.use('/posts', PostRoute)
app.use('/upload', UploadRoute)
app.use('/chat', ChatRoute)
// app.use('/message', MessageRoute)
// const mongoose = require('mongoose');



// Connect to MongoDB
 const  MONGO_DB = "mongodb+srv://mohdayazbhati:Ayaz_200300@SociaMedia_Ahp.st60fzy.mongodb.net/?retryWrites=true&w=majority"


  mongoose
  .connect(MONGO_DB)
     .then(() => {
         console.log('App connected to database');
         app.listen(PORT, () => {
          console.log(`App is listening to port:  ${PORT}`);
})
     })
     .catch(() => {
         console.log(error);
     })