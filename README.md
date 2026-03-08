# Netflix-Clone-React-TMDB-API-FireBase-Authentication-
Netflix &amp; Netmirror Clone – (React + TMDB API + FireBase Authentication)

<p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:E50914,100:000000&height=220&section=header&text=Netflix%20Clone&fontSize=40&fontColor=ffffff&animation=twinkling"/>
</p>

<p align="center">
<img src="https://img.shields.io/badge/React-18-blue?logo=react"/>
<img src="https://img.shields.io/badge/Vite-Fast%20Build-purple?logo=vite"/>
<img src="https://img.shields.io/badge/TMDB-API-green"/>
<img src="https://img.shields.io/badge/Firebase-Authentication-orange?logo=firebase"/>
<img src="https://img.shields.io/badge/Made%20By-Velan-red"/>
</p>

---

# 📌 About The Project

This project is a **Netflix-inspired movie streaming web application** built using **React, Vite, Firebase Authentication, and The Movie Database (TMDB) API**.

Users can browse trending movies, watch trailers, and explore movie details with a **modern Netflix-style UI**. The platform also includes **secure user authentication using Firebase**.

This project was built to practice **React development, API integration, authentication systems, and modern UI design**.

---

# 🚀 Features

🎬 Netflix-style homepage UI
🔥 Trending movies section
📺 Movie trailer player
🎥 Dynamic movie banners
🔐 User authentication with Firebase
📱 Fully responsive design
⚡ Fast loading using Vite
🧩 Modular React components
🎞️ Real-time movie data from TMDB API

---

# 🔐 Firebase Authentication

This project uses **Firebase Authentication** to manage users securely.

### Features Implemented

✔ User Sign Up
✔ User Login
✔ User Logout
✔ Authentication State Persistence

### Firebase Services Used

* Firebase Authentication
* Firebase Web SDK

### Firebase Setup

1. Go to Firebase Console
   https://console.firebase.google.com/

2. Create a new project

3. Enable **Authentication → Email/Password**

4. Copy Firebase configuration and add it to the project

```id="3d19fe"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

---

# 🎥 TMDB API Integration

Movie data is fetched using **The Movie Database (TMDB) API**.

### Data Used

* Trending Movies
* Popular Movies
* Movie Posters
* Movie Trailers
* Movie Descriptions

API Website:

https://www.themoviedb.org/

Add your API key:

```id="8x02qt"
const API_KEY = "YOUR_TMDB_API_KEY";
```

---

# 🛠️ Tech Stack

| Technology       | Usage              |
| ---------------- | ------------------ |
| ⚛️ React         | Frontend Framework |
| ⚡ Vite           | Fast Build Tool    |
| 🎬 TMDB API      | Movie Data         |
| 🔐 Firebase      | Authentication     |
| 🎨 CSS           | Styling            |
| 📦 Fetch / Axios | API Requests       |

---

# 📂 Project Structure

```id="l8szqd"
Netflix-Clone
│
├── public
│
├── src
│   ├── assets
│   ├── components
│   │   ├── Navbar
│   │   ├── TitleCards
│   │   └── Player
│   │
│   ├── pages
│   │   ├── Home
│   │   └── Login
│   │
│   ├── firebase.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
└── package.json
```

---

# ⚙️ Installation & Setup

Clone the repository

```id="q1x2bb"
git clone https://github.com/yourusername/netflix-clone.git
```

Navigate to the project folder

```id="u71g50"
cd netflix-clone
```

Install dependencies

```id="g7n0me"
npm install
```

Run the project

```id="kv0ncu"
npm run dev
```

Open in browser

```id="f33gaj"
http://localhost:5173
```

---

# 📌 Future Improvements

🔍 Add movie search
⭐ Add watchlist feature
📊 Add movie ratings
👤 Add user profiles
☁️ Deploy full stack backend

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Velan P**

💻 Java Full Stack Developer
🚀 Passionate about Web Development & AI Projects

GitHub
https://github.com/yourusername

---

⭐ If you like this project, please **give it a star on GitHub!**
