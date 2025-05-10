import { useState } from "react";
import axios from "axios";
import "../style/Form.css";

const JobForm = ({ onJobCreated }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    email: "",
    description: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/api/jobs/create", formData);
      setFormData({
        title: "",
        company: "",
        location: "",
        email: "",
        description: ""
      });
      setSuccess(true);

      if (onJobCreated) {
        onJobCreated();
      }
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  return (
    <div className="job-form-container">
      {success && <p className="success-message">Job posted successfully!</p>}

      <form className="job-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          className="form-input"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          className="form-input"
          value={formData.company}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          className="form-input"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Contact Email"
          className="form-input"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Job Description"
          className="form-input"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <button className="post-job-form-button" type="submit">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default JobForm;
