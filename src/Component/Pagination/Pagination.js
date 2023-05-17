import React, { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css'; // Import custom CSS file
import { Context } from '../Context/Context';

const MyComponent = () => {
  
  const {handlePageChange,pageCount}=useContext(Context)

  return (
    <div>
    

      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default MyComponent;
