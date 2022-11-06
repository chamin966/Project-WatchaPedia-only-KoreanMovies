import React from 'react';
import 'css/common.css';
import './Detail.css';

function Detail() {
  return (
    <div className='container'>
      <div className='detail-still-img-box'>
        <img src='/images/samples/stillSample.jpg' alt='스틸이미지' height={'270px'} width={'500px'} />
      </div>
      <div className='detail-basic-info-box'>
        <div className='detail-poster-img'>
          <img src='/images/samples/posterSample.jpg' alt='포스터이미지' height={'230px'} width={'165px'} />
        </div>
        <div className='detail-text-info-box'>
          <div className='title'>콰이어트 플레이스</div>
          <div>2018 ・ 공포/SF/스릴러 ・ 미국</div>
          <hr color={'#f7f7f7'} />
          <div>평균 ★3.4 (8만명)</div>
          <hr color={'#f7f7f7'} />
          <div className='detail-star-icon-box'>
            <div className='detail-stars-box'>별점 매기기</div>
            <div className='detail-icons-box'>
              <div className='detail-icon1'>코멘트</div>
            </div>
          </div>
        </div>
      </div>
      <div className='detail-detail-info-container'>
        <div className='detail-detail-info-box'>
          <div className='detail-detail-info'>
            <div className='sub-title'>기본정보</div>
            <div>A Quiet Place</div>
            <div>2018 · 미국 · 공포</div>
            <div>1시간 30분 · 15세</div>
            <p>
              “소리내면 죽는다!” 소리를 내는 순간 공격받는 극한의 상황 속에서 살아남기 위한 한 가족의 숨막히는 사투를 그린 이야기
              생존 법칙 1. 어떤 소리도 내지 말 것 2. 아무 말도 하지 말 것 3. 붉은 등이 켜지면 무조건 도망갈 것
            </p>
            <hr />
            <div className='sub-title'>출연/제작</div>
            <div className='detail-detail-info-staff-box'>
              <div>존 크래진스키</div>
              <div className='role'>감독</div>
            </div>
            <hr />
            <div className='detail-detail-info-star-graph-box'>
              <div className='sub-title'>별점 그래프</div>
              <div className='star-average'>
                <div>평균 ★3.4</div>
                <div>(8만명)</div>
              </div>
            </div>
            <hr />
            <div className='sub-title'>코멘트</div>
            <div className='detail-detail-info-coment-box'>
              <div className='coment-box-upper-box'>
                <div className='coment-box-upper-name'>
                  <img
                    className='profile-img'
                    src='\images\samples\profileSample.jpg'
                    alt='프로필이미지'
                    height={'30px'}
                    width={'30px'}
                  />
                  <div className='nick'>닉네임</div>
                </div>
                <div className='coment-box-upper-star'>★3.5</div>
              </div>
              <hr />
              <div className='coment-box-coment'>
                Occaecat duis amet nulla veniam fugiat do excepteur veniam quis do deserunt pariatur enim elit. Velit in duis quis
                incididunt. Ad culpa cupidatat amet minim in mollit fugiat cillum minim adipisicing minim anim laboris deserunt.
              </div>
            </div>
          </div>
        </div>
        <div className='detail-gallery-vedio-box'>
          <h3>갤러리</h3>
          <div className='detail-gallery'>
            <img src='/images/samples/stillSample.jpg' alt='스틸이미지' height={'88px'} width={'133px'} />
          </div>
          <hr />
          <h3>동영상</h3>
          <div className='detail-vedio'>
            <a target='_blank' href='https://youtu.be/ry9Ymf4S94M'>
              <img src='/images/samples/teaserSample.jpg' alt='예고편 썸네일' height={'88px'} width={'133px'} />
              <div>1차 예고편</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
