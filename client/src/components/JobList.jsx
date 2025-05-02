import axios from 'axios';
export default function JobList ({ jobs, fetchJobs }) {
  const handleDelete = async (id) => {
    const confirm = window.confirm('Estas seguro de eliminar el trabajo?');
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:3000/api/jobs/${id}`);
      fetchJobs();
    } catch (error) {
      console.error('Error al eliminar trabajo:', error);
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Ofertas de trabajo disponibles</h2>

      {jobs.length === 0 ? (
        <p>No hay trabajos aún.</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job._id}  style={{marginBottom: '2rem'}}>
              <h3>{job.title}</h3>
              <p><strong>Empresa:</strong> {job.company}</p>
              <p><strong>Ubicación:</strong> {job.location}</p>
              <p><strong>Correo:</strong> {job.email}</p>
              <p>{job.description}</p>

              <button onClick={() => handleDelete(job._id)}>
                Eliminar
             </button>

              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

