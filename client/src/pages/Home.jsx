import { useRef } from 'react';
import Card from '../components/Card.jsx';
import '../style/Home.css';
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
              <Card
                key={index}
                title={job.title}
                createdAt={job.createdAt}
                company={job.company}
                location={job.location}
                email={job.email}
                description={job.description}
              />

            ))}
          </div>

          <button className="carousel-button right" onClick={scrollRight}>&gt;</button>
        </div>
      </section>
    </main>
  );
}
