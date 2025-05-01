import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';
import JobList from '../src/components/JobList.jsx';
import JobForm from '../src/components/JobForm.jsx';
import '../src/style/App.css';

function Home ({fetchJobs, jobs}){
  return (
    <main className="main">
      <JobForm onJobCreated={fetchJobs} />
      <JobList jobs={jobs} />
    </main>
  );
}

function About () {
  return (
    <main className="main">
      <h1>Acerca de nosotros</h1>
      <p>Contenido de la sección Acerca de nosotros.</p>
    </main>
  );
}

function Login () {
  return (
    <main className="main">
      <h1>Login</h1>
      <p>Contenido de la sección Login.</p>
    </main>
  );
}
function Jobs () {
  return (
    <main className="main">
      <h1>Jobs</h1>
      <p>Contenido de la sección Jobs.</p>
    </main>
  );
}

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
        <Route path="/" element={<Home fetchJobs={fetchJobs} jobs={jobs} />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  
      <footer className="footer">
        <p>© 2025 Chambix - Todos los derechos reservados</p>
      </footer>
    </div>
    </BrowserRouter>
  );
  
}

export default App;
