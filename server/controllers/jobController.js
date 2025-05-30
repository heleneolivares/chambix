import Job from '../models/Job.js';

export const createJob = async (req, res) => {
  console.log("Body recibido:", req.body); 
  try {
    const newJob = new Job(req.body);
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    console.error('Error al crear trabajo:', error.message);
    res.status(500).json({ error: 'Error del servidor al guardar el trabajo' });
  }
};

export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    console.error('Error al obtener trabajos:', error.message);
    res.status(500).json({ error: 'Error al obtener los trabajos' });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    if (!deletedJob) {
      return res.status(404).json({ error: 'Trabajo no encontrado' });
    }
    res.status(200).json({ message: 'Trabajo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar trabajo' });
  }
};
