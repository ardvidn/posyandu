import React, { useEffect, useState } from "react";
import axios from "axios";

const TableList = () => {
  const [, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [totalPages, setTotalPages] = useState<number>(0);

  // const formatTanggal = (isoDate: string): string => {
  //   const date = new Date(isoDate);
  //   return date.toLocaleDateString("id-ID", {
  //     day: "2-digit",
  //     month: "2-digit",
  //     year: "numeric",
  //   });
  // };

  const fetchData = async (page: number, rows: number) => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8000/api/pasien/list", {
        params: { page, rowsPerPage: rows },
      });
      setData(response.data.data);
      setTotalPages(response.data.pagination.totalPages);
      setLoading(false);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Gagal memuat data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage, rowsPerPage);
  }, [currentPage, rowsPerPage]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset ke halaman pertama saat jumlah data berubah
  };

  if (loading) {
    return <div className="text-center py-4">Memuat data...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-4">{error}</div>;
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-10">
        <div className="overflow-x-auto w-full">
          <div className="flex justify-between items-center mb-4">
            <div>
              <label htmlFor="rowsPerPage" className="mr-2">
                Tampilkan:
              </label>
              <select id="rowsPerPage" value={rowsPerPage} onChange={handleRowsPerPageChange} className="border border-gray-300 rounded p-1">
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </div>
            <div>
              Halaman {currentPage} dari {totalPages}
            </div>
          </div>
          <table className="min-w-full border border-gray-300 divide-y divide-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Nama Balita</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Tanggal Lahir</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Jenis Kelamin</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">NIK</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Nama Ayah</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Nama Ibu</th>
                {/* <th className="px-4 py-2 text-left font-medium text-gray-700">Alamat</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Berat Badan (kg)</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Tinggi Badan (cm)</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">LILA (cm)</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">LP (cm)</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Bayi/Balita</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Tanggal Posyandu</th> */}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {/* {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50"> */}
              {/* <td className="px-4 py-2">{item.nama_balita}</td>
                  <td className="px-4 py-2">{formatTanggal(item.tanggal_lahir)}</td>
                  <td className="px-4 py-2">{item.jenis_kelamin}</td>
                  <td className="px-4 py-2">{item.nik_bayi_balita}</td>
                  <td className="px-4 py-2">{item.nama_orangtua_ayah}</td>
                  <td className="px-4 py-2">{item.nama_orangtua_ibu}</td> */}
              {/* <td className="px-4 py-2">{item.berat_badan}</td>
                  <td className="px-4 py-2">{item.tinggi_panjang_badan}</td>
                  <td className="px-4 py-2">{item.lila}</td>
                  <td className="px-4 py-2">{item.lp}</td>
                  <td className="px-4 py-2">{item.bayi_balita}</td>
                  <td className="px-4 py-2">{formatTanggal(item.tanggal_posyandu)}</td> */}
              {/* </tr>
              ))} */}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
            Previous
          </button>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default TableList;
