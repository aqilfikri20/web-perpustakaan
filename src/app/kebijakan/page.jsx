import PostComponent from "@/components/PostComponent/PostComponent"

export default async function kebijakan() {
  let response = await fetch('http://localhost:1337/api/kebijakans?populate=*')
  let {data: kebijakans} = await response.json()

  return (
    <>
    <PostComponent data={kebijakans}/>
    </>
)
}
