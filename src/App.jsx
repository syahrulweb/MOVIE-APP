// App.jsx
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./page/Home";
import CreateMovie from "./page/Create";
import PopularMovie from "./page/Popular";
import NowPlayingMovie from "./page/NowPlaying";
import TopRatedMovie from "./page/TopRated";
import Layout from "./Layout/Index";
import Counter from "./components/Conter/Conter.jsx";
import { ThemeProvider } from "styled-components";
import Theme from "./utils/constants/theme";
import GlobalStyle from "./components/UI/GlobalStyle/Index.jsx";
import DetailMovie from "./page/Detail.jsx";
import data from "./utils/constants/data";  
import MoviesContext from "@context/ContextMovie"; 

function App() {
  const [movies, setMovies] = useState(data);  
  const contextValue = { movies, setMovies };

  return (
    <ThemeProvider theme={Theme}>
      <MoviesContext.Provider value={contextValue}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/create" element={<CreateMovie />} />
            <Route path="/movie/popular" element={<PopularMovie />} />
            <Route path="/movie/now" element={<NowPlayingMovie />} />
            <Route path="/movie/top" element={<TopRatedMovie />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/movie/:id" element={<DetailMovie />} />
          </Routes>
        </Layout>
      </MoviesContext.Provider>
    </ThemeProvider>
  );
}

export default App;
