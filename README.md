# People to people (P2P SNS)

### 🔍 프로젝트 개요

기존 광고가 지배적인 SNS 서비스에 피로도를 느낀 사용자들에게 직관적인 UI와 사용성을 제공하는 간단한 SNS 서비스를 제공하고자 하는 목적으로 해당 프로젝트를 기획하였습니다.
다른 측면에서, P2P는 실제 토이 프로젝트를 진행하며 다양한 기술 스택을 직접 적용해보고 이해를 높이고자 하는 스터디 목적으로 시작된 프로젝트입니다. 또한, SNS라는 서비스 특성 상 로그인, 이미지 최적화, 페이징과 같은 기본적인 기능을 모두 다루고 있기에 포트폴리오 및 스터디의 목적과도 부합한다고 판단했습니다.
<br />
<br />

### 🔍 프로젝트 인원 및 포지션

- 프론트엔드 1명 (@yum-kim)
- 백엔드 1명 (@jemining)
<br />

### 🔍 기술 스택 및 라이브러리

  💄 **프론트엔드**

    - React, Next.js, TypeScript
    - 상태관리: Redux-toolkit, Redux-saga
    - 스타일링: CSS Modules, SCSS, react-icons
    - CI/CD: Github Actions
    - 배포: AWS S3, CloudFront

  💾 **백엔드**

    - Node, Nest.js, Typescript
    - DB: PostgreSQL
    - docker
    - 배포: AWS EC2
<br />

### 🔍 화면 기능 명세

