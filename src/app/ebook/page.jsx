import "./ebook.css"

import Image from "next/image"
const ebook = () => {
    return(
        <div className="wrap-ebook">
        <div className="header-ebook">
            <h2>Layanan Ebook</h2>
        </div>
        
        <div className="wrap-eperpus">
            <div className="image-ebook">
                <Image src="/images/ebook.jpeg"
                alt="Logo Ebook"
                height={10000}
                width={10000}>
            </Image>
            </div>

            <div className="wrap-download">
                <p>Download Aplikasi E-Perpus dibawah :</p>
                <a href="https://kubuku.id/download/e-perpus-unimal/">
                <button className="button-82-pushable" role="button">
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">
                        Download
                    </span>
                    </button></a>
            </div>

        </div>

    </div>
    )
}

export default ebook;