import { MongoClient } from 'mongodb';

const uri = 'your_mongodb_connection_string'; // Replace with your MongoDB connection string
let db: any;

export const connectDB = async () => {
  if (db) return db;

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  db = client.db('mathsStudyTracker'); // Replace with your database name
  return db;
};