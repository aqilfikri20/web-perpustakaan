import PostComponent from "@/components/PostComponent/PostComponent"

export default async function sirkulasi() {
  const APIURL = process.env.NEXT_PUBLIC_APIURL;
  let response = await fetch(`${APIURL}/api/sirkulasis?populate=*`)
  let {data: sirkulasis} = await response.json()

  return (
    <>
    <PostComponent data={sirkulasis}/>
    </>
)
}
