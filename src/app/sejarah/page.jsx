import PostComponent from "@/components/PostComponent/PostComponent"

export default async function sejarah() {
  const APIURL = process.env.NEXT_PUBLIC_APIURL;
  let response = await fetch(`${APIURL}/api/sejarahs?populate=*`)
  let {data: sejarahs} = await response.json()

  return (
    <>
    <PostComponent data={sejarahs}/>
    </>
)
}
