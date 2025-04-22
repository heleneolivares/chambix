const JobList = ({ jobs }) => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Ofertas de trabajo disponibles</h2>
      {jobs.length === 0 ? (
        <p>No hay trabajos aún.</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job._id}>
              <h3>{job.title}</h3>
              <p><strong>Empresa:</strong> {job.company}</p>
              <p><strong>Ubicación:</strong> {job.location}</p>
              <p>{job.description}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobList;
