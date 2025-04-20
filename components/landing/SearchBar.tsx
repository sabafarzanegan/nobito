import React from 'react';

function SearchBar() {
  return (
    <div className="flex items-center bg-white border border-primary-300 rounded-xl overflow-hidden shadow-md px-2 py-1  w-ful mx-auto">
      {/* دکمه انتخاب شهر */}
      <button className="flex items-center gap-1 px-3 py-2 text-tiny  text-primary-500 border-e border-dotted border-gray-300">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
          />
        </svg>
        انتخاب شهر
      </button>

      {/* فیلد سرچ */}
      <input
        type="text"
        placeholder="جستجو پزشک،درمانگر،کلینیک..."
        className="flex-1 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none text-right"
      />

      {/* آیکون سرچ */}
      <div className="px-2 text-gray-500">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
          />
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
