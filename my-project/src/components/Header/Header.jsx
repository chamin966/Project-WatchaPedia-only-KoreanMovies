import './Header.css';

function Header() {
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
          />
          <button className='header__title btn--none btn gray-word'>영화</button>
        </div>
        <div className='header__right'>
          <form action='get'>
            <input className='header__search-bar' type='text' placeholder='영화를 검색해보세요.' />
          </form>
          <button className='header__btn--login btn--none btn gray-word'>로그인</button>
          <button className='header__btn--signup btn'>회원가입</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
