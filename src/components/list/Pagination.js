import React from 'react';
import ProptTypes from 'prop-types';

const Pagination = (props) => {
    const { page, totalPages, handlePaginationClick } = props;
    return (
        <div className="Pagination">
            <button onClick={() => handlePaginationClick('prev')} disabled={page <= 1}>
                &larr;
            </button>
            <span>
                page {page} of {totalPages}
            </span>
            <button onClick={() => handlePaginationClick('next')} disabled={page >= totalPages}> 
                &rarr;
            </button>
        </div>
    )
}

Pagination.ProptTypes = {
    totalPages: ProptTypes.number.isRequired,
    page: ProptTypes.number.isRequired,
    handlePaginationClick: ProptTypes.func.isRequired,
}

export default Pagination;