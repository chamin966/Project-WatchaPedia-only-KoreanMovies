import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SearchResult.css';

function SearchResult() {
  const searchingText = useLocation().state;
  const [kmdbInfo, setKmdbInfo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getKmdbInfo = async () => {
      const kmdbTmp = [];

      const kmdbJson = await (
        await fetch(
          `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=777KP7DH9KI1K831H458&title=${searchingText}&detail=Y`
        )
      ).json();

      console.log(kmdbJson.Data[0].Result);

      for (let kmdb of kmdbJson.Data[0].Result) {
        kmdbTmp.push({
          title: kmdb.title,
          prodYear: kmdb.prodYear,
          posterUrls: kmdb.posters.split('|'),
          stilUrls: kmdb.stlls.split('|'),
          movieSeq: kmdb.movieSeq,
          nation: kmdb.nation,
          genre: kmdb.genre,
          vods: kmdb.vods.vod,
          actorAndProd: kmdb.staffs.staff,
          runtime: kmdb.runtime,
          rating: kmdb.rating,
          plot: kmdb.plots.plot[0].plotText,
        });
      }

      console.log('검색된 kmdb', kmdbTmp);
      setKmdbInfo(kmdbTmp);
    };
    getKmdbInfo();
  }, []);

  const onClickMovie = (e) => {
    console.log(JSON.parse(e.target.dataset.movie_info));
    const movieInfo = JSON.parse(e.target.dataset.movie_info);
    navigate(`/Detail/${movieInfo.movieSeq}`, { state: movieInfo });
  };

  return (
    <div className='search-result'>
      <div className='search-result__title'>"콰이어트 플레이스"의 검색결과</div>
      <main className='search-result__contents'>
        <div className='search-result__contents-title'>영화</div>
        <ul className='search-result__moives-frame'>
          {kmdbInfo.map((m, i) => (
            <ul key={i} className='search-result__movie'>
              <li>
                {m.posterUrls[0] !== '' ? (
                  <img
                    src={m.posterUrls[0]}
                    alt='영화포스터'
                    height={'100px'}
                    width={'70px'}
                    data-movie_info={JSON.stringify(m)}
                    onClick={onClickMovie}
                  />
                ) : (
                  <img
                    src='/images/samples/noImage.png'
                    alt='영화포스터'
                    height={'100px'}
                    width={'70px'}
                    data-movie_info={JSON.stringify(m)}
                    onClick={onClickMovie}
                  />
                )}
              </li>
              <ul className='search-result__text'>
                <li>{m.title}</li>
                <li className='gray-word-s'>
                  {m.prodYear} ・ {m.nation}
                </li>
              </ul>
            </ul>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default SearchResult;
