import express from "express";
import DbConnect from "./db/db.js";
import dotenv from "dotenv";
import router from "./routes/songRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import cors from "cors";


dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || true,
    credentials: true
  })
);

app.use(express.json());
app.use('/api/songs', router)
app.use(errorMiddleware)

DbConnect();
app.listen(port, () => {
  console.log(`server runiing on port: ${port}`);
});
