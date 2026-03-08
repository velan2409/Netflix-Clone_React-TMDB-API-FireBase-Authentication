# Netflix-Clone-React-TMDB-API-FireBase-Authentication-

<!-- Animated Header -->

<p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:E50914,50:000000,100:1c1c1c&height=240&section=header&text=Netflix%20Clone&fontSize=45&fontColor=ffffff&animation=twinkling&fontAlignY=35"/>
</p>

<!-- Typing Animation -->

<p align="center">
<img src="https://readme-typing-svg.demolab.com?font=Poppins&size=22&pause=1000&color=E50914&center=true&vCenter=true&width=600&lines=Netflix+Clone+Built+With+React;Firebase+Authentication+Integration;TMDB+Movie+API+Powered+App;Modern+Frontend+Project"/>
</p>

<p align="center">
<img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite&logoColor=white"/>
<img src="https://img.shields.io/badge/Firebase-Authentication-FFCA28?logo=firebase&logoColor=black"/>
<img src="https://img.shields.io/badge/TMDB-Movie%20API-01B4E4"/>
<img src="https://img.shields.io/badge/Made%20By-Velan-E50914"/>
<img src="https://komarev.com/ghpvc/?username=yourusername&label=Repo%20Views&color=E50914&style=flat"/>
</p>


Netflix &amp; Netmirror Clone – (React + TMDB API + FireBase Authentication)
---

# 🎬 Netflix Clone

A **Netflix-inspired movie streaming web application** developed using **React, Vite, Firebase Authentication, and The Movie Database (TMDB) API**.

The project replicates the **core Netflix browsing experience**, allowing users to explore trending movies, view details, and watch trailers within a modern responsive UI.

It demonstrates **modern frontend development practices including API integration, authentication systems, and reusable component architecture**.

---


# 🎥 Project Preview

<p align="center">

<img src="./preview-home.gif" width="850"/>

<br><br>

<img src="./preview-player.gif" width="850"/>

</p>

---


# 🚀 Live Demo

<p align="center">
<a href="https://your-live-demo-link.com">
<img src="https://img.shields.io/badge/🚀%20Live%20Demo-Netflix%20Clone-E50914?style=for-the-badge"/>
</a>
</p>

---


# 🚀 Core Features

* 🎬 Netflix-style homepage interface
* 🔥 Trending and popular movie sections
* 🎥 Dynamic movie banners
* 📺 Movie trailer player
* 🔐 Secure login and signup using Firebase Authentication
* 📱 Fully responsive design
* ⚡ Fast development environment using Vite
* 🧩 Modular and reusable React components
* 🎞️ Live movie data fetched from TMDB API

---

# 🧰 Technology Stack

<p align="center">
<img src="https://skillicons.dev/icons?i=react,vite,firebase,js,html,css,git,github" />
</p>


| Technology              | Purpose                 |
| ----------------------- | ----------------------- |
| React                   | Frontend UI development |
| Vite                    | Fast build tool         |
| Firebase Authentication | User authentication     |
| TMDB API                | Movie data provider     |
| JavaScript              | Application logic       |
| HTML5                   | Structure               |
| CSS3                    | Styling                 |
| Git & GitHub            | Version control         |

---

# 🔐 Firebase Authentication

Firebase Authentication is used to securely manage user accounts.

### Authentication Features

* User Registration (Sign Up)
* Secure Login System
* User Logout
* Persistent Authentication Sessions

### Firebase Configuration Example

```javascript
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

Movie data is retrieved from **The Movie Database (TMDB)** API.

Available movie data includes:

* Trending movies
* Popular movies
* Movie posters
* Movie descriptions
* Movie trailers

Official website:
https://www.themoviedb.org/

Example API usage:

```javascript
const API_KEY = "YOUR_TMDB_API_KEY";
```

---

# 📂 Project Structure

```
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

```bash
git clone https://github.com/yourusername/netflix-clone.git
```

Navigate into the project directory

```bash
cd netflix-clone
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Application runs at:

```
http://localhost:5173
```

---

# 👨‍💻 Author

**Velan P**

💻 Java Full Stack Developer
🚀 Passionate about Web Development & AI Projects

GitHub
https://github.com/velan2409

---

<p align="center">
⭐ If you like this project, consider giving it a star on GitHub!
</p>

<p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:000000,100:E50914&height=120&section=footer"/>
</p>















<p align="center">
<img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite&logoColor=white"/>
<img src="https://img.shields.io/badge/Firebase-Authentication-FFCA28?logo=firebase&logoColor=black"/>
<img src="https://img.shields.io/badge/TMDB-Movie%20API-01B4E4"/>
<img src="https://img.shields.io/badge/Made%20By-Velan-E50914"/>
<img src="https://komarev.com/ghpvc/?username=yourusername&label=Repo%20Views&color=E50914&style=flat"/>
</p>

---


