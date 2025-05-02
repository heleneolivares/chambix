import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';
import JobList from '../src/components/JobList.jsx';
import JobForm from '../src/components/JobForm.jsx';
import Home from '../src/pages/Home.jsx';
import Jobs from '../src/pages/Jobs.jsx';
import About from '../src/pages/About.jsx';
import Login from '../src/pages/Login.jsx';
import PostJob from '../src/pages/PostJob.jsx';
import '../src/style/App.css';



function App() {
  const [jobs, setJobs] = useState([]);
  
  const fetchJobs = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/jobs');
      setJobs(res.data);
    } catch (error) {
      console.error('Error al obtener trabajos:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <BrowserRouter>
    <div className="page">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home jobs={jobs} />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post-job" element={<PostJob fetchJobs={fetchJobs} />} />
      </Routes>
  
      <footer className="footer">
        <p>© 2025 Chambix - Todos los derechos reservados</p>
      </footer>
    </div>
    </BrowserRouter>
  );
  
}

export default App;
