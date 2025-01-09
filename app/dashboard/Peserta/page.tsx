"use client";
import Searchbar from "@/components/Searchbar";
import SearchResult from "@/components/SearchResult";
// import TableList from "@/components/TableList";
import axios from "axios";
import React, { useState } from "react";

const Peserta = () => {
  const [, setSearchValue] = useState("");
  const [error, setError] = useState<string>("");
  const [hasilPencarian, setHasilPencarian] = useState<[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const handleSearch = async (value: string) => {
    setSearchValue(value);

    try {
      const response = await axios.get(`http://localhost:8000/api/pasien/pencarian?nama=${value.toUpperCase()}`);
      setError("");
      setHasilPencarian(response.data.data.data);
      // console.log(hasilPencarian);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("Data tidak ditemukan atau terjadi kesalahan.");
    }
    console.log(error);
  };

  return (
    <>
      <div className="flex flex-col items-center w-full h-screen bg-slate-300">
        <div className="w-full max-h-max py-20 px-10">
          <Searchbar onSearch={handleSearch} />
          {/* <TableList dataSearch={dataPasien} /> */}
          <SearchResult data={hasilPencarian} />
        </div>
      </div>
    </>
  );
};

export default Peserta;
