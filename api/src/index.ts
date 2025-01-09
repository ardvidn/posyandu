import express, { urlencoded, Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { PORT } from "./config";
import apiRouter from "./router/api.router";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(urlencoded({ extended: true }));
app.use("/api", apiRouter);
app.use("/public", express.static("./public"));

app.listen(PORT, () => {
  console.log(`  ➜  [API] Local: http://localhost:${PORT}`);
});

app.get("/test", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

// import express, { Request, Response } from "express";

// const app = express();
// const port = process.env.PORT || 8000;

// app.use(express.json());

// app.get("/ping", (req: Request, res: Response) => {
//   res
//     .json({
//       message: "pong",
//     })
//     .status(200);
// });

// app.listen(port, () => {
//   console.log(`server up and running on http://localhost:${port}`);
// });
