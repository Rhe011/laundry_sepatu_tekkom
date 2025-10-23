# laundry_sepatu_tekkom

REST API sederhana untuk layanan cuci sepatu berbasis **Node.js**, **Express.js**, dan **Supabase**.  
Mendukung operasi CRUD dan filter status sepatu (`GET /items?status=Selesai`).

## Fitur
- CRUD sepatu
- Filter status
- Database Supabase
- Deploy ke Vercel

## Struktur Data
| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | serial | Primary key |
| nama | text | Nama sepatu |
| status | text | Sedang Dicuci / Selesai |
| tanggal_masuk | date | Tanggal diterima |
| tanggal_selesai | date | Tanggal selesai |
| created_at | timestamptz | Otomatis |

Contoh:
```json
{
  "id": 1,
  "nama": "Nike Air Force 1",
  "status": "Sedang Dicuci",
  "tanggal_masuk": "2025-10-08",
  "tanggal_selesai": null
}
