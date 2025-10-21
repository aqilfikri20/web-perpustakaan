import Image from "next/image";
import CardNFP from "./CardNFP";
import "./newsnfp.css"; 
const NewsForPage = ({ data }) => {

  return (
    <div className="wrap-parent-nfp">
      <div className="header-nfp">
        <h2>Berita</h2>
      </div>
    <div className="wrap-nfp">
    {data && data.length > 0 ? (
      data.map((item) => {
        const formattedDate = new Date(item.createdAt).toLocaleDateString('id-ID', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        });
        const APIURL = process.env.NEXT_PUBLIC_APIURL;

        return (
          <CardNFP key={item.id} slug={item.slug}>
                <div className="image-nfp">
                {item.image && item.image.url && (
                    <Image
                      src={`${APIURL}/${item.image.url}`}
                      alt={item.title}
                      width={1000}
                      height={1000}
                    />
                  )}
                  {}
                </div>
                <div className="content-nfp">              
                <h4>{item.title}</h4>
                <p>{formattedDate}</p>
                </div>

            </CardNFP>
        );
      })
    ) : (
      <CardNFP>
        <div className="content-post">
          <h5>Belum Ada konten</h5>
          <p>Lorem ipsum...</p>
        </div>
      </CardNFP>
    )}
  </div>
  </div>
);
};


export default NewsForPage;
