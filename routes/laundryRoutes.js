import express from "express";
import { supabase } from "../supabase/config.js";

const router = express.Router();

// GET semua items, bisa filter status
router.get("/items", async (req, res) => {
  const { status } = req.query;
  let query = supabase.from("items").select("*");

  if (status) query = query.eq("status", status);

  const { data, error } = await query;
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// POST tambah item baru
router.post("/items", async (req, res) => {
  const { nama, status, tanggalMasuk, tanggalSelesai } = req.body;

  const { error } = await supabase
    .from("items")
    .insert([{ nama, status, tanggalMasuk, tanggalSelesai }]);

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Data sepatu berhasil ditambahkan." });
});

// PUT update status sepatu
router.put("/items/:id", async (req, res) => {
  const { id } = req.params;
  const { status, tanggalSelesai } = req.body;

  const { error } = await supabase
    .from("items")
    .update({ status, tanggalSelesai })
    .eq("id", id);

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Status sepatu berhasil diperbarui." });
});

// DELETE hapus data sepatu
router.delete("/items/:id", async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from("items").delete().eq("id", id);
  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Data sepatu berhasil dihapus." });
});

export default router;
