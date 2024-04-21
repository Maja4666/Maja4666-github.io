
import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handleNextPage = () => {
    onPageChange(currentPage + 1);
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
    window.scrollTo(0, 0); 
  };

  return (
    <div className="pagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage <= 1}>
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage >= totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination;

