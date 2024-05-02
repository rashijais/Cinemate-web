import { Routes,Route } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";
import PageNotFound from "../pages/PageNotFound";
import Search from "../pages/Search";
import MovieList from "../pages/MovieList";


const Allroutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<MovieList/>}/>
            <Route path="movie/:id" element={<MovieDetail/>}/>
            <Route path="movies/popular" element={<MovieList/>}/>
            <Route path="movies/top" element={<MovieList/>}/>
            <Route path="movies/upcoming" element={<MovieList/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      
    </>
  )
}

export default Allroutes;
