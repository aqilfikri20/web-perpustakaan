import PostComponent from "@/components/PostComponent/PostComponent"

export default async function jadwallayanan() {
  let response = await fetch('http://localhost:1337/api/jadwallayanan?populate=*')
  let {data: jadwallayanan} = await response.json()

  return (
    <>
    <PostComponent data={jadwallayanan}/>
    </>
)
}
