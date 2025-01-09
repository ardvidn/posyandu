import prisma from "../../prisma";
import { Request, Response } from "express";

interface createPasienPayload {
  namaBalita: string;
  tanggalLahir: Date;
  jenisKelamin: string;
  nik: string;
  namaAyah: string;
  namaIbu: string;
  alamat: string;
  beratBadan: number;
  tinggiBadan: number;
  lila: number;
  lp: number;
  bayiBalita: string;
  tanggalPosyandu: Date;
}

const createPasien = async (req: Request, res: Response) => {
  try {
    const { namaBalita, tanggalLahir, jenisKelamin, nik, namaAyah, namaIbu, alamat, beratBadan, tinggiBadan, lila, lp, bayiBalita, tanggalPosyandu }: createPasienPayload = req.body;

    const daftarPasien = await prisma.peserta.create({
      data: {
        nama_balita: namaBalita.toUpperCase(),
        tanggal_lahir: tanggalLahir,
        jenis_kelamin: jenisKelamin.toUpperCase(),
        nik_bayi_balita: nik,
        nama_orangtua_ayah: namaAyah.toUpperCase(),
        nama_orangtua_ibu: namaIbu.toUpperCase(),
        alamat: alamat.toUpperCase(),
        berat_badan: beratBadan.toString(),
        tinggi_panjang_badan: tinggiBadan.toString(),
        lila: lila.toString(),
        lp: lp.toString(),
        bayi_balita: bayiBalita.toUpperCase(),
        tanggal_posyandu: tanggalPosyandu,
      },
    });

    return res.status(201).json({
      code: 201,
      data: daftarPasien,
    });
  } catch (error) {
    console.log("error when register pasien", error);
    return res.status(500).json({
      code: 500,
      message: "internal server error",
    });
  }
};

export default createPasien;
