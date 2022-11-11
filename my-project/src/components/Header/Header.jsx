import { async } from '@firebase/util';
import ModalBasic from 'components/Modal/ModalBasic';
import { authService } from 'fbase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserobj] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    //로그인 상태에 변화가 생겼다면
    onAuthStateChanged(authService, (user) => {
      if (user) {
        //여기서 user에 유저 정보가 담기고 user.uid로 유저를 특정할 수가 있음
        setIsLoggedIn(true);
        setUserobj(user);
      }
    });
  }, [userObj]);

  const onClickLogout = async () => {
    try {
      await signOut(authService);
      setIsLoggedIn(false);
      setUserobj(null);
    } catch (error) {
      console.log(error.message);
      // setError(error.message);
    }
  };

  // 로그인 유무 확인용 log
  console.log(isLoggedIn, userObj);

  const showModal = () => {
    setModalOpen(true);
  };

  const onClickLogo = (e) => {
    navigate('/');
  };
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
          <button className='header__title btn--none btn gray-word-s'>영화</button>
        </div>
        <div className='header__right'>
          <form action='get'>
            <input className='header__search-bar' type='text' placeholder='영화를 검색해보세요.' />
          </form>
          {isLoggedIn === false ? (
            <>
              <button className='btn--none btn gray-word-s' onClick={showModal}>
                로그인
              </button>
              <button className='btn--border btn'>회원가입</button>
            </>
          ) : (
            <>
              <button className='btn--border btn'>내 정보</button>
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
