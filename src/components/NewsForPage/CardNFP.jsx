import "./newsnfp.css"
import Link from "next/link";
const CardNFP = ({slug,children}) => {
    return (
        <Link href={`/berita/${slug}`}>
        <div className="CardNFP" >
            {children}
        </div>
        </Link>
    )
}

export default CardNFP  ;