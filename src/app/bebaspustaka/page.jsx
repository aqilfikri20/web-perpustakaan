import PostComponent from "@/components/PostComponent/PostComponent"

export default async function bebaspustaka() {
  const APIURL = process.env.NEXT_PUBLIC_APIURL;
  let response = await fetch(`${APIURL}/api/bebaspustaka?populate=*`)
  let {data: bebaspustaka} = await response.json()

  return (
    <>
    <PostComponent data={bebaspustaka}/>
    </>
)
}
