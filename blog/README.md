# 📘 React 기반 Gatsby로 기술 블로그 개발하기(Study)

기술 블로그를 React 기반의 정적 사이트 생성기 **Gatsby**를 사용해 구축한 프로젝트입니다.  
컴포넌트 중심 구조로 유지보수와 확장성이 용이하도록 설계되었습니다.

## 📁 디렉터리 구조

```
src
 ┣ components
 ┃ ┣ Common
 ┃ ┃ ┣ Footer.tsx # 페이지 하단 푸터
 ┃ ┃ ┗ GlobalStyle.tsx # 전역 스타일 설정
 ┃ ┗ Main
 ┃ ┃ ┣ CategoryList.tsx # 카테고리 목록 컴포넌트
 ┃ ┃ ┣ Introduction.tsx # 페이지 상단 소개글
 ┃ ┃ ┣ PostItem.tsx # 단일 포스트 아이템
 ┃ ┃ ┣ PostList.tsx # 포스트 리스트
 ┃ ┃ ┗ ProfileImage.tsx # 프로필 이미지 컴포넌트
 ┣ images # 이미지 리소스 폴더
 ┣ pages
 ┃ ┣ index.tsx # 메인 페이지
 ┃ ┗ info.tsx # 소개/정보 페이지
 ┗ templates # 템플릿 컴포넌트 (페이지 레이아웃 등)
```
