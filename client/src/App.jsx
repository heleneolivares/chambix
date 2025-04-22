import { useEffect, useState } from 'react';
import axios from 'axios';
import JobList from '../src/components/JobList.jsx';
import JobForm from '../src/components/JobForm.jsx';
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
    <div className="page">
      <header className="header">
        <h1>Chambix 💼</h1>
      </header>
  
      <main className="main">
        <JobForm onJobCreated={fetchJobs} />
        <JobList jobs={jobs} />
      </main>
  
      <footer className="footer">
        <p>© 2025 Chambix - Todos los derechos reservados</p>
      </footer>
    </div>
  );
  
}

export default App;
