# Petaluna Florist

Website company profile konsep UMKM florist untuk project UTS Digitalisasi UMKM. Dibuat menggunakan HTML, CSS, dan JavaScript.

## Fitur
- Responsive untuk desktop dan ponsel.
- Navigasi mobile.
- Filter katalog fresh flower dan artificial flower.
- Enam kartu produk contoh.
- Modal custom bouquet dengan validasi form.
- Tombol produk untuk mengisi pilihan bouquet pada form.
- Persiapan pesan WhatsApp setelah nomor bisnis diatur.
- Logo SVG orisinal Petaluna.
- Bagian Home, About, Collection, Gallery, Contact, dan Custom Order.

## Menjalankan website
1. Ekstrak folder project.
2. Buka `index.html` di browser atau jalankan dengan Live Server di VS Code.
3. Pastikan folder `assets` tetap berada di lokasi yang sama.

## Sebelum dipublikasikan
1. Buka `js/script.js` dan ganti `WHATSAPP_NUMBER` dengan nomor WhatsApp bisnis yang benar (format internasional tanpa `+` atau spasi).
2. Ganti informasi kontak demo, jam operasional, harga simulasi, dan detail layanan sesuai data sebenarnya.
3. Periksa hak penggunaan seluruh foto produk sebelum website dipublikasikan untuk bisnis nyata.

## Struktur
```text
petaluna-florist/
├── index.html
├── README.md
├── BUSINESS-WEBSITE-BRIEF.md
├── assets/
│   ├── petaluna-logo.svg
│   └── images/
├── css/style.css
└── js/script.js
```

## Deploy
Unggah seluruh isi folder ke repository GitHub. Hubungkan repository ke Vercel sebagai website statis (framework preset `Other`, build command kosong, output directory `.`).
