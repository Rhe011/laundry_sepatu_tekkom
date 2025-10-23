# Laundry Sepatu Tekkom API

## Struktur Data

| Field           | Tipe / Keterangan                                      |
|-----------------|--------------------------------------------------------|
| **id**          | Nomor unik sepatu                                      |
| **nama**        | Nama sepatu atau merek pelanggan                       |
| **status**      | Status proses cuci (`Sedang Dicuci` / `Selesai`)      |
| **tanggalMasuk**| Tanggal sepatu diterima untuk dicuci                  |
| **tanggalSelesai** | Tanggal sepatu selesai dicuci (`-` jika belum selesai) |

---

## Contoh Request & Response

### GET /api/items

**Response:**

```json
[
  {
    "id": 1,
    "nama": "Converse Chuck Taylor",
    "status": "Selesai",
    "tanggalMasuk": "2025-10-01",
    "tanggalSelesai": "2025-10-03"
  }
]
```

### GET /api/items?status=Selesai

**Response:**

```json
[
  {
    "id": 1,
    "nama": "Converse Chuck Taylor",
    "status": "Selesai",
    "tanggalMasuk": "2025-10-01",
    "tanggalSelesai": "2025-10-03"
  }
]
```

### POST /api/items

**Body:**

```json
{
  "nama": "Nike Air Max",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": "-"
}
```

**Response:**

```json
{
  "message": "Data sepatu berhasil ditambahkan."
}
```

### PUT /api/items/:id

**Body:**

```json
{
  "status": "Selesai",
  "tanggalSelesai": "2025-10-09"
}
```

**Response:**

```json
{
  "message": "Status sepatu berhasil diperbarui."
}
```

### DELETE /api/items/:id

**Response:**

```json
{
  "message": "Data sepatu berhasil dihapus."
}
```

---

## Instalasi & Menjalankan API

1. **Clone repository**

```bash
git clone https://github.com/username/laundry_sepatu_tekkom.git
cd laundry_sepatu_tekkom
```

2. **Install dependencies**

```bash
npm install
```

3. **Buat file `.env` di root project**

```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
PORT=3000
```

4. **Jalankan server**

```bash
npm run dev
```

5. **Akses API**

```
http://localhost:3000/api/items
```

---

## Link Deploy

* **Vercel:** [Link Deploy Vercel kamu](#)

