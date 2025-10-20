import PostComponent from "@/components/PostComponent/PostComponent"

export default async function jadwallayanan() {
   const APIURL = process.env.NEXT_PUBLIC_APIURL;
  let response = await fetch(`${APIURL}/api/jadwallayanan?populate=*`)
  let {data: jadwallayanan} = await response.json()

  return (
    <>
    <PostComponent data={jadwallayanan}/>
    </>
)
}
