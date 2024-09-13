import express from "express";
import "dotenv/config";
import { connectDB } from "./db/db.mjs";
import userRoutes from "./routes/userRoutes.mjs";
import postRoutes from "./routes/postRoutes.mjs";

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
