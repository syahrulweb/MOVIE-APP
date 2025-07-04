import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios'; // Pastikan axios terinstal: npm install axios
import MoviesContext from './context/ContextMovie'; // Path ke ContextMovie Anda
import Home from './page/Home'; // Path ke halaman Home Anda
import TopRatedMovie from './page/TopRated'; // Path ke halaman TopRated Anda (sesuai nama file TopRated.jsx)
import CreateMovie from './page/Create'; // Path ke halaman Create Anda
import NowPlayingMovie from './page/NowPlaying'; // Path ke halaman NowPlaying Anda
import PopularMovie from './page/Popular'; // Path ke halaman Popular Anda
import DetailMovie from './page/Detail'; // Path ke halaman Detail Anda
import Layout from './Layout/Index'; // Path ke komponen Layout Anda
import { ThemeProvider } from 'styled-components'; // Jika menggunakan styled-components
import Theme from './utils/constants/theme'; // Path ke tema Anda
import GlobalStyle from './components/UI/GlobalStyle/Index'; // Path ke GlobalStyle Anda

function App() {
  // State untuk menyimpan data film yang akan disediakan ke context
  const [movies, setMovies] = useState([]);

  // useEffect untuk melakukan panggilan API saat komponen pertama kali di-mount
  useEffect(() => {
    async function fetchInitialMovies() {
      const API_KEY = import.meta.env.VITE_API_KEY; // Mengambil API Key dari environment variables
      const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`; // URL TMDB untuk film populer

      try {
        const response = await axios.get(URL);
        // Memastikan Anda mendapatkan array 'results' dari respons TMDB
        if (response.data && response.data.results) {
          setMovies(response.data.results);
        } else {
          console.warn("API response does not contain 'results' array for popular movies:", response.data);
          setMovies([]); // Set ke array kosong jika data tidak sesuai
        }
      } catch (error) {
        console.error("Error fetching initial popular movies:", error);
        setMovies([]); // Set ke array kosong jika ada error saat fetch
      }
    }

    fetchInitialMovies();
  }, []); // Dependency array kosong agar useEffect hanya dijalankan sekali saat mount

  // Nilai yang akan disediakan ke MoviesContext
  const contextValue = { movies, setMovies };

  return (
    <ThemeProvider theme={Theme}>
      <MoviesContext.Provider value={contextValue}>
        <GlobalStyle />
        <Router> {/* BrowserRouter membungkus Routes */}
          <Layout> {/* Komponen Layout Anda */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/create" element={<CreateMovie />} />
              <Route path="/movie/popular" element={<PopularMovie />} />
              <Route path="/movie/now" element={<NowPlayingMovie />} />
              <Route path="/movie/top" element={<TopRatedMovie />} />
              <Route path="/movie/:id" element={<DetailMovie />} />
              {/* Tambahkan rute lain jika ada */}
            </Routes>
          </Layout>
        </Router>
      </MoviesContext.Provider>
    </ThemeProvider>
  );
}

export default App;
