import { Router } from "express";
import createPasien from "../controller/daftar/createPasien";

const daftarRouter = Router();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
daftarRouter.post("/baru", createPasien as any);

export default daftarRouter;
