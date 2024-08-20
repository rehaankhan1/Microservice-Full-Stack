import express from 'express';
import multer from 'multer';
import { CVupload, CLupload, CTupload } from './Handlers/CVhandler.js';
import { getCV, getCOVER_LETTERS, getCT } from './Handlers/getAllFiles.js';
import { v2 as cloudinary } from 'cloudinary';
import { authenticateUser } from "./authorization/authMiddleware.js";
import { getUser } from './authorization/getCurrentUser.js';
import { getROOTAll } from './Handlers/AdminGetRequest.js';
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import * as dotenv from "dotenv";
import "express-async-errors";
dotenv.config();

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());

// Setting Cloudinary credentials
cloudinary.config({
  cloud_name: 'duwz0vzrq',
  api_key: '238889322485664',
  api_secret: 'Rh_K1slqSJC6Cp8nqF5tIkqOADk'
});

// Using multer middleware for handling multipart/form-data
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route to handle PUSHING DOCS
app.post('/pushCV', authenticateUser, getUser, upload.single('file'), CVupload);
app.post('/pushCOVERLETTER', authenticateUser, getUser, upload.single('file'), CLupload);
app.post('/pushCT', authenticateUser, getUser, upload.single('file'), CTupload);

// Route to handle retrieve Docs
app.get('/getCV',authenticateUser,getUser, getCV);
app.get('/getCOVERLETTER', authenticateUser, getUser, getCOVER_LETTERS);
app.get('/getCT', authenticateUser,getUser, getCT);

//Special Route for Admin
app.get('/getROOT', authenticateUser, getUser, getROOTAll);


// Starting the server
const port = process.env.PORT || 5300; 

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
