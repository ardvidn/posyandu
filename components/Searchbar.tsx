"use client";
import React, { ChangeEvent, useState } from "react";

export type SearchProps = {
  onSearch: (value: string) => void;
};

const Searchbar = (props: SearchProps) => {
  const { onSearch } = props;
  const [value, setValue] = useState("");
  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setValue(target.value);
  };

  const handleKeyDown = (Event: React.KeyboardEvent<HTMLInputElement>) => {
    if (Event.key === "Enter") {
      onSearch(value);
    }
  };
  return (
    <>
      <div className="relative flex items-center justify-center">
        <input type="search" name="search" className="border text-black rounded-3xl ring px-4 py-3 w-1/2 border-gray-300" placeholder="Masukkan nama Bayi/Balita...." onChange={searchHandler} onKeyDown={handleKeyDown} />
      </div>
    </>
  );
};

export default Searchbar;
