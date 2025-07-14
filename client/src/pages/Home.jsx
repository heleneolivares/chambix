import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card.jsx';
import searchBar from '../components/SearchBar.jsx';
import '../style/Home.css';
import SearchBar from '../components/SearchBar.jsx';
export default function Home({ jobs }) {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const carouselRef = useRef();

  useEffect (() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  const handleSearch = async (searchTerm) => {
    try {
      const res = await axios.get (`/api/jobs?search=${encodeURIComponent(searchTerm)}`);
      setFilteredJobs(res.data);
    } catch (error) {
      console.error('Error searching jobs:', error);
    }
  };

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
          <SearchBar onSearch={handleSearch} />
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
