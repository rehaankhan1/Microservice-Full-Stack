import React, { useState, useEffect } from 'react';
import { useDashboardContext } from '../Pages/DashboardLayout';
import customFetch3 from '../Utils/customFetch3';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Wrapper from '../assets/styles/DocumentStyleComponent';


const CertificatesComponent = () => {
  const { user } = useDashboardContext();
  const [certificatesFile, setCertificatesFile] = useState(null);
  const [certificatesResources, setCertificatesResources] = useState([]);

  useEffect(() => {
    const fetchCertificatesResources = async () => {
      try {
        const response = await customFetch3.get('/getCT', { params: { email: user.email } });
        setCertificatesResources(response.data.resources || []);
      } catch (error) {
        console.error('Error fetching Certificates resources:', error);
        toast.error(error?.response?.data?.error || 'Error fetching Certificates resources');
      }
    };

    fetchCertificatesResources();
  }, [user.email]);

  const handleFileChange = (event) => {
    handleFiles(event.target.files);
  };

  const handleFiles = (files) => {
    const file = files[0];
    // Check if the file is an image
    if (file && file.type.startsWith('image/')) {
      setCertificatesFile(file);
    } else {
      toast.error('Please upload a valid image file.');
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFiles(files);
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

      if (!certificatesFile) {
        toast.error('Choose an image first.');
        return;
      }

      // Additional safety measures
      const maxSizeInBytes = 10 * 1024 * 1024; // 10MB
      if (certificatesFile.size > maxSizeInBytes) {
        toast.error('File size exceeds the maximum limit (10MB).');
        return;
      }

      const formData = new FormData();
      formData.append('email', user.email);
      formData.append('file', certificatesFile);

      // Ensure only images are uploaded
      if (!certificatesFile.type.startsWith('image/')) {
        toast.error('Please upload a valid image file.');
        return;
      }

      await customFetch3.post('/pushCT', formData);

      // Refetch resources after upload
      const response = await customFetch3.get('/getCT', { params: { email: user.email } });
      setCertificatesResources(response.data.resources || []);

      toast.success('Certificates uploaded successfully!');
    } catch (error) {
      console.error('Error uploading Certificates:', error);
      toast.error(error?.response?.data?.error || 'Error uploading Certificates');
    }
  };

  return (
    <Wrapper>
    <div className='container-window'>
      <p className='text-here'>Upload image format certificates only. You can also drag and drop files here.</p>
      
      <div
        id="dropArea"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input type="file" id="certificateInput" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
        <label htmlFor="certificateInput">Click to select or drag and drop files here.</label>
      </div>
      <button className="upload" onClick={handleUpload}>Upload your certificates</button>
      <table>
        <thead>
          <tr>
            <th>Certificate Name</th>
            <th>Actions - View certificate.</th>
          </tr>
        </thead>
        <tbody>
          {certificatesResources.map((resource, index) => (
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

export default CertificatesComponent;
