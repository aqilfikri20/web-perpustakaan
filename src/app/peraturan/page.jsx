import PostComponent from "@/components/PostComponent/PostComponent"

export default async function peraturan() {
  const APIURL = process.env.NEXT_PUBLIC_APIURL;
  let response = await fetch(`${APIURL}/api/peraturans?populate=*`)
  let {data: peraturans} = await response.json()

  return (
    <>
    <PostComponent data={peraturans}/>
    </>
)
}
