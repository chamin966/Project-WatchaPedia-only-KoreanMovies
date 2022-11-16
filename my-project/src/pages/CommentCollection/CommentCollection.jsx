import { dbService } from 'fbase';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './CommentCollection.css';

function CommentCollection() {
  const [myComments, setMyComments] = useState([]);
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
        const myCommentsList = qSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setMyComments(myCommentsList);
      });
    }
    console.log('로딩중');
  }, []);

  console.log('코멘트 페이지로 유저정보 넘어옴', userInfo);
  console.log(myComments);

  return (
    <main className='CommentCollection__main'>
      <div className='CommentCollection'>
        {myComments.map((cmt, index) => {
          //코멘트 있는 것만 뿌려줌
          if (cmt.comment !== '') {
            return (
              <ul key={index} className='CommentCollection__movies'>
                <ul className='CommentCollection__movies-upper'>
                  <li>
                    <img
                      className='CommentCollection__movies-upper__profile-img'
                      src={cmt.profilePhotoUrl}
                      alt='프로필 이미지'
                      height={'30px'}
                      width={'30px'}
                    />
                  </li>
                  <li className='CommentCollection__movies-upper__name'>{cmt.displayName}</li>
                  <li className='CommentCollection__star'> ★{cmt.ratedStar}</li>
                </ul>
                <ul className='CommentCollection__movies-bottom'>
                  <li>
                    <img
                      className='CommentCollection__movies-upper__poster-img'
                      src={cmt.posterUrl}
                      alt='포스터 이미지'
                      height={'150px'}
                    />
                  </li>
                  <ul className='CommentCollection__movies-bottom__text'>
                    <li>{cmt.title}</li>
                    <li className='CommentCollection__movies-bottom__prodyear gray-word-s'>{cmt.prodYear}</li>
                    <li className='gray-word-m'>{cmt.comment}</li>
                  </ul>
                </ul>
              </ul>
            );
          }
        })}
      </div>
    </main>
  );
}

export default CommentCollection;
