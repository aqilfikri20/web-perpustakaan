'use client'
import { useState } from "react";
import CardBerita from "../CardBerita/CardBerita";
import Image from "next/image";
import Pagination from "../Pagination/Pagination";
import "./BeritaComponent.css";

const BeritaComponent = ({ data }) => {

  const [currentPage, setCurrentPage] = useState(1); // State untuk halaman saat ini
  const itemsPerPage = 3;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="wrap-news">
      <div className="text-news">
        <h2>Berita</h2>
        <hr />
      </div>

      <div className="container-news">
        {currentData.length > 0 ? (
          currentData.map((item) => {
            const formattedDate = new Date(item.createdAt).toLocaleDateString('id-ID', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            });
            const APIURL = process.env.NEXT_PUBLIC_APIURL;
            return (
              <CardBerita key={item.id} slug={item.slug}>
                <div className="image-news">
                {item.image && item.image.url && (
                    <Image
                      src={`${APIURL}/${item.image.url}`}
                      alt={item.title}
                      width={1000}
                      height={1000}
                    />
                  )}
                  {}
                </div>
                <div className="content-news">
                  <div className="text-content">
                    <h4>{item.title}</h4>
                    <p>{item.headline}</p>
                  </div>

                  <div className="time">
                    <p>Diposting oleh {item.author ? item.author.name : "No Name"} pada {formattedDate}</p>
                  </div>
                </div>
              </CardBerita>
            );
          })
        ) : (
          <CardBerita>
            <div className="image-news">
              <h4>image</h4>
            </div>
            <div className="content-news">
              <h4>Belum Ada Berita</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, molestiae! Nam, corrupti! Voluptate necessitatibus blanditiis delectus sunt, eaque impedit harum magnam odit est error, in non vel eligendi nesciunt sint?</p>
            </div>
          </CardBerita>
        )}
      </div>

      <div className="pagination-news">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BeritaComponent;
