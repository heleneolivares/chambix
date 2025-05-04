import { useState } from 'react';
import axios from 'axios';
import '../style/PostJob.css';
import '../style/Form.css';
const JobForm = ({ onJobCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    email: '',
    description: ''
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/api/jobs/create', formData);
      setFormData({
        title: '',
        company: '',
        location: '',
        email: '',
        description: ''
      });
      setSuccess(true);

      if (onJobCreated) {
        console.log('🟢 Ejecutando onJobCreated...');
        onJobCreated(); 
      }

    } catch (error) {
      console.error('Error al crear trabajo:', error);
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      {success && <p style={{ color: 'green' }}>✅ Job posted successfully</p>}

      <form className='job-form' onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className='form-input'
          value={formData.title}
          onChange={handleChange}
          required
        /><br />

        <input
          type="text"
          name="company"
          placeholder="Company"
          className='form-input'
          value={formData.company}
          onChange={handleChange}
          required
        /><br />

        <input
          type="text"
          name="location"
          placeholder="Location"
          className='form-input'
          value={formData.location}
          onChange={handleChange}
          required
          /><br />
        <input type="text" 
          name="email"
          placeholder="Email"
          className='form-input'
          value={formData.email}
          onChange={handleChange}
          required /><br />
          
        <textarea
          name="description"
          placeholder="Description"
          className='form-input'
          value={formData.description}
          onChange={handleChange}
          required
        /><br />

        <button className='post-job-form-button' type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default JobForm;
