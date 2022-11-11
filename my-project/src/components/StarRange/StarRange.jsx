import './StarRange.css';

function StarRange({ score, setScore }) {
  const onChangeScore = (e) => {
    let v = e.target.value;
    setScore(v);
  };

  return (
    <form className='StarRange' action='post'>
      <label htmlFor=''>별점 매기기 {score}점</label>
      <input type='range' step={0.5} value={score} min={0} max={5} onChange={onChangeScore} />
    </form>
  );
}

export default StarRange;
