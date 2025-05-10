import React, { useState } from "react";
import "../style/ApplyNow.css";

export default function ApplyNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="apply-now-container">
      <h1 className="apply-now-title">Apply Now</h1>

      {isSubmitted ? (
        <p className="confirmation-message">Application submitted successfully!</p>
      ) : (
        <form className="apply-form" onSubmit={handleSubmit}>
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
            placeholder="Why are you interested in this job?"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button className="apply-now-form-button" type="submit">
            Submit Application
          </button>
        </form>
      )}
    </main>
  );
}
