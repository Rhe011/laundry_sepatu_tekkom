import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import laundryRoutes from "./routes/laundryRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", laundryRoutes);

// Root test
app.get("/", (req, res) => {
  res.send("🧺 API Laundry Sepatu Tekkom Aktif!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
