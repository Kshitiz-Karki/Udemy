import { MongoClient } from 'mongodb'
import { ObjectId } from 'mongodb'

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    $match: {
      product: new ObjectId('6412e8d3a5b9d5ee54a1ca61'),
    },
  },
  {
    $group: {
      _id: null,
      averageRating: {
        $avg: '$rating',
      },
      numOfReviews: {
        $sum: 1,
      },
    },
  },
]

const client = await MongoClient.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const coll = client.db('10-e-commerce').collection('reviews')
const cursor = coll.aggregate(agg)
const result = await cursor.toArray()
await client.close()
