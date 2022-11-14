import { useLocation } from 'react-router-dom';
import './MyPage.css';

function MyPage() {
  const userObj = JSON.parse(useLocation().state);
  console.log(userObj);

  return (
    <main className='MyPage'>
      <ul className='MyPage__my-info'>
        <ul>
          <li>
            <img src={userObj.photoURL} alt='프로필 사진' />
          </li>
          <li>{userObj.displayName}</li>
        </ul>
        <ul className='MyPage__collection'>
          <li>
            <button className='collection__score'>평가 모아보기</button>
          </li>
          <li>
            <button className='collection__comment'>코멘트 모아보기</button>
          </li>
        </ul>
      </ul>
    </main>
  );
}

export default MyPage;
