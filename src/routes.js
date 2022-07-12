import Menu from 'components/Menu';
import DefaultPage from 'components/DefaultPage';
import MenuCard from 'pages/MenuCard';
import Welcome from 'pages/Welcome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from 'pages/About';

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
        </Routes>
      </Router>
    </main>
  );
}