import React, { useState } from 'react';
import CvComponent from '../components/CvComponent';
import CoverLetterComponent from '../components/CoverLetterComponent';
import CertificatesComponent from '../components/CertificatesComponent';
import Wrapper from '../assets/styles/Documents';

const Documents = () => {
  const [activeTab, setActiveTab] = useState('cv');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Wrapper>
      <div>
        <h1 style={{display: 'flex', alignItems: 'center',justifyContent:'center'}}><b>Upload your documents for easy access:</b></h1>
        <div className='buttons'>
          <button onClick={() => handleTabClick('cv')} className={activeTab === 'cv' ? 'active' : ''}>
            <span>CV</span>
          </button>
          <button onClick={() => handleTabClick('coverLetter')} className={activeTab === 'coverLetter' ? 'active' : ''}>
            <span>Cover Letter</span>
          </button>
          <button onClick={() => handleTabClick('certificates')} className={activeTab === 'certificates' ? 'active' : ''}>
            <span>Certificates</span>
          </button>
        </div>

        <div>
          {activeTab === 'cv' && <CvComponent />}
          {activeTab === 'coverLetter' && <CoverLetterComponent />}
          {activeTab === 'certificates' && <CertificatesComponent />}
        </div>
      </div>
    </Wrapper>
  );
};

export default Documents;
