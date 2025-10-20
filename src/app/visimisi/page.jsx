import PostComponent from "@/components/PostComponent/PostComponent"

export default async function visimisi() {
  const APIURL = process.env.NEXT_PUBLIC_APIURL;
  let response = await fetch(`${APIURL}/api/visimisi?populate=*`)
  let {data: visimisis} = await response.json()

  return (
    <>
    <PostComponent data={visimisis}/>
    </>
)
}
