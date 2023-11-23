import React, { useState } from 'react';
import "./sellerform.css"
const SellerForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    website: '',
    description: '',
    image: null, // To store uploaded image
    
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      // For file upload, store the file itself
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // You can add API calls or further processing here
  };

  return (
    <div className='form-main'>
    <form onSubmit={handleSubmit} className='seller-form'>
      <label>
        Company Name:
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
      </label>
      <label>
        Contact Person:
        <input
          type="text"
          name="contactPerson"
          value={formData.contactPerson}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Number:
        <input
          type="number"
          name="number"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <label>
      ZipCode:
        <input
          type="number"
          name="number"
          value={formData.zipCode}
          onChange={handleChange}
        />
      </label>
      <label>
        Upload Image:
        <input
          type="file"
          name="image"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default SellerForm;
