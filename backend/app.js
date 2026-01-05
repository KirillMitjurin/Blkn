import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

import adminRoutes from "./routes/admin.js";
import homeRoutes from "./routes/home.js";

const app = express();

// ВАЖНО: Сначала парсеры тела!
app.use(express.json({ limit: "10mb" }));        // для JSON
app.use(express.urlencoded({ extended: true })); // для form-data

app.use(cors());

// Статические файлы
app.use("/uploads", express.static("uploads"));

// Теперь роуты
app.use("/api/admin", adminRoutes);
app.use("/", homeRoutes);

// Подключение БД
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});