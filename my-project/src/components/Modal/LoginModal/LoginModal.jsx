import './LoginModal.css';

function LoginModal() {
  return (
    <div className='loginModal'>
      <ul className='loginModal__login'>
        <li className='loginModal__logo'>
          <img src='/images/samples/watchapediaLogo.png' alt='왓챠피디아 로고' height={'30px'} width={'150px'} />
        </li>
        <li className='loginModal__title gray-word-m'>로그인</li>
        <li>
          <form className='loginModal__login-form' action='post'>
            <input type='text' placeholder='아이디' />
            <input type='password' placeholder='비밀번호' />
            <button>로그인</button>
          </form>
        </li>
        <li className='loginModal__none-account gray-word-m'>
          계정이 없으신가요? <button>회원가입</button>
        </li>
        <li className='loginModal__line gray-word-m'>
          <li></li>
          <span>OR</span>
          <li></li>
        </li>
        <li className='loginModal__social-login'>
          <img src='/images/icons/googleSocialLogo.png' alt='구글 소셜 로그인' height={'50px'} width={'50px'} />
        </li>
      </ul>
    </div>
  );
}

export default LoginModal;
