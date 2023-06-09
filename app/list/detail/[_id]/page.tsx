import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'

export default async function Detail(props: any) {
  const db = (await connectDB).db('forum')
  let result: PostData = (await db.collection('post').findOne({ _id: new ObjectId(props.params._id) })) as PostData
  console.log(result)
  console.log(props)
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  )
}
