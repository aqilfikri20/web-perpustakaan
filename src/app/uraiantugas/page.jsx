import PostComponent from "@/components/PostComponent/PostComponent"

export default async function uraiantugas() {
  const APIURL = process.env.NEXT_PUBLIC_APIURL;
  let response = await fetch(`${APIURL}/api/uraiantugase?populate=*`)
  let {data: uraiantugass} = await response.json()

  return (
    <>
    <PostComponent data={uraiantugass}/>
    </>
)
}
