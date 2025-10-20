import "../styles/globals.css";
import Footer from "@/components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import WrapRight from "@/components/WrapRight/WrapRight";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";


const RootLayout = ({ children}) => {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="body-page">
            <HeaderComponent/>
            <NavBar />
            
            <div className="content">
              <div className="wrap-left">{children}</div>

              <WrapRight/>
            </div>
        </div>
        <Footer/>
        <div className="bottom">
          <p>Copyright © All rights reserved UPT. Perpustakaan Universitas Malikussaleh by design.</p>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
