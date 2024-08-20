import { v2 as cloudinary } from 'cloudinary';

export const CVupload = (req, res) => {
  const email = req.body.email;
  

  // Check if email and file are provided
  if (!email || !req.file) {
    return res.status(400).json({ error: 'Email and file are required.' });
  }

  if(email !== req.user.email) return res.status(400).json({ error: 'Access Denied.' });


  // Check if the file is a JPEG image
  if (!req.file.mimetype || !req.file.mimetype.startsWith('image/jpeg')) {
    return res.status(400).json({ error: 'Only JPEG images are allowed.' });
  }

  // Upload file to Cloudinary in the "CV" folder
  cloudinary.uploader.upload_stream(
    { folder: `CV/${email}` },
    (error, result) => {
      if (error) {
        console.error('Error uploading file to Cloudinary:', error);
        return res.status(500).json({ error: 'Error uploading file to Cloudinary' });
      }

      // Save document details to your database (this part depends on your setup)
      const documentId = Math.random().toString(36).substring(7);
      const uploadDate = new Date().toISOString();

      // Send a response with the URL
      res.status(200).json({
        url: result.secure_url,
        documentId,
        uploadDate
      });
    }
  ).end(req.file.buffer);
};


export const CLupload = (req, res) => {
  const email = req.body.email;

  // Check if email and file are provided
  if (!email || !req.file) {
    return res.status(400).json({ error: 'Email and file are required.' });
  }

  if(email !== req.user.email) return res.status(400).json({ error: 'Access Denied.' });

  // Check if the file is a JPEG image
  if (!req.file.mimetype || !req.file.mimetype.startsWith('image/jpeg')) {
    return res.status(400).json({ error: 'Only JPEG images are allowed.' });
  }

  // Upload file to Cloudinary in the "CV" folder
  cloudinary.uploader.upload_stream(
    { folder: `COVER_LETTER/${email}` },
    (error, result) => {
      if (error) {
        console.error('Error uploading file to Cloudinary:', error);
        return res.status(500).json({ error: 'Error uploading file to Cloudinary' });
      }

      // Save document details to your database (this part depends on your setup)
      const documentId = Math.random().toString(36).substring(7);
      const uploadDate = new Date().toISOString();

      // Send a response with the URL
      res.status(200).json({
        url: result.secure_url,
        documentId,
        uploadDate
      });
    }
  ).end(req.file.buffer);
};

export const CTupload = (req, res) => {
  const email = req.body.email;

  // Check if email and file are provided
  if (!email || !req.file) {
    return res.status(400).json({ error: 'Email and file are required.' });
  }

  if(email !== req.user.email) return res.status(400).json({ error: 'Access Denied.' });

  // Check if the file is a JPEG image
  if (!req.file.mimetype || !req.file.mimetype.startsWith('image/jpeg')) {
    return res.status(400).json({ error: 'Only JPEG images are allowed.' });
  }

  // Upload file to Cloudinary in the "CV" folder
  cloudinary.uploader.upload_stream(
    { folder: `CERTIFICATE/${email}` },
    (error, result) => {
      if (error) {
        console.error('Error uploading file to Cloudinary:', error);
        return res.status(500).json({ error: 'Error uploading file to Cloudinary' });
      }

      // Save document details to your database (this part depends on your setup)
      const documentId = Math.random().toString(36).substring(7);
      const uploadDate = new Date().toISOString();

      // Send a response with the URL
      res.status(200).json({
        url: result.secure_url,
        documentId,
        uploadDate
      });
    }
  ).end(req.file.buffer);
};



