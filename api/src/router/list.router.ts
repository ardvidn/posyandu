import { Router } from "express";
import { getPasien, searchPasienByName } from "../controller/pasien/getPasien";

const listRouter = Router();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
listRouter.get("/list", getPasien as any);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
listRouter.get("/pencarian", searchPasienByName as any);

export default listRouter;
