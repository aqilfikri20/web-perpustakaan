import "./footer.css";
import { FaClock,FaFax } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import MapsEmbed from "../MapsEmbed/MapsEmbed";
const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-time">
                <div className="footer-title"> <FaClock />
                <h3>Jam Buka</h3></div>

                <div className="line-wrap">
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>
                
                <p>Senin - Jumat <br /> Pukul 08.00 - 17.00 WIB</p>
                <p>Sabtu - Minggu : Tutup</p>
            </div>

            <div className="footer-location">
                <div className="footer-title"> 
                    <FaLocationPin />
                    <h3>Lokasi</h3></div>

                <div className="line-wrap">
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>

                <div className="wrap-maps"> 
                    <MapsEmbed/>
                </div>
                

                <p>Kampus Utama Cot Tengku Nie Reuleut,
                Muara Batu, Aceh Utara, Provinsi Aceh, Indonesia</p>
            </div>

            <div className="footer-contact">
                <div className="footer-title"> 
                    <RiContactsBook2Fill />
                    <h3>Kontak</h3></div>

                <div className="line-wrap">
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>

                <div className="contact-p">
                <p>Nomor Pokok Perpustakaan (NPP) : 1101052D1000001</p>
                </div>
                

                <div className="contact-p">
                    <IoMdCall />
                    <p>Telp : +62.645.41373</p>
                </div>

                <div className="contact-p">
                    <FaFax />
                    <p>Fax : +62.645.44450</p>
                </div>

                <div className="contact-p">
                    <MdEmail />
                    <p>Email : lib@unimal.ac.id</p>
                </div>
                
                
                
            </div>
        </div>
    )
}

export default Footer;