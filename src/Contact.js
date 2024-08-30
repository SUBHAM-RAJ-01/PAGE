import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      setTimeout(() => {
        if (response.ok) {
          setIsSuccess(true);
          setStatus(`Thank you ${formData.name}, we will reach you soon.`);
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        } else {
          setIsSuccess(false);
          setStatus('Failed to send message. Please try again.');
        }
        setIsLoading(false);
      }, 3000); // Simulate loading for 3 seconds
    } catch (error) {
      setTimeout(() => {
        setIsSuccess(false);
        setStatus('An error occurred. Please try again.');
        setIsLoading(false);
      }, 3000); // Simulate loading for 3 seconds
    }
  };

  return (
    <div className="contact" id="contact">
      <h2>Connect</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          rows="5" 
          value={formData.message} 
          onChange={handleChange} 
          required
        ></textarea>
        <button 
          type="submit" 
          className={`submit-button ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? '' : 'Send'}
        </button>
        {status && <p className={`status ${isSuccess ? 'success' : 'error'}`}>{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
