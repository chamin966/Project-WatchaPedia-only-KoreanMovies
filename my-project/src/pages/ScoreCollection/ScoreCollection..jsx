import { dbService } from 'fbase';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ScoreCollection.css';

function ScoreCollection() {
  const [myScores, setMyScores] = useState([]);
  const userInfo = JSON.parse(useLocation().state);

  useEffect(() => {
    //원하는 정렬이 있을 경우에는 파이어베이스에서 색인 추가 반드시 필요!
    if (userInfo !== null) {
      const q = query(
        collection(dbService, 'estimatedInfo'),
        where('creatorId', '==', userInfo.uid),
        orderBy('createdAt', 'desc')
      );
      onSnapshot(q, (qSnapshot) => {
        const myScoreList = qSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setMyScores(myScoreList);
      });
    }
    console.log('로딩중');
  }, []);

  console.log('코멘트 페이지로 유저정보 넘어옴', userInfo);
  console.log(myScores);

  return (
    <main className='ScoreCollection__main'>
      <div className='ScoreCollection'>
        <div className='ScoreCollection__movies'>
          {myScores.map((cmt, index) => (
            <ul key={index} className='ScoreCollection__movie'>
              <li>
                <img
                  className='ScoreCollection__movies-upper__poster-img'
                  src={cmt.posterUrl}
                  alt='포스터 이미지'
                  height={'300px'}
                />
              </li>
              <li className='ScoreCollection__title'>{cmt.title}</li>
              <li className='ScoreCollection__star'> ★{cmt.ratedStar}</li>
            </ul>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ScoreCollection;
