import React from 'react';
import './Detail.css';

function Detail() {
  return (
    <main className='detail'>
      <ul className='detail__still-img'>
        <li>
          <img src='/images/samples/stillSample.jpg' alt='스틸이미지' height={'400px'} width={'900px'} />
        </li>
      </ul>
      <ul className='detail__main-info'>
        <li className='detail__poster-img-border'>
          <img
            className='detail__poster-img'
            src='/images/samples/posterSample.jpg'
            alt='포스터이미지'
            height={'230px'}
            width={'165px'}
          />
        </li>
        <ul className='detail__text-info'>
          <li className='title'>콰이어트 플레이스</li>
          <li>2018 ・ 공포/SF/스릴러 ・ 미국</li>
          <li>평균 ★3.4 (8만명)</li>
          <ul className='detail__star-icon '>
            <li className='detail__stars'>별점 매기기</li>
            <ul className='detail__icons'>
              <li className='detail__icon1'>코멘트</li>
            </ul>
          </ul>
        </ul>
      </ul>
      <ul className='detail__detail-info'>
        <ul className='detail__detail-text-info'>
          <ul className='detail__detail-text-info__basic'>
            <li className='sub-title'>기본정보</li>
            <li>A Quiet Place</li>
            <li>2018 · 미국 · 공포</li>
            <li>1시간 30분 · 15세</li>
            <li>
              <p>
                “소리내면 죽는다!” 소리를 내는 순간 공격받는 극한의 상황 속에서 살아남기 위한 한 가족의 숨막히는 사투를 그린
                이야기 생존 법칙 1. 어떤 소리도 내지 말 것 2. 아무 말도 하지 말 것 3. 붉은 등이 켜지면 무조건 도망갈 것
              </p>
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
