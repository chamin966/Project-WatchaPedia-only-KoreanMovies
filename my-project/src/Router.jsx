import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Detail from 'pages/Detail/Detail';
import Home from 'pages/Home/Home';
import MyPage from 'pages/MyPage/MyPage';
import SearchResult from 'pages/SearchResult/SearchResult';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Detail/:movieCd' element={<Detail />} />
        <Route path='/SearchResult/:text' element={<SearchResult />} />
        <Route path='/MyPage' element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
