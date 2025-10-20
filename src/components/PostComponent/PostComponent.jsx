import CardPost from "../CardPost/CardPost";
import "./PostComponent.css";
import * as cheerio from 'cheerio';

const PostComponent = ({ data }) => {


  const sanitizeContent = (content) => {
    const $ = cheerio.load(content); 
    return $.html(); 
  };

    return (
      <div className="wrap-post">
        {data && data.length > 0 ? (
          data.map((item) => {
            const formattedDate = new Date(item.createdAt).toLocaleDateString('id-ID', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            });
  
            return (
              <CardPost key={item.id}>
                <div className="header-post">
                  <h2>{item.title}</h2>
                  <p>
                    Diposting oleh {item.author ? item.author.name : "Tidak ada penulis"} pada {formattedDate}
                  </p>
                </div>
                <div className="content-post" dangerouslySetInnerHTML={{ __html: sanitizeContent(item.content.replace(/srcset=".*?"/g, '')) }} />
              </CardPost>
            );
          })
        ) : (
          <CardPost>
            <div className="content-post">
              <h4>Belum Ada konten</h4>
              <p>Lorem ipsum...</p>
            </div>
          </CardPost>
        )}
      </div>
    );
  };
  
  export default PostComponent;