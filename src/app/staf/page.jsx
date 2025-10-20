import StafComponent from "@/components/StafComponent/StafComponent"

export default async function staf() {
  const APIURL = process.env.NEXT_PUBLIC_APIURL;
  let response = await fetch(`${APIURL}/api/stafs?populate=*`)
  let {data: posts} = await response.json()

  return (
    <>
        <StafComponent data={posts}/>
    </>
)
}
