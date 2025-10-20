import PostComponent from "@/components/PostComponent/PostComponent"

export default async function sirkulasi() {
  let response = await fetch('http://localhost:1337/api/sirkulasis?populate=*')
  let {data: sirkulasis} = await response.json()

  return (
    <>
    <PostComponent data={sirkulasis}/>
    </>
)
}
