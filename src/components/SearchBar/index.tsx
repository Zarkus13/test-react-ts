import React, { useState } from 'react';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <>
      Search : {searchTerm}
      <input
        value={searchTerm}
        onChange={(e) => {
          console.log(e.target.value);
          setSearchTerm(e.target.value);
        }}
      />
    </>
  );
};