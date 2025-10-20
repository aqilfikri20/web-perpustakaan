import NewsForPage from "@/components/NewsForPage/NewsForPage"

export default async function sejarah() {
  let response = await fetch('http://localhost:1337/api/posts?populate=*&sort=')
  let {data: posts} = await response.json()

  return (
    <>
    <NewsForPage data={posts}/>
    </>
)
}
