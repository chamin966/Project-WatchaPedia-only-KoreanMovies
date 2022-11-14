import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieRank.css';

function MovieRank() {
  const [koficInfo, setKoficInfo] = useState([]);
  const [kmdbInfo, setKmdbInfo] = useState([]);

  const navigate = useNavigate();
  const timeStamp = new Date(Date.now());
  const date = `${timeStamp.getFullYear()}${timeStamp.getMonth()}${timeStamp.getDate()}`;

  useEffect(() => {
    //박스오피스 순위 정보를 위한 영진위API 사용
    const getKoficInfo = async () => {
      const koficJson = await (
        await fetch(
          `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=9674dd7ff57f3049d68c7349e58025ba&targetDt=${date}&itemPerPage=10&repNationCd=K`
        )
      ).json();

      const koficTmp = [];
      for (let x of koficJson['boxOfficeResult']['dailyBoxOfficeList']) {
        koficTmp.push({
          rnum: x.rnum,
          movieCd: x.movieCd,
          rank: x.rank,
          openDt: x.openDt,
          title: x.movieNm,
          salesShare: Math.floor(x.salesShare),
        });
      }
      setKoficInfo(koficTmp);
    };
    getKoficInfo();
  }, []);

  useEffect(() => {
    //하나로는 정보가 부족한 두 API를 하나로 합치는 과정
    //포스터, 스틸이미지, 줄거리, 예고편 등의 상세 정보를 위해 KMDB API 사용
    //영진위 API에는 영화 제목을 제외하고는 검색할 만한 요청값을 받을 수 없었고 동명의 영화가 여러 개 있을 수 있기 때문에 이중 for문을 써야 한다.
    const getKmdbInfo = async () => {
      const kmdbTmp = [];
      console.log('kofic', koficInfo);
      for (let kofic of koficInfo) {
        const kmdbJson = await (
          await fetch(
            `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=777KP7DH9KI1K831H458&query=${kofic.title}&detail=Y`
          )
        ).json();

        for (let kmdb of kmdbJson.Data[0].Result) {
          if (kofic.movieCd === kmdb.CommCodes.CommCode[0].CodeNo) {
            kmdbTmp.push({
              rnum: kofic.rnum,
              movieCd: kofic.movieCd,
              rank: kofic.rank,
              openDt: kofic.openDt,
              title: kofic.title,
              salesShare: kofic.salesShare,
              titleEng: kmdb.titleEng,
              prodYear: kmdb.prodYear,
              posterUrls: kmdb.posters.split('|'),
              stilUrls: kmdb.stlls.split('|'),
              movieSeq: kmdb.movieSeq,
              nation: kmdb.nation,
              genre: kmdb.genre,
              vod: kmdb.vods.vod,
              actorAndProd: kmdb.staffs.staff.slice(0, 5),
              runtime: kmdb.runtime,
              rating: kmdb.rating,
              plot: kmdb.plots.plot[0].plotText,
              repRlsDate: kmdb.repRlsDate,
              kmdbMovieCode: kmdb.CommCodes.CommCode[0].CodeNo,
            });
          }
        }
      }
      console.log('kmdb', kmdbTmp);
      setKmdbInfo(kmdbTmp);
    };
    getKmdbInfo();
  }, [koficInfo]);

  const onClickMovie = (e) => {
    console.log(JSON.parse(e.target.dataset.movie_info));
    const movieInfo = JSON.parse(e.target.dataset.movie_info);
    navigate(`/Detail/${movieInfo.movieCd}`, { state: movieInfo });
  };

  return (
    <>
      {kmdbInfo.map((movie) => (
        <ul key={movie.rnum} className='MovieRank__lanked-movies'>
          <li className='lanked-movies__numbering'>{movie.rnum}</li>
          <li className='MovieRank__lanked-movies__border'>
            <img
              className='MovieRank__lanked-movies__poster'
              src={movie.posterUrls[0]}
              alt=''
              height={'288px'}
              width={'198px'}
              data-movie_info={JSON.stringify(movie)}
              onClick={onClickMovie}
            />
          </li>
          <ul>
            <li data-movie_info={JSON.stringify(movie)} onClick={onClickMovie}>
              {movie.title}
            </li>
            <li>
              {movie.prodYear}・{movie.nation}
            </li>
            <li className='gray-word-s'>예매율 {movie.salesShare}%</li>
          </ul>
        </ul>
      ))}
    </>
  );
}

export default MovieRank;
