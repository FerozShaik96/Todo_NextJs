import { MongoClient, ObjectId } from 'mongodb';
async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  if (req.method === 'POST') {
    const data = req.body;
    const db = client.db();
    const TodoCollection = db.collection('todo');
    const result = await TodoCollection.insertOne(data);
    res.status(201).json({ message: 'Todo  Inserted!' });
  }

  if (req.method === 'GET') {
    const db = client.db();
    const TodoCollection = db.collection('todo');
    const result = await TodoCollection.find().sort({ _id: -1 }).toArray();
    res.status(200).json({ result });
  }
  if (req.method === 'PATCH') {
    const id = req.query.id;
    const db = client.db();
    const TodoCollection = db.collection('todo');
    const result = await TodoCollection.updateOne({});
  }
  client.close();
}
export default handler;
