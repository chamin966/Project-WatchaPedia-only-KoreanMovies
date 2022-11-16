import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import CommentCollection from 'pages/CommentCollection/CommentCollection';
import Detail from 'pages/Detail/Detail';
import Home from 'pages/Home/Home';
import MyPage from 'pages/MyPage/MyPage';
import ScoreCollection from 'pages/ScoreCollection/ScoreCollection.';
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
        <Route path='/CommentCollection' element={<CommentCollection />} />
        <Route path='/ScoreCollection' element={<ScoreCollection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
