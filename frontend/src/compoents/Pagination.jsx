import React from 'react';

export default function Pagination({ currentPage, onPageChange, hasMore }) {
  return (
    <div className="flex justify-center gap-2 my-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded ${
          currentPage === 1
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-800 hover:bg-gray-50 border border-gray-300'
        }`}
      >
        Previous
      </button>

      {currentPage > 2 && (
        <button
          onClick={() => onPageChange(1)}
          className="px-4 py-2 border rounded hover:bg-gray-50"
        >
          1
        </button>
      )}

      {currentPage > 3 && <span className="px-2 py-2">...</span>}

      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="px-4 py-2 border rounded hover:bg-gray-50"
        >
          {currentPage - 1}
        </button>
      )}

      <button
        className="px-4 py-2 border rounded bg-[#DB4444] text-white"
      >
        {currentPage}
      </button>

      {hasMore && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="px-4 py-2 border rounded hover:bg-gray-50"
        >
          {currentPage + 1}
        </button>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasMore}
        className={`px-4 py-2 rounded ${
          !hasMore
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-800 hover:bg-gray-50 border border-gray-300'
        }`}
      >
        Next
      </button>
    </div>
  );
}