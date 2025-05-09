import { useRef } from 'react';
import '../style/Home.css';
import '../style/card.css'
import { FaCalendarAlt } from 'react-icons/fa';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go'
import { HiOutlineMail } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';

export default function Home({ jobs }) {
  const carouselRef = useRef();

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <main>
      <header className="home-hero">
        <div className="hero-overlay">
          <h1>Find your next job</h1>
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input type="text" className="search-bar" placeholder="Search for jobs" />
          </div>
        </div>
      </header>

      <section className="new-jobs-section">
        <h2 className="new-job-offers-title">New Job Offers</h2>

        <div className="carousel-wrapper">
          <button className="carousel-button left" onClick={scrollLeft}>&lt;</button>

          <div className="job-carousel" ref={carouselRef}>
            {jobs.slice(0, 6).map((job, index) => (
              <div className="job-card" key={index}>
                <h3 className="job-card-title">{job.title}</h3>
                <p className="job-card-date">
                  <FaCalendarAlt className="calendar-icon" />
                  {new Date(job.createdAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: '2-digit',
                    year: 'numeric'
                  })}
                </p>
             
                <p className="job-card-company"> 
                  <HiOutlineOfficeBuilding className="job-icon"/>
                  {job.company}
                  </p>
                <p className="job-card-location">
                  <GoLocation className="location-icon" />
                  {job.location}
                  </p>
                <p className="job-card-email">
                  <HiOutlineMail className="email-icon" />
                  {job.email}</p>
                <p className="job-card-description">{job.description}</p>

                <button className="apply-button">Apply Now</button>
              </div>
            ))}
          </div>

          <button className="carousel-button right" onClick={scrollRight}>&gt;</button>
        </div>
      </section>
    </main>
  );
}
