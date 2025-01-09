import { Router } from "express";
import daftarRouter from "./daftar.router";
import listRouter from "./list.router";

const apiRouter = Router();

apiRouter.use("/daftar", daftarRouter);
apiRouter.use("/pasien", listRouter);

export default apiRouter;
