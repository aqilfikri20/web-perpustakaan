import PostComponent from "@/components/PostComponent/PostComponent"

export default async function kegiatan() {
  const APIURL = process.env.NEXT_PUBLIC_APIURL;
  let response = await fetch(`${APIURL}/api/kegiatans?populate=*`)
  let {data: kegiatans} = await response.json()

  return (
    <>
    <PostComponent data={kegiatans}/>
    </>
)
}
