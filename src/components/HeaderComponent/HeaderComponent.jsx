import "./header.css"
import Image from "next/image";
import { FaFax } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
const HeaderComponent = (any) => {
    return(
<div className="header">
    <div className="logo">  
      <Image src="/images/logo_perpus_unimal.png"
            alt="Logo Perpus Unimal"
            width={1000}
            height={1000}
            ></Image>
    </div>

    <div className="header-contact">
        <div className="contact">
          <IoMdCall className="svg-edit"/>
          <p>Telp : +62.645.41373</p>
        </div>

        <div className="contact">
        <FaFax />
          <p>Fax : +62.645.44450</p>
        </div>

        <div className="contact">
        <MdEmail className="svg-edit"/>
        <a href="mailto:lib@unimal.ac.id">Email : lib@unimal.ac.id</a>
        </div>

        <div className="contact-logo">
        <a href="https://www.instagram.com/lib.malikussaleh" target="_blank" rel="noopener noreferrer"><FaInstagramSquare className="icon1"/></a>
        </div>

        <div className="contact-logo">
        <a href="https://www.facebook.com/lib.malikussaleh" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className="icon2" /></a>
        </div>
    </div>

</div>
    );
}

export default HeaderComponent;
