import "./staf.css"
import StafCard from "./StafCard";
import Image from "next/image";

const StafComponent = ({ data }) => {

  return (
      <div className="wrap-staf">
        <div className="text-staf">
          <h2>Staf Perpustakaan</h2>
        </div>
        

        <div className="container-staf">
          {data && data.length > 0 ? (
            data.map((item) => (
              <StafCard key={item.id}>
                <div className="image-staf">
                  <Image
                    src={item.image ? `${APIURL}/${item.image.formats.large.url}` : "/images/default.png"}
                    alt={item.nama}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="content-staf">            
                    <table>
                        <tbody>
                        <tr>
                            <th>Nama</th>
                            <td>: {item.nama}</td>
                        </tr>

                        <tr>
                            <th>NIP</th>
                            <td>: {item.NIP}</td>
                        </tr>

                        <tr>
                            <th>NIDN</th>
                            <td>: {item.NIDN}</td>
                        </tr>

                        <tr>
                            <th>Jabatan/Tugas</th>
                            <td>: {item.tugas}</td>
                        </tr>

                        <tr>
                            <th>Email</th>
                            <td>: {item.email}</td>
                        </tr>
                        </tbody>
                        
                    </table>
                  </div>
              </StafCard>
            ))
          ) : (
            <StafCard>
                <div className="image-staf">
                  <h4>image</h4>
                </div>
                <div className="content-staf">
                  <h4>Belum Ada Berita</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, molestiae! Nam, corrupti! Voluptate necessitatibus blanditiis delectus sunt, eaque impedit harum magnam odit est error, in non vel eligendi nesciunt sint?</p>
                  <p></p>
                </div>
            </StafCard>
          )}
        </div>

      </div>
  );
};



export default StafComponent;
