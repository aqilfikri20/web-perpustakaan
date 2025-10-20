import PostComponent from "@/components/PostComponent/PostComponent"

export default async function bebaspustaka() {
  let response = await fetch('http://localhost:1337/api/bebaspustaka?populate=*')
  let {data: bebaspustaka} = await response.json()

  return (
    <>
    <PostComponent data={bebaspustaka}/>
    </>
)
}
