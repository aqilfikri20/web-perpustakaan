import Image from "next/image";
import "./LinkLiterasi.css";

const LinkLiterasi = (any) => {
    return(
        <>  
                <div className="logo-literasi" data-animation="diagonal">
                <a href="https://www.perpusnas.go.id/">
                    <Image                
                    src="/images/logo-perpusnas.png"
                    alt="Logo Perpusnas"
                    width={1000}
                    height={1000}>  
                    </Image>
                    <span className="border border-top"></span>
                    <span className="border border-right"></span>
                    <span className="border border-bottom"></span>
                    <span className="border border-left"></span>
                    </a>

                </div>

            <div className="logo-literasi" data-animation="diagonal">
            <a href="https://e-resources.perpusnas.go.id">
                <Image
                    src="/images/logo-resource.png"
                    alt="Logo E-Resource"
                    width={1000}
                    height={1000}></Image>
                    <span className="border border-top"></span>
                    <span className="border border-right"></span>
                    <span className="border border-bottom"></span>
                    <span className="border border-left"></span>
            </a>
            </div>

            <div className="logo-literasi" data-animation="diagonal">
            <a href="https://inlislite.perpusnas.go.id/">
                <Image
                    src="/images/logo-inlislite.png"
                    alt="Logo Inlislite"
                    width={1000}
                    height={1000}></Image>
                    <span className="border border-top"></span>
                    <span className="border border-right"></span>
                    <span className="border border-bottom"></span>
                    <span className="border border-left"></span>
            </a>
            </div>

            <div className="logo-literasi" data-animation="diagonal">
            <a href="https://onesearch.id/">
                <Image
                    src="/images/logo-IOS.png"
                    alt="Logo One Searcch"
                    width={1000}
                    height={1000}></Image>
                    <span className="border border-top"></span>
                    <span className="border border-right"></span>
                    <span className="border border-bottom"></span>
                    <span className="border border-left"></span>
            </a>
            </div>

            <div className="logo-literasi" data-animation="diagonal">
            <a href="https://www.ebsco.com/">
                <Image
                    src="/images/logo-ebsco.png"
                    alt="Logo EBSCO"
                    width={1000}
                    height={1000}></Image>
                    <span className="border border-top"></span>
                    <span className="border border-right"></span>
                    <span className="border border-bottom"></span>
                    <span className="border border-left"></span>
            </a>
            </div>

            <div className="logo-literasi" data-animation="diagonal">
            <a href="https://kubuku.id/download/e-perpus-unimal/">
                <Image
                    src="/images/logo-eperpus.png"
                    alt="Logo E-Perpus"
                    width={1000}
                    height={1000}></Image>
                    <span className="border border-top"></span>
                    <span className="border border-right"></span>
                    <span className="border border-bottom"></span>
                    <span className="border border-left"></span>
            </a>
            </div>
            
        </>
    )
}

export default LinkLiterasi;