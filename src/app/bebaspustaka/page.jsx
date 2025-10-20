import PostComponent from "@/components/PostComponent/PostComponent"

export default async function bebaspustaka() {
  let response = await fetch('{APIURL}bebaspustaka?populate=*')
  let {data: bebaspustaka} = await response.json()

  return (
    <>
    <PostComponent data={bebaspustaka}/>
    </>
)
}
