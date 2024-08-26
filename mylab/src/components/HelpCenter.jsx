import React, { useState } from 'react';
import FAQ from './FAQ';
import ContactUs from './ContactUs';

const HelpCenter = () => {
  const [activeTab, setActiveTab] = useState('faq');

  return (
    <div className="container mt-4">
      <h2>Help Center</h2>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            Contact Us
          </button>
        </li>
      </ul>
      <div className="tab-content mt-3">
        {activeTab === 'faq' && <FAQ />}
        {activeTab === 'contact' && <ContactUs />}
      </div>
    </div>
  );
};

export default HelpCenter;
