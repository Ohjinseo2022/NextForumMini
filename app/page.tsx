import Image from 'next/image'
import styles from './page.module.css'
import { connectDB } from '@/util/database'
export interface PostData {
  _id: string
  title: string
  content: string
}
export default async function Home() {
  const client: any = await connectDB
  const db = client.db('forum')
  const data: PostData[] = (await db.collection('post').find().toArray()) as PostData[]
  console.log(data)
  return (
    <div>
      <button>게시판이동</button>
      {data.map((e: any, idx: number) => {
        return (
          <tr>
            <td>{idx + 1} </td>
            <td>{e.title} </td>
            <td>{e.content} </td>
          </tr>
        )
      })}
    </div>
  )
}
