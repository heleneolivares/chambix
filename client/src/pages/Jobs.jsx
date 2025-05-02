import JobList from '../components/JobList.jsx';

export default function Jobs({ jobs, fetchJobs }) {
  return (
    <main className="main">
      <h1>Ofertas de trabajo</h1>
      <JobList jobs={jobs} fetchJobs={fetchJobs} />
    </main>
  );
}
