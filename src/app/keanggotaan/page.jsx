import PostComponent from "@/components/PostComponent/PostComponent"

export default async function keanggotaan() {
  let response = await fetch('http://localhost:1337/api/keanggotaans?populate=*')
  let {data: keanggotaans} = await response.json()

  return (
    <>
    <PostComponent data={keanggotaans}/>
    </>
)
}
