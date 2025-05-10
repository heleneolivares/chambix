import axios from "axios";
import Card from "../components/Card.jsx";
import "../style/Jobs.css";

export default function Jobs({ jobs, fetchJobs }) {
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete the job?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:3000/api/jobs/${id}`);
      fetchJobs(); 
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  return (
    <main className="main">
      <h1 className="jobs-page-title">Jobs offers</h1>
      <div className="jobs-list">
        {jobs.length === 0 ? (
          <p>There are no jobs yet</p>
        ) : (
          jobs.map((job) => (
            <Card
              key={job._id}
              title={job.title}
              createdAt={job.createdAt}
              company={job.company}
              location={job.location}
              email={job.email}
              description={job.description}
            >
            </Card>
          ))
        )}
      </div>
    </main>
  );
}
