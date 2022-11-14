import Comment from 'components/Comment/Comment';
import Staffs from 'components/Staffs/Staffs';
import StarRange from 'components/StarRange/StarRange';
import { authService, dbService } from 'fbase';
import { deleteDoc, doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Detail.css';

function Detail() {
  const m = useLocation().state;
  const [userObj, setUserObj] = useState(null);
  const [dbObj, setDbObj] = useState({});
  const [score, setScore] = useState(0);
  const [isEstimated, setIsEstimated] = useState(false);
  const [commentText, setCommentText] = useState('');

  //로그인 된 유저 판별
  useEffect(() => {
    const getCurrentUser = () => {
      const user = authService.currentUser;

      if (user) {
        const userObjTemp = {
          accessToken: user.accessToken,
          displayName: user.displayName,
          profilePhotoUrl: user.photoURL,
          uid: user.uid,
        };
        console.log('userObj', userObjTemp);
        setUserObj(userObjTemp);
      } else console.log('로그인 안됨');
    };

    getCurrentUser();
  }, [m]);

  //별점에 따른 유저 정보 저장
  useEffect(() => {
    if (userObj !== null) {
      let dbObj = {
        displayName: userObj.displayName,
        profilePhotoUrl: userObj.profilePhotoUrl,
        createdAt: serverTimestamp(),
        creatorId: userObj.uid,
        ratedStar: score,
        comment: commentText,
        title: m.title,
        prodYear: m.prodYear,
        posterUrl: m.posterUrls[0],
        movieSeq: m.movieSeq,
      };
      setDbObj(dbObj);
    } else console.log('로그인 되지 않았습니다.');
  }, [userObj, score, commentText, m]);

  const onClickScore = async (e) => {
    if (userObj === null) {
      window.alert('로그인 후 이용가능합니다.');
      setScore(0);
    } else if (isEstimated === false && score > 0) {
      setIsEstimated(true);
      await setDoc(doc(dbService, 'estimatedInfo', `MOVIE${m.movieSeq}|USERUID${userObj.uid}`), dbObj);
    } else if (isEstimated === true && score > 0) {
      await updateDoc(doc(dbService, 'estimatedInfo', `MOVIE${m.movieSeq}|USERUID${userObj.uid}`), dbObj);
    } else if (isEstimated === true && score === 0) {
      await deleteDoc(doc(dbService, 'estimatedInfo', `MOVIE${m.movieSeq}|USERUID${userObj.uid}`));
      setIsEstimated(false);
    }
  };

  const onClickCommentSave = async (e) => {
    if (userObj !== null) {
      await updateDoc(doc(dbService, 'estimatedInfo', `MOVIE${m.movieSeq}|USERUID${userObj.uid}`), dbObj);
      window.alert('코멘트가 저장되었습니다.');
    }
  };

  const onClickCommentDelete = async (e) => {
    if (userObj !== null) {
      setCommentText('');
      setDbObj((dbObj.comment = ''));
      await updateDoc(doc(dbService, 'estimatedInfo', `MOVIE${m.movieSeq}|USERUID${userObj.uid}`), dbObj);
      window.alert('코멘트가 삭제되었습니다.');
    }
  };

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
              <StarRange score={score} setScore={setScore} onClickScore={onClickScore} />
            </li>
          </ul>
        </ul>
      </ul>
      <ul className='detail__detail-info__comment'>
        <ul>
          <ul className='detail__comment'>
            {score > 0 && userObj !== null ? (
              <Comment
                commentText={commentText}
                setCommentText={setCommentText}
                onClickCommentSave={onClickCommentSave}
                onClickCommentDelete={onClickCommentDelete}
              />
            ) : null}
          </ul>
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
            <ul className='detail__detail-text-info__staffs border-line'>
              <li className='sub-title'>출연/제작</li>
              <Staffs staffs={m.actorAndProd} />
            </ul>
            <ul className='detail__detail-text-info__star-graph border-line'>
              <ul className='star-graph__text'>
                <li className='sub-title'>별점 그래프</li>
                <ul className='star-average'>
                  <li>평균 ★3.4</li>
                  <li>(8만명)</li>
                </ul>
              </ul>
              <li className='star-graph__graph'>
                <img
                  src='/images/samples/starsGraph.png
                '
                  alt='별점 그래프'
                />
              </li>
            </ul>
            <ul className='detail__detail-text-info__comment border-line'>
              <li className='sub-title'>코멘트</li>
              <ul className='detail-text-info__comment'>
                <ul className='comment__upper'>
                  <ul className='comment__upper-name'>
                    <li>
                      <img
                        className='profile-img'
                        src='\images\samples\profileSample.png'
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
            <ul className='detail__gallery'>
              <li>
                <img src={m.stilUrls[0]} alt='스틸이미지' height={'88px'} width={'133px'} />
              </li>
              <li>
                <img src={m.stilUrls[1]} alt='스틸이미지' height={'88px'} width={'133px'} />
              </li>
            </ul>
          </ul>
          <ul className='detail__vedio'>
            <li className='sub-title border-line'>동영상</li>
            <a target='_blank' rel='noreferrer' href={m.vod[0].vodUrl}>
              <img src={m.stilUrls[0]} alt='예고편 썸네일' height={'88px'} width={'133px'} />
              <li>관련 영상 모음</li>
            </a>
          </ul>
        </aside>
      </ul>
    </main>
  );
}

export default Detail;
