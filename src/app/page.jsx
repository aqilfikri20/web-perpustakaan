import VideoComponent from "../components/videos/VideoComponent";
import BeritaComponent from "../components/BeritaComponent/BeritaComponent";


export default async function Home() {
  console.log("API URL:", process.env.NEXT_PUBLIC_APIURL);
  const APIURL = process.env.NEXT_PUBLIC_APIURL;
  let response = await fetch(`${APIURL}/api/posts?populate=*&sort=`)
  let {data: posts} = await response.json()

  return (
    <>
        <VideoComponent/>
        <BeritaComponent data={posts}/>
    </>
)
}
