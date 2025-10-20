import VideoComponent from "../components/videos/VideoComponent";
import BeritaComponent from "../components/BeritaComponent/BeritaComponent";


export default async function Home() {
  let response = await fetch('http://localhost:1337/api/posts?populate=*&sort=')
  let {data: posts} = await response.json()

  return (
    <>
        <VideoComponent/>
        <BeritaComponent data={posts}/>
    </>
)
}
