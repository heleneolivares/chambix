import { useState } from 'react';
import axios from 'axios';

const JobForm = ({ onJobCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
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
        description: ''
      });
      setSuccess(true);

      if (onJobCreated) {
        console.log('🟢 Ejecutando onJobCreated...');
        onJobCreated(); // 👉 Esto actualiza la lista
      }

    } catch (error) {
      console.error('Error al crear trabajo:', error);
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Publicar nuevo trabajo</h2>
      {success && <p style={{ color: 'green' }}>✅ Trabajo creado con éxito</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={formData.title}
          onChange={handleChange}
          required
        /><br />

        <input
          type="text"
          name="company"
          placeholder="Empresa"
          value={formData.company}
          onChange={handleChange}
          required
        /><br />

        <input
          type="text"
          name="location"
          placeholder="Ubicación"
          value={formData.location}
          onChange={handleChange}
          required
        /><br />

        <textarea
          name="description"
          placeholder="Descripción"
          value={formData.description}
          onChange={handleChange}
          required
        /><br />

        <button type="submit">Crear trabajo</button>
      </form>
    </div>
  );
};

export default JobForm;
