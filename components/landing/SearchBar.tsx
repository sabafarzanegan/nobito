import { Location, SearchNormal1 } from 'iconsax-reactjs';
import React from 'react';
import { Button } from '../ui/button';

function SearchBar() {
  return (
    <div className="flex items-center justify-center bg-white border border-primary-300 rounded-xl overflow-hidden shadow-md px-2 py-1  w-full mx-auto">
      {/* آیکون سرچ */}
      <div className="px-2 text-gray-500">
        <SearchNormal1 size="18" color="#757575" />
      </div>
      {/* فیلد سرچ */}
      <input
        type="text"
        placeholder="جستجو پزشک..."
        className="flex-1  text-sm placeholder-gray-400 focus:outline-none text-right"
      />

      {/* دکمه انتخاب شهر */}
      <Button className="flex items-center gap-1 px-2 py-1 text-tiny bg-primary-200 md:bg-transparent  text-primary-500 border   border-primary-500">
        <Location size="18" color="rgb(31, 113, 104)" />
        <span className="hidden md:inline-block">انتخاب شهر</span>
      </Button>
    </div>
  );
}

export default SearchBar;
