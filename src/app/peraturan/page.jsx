import PostComponent from "@/components/PostComponent/PostComponent"

export default async function peraturan() {
  let response = await fetch('http://localhost:1337/api/peraturans?populate=*')
  let {data: peraturans} = await response.json()

  return (
    <>
    <PostComponent data={peraturans}/>
    </>
)
}
