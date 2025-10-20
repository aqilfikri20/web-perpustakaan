import NewsForPage from "@/components/NewsForPage/NewsForPage"

export default async function sejarah() {
  const APIURL = process.env.NEXT_PUBLIC_APIURL;
  let response = await fetch(`${APIURL}/api/posts?populate=*&sort=`)
  let {data: posts} = await response.json()

  return (
    <>
    <NewsForPage data={posts}/>
    </>
)
}
