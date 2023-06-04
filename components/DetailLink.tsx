'use client'

import { useRouter } from 'next/navigation'
//router.prefetch('미리로드 로드기실 url')
interface ItemProps {
  RouteLink: string
  Item: PostData
}
export default function DetailLink({ RouteLink, Item }: ItemProps) {
  let router = useRouter()
  const onClickHanddler = () => {
    router.push(RouteLink)
  }

  return (
    <div>
      <h4 onClick={onClickHanddler}>{Item.title}</h4>
      <p>{Item.content}</p>
    </div>
  )
}
