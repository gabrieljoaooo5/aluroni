import Menu from 'components/Menu';
import DefaultPage from 'components/DefaultPage';
import MenuCard from 'pages/MenuCard';
import Welcome from 'pages/Welcome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from 'pages/About';
import NotFound from 'pages/NotFound';
import Footer from 'components/Footer';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<DefaultPage />} >
            <Route index element={<Welcome />} />
            <Route path='menu' element={<MenuCard />} />
            <Route path='about' element={<About />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}