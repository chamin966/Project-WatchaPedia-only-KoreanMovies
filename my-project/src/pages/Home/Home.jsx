import { useRef, useState } from 'react';
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
            <ul className='home__lanked-movies'>
              <li className='lanked-movies__numbering'>1</li>
              <li className='home__lanked-movies__border'>
                <img
                  className='home__lanked-movies__poster'
                  src='images/samples/boxOfficePoster.jpg'
                  alt=''
                  height={'288px'}
                  width={'198px'}
                />
              </li>
              <ul>
                <li>더 랍스터</li>
                <li>2015・아일랜드/영국/그리스</li>
                <li className='gray-word-s'>예매율 25%</li>
              </ul>
            </ul>
            <ul className='home__lanked-movies'>
              <li className='lanked-movies__numbering'>2</li>
              <li className='home__lanked-movies__border'>
                <img
                  className='home__lanked-movies__poster'
                  src='images/samples/boxOfficePoster.jpg'
                  alt=''
                  height={'288px'}
                  width={'198px'}
                />
              </li>
              <ul>
                <li>더 랍스터</li>
                <li>2015・아일랜드/영국/그리스</li>
                <li className='gray-word-s'>예매율 25%</li>
              </ul>
            </ul>
            <ul className='home__lanked-movies'>
              <li className='lanked-movies__numbering'>3</li>
              <li className='home__lanked-movies__border'>
                <img
                  className='home__lanked-movies__poster'
                  src='images/samples/boxOfficePoster.jpg'
                  alt=''
                  height={'288px'}
                  width={'198px'}
                />
              </li>
              <ul>
                <li>더 랍스터</li>
                <li>2015・아일랜드/영국/그리스</li>
                <li className='gray-word-s'>예매율 25%</li>
              </ul>
            </ul>
            <ul className='home__lanked-movies'>
              <li className='lanked-movies__numbering'>4</li>
              <li className='home__lanked-movies__border'>
                <img
                  className='home__lanked-movies__poster'
                  src='images/samples/boxOfficePoster.jpg'
                  alt=''
                  height={'288px'}
                  width={'198px'}
                />
              </li>
              <ul>
                <li>더 랍스터</li>
                <li>2015・아일랜드/영국/그리스</li>
                <li className='gray-word-s'>예매율 25%</li>
              </ul>
            </ul>
            <ul className='home__lanked-movies'>
              <li className='lanked-movies__numbering'>5</li>
              <li className='home__lanked-movies__border'>
                <img
                  className='home__lanked-movies__poster'
                  src='images/samples/boxOfficePoster.jpg'
                  alt=''
                  height={'288px'}
                  width={'198px'}
                />
              </li>
              <ul>
                <li>더 랍스터</li>
                <li>2015・아일랜드/영국/그리스</li>
                <li className='gray-word-s'>예매율 25%</li>
              </ul>
            </ul>
            <ul className='home__lanked-movies'>
              <li className='lanked-movies__numbering'>6</li>
              <li className='home__lanked-movies__border'>
                <img
                  className='home__lanked-movies__poster'
                  src='images/samples/boxOfficePoster.jpg'
                  alt=''
                  height={'288px'}
                  width={'198px'}
                />
              </li>
              <ul>
                <li>더 랍스터</li>
                <li>2015・아일랜드/영국/그리스</li>
                <li className='gray-word-s'>예매율 25%</li>
              </ul>
            </ul>
            <ul className='home__lanked-movies'>
              <li className='lanked-movies__numbering'>7</li>
              <li className='home__lanked-movies__border'>
                <img
                  className='home__lanked-movies__poster'
                  src='images/samples/boxOfficePoster.jpg'
                  alt=''
                  height={'288px'}
                  width={'198px'}
                />
              </li>
              <ul>
                <li>더 랍스터</li>
                <li>2015・아일랜드/영국/그리스</li>
                <li className='gray-word-s'>예매율 25%</li>
              </ul>
            </ul>
            <ul className='home__lanked-movies'>
              <li className='lanked-movies__numbering'>8</li>
              <li className='home__lanked-movies__border'>
                <img
                  className='home__lanked-movies__poster'
                  src='images/samples/boxOfficePoster.jpg'
                  alt=''
                  height={'288px'}
                  width={'198px'}
                />
              </li>
              <ul>
                <li>더 랍스터</li>
                <li>2015・아일랜드/영국/그리스</li>
                <li className='gray-word-s'>예매율 25%</li>
              </ul>
            </ul>
            <ul className='home__lanked-movies'>
              <li className='lanked-movies__numbering'>9</li>
              <li className='home__lanked-movies__border'>
                <img
                  className='home__lanked-movies__poster'
                  src='images/samples/boxOfficePoster.jpg'
                  alt=''
                  height={'288px'}
                  width={'198px'}
                />
              </li>
              <ul>
                <li>더 랍스터</li>
                <li>2015・아일랜드/영국/그리스</li>
                <li className='gray-word-s'>예매율 25%</li>
              </ul>
            </ul>
            <ul className='home__lanked-movies'>
              <li className='lanked-movies__numbering'>10</li>
              <li className='home__lanked-movies__border'>
                <img
                  className='home__lanked-movies__poster'
                  src='images/samples/boxOfficePoster.jpg'
                  alt=''
                  height={'288px'}
                  width={'198px'}
                />
              </li>
              <ul>
                <li>더 랍스터</li>
                <li>2015・아일랜드/영국/그리스</li>
                <li className='gray-word-s'>예매율 25%</li>
              </ul>
            </ul>
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
