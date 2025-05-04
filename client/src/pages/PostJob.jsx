import JobForm from '../components/JobForm.jsx';
import '../style/PostJob.css';

export default function PostJob({ fetchJobs }) {
  return (
    <main className="main">
      <h1 className='post-job-title'>Job Description</h1>
      <JobForm onJobCreated={fetchJobs} />
    </main>
  );
}
