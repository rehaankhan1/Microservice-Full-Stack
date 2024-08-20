import { v2 as cloudinary } from 'cloudinary';

//Route to make admin see which user has uploaded how many CV'S, Resume's and Certificates
export const getROOTAll = (req, res) => {
    const email = req.query.email;
    const typeOfDocs = req.query.typeOfDoc;
  
    // Check if email is provided
    if (!email) {
      return res.status(400).json({ error: 'Email is required.', msg: res.query });
    }

    //make it only accessible to the admin
    if(req.user.role !== 'admin') return res.status(400).json({error: 'Only Accessible by Admin!'})
  
    if (typeOfDocs !== 'CV' && typeOfDocs !== 'COVER_LETTER' && typeOfDocs !== 'CERTIFICATE') {
        return res.status(400).json({ error: 'Type Of Document is invalid!', msg: typeOfDocs });
      }      
    const folderName = `${typeOfDocs}/${email}`;

// Call the resources API with the specified folder prefix
cloudinary.api.resources({ type: 'upload', prefix: folderName }, function (error, result) {
  if (error) {
    console.error('Error:', error);
    // Handle the error and send a response with status code 500
    return res.status(500).json({ error: 'Internal Server Error' });
  } else {
    // Count the number of documents in the specified folder
    const numberOfDocuments = result.resources.length;

    // Send a response with the count
    return res.status(200).json({ numberOfDocuments });
  }
});
  };