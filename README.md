# 🚀 Portofolio Kelas — Tema Luar Angkasa

React + Vite + Tailwind CSS + Framer Motion. Semua isi (info kelas, foto, daftar murid + Instagram) diedit **hanya di `src/data.js`**.

## 1. Jalankan di komputer
```bash
npm install
npm run dev        # buka http://localhost:5173
```

## 2. Build untuk hosting
```bash
npm run build      # hasil ada di folder dist/
```

## 3. Deploy

### A. Hosting statis (paling mudah)
Upload **isi folder `dist/`** ke:
- **cPanel / hosting biasa**: File Manager → `public_html`
- **Netlify**: drag & drop folder `dist` di app.netlify.com/drop
- **Vercel / Cloudflare Pages / GitHub Pages**: hubungkan repo, build command `npm run build`, output `dist`

### B. VPS (Ubuntu/Debian)
```bash
git clone <repo-kamu> portofolio-kelas   # atau upload & unzip
cd portofolio-kelas
bash deploy/setup.sh domainkamu.com      # tanpa argumen = akses via IP
```
Script otomatis install Node.js + Nginx, build, publish ke `/var/www/portofolio-kelas`, dan pasang HTTPS.
Untuk update: ubah file → jalankan lagi `bash deploy/setup.sh domainkamu.com`.
(Pastikan DNS A record domain sudah mengarah ke IP VPS dan port 80/443 terbuka.)

## 4. Mengubah isi
Semua isi ada di `src/data.js`: logo teks (`BRAND`), nama kelas/sekolah/tahun berdiri, kutipan mengetik (`QUOTES`), menu (`NAV`), info & statistik, media sosial (`MEDIA`), bagan struktur (`STRUKTUR`), anggota + Instagram (`SISWA`), gallery (`GALLERY`), prestasi (`PRESTASI`), dan footer (`FOOTER`).
Foto: taruh file di folder `public/` lalu isi `src: "/nama-file.jpg"` (atau `foto:` untuk anggota; `KELAS.foto` = foto kelas yang menyambut pengunjung di halaman utama).
Di bagian Anggota, ketuk kartu → muncul `@username` → ketuk lagi untuk membuka Instagram.

## 5. Deploy di Railway
1. Upload proyek ke GitHub (repo baru).
2. railway.app → New Project → Deploy from GitHub repo → pilih repo.
3. Railway otomatis build (`npm run build`) dan jalan (`npm start`, membaca `$PORT`).
4. Settings → Networking → Generate Domain. Selesai. Update = push ke GitHub.

## 6. Media sosial
Isi `MEDIA.instagram` (username) dan `MEDIA.spotify` (link lagu/playlist) di `src/data.js` → preview akun & lagu muncul otomatis di bagian Media. TikTok dinonaktifkan sementara (datanya disimpan sebagai komentar di `data.js`).

## Catatan versi tanpa folder
Semua file ada di satu level (tanpa folder `src/`) supaya mudah diupload dari HP. `data.js` = semua isi website. Foto kelas: buat folder `public/` di GitHub (Add file -> Create new file -> ketik `public/info.txt`), lalu masuk ke folder itu dan Upload files -> pilih foto. Isi `foto: "/kelas.jpg"` di data.js.
