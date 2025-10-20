import PostComponent from "@/components/PostComponent/PostComponent"

export default async function sop() {
  let response = await fetch('http://localhost:1337/api/sops?populate=*')
  let {data: sops} = await response.json()

  return (
    <>
    <PostComponent data={sops}/>
    </>
)
}
