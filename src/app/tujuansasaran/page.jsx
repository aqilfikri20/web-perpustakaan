import PostComponent from "@/components/PostComponent/PostComponent"

export default async function tujuansaran() {
  const APIURL = process.env.NEXT_PUBLIC_APIURL;
  let response = await fetch(`${APIURL}/api/tujuansaran?populate=*`)
  let {data: tujuansarans} = await response.json()

  return (
    <>
    <PostComponent data={tujuansarans}/>
    </>
)
}