1. **로그인 화면**

    1-1. 회원가입

    ![회원가입-github](https://github.com/yum-kim/P2P/assets/61794233/26eb2b6e-6c19-4295-bd18-b25b935a6e55)
    
    - username, nickname(선택), password를 입력받으며 유효성 검증을 통해 pass 되지 못할 경우 alert 모달이 뜨며 회원가입이 이루어지지 않는다.
    - 정상적으로 회원가입이 완료될 경우 login 페이지로 전환할지 confirm 모달을 통해 확인 후 전환된다.
    
    1-2. 로그인
    
    ![로그인-github](https://github.com/yum-kim/P2P/assets/61794233/f2284e25-88d2-452d-bee4-708d35aa3436)
    
    - username과 password를 입력받아 login API를 호출하며, 저장된 회원 정보와 일치할 경우 피드 페이지로 전환된다.
    - 회원정보가 없거나 잘못된 정보로 로그인을 요청했을 경우 서버로부터 에러값을 받고, alert 모달을 통해 사용자에게 안내한다.
    - accessToken이 만료될 경우 refreshToken을 사용해 재발급을 요청하고 기존 API 요청을 이어나가며, refreshToken이 만료됐을 경우 로그인 화면으로 전환시켜 재로그인을 유도한다.
    - 만약 로그인 페이지에 접근 시 기존 refreshToken값이 있다면 accessToken을 재발급받아 자동 로그인 후 바로 피드 화면으로 전환된다.
    
    1-3. 구글 OAuth 로그인
    
    - 구현 예정
  <br />

2. **피드 화면**

    2-1. 게시물 업로드 (사진, 텍스트)
  
    ![게시물업로드-github](https://github.com/yum-kim/P2P/assets/61794233/0384d514-2433-4222-af98-49015e192f46)

    - 게시물 업로드 시 ‘이미지 선택’ 버튼을 통해 최대 4개까지의 이미지를 함께 업로드할 수 있다. 추가된 이미지는 버튼 왼쪽 영역에 파일명이 함께 노출되며 어떤 파일을 업로드 했는지 사용자가 확인할 수 있다.

    2-2. 게시물 수정, 삭제, 공개대상 수정
    
    ![게시물수정](https://github.com/yum-kim/P2P/assets/61794233/b701fef5-7d67-4fd5-a96e-046cf3389466)

    - 포스트 오른쪽 상단에는 내가 업로드한 포스트에만 노출되는 dots 아이콘 버튼을 통해 게시물 내용 수정, 공개 대상 수정(퍼블릭/ 프라이빗), 게시물 삭제가 가능하다.
    - 게시물 수정을 클릭 할 경우 포스트 내용이 textarea 영역으로 바뀌며 focus되고, 내용을 수정할 수 있다.
    - 게시물 공개범위 수정, 게시물 삭제를 클릭할 경우 confirm 모달을 통해 진행 여부를 확인하고 처리한다.

    2-3. 좋아요 등록/취소

    - 좋아요 토글 시 좋아요 API 호출을 통해 등록/취소 된다.
    - 전체 좋아요 개수가 아이콘 옆에 표기되며, 내가 클릭했을 경우 색이 채워진 좋아요 버튼이, 아닐 경우 빈 좋아요 버튼이 노출된다.

    2-4. 댓글 업로드, 수정, 삭제

    ![댓글-github](https://github.com/yum-kim/P2P/assets/61794233/12abdb00-e294-400a-a959-004a08637f4a)

    - 내가 등록한 댓글에만 수정, 삭제 버튼이 함께 노출되며, 수정 클릭 시 input창과 수정 버튼이 활성화되고, input에 focus된다. 삭제 클릭 시에는 confirm 모달을 통해 삭제를 진행할지 확인 후에 처리한다.

    2-5. 스크롤 페이징

    ![스크롤페이징-github](https://github.com/yum-kim/P2P/assets/61794233/1619c628-a5f1-4e00-9f62-1a56157cbc5d)

    - 스크롤 페이징은 Intersection Observer 방식으로 구현하였으며, 리스트 하단 교차점에 닿을 시 10개씩 다음 포스트 데이터를 불러와 렌더링한다. 더 이상 불러온 데이터가 없을 때에는 lastPage로 간주하고 스크롤이 교차점에 닿아도 데이터를 불러오지 않는다.
  <br />

3. **채팅 화면**
    - 구현 예정
  <br />

4. **마이페이지 화면**
    
    4-1. 계정설정 - 프로필, 닉네임, 비밀번호 수정
    
    ![계정설정-github](https://github.com/yum-kim/P2P/assets/61794233/a302f824-36b5-4567-a764-7890aa1f0bd6)
    
    - 닉네임과 비밀번호는 초기값으로 수정할 수 없는 input창으로 되어있으며, 각각 수정 버튼을 클릭할 시 수정가능한 input이 활성화된다. input이 활성화 됐을 경우 버튼 텍스트가 ‘저장’으로 변경되며, 저장 버튼 클릭 시 user 정보 수정 API 호출을 통해 업데이트한다.
    - ‘돌아가기’ 버튼 클릭 시 이전 My Page 화면 리스트로 돌아간다. 만약, 닉네임이나 비밀번호 중 활성화된 input 창이 있다면 confirm 모달을 통해 기존 동작을 취소할지 확인 후 처리한다.
    - 프로필 이미지 수정은 작은 파일 아이콘 클릭 시 이미지 파일을 업로드 할 수 있으며 파일을 올리는 즉시 프로필 이미지 저장 API가 함께 호출된다.
    - ‘이미지 삭제’ 버튼을 클릭 시 confirm 모달을 통해 진행 여부를 확인 후 진행 시에 기존 등록되어있는 프로필 이미지 삭제 API가 호출된다.
    
    4-2. 회원탈퇴
   
    ![회원탈퇴-github](https://github.com/yum-kim/P2P/assets/61794233/1fb4821b-8e95-48f2-86fe-897c683a34dc)

    - 회원탈퇴 버튼 클릭 시 confirm 모달을 통해 진행여부를 확인하고 진행 시 탈퇴 API 호출 후 전역 user 상태값을 리셋시키고 로그인 화면으로 전환시킨다.
  <br />

5. **공통 헤더 컴포넌트**
   
    ![로그아웃-github](https://github.com/yum-kim/P2P/assets/61794233/8d72ecde-27a0-4e90-8469-b3fec6acafe9)

    5-1. 로고
    
    - 로고 클릭 시 루트 경로로 전환되며, user 상태 값이 있을 경우 feed 페이지로, 없을 경우 login 페이지로 이동한다.
    
    5-2. 로그아웃
    
    - confirm 모달을 통해 로그아웃을 진행할지 여부를 묻고, 진행할 경우 전역 user 상태값과 accessToken을 리셋 시키고 로그인 페이지로 전환한다. (서버 API 호출을 하지 않고, 프론트에서만 처리)
  <br />

6. **공통 네비게이션 컴포넌트**
    
    6-1. desktop 용
    
    - 화면 왼쪽에서 공통적으로 확인 가능하며, 클릭 시 지정된 page경로로 전환된다.
    - 현재 path과 확인하여 일치하는 네비 리스트에 active 배경색이 들어간다.
    
    6-2. mobile, tablet 용
    
    - 반응형으로 뷰포트가 mobile, tablet 브레이크포인트에 잡히면 기존 헤더 메뉴가 변경되어 우측 상단에 햄버거 메뉴로 네비게이션에 진입할 수 있다.
    - 햄버거 버튼 클릭 시 화면 왼쪽에서 네비가 슬라이드 되며, 기능은 desktop과 동일하게 네비 리스트 클릭 시 지정된 page 경로로 이동된다.
    - 슬라이드된 네비 뒤의 배경을 클릭하거나 ‘X’ 버튼을 클릭하여 네비 화면을 닫을 수 있다.
  <br />

7. **기타**
    
    ![모바일](https://github.com/yum-kim/P2P/assets/61794233/dc3c9165-02d1-4878-a7d1-fac6614c8e42)

    - 개발이 완료된 화면은 반응형 디자인 작업되어있어 모바일에서도 사용 가능합니다.
