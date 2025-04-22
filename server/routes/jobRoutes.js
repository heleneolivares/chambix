import express from 'express';
import { createJob, getJobs } from '../controllers/jobController.js';

const router = express.Router();

// 👇 Este bloque debe ir antes de las rutas
router.use((req, res, next) => {
  console.log("➡️ Ruta alcanzada:", req.method, req.originalUrl);
  next();
});

router.post('/create', createJob);
router.get('/', getJobs);


export default router;
