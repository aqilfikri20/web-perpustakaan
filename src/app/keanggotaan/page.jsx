import PostComponent from "@/components/PostComponent/PostComponent"

export default async function keanggotaan() {
  const APIURL = process.env.NEXT_PUBLIC_APIURL;
  let response = await fetch(`${APIURL}/api/keanggotaans?populate=*`)
  let {data: keanggotaans} = await response.json()

  return (
    <>
    <PostComponent data={keanggotaans}/>
    </>
)
}
