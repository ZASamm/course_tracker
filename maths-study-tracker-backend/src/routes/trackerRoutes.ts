import { Router } from 'express';
import TrackerController from '../controllers/trackerController';

const router = Router();
const trackerController = new TrackerController();

export function setRoutes(app: Router) {
  app.get('/api/study-items', trackerController.getStudyItems.bind(trackerController));
  app.post('/api/study-items', trackerController.createStudyItem.bind(trackerController));
  app.put('/api/study-items/:id', trackerController.updateStudyItem.bind(trackerController));
  app.delete('/api/study-items/:id', trackerController.deleteStudyItem.bind(trackerController));
}