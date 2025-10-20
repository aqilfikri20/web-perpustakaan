import PostComponent from "@/components/PostComponent/PostComponent"

export default async function renstra() {
  const APIURL = process.env.NEXT_PUBLIC_APIURL;
  let response = await fetch(`${APIURL}/api/renstras?populate=*`)
  let {data: renstras} = await response.json()

  return (
    <>
    <PostComponent data={renstras}/>
    </>
)
}
