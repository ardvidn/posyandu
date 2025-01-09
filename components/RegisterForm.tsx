"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    namaBalita: "",
    tanggalLahir: "",
    jenisKelamin: "",
    nik: "",
    namaAyah: "",
    namaIbu: "",
    alamat: "",
    beratBadan: "",
    tinggiBadan: "",
    lila: "",
    lp: "",
    bayiBalita: "",
    tanggalPosyandu: "",
  });

  const [hydrated, setHydrated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setHydrated(true); // Mark component as hydrated
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const dataToSubmit = {
      ...formData,
      tanggalLahir: new Date(formData.tanggalLahir).toISOString(),
      tanggalPosyandu: new Date(formData.tanggalPosyandu).toISOString(),
    };
    // console.log(dataToSubmit);

    try {
      const response = await axios.post("http://localhost:8000/api/daftar/baru", dataToSubmit);

      if (response.status === 201) {
        alert("form submitted successfully!");

        setFormData({
          namaBalita: "",
          tanggalLahir: "",
          jenisKelamin: "",
          nik: "",
          namaAyah: "",
          namaIbu: "",
          alamat: "",
          beratBadan: "",
          tinggiBadan: "",
          lila: "",
          lp: "",
          bayiBalita: "",
          tanggalPosyandu: "",
        });
        router.push("/dashboard/Peserta");
      }
    } catch (error) {
      console.error("error submitting form:", error);
      alert("failed to submit the form. please try again");
    }
  };

  if (!hydrated) {
    return null; // Avoid rendering until hydration is complete
  }

  return (
    <div className="mx-auto bg-white p-8  shadow-lg max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">Registrasi Bayi/Balita</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Group 1: Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nama Bayi/Balita <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="namaBalita"
              value={formData.namaBalita.toUpperCase()}
              onChange={handleInputChange}
              required
              placeholder="Masukkan nama Bayi/Balita"
              className="px-2 mt-2 block w-full border-gray-300 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tanggal Lahir <span className="text-red-500">*</span>
            </label>
            <input type="date" name="tanggalLahir" value={formData.tanggalLahir} onChange={handleInputChange} required className="px-2 mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
        </div>

        {/* Group 2: Gender and NIK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Jenis Kelamin <span className="text-red-500">*</span>
            </label>
            <select name="jenisKelamin" value={formData.jenisKelamin} onChange={handleInputChange} required className="px-2 mt-2 block w-full border-gray-300 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
              <option value="" disabled>
                Pilih jenis kelamin
              </option>
              <option value="LAKI-LAKI">Laki-Laki</option>
              <option value="PEREMPUAN">Perempuan</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              NIK Bayi/Balita <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nik"
              value={formData.nik}
              onChange={handleInputChange}
              required
              pattern="\d{16}"
              placeholder="Masukkan NIK 16 digit"
              className="px-2 mt-2 block w-full border-gray-300 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Group 3: Parents Info */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nama Orang Tua (Ayah/Ibu) <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            <input
              type="text"
              name="namaAyah"
              value={formData.namaAyah.toUpperCase()}
              onChange={handleInputChange}
              required
              placeholder="Nama Ayah"
              className="px-2 block w-full border-gray-300 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="text"
              name="namaIbu"
              value={formData.namaIbu.toUpperCase()}
              onChange={handleInputChange}
              required
              placeholder="Nama Ibu"
              className="px-2 block w-full border-gray-300 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Group 4: Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Alamat <span className="text-red-500">*</span>
          </label>
          <textarea
            name="alamat"
            value={formData.alamat.toUpperCase()}
            onChange={handleInputChange}
            required
            placeholder="Masukkan alamat lengkap"
            className="px-2 mt-2 block w-full border-gray-300 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>

        {/* Group 5: Physical Data */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Berat Badan (Kg) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="beratBadan"
              step="any"
              value={formData.beratBadan}
              onChange={handleInputChange}
              required
              placeholder="Berat dalam Kg"
              className="px-2 mt-2 block w-full border-gray-300 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tinggi Badan (Cm) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="tinggiBadan"
              step="any"
              value={formData.tinggiBadan}
              onChange={handleInputChange}
              required
              placeholder="Tinggi dalam Cm"
              className="px-2 mt-2 block w-full border-gray-300 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              LILA (Cm) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="lila"
              step="any"
              value={formData.lila}
              onChange={handleInputChange}
              required
              placeholder="LILA dalam Cm"
              className="px-2 mt-2 block w-full border-gray-300 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Group 6: LP, BayiBalita, and Tanggal Posyandu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              LP (Cm) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="lp"
              step="any"
              value={formData.lp}
              onChange={handleInputChange}
              required
              placeholder=""
              className="px-2 mt-2 block w-full border-gray-300 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bayi/Balita <span className="text-red-500">*</span>
            </label>
            <select name="bayiBalita" value={formData.bayiBalita} onChange={handleInputChange} required className="px-2 mt-2 block w-full border-gray-300 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
              <option value="" disabled>
                Pilih kategori
              </option>
              <option value="BAYI">BAYI</option>
              <option value="BALITA">BALITA</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tanggal Posyandu <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="tanggalPosyandu"
              value={formData.tanggalPosyandu}
              onChange={handleInputChange}
              required
              className="px-2 mt-2 block w-full border-gray-300 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button type="submit" className="w-1/6 bg-indigo-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-400">
            Daftar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
