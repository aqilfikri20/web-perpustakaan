import "./CardBerita.css"
import Link from "next/link";
const CardBerita = ({slug,children}) => {
    return (
        <Link href={`/berita/${slug}`}>
        <div className="CardBerita" data-animation="diagonal">
            {children}
            <span className="border border-top"></span>
      <span className="border border-right"></span>
      <span className="border border-bottom"></span>
      <span className="border border-left"></span>  
        </div>
        </Link>
    )
}

export default CardBerita;