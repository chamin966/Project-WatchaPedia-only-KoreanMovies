import Comment from 'components/Comment/Comment';
import StarRange from 'components/StarRange/StarRange';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Detail.css';

function Detail() {
  const m = useLocation().state;
  const [score, setScore] = useState(0);

  console.log(m);

  return (
    <main className='detail'>
      <ul className='detail__still-img'>
        <li>
          <img src={m.stilUrls[0]} alt='스틸이미지' height={'400px'} width={'900px'} />
        </li>
      </ul>
      <ul className='detail__main-info'>
        <li className='detail__poster-img-border'>
          <img className='detail__poster-img' src={m.posterUrls[0]} alt='포스터이미지' height={'230px'} width={'165px'} />
        </li>
        <ul className='detail__text-info'>
          <li className='title'>{m.title}</li>
          <li>
            {m.prodYear} ・ {m.genre} ・ {m.nation}
          </li>
          <li>평균 ★3.4 (8만명)</li>
          <ul className='detail__star-icon '>
            <li className='detail__stars'>
              <StarRange score={score} setScore={setScore} />
            </li>
          </ul>
        </ul>
      </ul>
      <ul className='detail__detail-info__comment'>
        <ul>
          <ul className='detail__comment'>{score > 0 ? <Comment /> : null}</ul>
          <ul className='detail__detail-text-info'>
            <ul className='detail__detail-text-info__basic'>
              <li className='sub-title'>기본정보</li>
              <li>{m.title}</li>
              <li>
                {m.prodYear} ・ {m.nation} ・ {m.genre}
              </li>
              <li>
                {m.runtime}분 · {m.rating}
              </li>
              <li>
                <p>{m.plot}</p>
              </li>
            </ul>
            <ul className='detail__detail-text-info__staff border-line'>
              <li className='sub-title'>출연/제작</li>
              <li>존 크래진스키</li>
              <li className='role'>감독</li>
            </ul>
            <ul className='detail__detail-text-info__star-graph border-line'>
              <li className='sub-title'>별점 그래프</li>
              <ul className='star-average'>
                <li>평균 ★3.4</li>
                <li>(8만명)</li>
              </ul>
            </ul>
            <ul className='detail__detail-text-info__comment border-line'>
              <li className='sub-title'>코멘트</li>
              <ul className='detail-text-info__comment'>
                <ul className='comment__upper'>
                  <ul className='comment__upper-name'>
                    <li>
                      <img
                        className='profile-img'
                        src='\images\samples\profileSample.jpg'
                        alt='프로필이미지'
                        height={'30px'}
                        width={'30px'}
                      />
                    </li>
                    <li className='nick'>닉네임</li>
                  </ul>
                  <li className='comment__upper-star'>★3.5</li>
                </ul>
                <li className='comment__text'>
                  <p>
                    Occaecat duis amet nulla veniam fugiat do excepteur veniam quis do deserunt pariatur enim elit. Velit in duis
                    quis incididunt. Ad culpa cupidatat amet minim in mollit fugiat cillum minim adipisicing minim anim laboris
                    deserunt.
                  </p>
                </li>
              </ul>
            </ul>
          </ul>
        </ul>
        <aside className='detail__gallery-vedio'>
          <ul>
            <li className='sub-title'>갤러리</li>
            <li className='detail__gallery'>
              <img src='/images/samples/stillSample.jpg' alt='스틸이미지' height={'88px'} width={'133px'} />
            </li>
          </ul>
          <ul className='detail__vedio'>
            <li className='sub-title border-line'>동영상</li>
            <a target='_blank' href='https://youtu.be/ry9Ymf4S94M'>
              <img src='/images/samples/teaserSample.jpg' alt='예고편 썸네일' height={'88px'} width={'133px'} />
              <li>1차 예고편</li>
            </a>
          </ul>
        </aside>
      </ul>
    </main>
  );
}

export default Detail;
