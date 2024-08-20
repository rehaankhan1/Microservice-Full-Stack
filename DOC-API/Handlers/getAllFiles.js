import { v2 as cloudinary } from 'cloudinary';

//Route to get all CV's
export const getCV = (req, res) => {
  const email = req.query.email;

  // Check if email is provided
  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  if(email !== req.user.email) return res.status(400).json({ error: 'Access Denied.' });


  const folderName = `CV/${email}`;

  cloudinary.api.resources({ type: 'upload', prefix: folderName }, function (error, result) {
    if (error) {
      console.error('Error:', error);
      // Handle the error and send a response with status code 500
      return res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Prepare an array to store resource details
      const resourcesArray = [];

      // Collect resource details
      result.resources.forEach(resource => {
        resourcesArray.push({
          url: resource.url,
          // Add additional resource details as needed
        });
      });

      // Send a response with status code 200 and the array of resource details
      return res.status(200).json({ resources: resourcesArray });
    }
  });
};

//Route to get all Resume's
export const getCOVER_LETTERS = (req, res) => {
    const email = req.query.email;
  
    // Check if email is provided
    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    if(email !== req.user.email) return res.status(400).json({ error: 'Access Denied.' });
  
    const folderName = `COVER_LETTER/${email}`;
  
    cloudinary.api.resources({ type: 'upload', prefix: folderName }, function (error, result) {
      if (error) {
        console.error('Error:', error);
        // Handle the error and send a response with status code 500
        return res.status(500).json({ error: 'Internal Server Error' });
      } else {
        // Prepare an array to store resource details
        const resourcesArray = [];
  
        // Collect resource details
        result.resources.forEach(resource => {
          resourcesArray.push({
            url: resource.url,
            // Add additional resource details as needed
          });
        });
  
        // Send a response with status code 200 and the array of resource details
        return res.status(200).json({ resources: resourcesArray });
      }
    });
  };

  //Route to get all Certificates
  export const getCT = (req, res) => {
    const email = req.query.email;
  
    // Check if email is provided
    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }
  
    if(email !== req.user.email) return res.status(400).json({ error: 'Access Denied.' });

    const folderName = `CERTIFICATE/${email}`;
  
    cloudinary.api.resources({ type: 'upload', prefix: folderName }, function (error, result) {
      if (error) {
        console.error('Error:', error);
        // Handle the error and send a response with status code 500
        return res.status(500).json({ error: 'Internal Server Error' });
      } else {
        // Prepare an array to store resource details
        const resourcesArray = [];
  
        // Collect resource details
        result.resources.forEach(resource => {
          resourcesArray.push({
            url: resource.url,
            // Add additional resource details as needed
          });
        });
  
        // Send a response with status code 200 and the array of resource details
        return res.status(200).json({ resources: resourcesArray });
      }
    });
  };



