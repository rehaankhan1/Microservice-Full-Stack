import React, { useState, useEffect } from 'react';
import { useDashboardContext } from '../Pages/DashboardLayout';
import customFetch3 from '../Utils/customFetch3';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Wrapper from '../assets/styles/DocumentStyleComponent';

const CoverLetterComponent = () => {
  const { user } = useDashboardContext();
  const [coverLetterFile, setCoverLetterFile] = useState(null);
  const [coverLetterResources, setCoverLetterResources] = useState([]);
  const [droppedFileName, setDroppedFileName] = useState(null);

  useEffect(() => {
    const fetchCoverLetterResources = async () => {
      try {
        const response = await customFetch3.get('/getCOVERLETTER', { params: { email: user.email } });
        setCoverLetterResources(response.data.resources || []);
      } catch (error) {
        console.error('Error fetching Cover Letter resources:', error);
        toast.error(error?.response?.data?.error || 'Error fetching Cover Letter resources');
      }
    };

    fetchCoverLetterResources();
  }, [user.email]);

  const handleFileChange = (event) => {
    handleFiles(event.target.files);
  };

  const handleFiles = (files) => {
    const file = files[0];
    // Check if the file is an image
    if (file && file.type.startsWith('image/')) {
      setCoverLetterFile(file);
    } else {
      toast.error('Please upload a valid image file.');
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFiles(files);

    // Set the name of the dropped file
    if (files.length > 0) {
      setDroppedFileName(files[0].name);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUpload = async () => {
    try {
      // Check if the user is a demo user
      if (user.email === 'testuser@gmail.com') {
        toast.error('Demo user cannot upload files. Please sign in.');
        return;
      }

      if (!coverLetterFile) {
        toast.error('Choose an image first.');
        return;
      }

      // Additional safety measures
      const maxSizeInBytes = 10 * 1024 * 1024; // 10MB
      if (coverLetterFile.size > maxSizeInBytes) {
        toast.error('File size exceeds the maximum limit (10MB).');
        return;
      }

      const formData = new FormData();
      formData.append('email', user.email);
      formData.append('file', coverLetterFile);

      // Ensure only images are uploaded
      if (!coverLetterFile.type.startsWith('image/')) {
        toast.error('Please upload a valid image file.');
        return;
      }

      await customFetch3.post('/pushCOVERLETTER', formData);

      // Refetch resources after upload
      const response = await customFetch3.get('/getCOVERLETTER', { params: { email: user.email } });
      setCoverLetterResources(response.data.resources || []);

      toast.success('Cover Letter uploaded successfully!');
      // Clear the dropped file name
      setDroppedFileName(null);
      // Clear the selected file
      setCoverLetterFile(null);
    } catch (error) {
      console.error('Error uploading Cover Letter:', error);
      toast.error(error?.response?.data?.error || 'Error uploading Cover Letter');
    }
  };

  return (
    <Wrapper>
      <div className='container-window'>
        <p className='text-here'>Upload image cover letters only. You can also drag and drop files here.</p>

        <div
          id="dropArea"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <input type="file" id="coverLetterInput" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
          <label htmlFor="coverLetterInput">Click to select or drag and drop files here.</label>

          {droppedFileName && (
            <p>Dropped Image: {droppedFileName}</p>
          )}

          {/* Message for uploaded Cover Letter */}
          {coverLetterFile && (
            <p>Cover Letter is here!</p>
          )}
        </div>

        <button className="upload" onClick={handleUpload}>Upload Cover Letter</button>

        <table>
          <thead>
            <tr>
              <th>Cover Letter Name</th>
              <th>Actions- View cover letters.</th>
            </tr>
          </thead>
          <tbody>
            {coverLetterResources.map((resource, index) => (
              <tr key={index}>
                <td>{resource.original_filename || resource.public_id || resource.original_filename || 'No Name'}</td>
                <td>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    <button>👁️</button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default CoverLetterComponent;
