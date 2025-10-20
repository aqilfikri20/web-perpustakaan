import Image from "next/image";
import "./linkinternal.css";

const LinkInternal = (any) => {
    return(
        <>
        <div className="logo-internal" data-animation="diagonal">
            <a href="http://unimal.ac.id/">
            <Image                
            src="/images/logo-unimal.png"
            alt="Logo UNIMAL"
            width={1000}
            height={500}>
            </Image>
            <span className="border border-top"></span>
                    <span className="border border-right"></span>
                    <span className="border border-bottom"></span>
                    <span className="border border-left"></span>
            </a>
        </div>

        <div className="wrap-logo-internal" >
            <div className="logo-internal" data-animation="diagonal">
            <a href="http://portal.unimal.ac.id/">
            <Image
                src="/images/akademik.png"
                alt="akademik"
                width={1000}
                height={1000}>
                </Image>
                <span className="border border-top"></span>
                    <span className="border border-right"></span>
                    <span className="border border-bottom"></span>
                    <span className="border border-left"></span>
            </a>
            </div>

            <div className="logo-internal" data-animation="diagonal">
                <a href="https://pustaka.unimal.ac.id/">
                <Image
                src="/images/pustaka.png"
                alt="Logo pustaka"
                width={1000}
                height={1000}></Image>
                                    <span className="border border-top"></span>
                    <span className="border border-right"></span>
                    <span className="border border-bottom"></span>
                    <span className="border border-left"></span>
                </a>
            </div>

            <div className="logo-internal" data-animation="diagonal">
                <a href="http://repository.unimal.ac.id/">
                <Image
                src="/images/repository.png"
                alt="Logo repository"
                width={1000}
                height={1000}></Image>
                                    <span className="border border-top"></span>
                    <span className="border border-right"></span>
                    <span className="border border-bottom"></span>
                    <span className="border border-left"></span>
                </a>
            </div>        
        </div>

        <div className="logo-internal" data-animation="diagonal">
            <a href="https://pustaka.unimal.ac.id/opac/">
            <Image
                src="/images/OPAC.png"
                alt="Logo OPAC"
                width={1000}
                height={500}></Image>
                                    <span className="border border-top"></span>
                    <span className="border border-right"></span>
                    <span className="border border-bottom"></span>
                    <span className="border border-left"></span>
            </a>
        </div>

        <div className="logo-internal" data-animation="diagonal">
            <a href="https://rama.unimal.ac.id/">
            <Image
                src="/images/logo-RAMA.png"
                alt="Logo RAMA"
                width={1000}
                height={500}></Image>
                                    <span className="border border-top"></span>
                    <span className="border border-right"></span>
                    <span className="border border-bottom"></span>
                    <span className="border border-left"></span>
            </a>
        </div>

        <div className="logo-internal" data-animation="diagonal">
            <a href="https://ojs.unimal.ac.id/">

            <div className="katalog-jurnal">
            <Image
                src="/images/OJS.png"
                alt="Logo OJS"
                width={1000}
                height={500}></Image>
            <h2>KATALOG JURNAL</h2>
            </div>
            <span className="border border-top"></span>
            <span className="border border-right"></span>
            <span className="border border-bottom"></span>
            <span className="border border-left"></span>

            </a>
        </div>
        </>
)
}

export default LinkInternal;