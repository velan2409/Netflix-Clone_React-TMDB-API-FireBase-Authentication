# Netflix-Clone-React-TMDB-API-FireBase-Authentication-
Netflix &amp; Netmirror Clone – (React + TMDB API + FireBase Authentication)


<p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:E50914,100:000000&height=220&section=header&text=Netflix%20Clone&fontSize=40&fontColor=ffffff&animation=twinkling"/>
</p>

<p align="center">
<img src="https://img.shields.io/badge/React-18-61DAFB?logo=react"/>
<img src="https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite"/>
<img src="https://img.shields.io/badge/Firebase-Authentication-FFCA28?logo=firebase"/>
<img src="https://img.shields.io/badge/TMDB-API-01B4E4"/>
<img src="https://img.shields.io/badge/Made%20By-Velan-red"/>
</p>

---

# 📌 Project Overview

This project is a **Netflix-inspired movie streaming web application** built using **React, Vite, Firebase Authentication, and The Movie Database (TMDB) API**.

The application allows users to **browse trending movies, explore movie details, and watch trailers** through a modern **Netflix-style interface**.
User authentication is securely handled using **Firebase Authentication**, enabling users to sign up, log in, and manage sessions.

This project demonstrates **modern frontend development practices including component-based architecture, API integration, and authentication management**.

---

# 🚀 Core Features

🎬 Netflix-inspired modern UI
🔥 Trending and popular movie sections
📺 Embedded movie trailer player
🎥 Dynamic movie banners and thumbnails
🔐 Secure user authentication with Firebase
📱 Fully responsive layout
⚡ Fast performance using Vite build tool
🧩 Reusable React component architecture
🎞️ Live movie data fetched from TMDB API

---

# 🧰 Technology Stack

<p align="center">

<img src="https://skillicons.dev/icons?i=react,vite,firebase,js,html,css,git,github"/>

</p>

| Technology              | Purpose                     |
| ----------------------- | --------------------------- |
| React                   | Frontend UI development     |
| Vite                    | Fast development build tool |
| Firebase Authentication | User login & signup system  |
| TMDB API                | Movie database and content  |
| JavaScript              | Application logic           |
| HTML5                   | Structure                   |
| CSS3                    | Styling                     |
| Git & GitHub            | Version control             |

---

# 🔐 Firebase Authentication

The application integrates **Firebase Authentication** to securely manage user access.

### Authentication Capabilities

✔ User Registration (Sign Up)
✔ Secure Login System
✔ User Logout
✔ Authentication State Management

### Firebase Configuration Example

```id="h1e2md"
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

Movie information is fetched using **The Movie Database (TMDB) API**, which provides:

* Trending Movies
* Popular Movies
* Movie Posters
* Movie Descriptions
* Movie Trailers

Official Website
https://www.themoviedb.org/

Example API usage:

```id="t6k3zs"
const API_KEY = "YOUR_TMDB_API_KEY";
```

---

# 📂 Project Structure

```id="vxtpt3"
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

# ⚙️ Installation

Clone the repository

```id="igc0k0"
git clone https://github.com/yourusername/netflix-clone.git
```

Navigate to the project directory

```id="i0o4em"
cd netflix-clone
```

Install dependencies

```id="2mqy9d"
npm install
```

Start the development server

```id="8t1rlp"
npm run dev
```

Application will run at:

```id="s9bhve"
http://localhost:5173
```

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Velan P**

💻 Java Full Stack Developer
🚀 Passionate about Web Development & AI Engineering

GitHub
https://github.com/yourusername

---

⭐ If you find this project useful, consider **starring the repository**.
