import StafComponent from "@/components/StafComponent/StafComponent"

export default async function staf() {
  let response = await fetch('http://localhost:1337/api/stafs?populate=*')
  let {data: posts} = await response.json()

  return (
    <>
        <StafComponent data={posts}/>
    </>
)
}
