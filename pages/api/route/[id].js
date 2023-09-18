import { MongoClient, ObjectId } from 'mongodb';
async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  if (req.method === 'DELETE') {
    const id = req.query.id;
    console.log(id);
    const db = client.db();
    const TodoCollection = db.collection('todo');
    const result = await TodoCollection.deleteOne({
      _id: new ObjectId(id),
    });
    res.status(200).json({
      message: 'Todo Deleted',
      data: result,
    });
  }
  if (req.method === 'PATCH') {
    console.log(req.body.isCompleted);
    const id = req.query.id;
    const db = client.db();
    const TodoCollection = db.collection('todo');
    const result = await TodoCollection.findOneAndUpdate(
      { _id: `${new ObjectId(id)}` },
      { isCompleted: req.body.isCompleted },
    );
    res.status(200).json({
      message: 'Todo Completed',
      data: result,
    });
  }
  client.close();
}
export default handler;
