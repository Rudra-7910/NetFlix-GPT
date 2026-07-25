# 🎬 Netflix GPT

A fully responsive, feature-rich Netflix clone built with React, Redux Toolkit, and Tailwind CSS. It features a complete authentication system via Firebase, real-time movie data from the TMDB API, and a powerful search engine to discover movies instantly.

![Netflix GPT Banner](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg)

## ✨ Key Features

- **Authentication System**
  - Secure Login and Sign-Up form with validation.
  - Handled via Firebase Auth (Email/Password).
  - Protected Routes: Unauthenticated users are redirected to the login page; logged-in users are redirected to the browse page.

- **Netflix Browse Experience**
  - **Dynamic Hero Section**: Features a full-screen, auto-playing YouTube trailer of a trending movie in the background with title and description overlays.
  - **Categorized Movie Lists**: Horizontal scrollable rows for "Now Playing", "Trending", "Popular", and "Upcoming" movies fetching real-time data from TMDB.

- **Search Engine**
  - A dedicated search view to quickly find any movie in the TMDB database.
  - **Multi-lingual Support**: The search bar UI supports English, Hindi, and Spanish.

- **Movie Playback**
  - Click on any movie poster to instantly navigate to a dedicated `/watch/:movieId` route.
  - Automatically fetches and plays the official YouTube trailer for the selected movie in full-screen.

- **Fully Responsive Design**
  - Built with a mobile-first approach using Tailwind CSS.
  - Seamlessly adapts to mobile phones, tablets, and desktop screens.

## 🛠️ Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit (`userSlice`, `movieSlice`, `gptSlice`, `configSlice`)
- **Routing:** React Router v6 (`createBrowserRouter`)
- **Backend/Auth:** Firebase Authentication
- **APIs:** TMDB (The Movie Database) API
- **Deployment:** Firebase Hosting

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository
```bash
git clone https://github.com/Rudra-7910/NetFlix-GPT.git
cd NetFlix-GPT
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and add your API keys:

```env
VITE_TMDB_TOKEN="Bearer YOUR_TMDB_API_TOKEN"
VITE_FIREBASE_API_KEY="YOUR_FIREBASE_API_KEY"
VITE_FIREBASE_AUTH_DOMAIN="YOUR_FIREBASE_AUTH_DOMAIN"
VITE_FIREBASE_PROJECT_ID="YOUR_FIREBASE_PROJECT_ID"
VITE_FIREBASE_STORAGE_BUCKET="YOUR_FIREBASE_STORAGE_BUCKET"
VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_FIREBASE_MESSAGING_SENDER_ID"
VITE_FIREBASE_APP_ID="YOUR_FIREBASE_APP_ID"
VITE_FIREBASE_MEASUREMENT_ID="YOUR_FIREBASE_MEASUREMENT_ID"
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🌐 Live Demo
You can view the live deployed application here: [https://netfllix-gpt-e9821.web.app](https://netfllix-gpt-e9821.web.app)