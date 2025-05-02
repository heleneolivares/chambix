import JobForm from '../components/JobForm.jsx';

export default function PostJob({ fetchJobs }) {
  return (
    <main className="main">
      <h1>Publicar un trabajo</h1>
      <JobForm onJobCreated={fetchJobs} />
    </main>
  );
}
