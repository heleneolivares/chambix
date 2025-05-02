import express from 'express';
import { createJob, getJobs, deleteJob } from '../controllers/jobController.js';

const router = express.Router();

// 👇 Este bloque debe ir antes de las rutas
router.use((req, res, next) => {
  console.log("➡️ Ruta alcanzada:", req.method, req.originalUrl);
  next();
});

router.post('/create', createJob);
router.get('/', getJobs);
router.delete('/:id', deleteJob);

export default router;
