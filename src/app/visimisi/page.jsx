import PostComponent from "@/components/PostComponent/PostComponent"

export default async function visimisi() {
  let response = await fetch('http://localhost:1337/api/visimisi?populate=*')
  let {data: visimisis} = await response.json()

  return (
    <>
    <PostComponent data={visimisis}/>
    </>
)
}
