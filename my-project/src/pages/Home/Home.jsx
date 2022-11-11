import MovieRank from 'components/MovieRank/MovieRank';
import { useState } from 'react';
import './Home.css';

function Home() {
  const [move, setMove] = useState(0);

  const leftClick = () => {
    setMove(0);
  };
  const rightClick = () => {
    setMove(-1125);
  };

  return (
    <main className='home'>
      <h2>박스오피스 순위</h2>
      <div className='home__lanking'>
        <div className='home__left-stick'>
          {move === 0 ? (
            <></>
          ) : (
            <div className='home__left-chevron' onClick={leftClick}>
              <img src='/images/icons/left-chevron.png' alt='앞프로' height={'30px'} width={'30px'} />
            </div>
          )}
        </div>
        <div className='home__lanking__container'>
          <ul className='home__lanking_contents' style={{ transform: `translate(${move}px)` }}>
            <MovieRank />
          </ul>
        </div>
        {move === -1125 ? (
          <></>
        ) : (
          <div className='home__right-stick'>
            <div className='home__right-chevron' onClick={rightClick}>
              <img src='/images/icons/right-chevron.png' alt='앞프로' height={'30px'} width={'30px'} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;
