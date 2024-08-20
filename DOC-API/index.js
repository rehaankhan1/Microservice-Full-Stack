const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

const app = express();
const port = 3000;


// Set your Cloudinary credentials
cloudinary.config({
  cloud_name: 'duwz0vzrq',
  api_key: '238889322485664',
  api_secret: 'Rh_K1slqSJC6Cp8nqF5tIkqOADk'
});

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Serve a simple HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Upload file to Cloudinary in the "CV" folder
  cloudinary.uploader.upload_stream(
    { folder: 'CV' }, // Specify the folder as 'CV'
    (error, result) => {
      if (error) {
        return res.status(500).json({ error: 'Error uploading file to Cloudinary' });
      }

    // Save document details to your database (this part depends on your setup)
    const documentId = Math.random().toString(36).substring(7);
    const uploadDate = new Date().toISOString();

    res.json({
      document_id: documentId,
      upload_date: uploadDate,
      url: result.secure_url
    });
  }).end(req.file.buffer);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 