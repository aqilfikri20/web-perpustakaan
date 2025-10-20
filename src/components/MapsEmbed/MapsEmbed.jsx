import "./maps.css"
const MapEmbed = () => {
    return (
      <div className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d692.7221225589743!2d96.9868849816147!3d5.23318431605383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304771217729f6ed%3A0x2ef58345a7138e68!2sPerpustakaan%20-%20Universitas%20Malikussaleh!5e0!3m2!1sid!2sid!4v1734193384019!5m2!1sid!2sid" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    );
  };
  
  export default MapEmbed;