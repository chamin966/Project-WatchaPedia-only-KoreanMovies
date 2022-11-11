import { useState } from 'react';
import './Comment.css';

function Comment() {
  const [commentText, setCommentText] = useState('');

  const onChangeComment = (e) => {
    let v = e.target.value;
    setCommentText(v);
  };
  return (
    <section className='Comment'>
      <textarea
        className='Comment__text-area'
        type='text'
        maxLength={100}
        placeholder='이 작품에 대한 생각을 자유롭게 표현해주세요. (100자 이내)'
        value={commentText}
        onChange={onChangeComment}
      />
      <ul className='gray-word-s'>
        <li>
          <button>저장</button>
        </li>
        <li>|</li>
        <li>
          <button>삭제</button>
        </li>
      </ul>
    </section>
  );
}

export default Comment;
