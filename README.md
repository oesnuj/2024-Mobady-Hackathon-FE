# 2024-Mobady-Hackathon-FE
2024 모배디 해커톤 경진대회 프론트엔드 레포지토리


### 디렉토리 구조
```plaintext
root
├── public
│   ├── images                        # 이미지 파일 폴더
│   │   ├── logo.png                  # 로고 이미지 파일
│   │   └── icons                     # 아이콘 이미지 폴더
│   │       ├── search_icon.png       # 검색 아이콘
│   │       └── refresh_icon.png      # 위치 아이콘
│   └── favicon.ico                   
│
└── src
    ├── components                    # 컴포넌트 폴더
    │   ├── DepartureInputModalContent       # 출발지 입력 모달 컴포넌트
    │   │   └── DepartureInputModalContent.jsx
    │   └── Common                    # 공통 컴포넌트 폴더 (예: 버튼, 헤더 등)
    │       └── Button.jsx
    │
    └── pages                         # 페이지 폴더
        ├── Home
        │   └── HomePage.jsx          # 메인 화면
        ├── SearchResults
        │   └── SearchResultsList.jsx # 검색 결과 리스트
        ├── ResultDetail
        │   ├── ResultDetailPage.jsx  # 결과 디테일 페이지
        └── Route
            └── RoutePage.jsx         # 경로 탐색 경로 페이지
```
