import PostComponent from "@/components/PostComponent/PostComponent"

export default async function referensi() {
  let response = await fetch('http://localhost:1337/api/referensis?populate=*')
  let {data: referensis} = await response.json()

  return (
    <>
    <PostComponent data={referensis}/>
    </>
)
}
