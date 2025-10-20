import Image from "next/image";
import "./profil.css"

const Profil = () => {
    return(
        <>
        <div className="image-profil">
        <Image
            src="/images/profil.jpg"
            alt="profil"
            width={1000}
            height={1000}></Image>
  
        </div>
        </>
    )
}

export default Profil;