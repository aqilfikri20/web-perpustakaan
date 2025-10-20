import PostComponent from "@/components/PostComponent/PostComponent"

export default async function sop() {
  const APIURL = process.env.NEXT_PUBLIC_APIURL;
  let response = await fetch(`${APIURL}/api/sops?populate=*`)
  let {data: sops} = await response.json()

  return (
    <>
    <PostComponent data={sops}/>
    </>
)
}
