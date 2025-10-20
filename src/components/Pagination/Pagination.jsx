'use client'
import "./pagination.css"

const Pagination = ({currentPage, totalPages, handlePageChange}) => {
    return(
        <>
            <div className="container-pagination">
            <ul className="pagination">
          <li className="cursor">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
          </li>
          {/* Render Nomor Halaman */}
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index + 1}>
              <button
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li className="cursor">
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
            </div>

      </> 
    )
}

export default Pagination;