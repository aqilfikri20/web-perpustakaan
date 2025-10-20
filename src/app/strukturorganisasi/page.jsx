import PostComponent from "@/components/PostComponent/PostComponent"

export default async function strukturorganisasi() {
  const APIURL = process.env.NEXT_PUBLIC_APIURL;
  let response = await fetch(`${APIURL}/api/strukturorganisasi?populate=*`)
  let {data: strukturorganisasis} = await response.json()

  return (
    <>
    <PostComponent data={strukturorganisasis}/>
    </>
)
}
