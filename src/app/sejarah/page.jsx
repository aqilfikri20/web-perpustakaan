import PostComponent from "@/components/PostComponent/PostComponent"

export default async function sejarah() {
  let response = await fetch('http://localhost:1337/api/sejarahs?populate=*')
  let {data: sejarahs} = await response.json()

  return (
    <>
    <PostComponent data={sejarahs}/>
    </>
)
}
