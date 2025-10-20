import PostComponent from "@/components/PostComponent/PostComponent"

export default async function uraiantugas() {
  let response = await fetch('http://localhost:1337/api/uraiantugase?populate=*')
  let {data: uraiantugass} = await response.json()

  return (
    <>
    <PostComponent data={uraiantugass}/>
    </>
)
}
