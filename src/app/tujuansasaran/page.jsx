import PostComponent from "@/components/PostComponent/PostComponent"

export default async function tujuansaran() {
  let response = await fetch('http://localhost:1337/api/tujuansaran?populate=*')
  let {data: tujuansarans} = await response.json()

  return (
    <>
    <PostComponent data={tujuansarans}/>
    </>
)
}
