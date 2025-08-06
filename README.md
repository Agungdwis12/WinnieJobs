# 🌐 Job Portal App (Vite + Supabase + Clerk)

Aplikasi job portal modern yang dibangun dengan **Vite + React + Tailwind**, serta backend terintegrasi menggunakan **Supabase** dan **Clerk** untuk autentikasi. Aplikasi ini juga mendukung onboarding, Markdown editor, form validation, carousel, dan lainnya.

---

## 📦 Tech Stack

- ⚡️ Vite + React
- 🎨 Tailwind CSS
- 🔐 Clerk (Authentication)
- ☁️ Supabase (Database & Backend)
- 🌍 Country/State/City Picker
- 📝 Markdown Editor
- 🧩 Form Validation (React Hook Form + Zod)
- 🎠 Carousel Plugin
- 🌀 React Spinners (Loading)

---

## 🛠️ Instalasi & Setup

### 1. Inisialisasi Project

```bash
npm create vite@latest
cd [nama-proyek]
npm install
```

### 2. Jalankan Aplikasi

```bash
npm run dev
```

---

## 💅 Setup Tailwind CSS

```bash
npm install -D tailwindcss@^3.3.0 postcss autoprefixer
npx tailwindcss init -p
```

> Jangan lupa konfigurasi file `tailwind.config.js` dan import ke `index.css` sesuai dokumentasi [Tailwind CSS](https://tailwindcss.com/docs/guides/vite).

---

## 🔐 Setup Clerk (Authentication)

```bash
npm install @clerk/clerk-react
npm install @clerk/themes
```

> Ikuti dokumentasi [Clerk](https://clerk.dev/docs) untuk konfigurasi `ClerkProvider`.

---

## 🗄️ Setup Supabase

```bash
npm install @supabase/supabase-js
```

> Contoh password Supabase dev:
```
jobportal#2003
```

Tambahkan fungsi SQL berikut di Supabase SQL Editor:

```sql
create or replace function requesting_user_id()
return text
language sql stable
as $$
  select nullif(current_setting('request.jwt.claims', true)::json->>'sub', '')
$$;
```

---

## 🔌 Plugin Tambahan

### 📽️ Carousel Autoplay (Shadcn)

```bash
npm install embla-carousel-autoplay
```

### 🌀 Onboarding Spinner

```bash
npm install react-spinners
```

### 🌍 Country, State, City Selector

```bash
npm install country-state-city
```

### 📝 Markdown Editor

```bash
npm install @uiw/react-md-editor
```

### ✅ Form Validation

```bash
npm install react-hook-form zod @hookform/resolvers
```

---

## 📁 Struktur Umum Project

```
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── lib/
│   └── ...
├── public/
├── tailwind.config.js
├── index.html
├── package.json
└── ...
```

---

## 🤝 Kontribusi

Pull request sangat disambut! Untuk perubahan besar, harap buka issue terlebih dahulu untuk diskusi.

---

## 📄 Lisensi

Proyek ini berlisensi [MIT](LICENSE).
