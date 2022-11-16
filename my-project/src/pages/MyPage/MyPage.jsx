import { useLocation, useNavigate } from 'react-router-dom';
import './MyPage.css';

function MyPage() {
  const userObj = JSON.parse(useLocation().state);
  const navigate = useNavigate();
  console.log(userObj);

  const onClickScoreCollection = () => {
    if (userObj !== null) {
      //그냥 userObj를 넘기면 이유모를 새로고침이 됨..
      navigate('/ScoreCollection', { state: JSON.stringify(userObj) });
    }
  };

  const onClickCommentCollection = () => {
    if (userObj !== null) {
      //그냥 userObj를 넘기면 이유모를 새로고침이 됨..
      navigate('/CommentCollection', { state: JSON.stringify(userObj) });
    }
  };

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
            <button className='collection__score' onClick={onClickScoreCollection}>
              평가 모아보기
            </button>
          </li>
          <li>
            <button className='collection__comment' onClick={onClickCommentCollection}>
              코멘트 모아보기
            </button>
          </li>
        </ul>
      </ul>
    </main>
  );
}

export default MyPage;
