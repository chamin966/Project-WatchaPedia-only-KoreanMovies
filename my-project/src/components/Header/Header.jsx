import ModalBasic from 'components/Modal/ModalBasic';
import SearchBar from 'components/SearchBar/SearchBar';
import { authService } from 'fbase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    //로그인 상태에 변화가 생겼다면
    onAuthStateChanged(authService, (user) => {
      if (user) {
        //여기서 user에 유저 정보가 담기고 user.uid로 유저를 특정할 수가 있음
        setIsLoggedIn(true);
        setUserObj(user);
      }
    });
  }, [userObj]);

  const onClickLogout = async () => {
    try {
      await signOut(authService);
      setIsLoggedIn(false);
      setUserObj(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  const showModal = () => {
    setModalOpen(true);
  };

  const onClickLogo = (e) => {
    navigate('/');
  };

  const onClickMyPage = (e) => {
    if (userObj !== null) {
      //그냥 userObj를 넘기면 이유모를 새로고침이 됨..
      navigate('/MyPage', { state: JSON.stringify(userObj) });
    }
  };

  // 로그인 유무 확인용 log
  console.log(isLoggedIn, userObj);

  return (
    <div>
      <header className='header'>
        <div className='header__left'>
          <img
            className='header__logo'
            src='/images/samples/watchapediaLogo.png'
            alt='왓챠피디아 로고'
            height={'30px'}
            width={'150px'}
            onClick={onClickLogo}
          />
          <span className='header__title gray-word-s'>영화</span>
        </div>
        <div className='header__right'>
          <SearchBar />
          {isLoggedIn === false ? (
            <>
              <button className='btn--none btn gray-word-s' onClick={showModal}>
                로그인
              </button>
              <button className='btn--border btn'>회원가입</button>
            </>
          ) : (
            <>
              <button type='button' className='btn--border btn' onClick={onClickMyPage}>
                나의 왓챠
              </button>
              <button className='btn--none btn gray-word-s' onClick={onClickLogout}>
                로그아웃
              </button>
            </>
          )}
        </div>
      </header>
      {modalOpen === true ? <ModalBasic setModalOpen={setModalOpen} /> : null}
    </div>
  );
}

export default Header;
