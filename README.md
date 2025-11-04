# Riaxo Developer Blog - Frontend

React + TypeScript + Vite 기반의 개발자 블로그 프론트엔드 애플리케이션입니다.

## 🚀 기술 스택

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Styled Components
- **State Management**: Recoil
- **Data Fetching**: React Query
- **Routing**: React Router DOM v6
- **Form**: React Hook Form
- **Editor**: TinyMCE
- **UI Library**: Material-UI (MUI)
- **Notification**: Notistack
- **HTTP Client**: Axios

## 📦 설치 및 실행

### 필수 요구사항

- Node.js 18 이상
- Yarn

### 설치

```bash
# 의존성 설치
yarn install
```

### 환경 변수 설정

`.env` 파일을 생성하고 다음 환경 변수를 설정하세요:

```env
# API URL (백엔드 서버 주소)
VITE_API_URL=http://localhost:3000

# TinyMCE API Key
VITE_TINY_MCE_API_KEY=your_tinymce_api_key_here

# GitHub OAuth Client ID
VITE_GITHUB_CLIENT_ID=your_github_client_id_here
```

### 개발 서버 실행

```bash
# 개발 서버 시작 (포트: 5173)
yarn dev

# 네트워크에서 접근 가능한 개발 서버
yarn dev --host
```

### 빌드

```bash
# 프로덕션 빌드
yarn build

# 빌드 결과 미리보기
yarn preview
```

### 코드 품질

```bash
# TypeScript 타입 체크
yarn type-check

# ESLint 검사
yarn lint

# ESLint 자동 수정
yarn lint:fix

# Prettier 포맷팅
yarn lint:format
```

## 📁 프로젝트 구조

```
src/
├── api/              # API 요청 함수 및 React Query hooks
├── assets/           # 정적 리소스 (이미지, 오디오 등)
├── components/       # 재사용 가능한 컴포넌트
│   └── @shared/      # 공유 컴포넌트
├── constants/        # 상수 정의
├── hooks/            # 커스텀 React hooks
├── layout/           # 레이아웃 컴포넌트 (Header, SideBar 등)
├── pages/            # 페이지 컴포넌트
│   ├── Main/         # 메인 페이지
│   ├── Post/         # 포스트 상세 페이지
│   ├── PostList/     # 포스트 목록 페이지
│   ├── PostCreate/   # 포스트 작성 페이지
│   ├── Login/        # 로그인 페이지
│   └── ...
├── recoil/           # Recoil 상태 관리
│   └── atoms/        # Recoil atoms
├── routes/           # 라우팅 설정
├── styles/           # 전역 스타일 및 테마
├── types/            # TypeScript 타입 정의
└── utils/            # 유틸리티 함수
```

## 🎨 코딩 컨벤션

### 네이밍 규칙

| 요소 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 파일 | PascalCase.tsx | `Button.tsx` |
| 훅 파일 | camelCase.ts | `useAuth.ts` |
| 변수명 | snake_case | `user_data` |
| 함수명 | camelCase | `fetchData()` |
| 유틸리티 파일 | snake_case.ts | `format_date.ts` |

### 스타일 가이드

- 들여쓰기: 2 spaces
- 최대 줄 길이: 80자
- 단일 책임 원칙 준수
- 주석은 "왜"를 설명

## 🚢 배포

### Vercel 배포

자세한 배포 가이드는 루트 디렉토리의 [DEPLOYMENT.md](../DEPLOYMENT.md)를 참조하세요.

**간단 요약**:

1. Vercel 프로젝트 생성 및 GitHub 연동
2. 환경 변수 설정 (Vercel 대시보드)
3. GitHub Secrets 설정 (Actions 연동)
4. `main` 브랜치에 푸시하면 자동 배포

### 수동 배포 (Vercel CLI)

```bash
# 설치
npm i -g vercel

# Preview 배포
vercel

# Production 배포
vercel --prod
```

## 🔧 주요 기능

- ✅ 블로그 포스트 작성/수정/삭제
- ✅ Markdown 및 Rich Text 편집기
- ✅ 태그 기반 포스트 분류
- ✅ 이미지 업로드 및 압축
- ✅ GitHub OAuth 인증
- ✅ 반응형 디자인
- ✅ 다크 모드 지원
- ✅ SEO 최적화
- ✅ 포트폴리오 페이지

## 🐛 트러블슈팅

### 빌드 에러

```bash
# 의존성 재설치
rm -rf node_modules yarn.lock
yarn install

# 타입 체크
yarn type-check

# 린트 검사
yarn lint
```

### 환경 변수 인식 안됨

- 변수명이 `VITE_` 접두사로 시작하는지 확인
- `.env` 파일이 프로젝트 루트에 있는지 확인
- 개발 서버 재시작

### 빌드 결과물 확인

```bash
yarn build
yarn preview
```

## 📚 참고 문서

- [React 공식 문서](https://react.dev/)
- [Vite 공식 문서](https://vitejs.dev/)
- [TypeScript 공식 문서](https://www.typescriptlang.org/)
- [React Router 공식 문서](https://reactrouter.com/)
- [Recoil 공식 문서](https://recoiljs.org/)
- [React Query 공식 문서](https://tanstack.com/query/v3/)

## 📝 라이선스

MIT

---

**개발 문의**: riaxo@example.com
