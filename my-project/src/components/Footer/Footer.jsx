import './Footer.css';

function Footer() {
  return (
    <footer className='footer '>
      <div className='footer__estimated'>
        지금까지 <span> ★ 674,526,720 개의 평가가 </span>쌓였어요.
      </div>
      <ul className='footer__text'>
        <li>서비스 이용약관 | 개인정보 처리방침 | 회사 안내</li>
        <li>고객센터 | cs@watchapedia.co.kr, 02-515-9985</li>
        <li>광고 문의 | ad@watcha.com</li>
        <li>제휴 및 대외 협력 | https://watcha.team/contact</li>
        <li>주식회사 왓챠 | 대표 박태훈 | 서울특별시 서초구 강남대로 343 신덕빌딩 3층</li>
        <li>사업자 등록 번호 211-88-66013</li>
        <li>© 2022 by WATCHA, Inc. All rights reserved.</li>
      </ul>
    </footer>
  );
}

export default Footer;
