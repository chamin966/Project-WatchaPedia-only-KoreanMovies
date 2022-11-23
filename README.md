
# **프로젝트 이름**
이름: 왓챠 피디아 따라 만들기 프로젝트

# **프로젝트 결과 화면**
(메인 페이지)
![왓챠 클론 메인 홈](https://user-images.githubusercontent.com/98478661/202486160-dc4d620b-28d7-44df-bf90-4bbdd3a8a2f2.png)

## **프로젝트 소개**
본 프로젝트는 왓챠 피디아 웹사이트를 결과물만 보고 혼자 따라 만들기 프로젝트입니다.
날짜에 따른 박스 오피스 순위 정보를 불러오기 위해 영진위 API를, 포스터 이미지, 줄거리 등의 영진위 API에서는 제공하지 않는 영화 상세 정보를 불러오기 위해 KMDB를 사용하였습니다.

두 개의 API를 함께 사용해야 했기에 두 API의 공통분모를 찾을 필요가 있었고, 한국 영화에 한하여 같은 영화 코드를 공유하고 있음을 발견하였으므로 한국 영화에 한하여 왓챠와 같은 기능을 제공할 수 있게 하였습니다.

로그인한 유저에 한해 별점 부여, 코멘트 작성 등의 데이터베이스에 저장해야하는 정보도 존재했기에 이에 필요한 CRUD는 파이어베이스를 이용하여 구현하였습니다.

## **기술 스택**
- 자바스크립트
- 리액트
- 파이어베이스

## **구현 기능**
### **기능 1**
: 현재 날짜에 맞는 일별 박스오피스 순위에 따른 영화 정보(포스터, 제목 등) 표출
- 별도의 라이브러리 없이 직접 제작한 캐러셀 활용
### **기능 2**
: 검색창에서 한국 영화에 한하여 원하는 영화 검색 기능
### **기능 3**
: 영화 포스터나 제목을 클릭하면 해당 영화의 상세 정보 페이지로 이동
### **기능 4**
: 구글 연동 로그인 구현과 유저 정보 관리
- 파이어베이스 구글 연동 로그인, 유저 정보 받아오기 메서드 이용
### **기능 5**
: 로그인한 경우에 한하여 별점 부여, 코멘트 작성 기능
### **기능 6**
: 유저를 식별하여 본인이 작성한 평가와 코멘트 모아보기와 같은 유저에 따른 CRUD 구현
- 파이어베이스 실시간 데이터베이스 활용
## **배운 점 & 소감**
개인 노션 페이지: [프로젝트를 하면서 배운 것 & 소감](https://www.notion.so/39eb4b72aaff4cb48ec945230638a83a)
