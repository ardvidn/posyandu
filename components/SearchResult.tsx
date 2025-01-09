import React from "react";

// type TableListProps = {
// //   data: {
// //     id: number;
// //     nama_balita: string;
// //     tanggal_lahir: string;
// //     jenis_kelamin: string;
// //     nik_bayi_balita: string;
// //     nama_orangtua_ayah: string;
// //     nama_orangtua_ibu: string;
// //   }[];
//   onView: (id: number) => void;
//   onEdit: (id: number) => void;
//   onDelete: (id: number) => void;
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SearchResult: React.FC<any> = ({ data, onView, onEdit, onDelete }) => {
  const formatTanggal = (isoDate: string): string => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full border border-gray-300 divide-y divide-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Nama Balita</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Tanggal Lahir</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Jenis Kelamin</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">NIK</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Nama Ayah</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Nama Ibu</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2">{item.nama_balita}</td>
                <td className="px-4 py-2">{formatTanggal(item.tanggal_lahir)}</td>
                <td className="px-4 py-2">{item.jenis_kelamin}</td>
                <td className="px-4 py-2">{item.nik_bayi_balita}</td>
                <td className="px-4 py-2">{item.nama_orangtua_ayah}</td>
                <td className="px-4 py-2">{item.nama_orangtua_ibu}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <button onClick={() => onView(item.id)} className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-600">
                      View
                    </button>
                    <button onClick={() => onEdit(item.id)} className="px-2 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600">
                      Ubah
                    </button>
                    <button onClick={() => onDelete(item.id)} className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600">
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchResult;
