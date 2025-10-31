# 🧠 XYZ Innovations — Portfolio CMS (Next.js + Tailwind + Framer Motion)

A modern **portfolio + admin dashboard CMS** built using **Next.js**, **React**, and **Tailwind CSS**.  
It allows the admin to manage **services** and **messages** dynamically with local storage persistence.

---

## 🚀 Features

### 🌐 Public Portfolio
- Beautiful **Hero section** with company introduction  
- **Services** displayed dynamically from CMS context  
- **Contact form** (simulated message storage)  
- Responsive & mobile-friendly design  
- Dark/Light mode toggle  

### 🔒 Admin Dashboard
- Secure **admin login page** (hardcoded credentials)  
- **Manage Services** — add or delete services  
- **View Messages** — see all submitted messages  
- **Mark messages as read/unread**  
- LocalStorage-based persistence  
- Animated UI using **Framer Motion**

---

## 🧾 Tech Stack

| Category | Technologies Used |
|-----------|------------------|
| Frontend | Next.js (App Router), React |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| State Management | React Context API |
| Storage | LocalStorage (persistent data) |

---

## ⚙️ Installation & Setup

```bash
# 1️⃣ Clone the repository
git clone https://github.com/madhusmitamallick2309/oditech-project.git

# 2️⃣ Navigate into the folder
cd xyz-innovations

# 3️⃣ Install dependencies
npm install

# 4️⃣ Run the development server
npm run dev
```

Visit 👉 **http://localhost:3000**

---

## 🔑 Admin Login Details

| Field | Value |
|--------|--------|
| **Username** | `admin@example.com` |
| **Password** | `admin123` |

---

## 🧩 Folder Structure

```
src/
 ├─ app/
 │   ├─ page.tsx            # Main portfolio page
 │   ├─ admin/
 │   │   ├─ login/page.tsx  # Admin Login Page
 │   │   └─ dashboard/page.tsx  # Admin Dashboard
 │
 ├─ components/
 │   ├─ Hero.tsx
 │   ├─ Services.tsx
 │   ├─ ThemeToggle.tsx
 │   └─ ...
 │
 ├─ context/
 │   ├─ CMSContext.tsx      # Manages services & messages
 │   └─ ThemeContext.tsx    # Handles dark/light theme
 │
 ├─ styles/
 │   └─ globals.css
 │
 └─ ...
```

---

## 🌗 Theme Support

- Supports **Dark Mode** and **Light Mode** toggle via `ThemeContext`
- Persists user preference across sessions  

---

## 💾 Data Persistence

All services and messages are stored locally using **LocalStorage**, so the data remains even after refreshing or restarting.

---

## 🧠 Future Enhancements

- 🔐 JWT-based authentication  
- 🗄️ Connect to real backend (Node.js / Firebase)  
- 📩 Real contact form submission via API  
- 🧾 Export messages as CSV/PDF  
- 🌍 Multi-language support  

---

## 👩‍💻 Author

**Madhusmita Mallick**  
📍 India  
💼 Built as part of a full-stack portfolio project  

---


