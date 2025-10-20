import PostComponent from "@/components/PostComponent/PostComponent"

export default async function referensi() {
  const APIURL = process.env.NEXT_PUBLIC_APIURL;
  let response = await fetch(`${APIURL}/api/referensis?populate=*`)
  let {data: referensis} = await response.json()

  return (
    <>
    <PostComponent data={referensis}/>
    </>
)
}
