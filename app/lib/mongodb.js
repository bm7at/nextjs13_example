import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI


const dbName = 'auth-demo'

let cachedClient = null

async function connectToDatabase() {
  if (cachedClient) {
    return { client: cachedClient, db: cachedClient.db(dbName) }
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  cachedClient = client
  return { client, db: client.db(dbName) }
}

export async function getConnectedClient() {
  const { client } = await connectToDatabase()
  return client
}
