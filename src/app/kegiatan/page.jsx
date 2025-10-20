import PostComponent from "@/components/PostComponent/PostComponent"

export default async function kegiatan() {
  let response = await fetch('http://localhost:1337/api/kegiatans?populate=*')
  let {data: kegiatans} = await response.json()

  return (
    <>
    <PostComponent data={kegiatans}/>
    </>
)
}
