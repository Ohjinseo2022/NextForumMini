// import { PostData } from '@/app/page'
import DetailLink from '@/components/DetailLink'
import { connectDB } from '@/util/database'

export default async function list() {
  const client: any = await connectDB
  const db = client.db('forum')
  const data: PostData[] = (await db.collection('post').find().toArray()) as PostData[]
  console.log(data)
  return (
    <div className="list-bg">
      {data.map((e: any, idx: number) => {
        const routeLink = `/list/detail/${e._id.toString()}`
        return (
          <div className="list-item" key={idx}>
            <DetailLink RouteLink={routeLink} Item={e} />
          </div>
        )
      })}
    </div>
  )
}
