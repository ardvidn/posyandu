-- CreateTable
CREATE TABLE "peserta" (
    "id" SERIAL NOT NULL,
    "nama_balita" TEXT NOT NULL,
    "tanggal_lahir" TIMESTAMP(3) NOT NULL,
    "jenis_kelamin" TEXT NOT NULL,
    "nik_bayi_balita" TEXT NOT NULL,
    "nama_orangtua_ayah" TEXT NOT NULL,
    "nama_orangtua_ibu" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "berat_badan" TEXT NOT NULL,
    "tinggi_panjang_badan" TEXT NOT NULL,
    "lila" TEXT NOT NULL,
    "lp" TEXT NOT NULL,
    "bayi_balita" TEXT NOT NULL,
    "tanggal_posyandu" TIMESTAMP(3) NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "peserta_pkey" PRIMARY KEY ("id")
);
