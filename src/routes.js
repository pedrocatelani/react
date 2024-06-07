import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Teste from './pages/Teste';
import Watch from './pages/Watch';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import VideoRegister from './pages/VideoRegister';
import FavoritesProvider from './contexts/favorites';

function AppRoutes() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/watch/:id" element={<Watch />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/register" element={<VideoRegister />}></Route>
          <Route path="/teste" element={<Teste />}></Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
