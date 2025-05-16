import { Request, Response } from 'express';
import TrackerService from '../services/trackerService';

class TrackerController {
  private trackerService: TrackerService;

  constructor() {
    this.trackerService = new TrackerService();
  }

  public getStudyItems = async (req: Request, res: Response): Promise<void> => {
    try {
      const studyItems = await this.trackerService.getAllStudyItems();
      res.status(200).json(studyItems);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching study items', error });
    }
  };

  public createStudyItem = async (req: Request, res: Response): Promise<void> => {
    try {
      const newItem = await this.trackerService.createStudyItem(req.body);
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({ message: 'Error creating study item', error });
    }
  };

  public updateStudyItem = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const updatedItem = await this.trackerService.updateStudyItem(id, req.body);
      res.status(200).json(updatedItem);
    } catch (error) {
      res.status(500).json({ message: 'Error updating study item', error });
    }
  };

  public deleteStudyItem = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.trackerService.deleteStudyItem(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Error deleting study item', error });
    }
  };
}

export default TrackerController;