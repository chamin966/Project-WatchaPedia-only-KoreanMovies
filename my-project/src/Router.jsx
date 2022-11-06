import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Detail from 'pages/Detail/Detail';
import Home from 'pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Detail' element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
