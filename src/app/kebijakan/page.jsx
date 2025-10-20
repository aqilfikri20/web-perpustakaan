import PostComponent from "@/components/PostComponent/PostComponent"

export default async function kebijakan() {
  const APIURL = process.env.NEXT_PUBLIC_APIURL;
  let response = await fetch(`${APIURL}/api/kebijakans?populate=*`)
  let {data: kebijakans} = await response.json()

  return (
    <>
    <PostComponent data={kebijakans}/>
    </>
)
}
