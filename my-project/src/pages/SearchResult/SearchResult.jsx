import React from 'react';
import './SearchResult.css';

function SearchResult() {
  return (
    <div className='search-result'>
      <div className='search-result__title'>"콰이어트 플레이스"의 검색결과</div>
      <main className='search-result__contents'>
        <div className='search-result__contents-title'>영화</div>
        <ul className='search-result__moives-frame'>
          <ul className='search-result__movie'>
            <li>
              <img src='/images/samples/posterSample.jpg' alt='영화포스터' height={'100px'} width={'70px'} />
            </li>
            <ul className='search-result__text'>
              <li>콰이어트 플레이스</li>
              <li className='gray-word'>2020 ・ 미국</li>
            </ul>
          </ul>
          <ul className='search-result__movie'>
            <li>
              <img src='/images/samples/posterSample.jpg' alt='영화포스터' height={'100px'} width={'70px'} />
            </li>
            <ul className='search-result__text'>
              <li>콰이어트 플레이스</li>
              <li className='gray-word'>2020 ・ 미국</li>
            </ul>
          </ul>
          <ul className='search-result__movie'>
            <li>
              <img src='/images/samples/posterSample.jpg' alt='영화포스터' height={'100px'} width={'70px'} />
            </li>
            <ul className='search-result__text'>
              <li>콰이어트 플레이스</li>
              <li className='gray-word'>2020 ・ 미국</li>
            </ul>
          </ul>
          <ul className='search-result__movie'>
            <li>
              <img src='/images/samples/posterSample.jpg' alt='영화포스터' height={'100px'} width={'70px'} />
            </li>
            <ul className='search-result__text'>
              <li>콰이어트 플레이스</li>
              <li className='gray-word'>2020 ・ 미국</li>
            </ul>
          </ul>
          <ul className='search-result__movie'>
            <li>
              <img src='/images/samples/posterSample.jpg' alt='영화포스터' height={'100px'} width={'70px'} />
            </li>
            <ul className='search-result__text'>
              <li>콰이어트 플레이스</li>
              <li className='gray-word'>2020 ・ 미국</li>
            </ul>
          </ul>
          <ul className='search-result__movie'>
            <li>
              <img src='/images/samples/posterSample.jpg' alt='영화포스터' height={'100px'} width={'70px'} />
            </li>
            <ul className='search-result__text'>
              <li>콰이어트 플레이스</li>
              <li className='gray-word'>2020 ・ 미국</li>
            </ul>
          </ul>
          <ul className='search-result__movie'>
            <li>
              <img src='/images/samples/posterSample.jpg' alt='영화포스터' height={'100px'} width={'70px'} />
            </li>
            <ul className='search-result__text'>
              <li>콰이어트 플레이스</li>
              <li className='gray-word'>2020 ・ 미국</li>
            </ul>
          </ul>
        </ul>
      </main>
    </div>
  );
}

export default SearchResult;
