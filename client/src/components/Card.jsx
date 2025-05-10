import {  useNavigate } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi';
import '../style/card.css';

export default function Card({ title, createdAt, company, location, email, description }) {
  const navigate = useNavigate();
  const handleApply = () => {
    navigate('/apply');
  }; 

  return (
    <div className="job-card">
      <h3 className="job-card-title">{title}</h3>
      <p className="job-card-date">
        <FaCalendarAlt className="calendar-icon" />
        {new Date(createdAt).toLocaleDateString('en-US', {
          month: 'long',
          day: '2-digit',
          year: 'numeric'
        })}
      </p>
      <p className="job-card-company">
        <HiOutlineOfficeBuilding className="job-icon" />
        {company}
      </p>
      <p className="job-card-location">
        <GoLocation className="location-icon" />
        {location}
      </p>
      <p className="job-card-email">
        <HiOutlineMail className="email-icon" />
        {email}
      </p>
      <p className="job-card-description">{description}</p>
      <button onClick={handleApply} className="apply-button">Apply Now</button>
    </div>
  );
}
