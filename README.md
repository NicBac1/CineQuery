# CineQuery: Intelligent Movie Discovery Platform

CineQuery is a modern, multilingual movie discovery application that allows users to search for films using natural language and receive highly personalized, AI-driven recommendations based on top-rated Kaggle datasets and live the TMDB API. 

## ✨ Key Features

- **Natural Language Querying**: Skip rigid filters. Type what you want (e.g., *"Spanish romantic comedies from the 1990s"*) and the built-in NLP engine will translate your intent into complex SQL statements instantly.
- **Smart Recommendations**: A hybrid recommendation engine analyzes your "Favorite" movies to find semantic genre affinities and suggests hidden gems, leveraging both local datasets and the live TMDB catalog for the latest releases.
- **Multilingual Support**: Fully localized interface spanning English, Spanish, and French.
- **Dynamic Database Compilation**: Bootstraps an in-memory SQLite database from a local Kaggle dataset metadata file on startup, avoiding heavy local database management overhead.
- **Premium UI/UX**: Built with React, Tailwind CSS, and Framer Motion for a sleek, dark-mode glassmorphic aesthetic.

## 🛠 Tech Stack

### Frontend
- **React.js (Vite)**
- **Tailwind CSS** (for styling and responsive design)
- **Context API** (for global state management: Themes, i18n, History, Favorites)
- **Lucide Icons**

### Backend
- **Node.js & Express.js**
- **better-sqlite3** (for executing dynamic, NLP-generated SQL queries)
- **csv-parse**
- **OpenAI API** (used strictly as an NLP translation and semantic affinity engine)
- **TMDb (The Movie Database) API** (for fetching posters, latest releases, and dynamic fallback data)

## 🏗 Architecture & Design Decisions

1. **Natural Language to SQL pipeline**: Rather than vector-embedding the entire movie catalog, the backend takes advantage of the highly-structured metadata stored in our Kaggle dataset. User queries are translated via an NLP engine into normalized `SELECT` statements, mapping broad requests into precise SQL `WHERE` clauses.
2. **Hybrid Recommendation Engine**: When finding similar movies, the algorithm analyzes the user's favorites array. If a user favorites a brand new movie (e.g., late 2024), the system automatically performs a fallback lookup via the live TMDB API to construct the semantic profile, then queries the local database for historical matches, ensuring zero gaps in the recommendation timeline.
3. **In-Memory SQLite**: Designed for speed and zero-friction deployments. The `.csv` data is parsed and loaded into an in-memory SQL database purely during the Node instance runtime.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- An active [TMDb API Key](https://developer.themoviedb.org/docs)
- An active [OpenAI API Key](https://platform.openai.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cinequery.git
   cd cinequery
   ```

2. **Configure Environment Variables**
   Create a `.env` file in the `server` directory and add your API credentials:
   ```env
   TMDB_API_KEY=your_tmdb_api_key_here
   OPENAI_API_KEY=your_openai_api_key_here
   ```

3. **Install Dependencies**
   *Install backend dependencies:*
   ```bash
   cd server
   npm install
   ```
   *Install frontend dependencies:*
   ```bash
   cd ../client
   npm install
   ```

4. **Run the Application**
   *Start the backend server (runs on port 8000 default):*
   ```bash
   cd server
   npm run dev
   ```
   *Start the frontend client (runs on port 5173 default):*
   ```bash
   cd ../client
   npm run dev
   ```

5. **Open in Browser**
   Navigate to `http://localhost:5173` to explore CineQuery!

---

*Designed and developed for portfolio showcase.*