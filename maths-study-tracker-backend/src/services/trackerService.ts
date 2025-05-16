import { StudyItem } from '../models/studyItem';
import { db } from '../utils/db';

export class TrackerService {
  async getStudyItems(): Promise<StudyItem[]> {
    const studyItems = await db.collection('studyItems').find().toArray();
    return studyItems as StudyItem[];
  }

  async createStudyItem(item: StudyItem): Promise<StudyItem> {
    const result = await db.collection('studyItems').insertOne(item);
    return { ...item, _id: result.insertedId };
  }

  async updateStudyItem(id: string, item: Partial<StudyItem>): Promise<StudyItem | null> {
    const result = await db.collection('studyItems').findOneAndUpdate(
      { _id: id },
      { $set: item },
      { returnDocument: 'after' }
    );
    return result.value as StudyItem | null;
  }

  async deleteStudyItem(id: string): Promise<boolean> {
    const result = await db.collection('studyItems').deleteOne({ _id: id });
    return result.deletedCount === 1;
  }
}