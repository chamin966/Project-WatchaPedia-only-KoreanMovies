import './Comment.css';

function Comment({ commentText, setCommentText, onClickCommentSave, onClickCommentDelete }) {
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
          <button onClick={onClickCommentSave}>저장</button>
        </li>
        <li>|</li>
        <li>
          <button onClick={onClickCommentDelete}>삭제</button>
        </li>
      </ul>
    </section>
  );
}

export default Comment;
