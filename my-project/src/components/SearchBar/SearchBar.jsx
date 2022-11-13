import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

function SearchBar() {
  const [searchingText, setSearchingText] = useState('');
  const navigate = useNavigate();

  const onChangeText = (e) => {
    let text = e.target.value;
    console.log(text);
    setSearchingText(text);
  };

  const onSubmitText = (e) => {
    e.preventDefault(); //새로고침 안 없애주면 적은 정보 모두 날아감에 주의
    navigate(`/SearchResult/${searchingText}`, { state: searchingText });
  };

  return (
    <form onSubmit={onSubmitText}>
      <input
        className='header__search-bar'
        type='text'
        placeholder='영화를 검색해보세요.'
        value={searchingText}
        onChange={onChangeText}
      />
    </form>
  );
}

export default SearchBar;
