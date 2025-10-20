import DetailComponent from "@/components/DetailComponent/DetailComponent";

export default async function BeritaDetail({ params }) {
    const { slug } =  await params;
    const APIURL = process.env.NEXT_PUBLIC_APIURL;
    // Fetch data langsung di server component
    const res = await fetch(`${APIURL}/api/posts?filters[slug][$eq]=${slug}&populate[author]=true&populate[image]=true`, {
        cache: "no-store", // Hindari caching untuk data dinamis
    });

    if (!res.ok) {
        return {
            notFound: true,
        };
    }

    const { data: berita } = await res.json();

    // Jika tidak ada data, tampilkan halaman 404
    if (!berita || berita.length === 0) {
        return {
            notFound: true,
        };
    }

    return (
        <div>
            <DetailComponent data={[berita[0]]} />
        </div>
    );
}
