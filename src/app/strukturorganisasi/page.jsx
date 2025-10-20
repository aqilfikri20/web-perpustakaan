import PostComponent from "@/components/PostComponent/PostComponent"

export default async function strukturorganisasi() {
  let response = await fetch('http://localhost:1337/api/strukturorganisasi?populate=*')
  let {data: strukturorganisasis} = await response.json()

  return (
    <>
    <PostComponent data={strukturorganisasis}/>
    </>
)
}
