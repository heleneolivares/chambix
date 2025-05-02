import JobList from '../components/JobList.jsx';

export default function Home({ jobs }) {
  return (
    <main className="main">
      <JobList jobs={jobs} />
    </main>
  );
}
