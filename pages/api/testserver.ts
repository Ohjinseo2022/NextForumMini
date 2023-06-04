import { connectDB } from '@/util/database'

export default async function handler(req: any, res: any) {
  console.log(123)
  console.log(typeof req.method)
  if (req.method === 'POST') {
    return res.status(200).json('처리완료')
  }
  if (req.method === 'GET') {
    console.log('조회')
    const MongoDB: any = (await connectDB).db('forum')
    let result: PostData[] = (await MongoDB.collection('post').find().toArray()) as PostData[]
    console.log()
    return res.status(200).json(result)
  }
}
