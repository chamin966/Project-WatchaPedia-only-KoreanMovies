import './StarRange.css';

function StarRange({ score, setScore, onClickScore }) {
  const onChangeScore = (e) => {
    e.preventDefault();
    let v = e.target.value;
    setScore(Number(v));
  };

  return (
    <form className='StarRange' action='post'>
      <label htmlFor=''>별점 매기기 {score}점</label>
      <input type='range' step={0.5} value={score} min={0} max={5} onChange={onChangeScore} onClick={onClickScore} />
    </form>
  );
}

export default StarRange;
