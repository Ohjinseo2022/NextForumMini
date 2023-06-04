'use client'
export default function Write() {
  const listHandler = async () => {
    await fetch('/api/testserver', {
      method: 'get',
    })
      .then((res) => {
        const result = res.json()
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/testserver" method="POST">
        <button type="submit">전송</button>
      </form>
      <button onClick={listHandler}>리스트 조회</button>
    </div>
  )
}
