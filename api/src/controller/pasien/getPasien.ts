import prisma from "../../prisma";
import { Request, Response } from "express";

export const getPasien = async (req: Request, res: Response) => {
  try {
    // Ambil parameter dari query string
    const page = parseInt(req.query.page as string, 10) || 1; // Halaman saat ini
    const rowsPerPage = parseInt(req.query.rowsPerPage as string, 10) || 5; // Jumlah data per halaman

    // Hitung offset
    const offset = (page - 1) * rowsPerPage;

    // Ambil data dari database
    const listPasien = await prisma.peserta.findMany({
      skip: offset,
      take: rowsPerPage,
    });

    // Hitung total data untuk mendapatkan total halaman
    const totalData = await prisma.peserta.count();
    const totalPages = Math.ceil(totalData / rowsPerPage);

    return res.status(200).json({
      code: 200,
      data: listPasien,
      pagination: {
        currentPage: page,
        rowsPerPage: rowsPerPage,
        totalPages: totalPages,
        totalData: totalData,
      },
    });
  } catch (error) {
    console.log("error when register pasien", error);
    return res.status(500).json({
      code: 500,
      message: "internal server error",
    });
  }
};

export const searchPasienByName = async (req: Request, res: Response) => {
  try {
    // Ambil query parameter 'nama' dari URL
    const nama = req.query.nama as string;

    // Validasi input
    if (!nama || nama.trim() === "") {
      return res.status(400).json({
        code: 400,
        message: "Query parameter 'nama' diperlukan untuk pencarian.",
      });
    }

    // Cari data pasien berdasarkan nama menggunakan contains
    const pasienList = await prisma.peserta.findMany({
      where: {
        nama_balita: {
          contains: nama, // Mencari nama yang mengandung substring
          mode: "insensitive", // Pencarian case-insensitive (tidak membedakan huruf besar/kecil)
        },
      },
    });

    // Jika tidak ditemukan data
    if (pasienList.length === 0) {
      return res.status(404).json({
        code: 404,
        message: `Tidak ditemukan data pasien dengan nama mengandung '${nama}'.`,
      });
    }

    // Jika data ditemukan
    return res.status(200).json({
      code: 200,
      data: pasienList,
      total: pasienList.length,
    });
  } catch (error) {
    console.error("Error saat mencari pasien:", error);
    return res.status(500).json({
      code: 500,
      message: "Terjadi kesalahan pada server.",
    });
  }
};
