import PostComponent from "@/components/PostComponent/PostComponent"

export default async function renstra() {
  let response = await fetch('http://localhost:1337/api/renstras?populate=*')
  let {data: renstras} = await response.json()

  return (
    <>
    <PostComponent data={renstras}/>
    </>
)
}
