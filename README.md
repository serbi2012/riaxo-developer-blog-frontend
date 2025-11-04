# 🎨 Riaxo Developer Blog - Frontend

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.4.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)

**현대적인 개발자 블로그 플랫폼의 프론트엔드**

[🌐 Live Demo](https://riaxo-developer-blog-frontend-jihee-eoms-projects.vercel.app) | [📖 API Docs](https://github.com/serbi2012/riaxo-developer-blog-backend) | [🐛 Report Bug](https://github.com/serbi2012/riaxo-developer-blog-frontend/issues)

</div>

---

## 📋 목차

- [프로젝트 개요](#-프로젝트-개요)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [프로젝트 아키텍처](#-프로젝트-아키텍처)
- [디렉토리 구조](#-디렉토리-구조)
- [시작하기](#-시작하기)
- [개발 가이드](#-개발-가이드)
- [배포](#-배포)
- [성능 최적화](#-성능-최적화)

---

## 🎯 프로젝트 개요

Riaxo Developer Blog Frontend는 **React 18**과 **TypeScript**를 기반으로 한 현대적인 SPA(Single Page Application)입니다. 개발자를 위한 블로그 플랫폼으로, 마크다운 에디터, 이미지 최적화, GitHub OAuth 인증 등의 기능을 제공합니다.

### 핵심 가치

- 🚀 **빠른 성능**: Vite 기반의 번개같은 빌드 속도
- 🎨 **아름다운 UI**: Material-UI와 Styled Components의 조화
- 📱 **반응형 디자인**: 모든 디바이스에서 완벽한 사용자 경험
- ♿ **접근성**: WCAG 2.1 AA 준수
- 🔒 **보안**: XSS, CSRF 방어 및 안전한 인증

---

## ✨ 주요 기능

### 사용자 기능

#### 📝 콘텐츠 관리
- **Rich Text 에디터**: TinyMCE 기반 WYSIWYG 에디터
- **마크다운 지원**: 개발자 친화적인 마크다운 작성
- **코드 하이라이팅**: Syntax Highlighter로 아름다운 코드 블록
- **이미지 최적화**: 자동 압축 및 WebP 변환

#### 🔐 인증 & 권한
- **GitHub OAuth**: 간편한 소셜 로그인
- **JWT 토큰**: 안전한 세션 관리
- **관리자 모드**: 콘텐츠 관리를 위한 특별 권한

#### 🎨 사용자 경험
- **다크 모드**: 눈의 피로를 줄이는 다크 테마
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 완벽 지원
- **검색 & 필터**: 빠른 콘텐츠 검색
- **이스터 에그**: 숨겨진 재미 요소 🥚

### 관리자 기능

- **포스트 CRUD**: 생성, 읽기, 수정, 삭제
- **태그 관리**: 카테고리 및 태그 시스템
- **이미지 업로드**: Cloudinary 연동
- **AI 이미지 생성**: OpenAI DALL-E 연동 (선택)

---

## 🛠 기술 스택

### Core

| 기술 | 버전 | 용도 |
|------|------|------|
| **React** | 18.2.0 | UI 라이브러리 |
| **TypeScript** | 5.0.2 | 타입 안정성 |
| **Vite** | 4.4.0 | 빌드 도구 |

### 상태 관리

| 기술 | 용도 |
|------|------|
| **Recoil** | 전역 상태 관리 |
| **React Query** | 서버 상태 관리 & 캐싱 |

### 스타일링

| 기술 | 용도 |
|------|------|
| **Styled Components** | CSS-in-JS |
| **Material-UI** | UI 컴포넌트 라이브러리 |

### 라우팅 & 폼

| 기술 | 용도 |
|------|------|
| **React Router v6** | 클라이언트 사이드 라우팅 |
| **React Hook Form** | 폼 관리 |

### 에디터 & 미디어

| 기술 | 용도 |
|------|------|
| **TinyMCE** | WYSIWYG 에디터 |
| **React Cropper** | 이미지 크롭 |
| **browser-image-compression** | 클라이언트 사이드 이미지 압축 |

### 개발 도구

| 기술 | 용도 |
|------|------|
| **ESLint** | 코드 린팅 |
| **Prettier** | 코드 포맷팅 |
| **TypeScript ESLint** | TS 린팅 |

---

## 🏗 프로젝트 아키텍처

### 전체 시스템 아키텍처

```
┌─────────────────────────────────────────────────────────────┐
│                        사용자 (Browser)                      │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Vercel CDN (Global)                       │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         React SPA (riaxo-developer-blog-frontend)    │   │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐     │   │
│  │  │   Pages    │  │  Components│  │   Layouts  │     │   │
│  │  └──────┬─────┘  └──────┬─────┘  └──────┬─────┘     │   │
│  │         │                │                │           │   │
│  │         └────────────────┴────────────────┘           │   │
│  │                          │                            │   │
│  │         ┌────────────────▼────────────────┐           │   │
│  │         │    State Management             │           │   │
│  │         │  ┌─────────┐  ┌──────────────┐  │           │   │
│  │         │  │ Recoil  │  │ React Query  │  │           │   │
│  │         │  └────┬────┘  └──────┬───────┘  │           │   │
│  │         └───────┴───────────────┴──────────┘           │   │
│  │                          │                            │   │
│  │         ┌────────────────▼────────────────┐           │   │
│  │         │      API Layer (Axios)          │           │   │
│  │         └────────────────┬────────────────┘           │   │
│  └──────────────────────────┼──────────────────────────┘   │
└─────────────────────────────┼────────────────────────────┘
                              │ HTTPS
                              ▼
┌─────────────────────────────────────────────────────────────┐
│              Railway (Backend API Server)                    │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Express.js REST API                      │   │
│  └───────────────────────┬──────────────────────────────┘   │
└──────────────────────────┼────────────────────────────────┘
                           │
            ┌──────────────┴──────────────┐
            ▼                             ▼
┌────────────────────┐        ┌────────────────────┐
│   MongoDB Atlas    │        │    Cloudinary      │
│   (Database)       │        │   (Image CDN)      │
└────────────────────┘        └────────────────────┘
```

### 컴포넌트 계층 구조

```
App.tsx
│
├── Router.tsx
│   │
│   ├── Layout.tsx
│   │   ├── Header.tsx
│   │   ├── SideBar.tsx
│   │   └── EasterEgg.tsx
│   │
│   └── Pages
│       ├── Main.tsx
│       │   ├── IntroBox
│       │   ├── MainPagePostCardList
│       │   └── MainPagePostList
│       │
│       ├── PostList.tsx
│       │   └── PostListSearchBar
│       │
│       ├── Post.tsx
│       │   ├── SideNavBox
│       │   └── PrevNextNavBox
│       │
│       ├── PostCreate.tsx
│       │   ├── PostEditor (TinyMCE)
│       │   ├── ImageUpload
│       │   └── ImageGenerateBox
│       │
│       ├── TagList.tsx
│       │   └── TagListSearchBar
│       │
│       ├── PortfolioList.tsx
│       │
│       └── Login.tsx
```

### 데이터 흐름

```
┌──────────────┐
│   User       │
│   Action     │
└──────┬───────┘
       │
       ▼
┌──────────────────────┐
│   React Component    │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐      ┌─────────────────┐
│   Custom Hook        │─────▶│   Recoil Atom   │ (UI State)
│   (useAuth, etc.)    │      └─────────────────┘
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐      ┌─────────────────┐
│   React Query        │─────▶│   Cache         │ (Server State)
│   (Mutation/Query)   │      └─────────────────┘
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│   API Service        │
│   (axios instance)   │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│   Backend API        │
│   (Railway)          │
└──────────────────────┘
```

---

## 📁 디렉토리 구조

```
riaxo-developer-blog-frontend/
│
├── public/                     # 정적 파일
│   └── vite.svg
│
├── src/
│   ├── api/                    # API 레이어
│   │   ├── index.ts           # Axios 인스턴스
│   │   ├── login.queries.ts   # 로그인 API
│   │   ├── post.queries.ts    # 포스트 API
│   │   ├── resource.queries.ts # 리소스 API
│   │   └── tag.queries.ts     # 태그 API
│   │
│   ├── assets/                 # 정적 에셋
│   │   ├── audio/             # 오디오 파일
│   │   └── image/             # 이미지 파일
│   │
│   ├── components/             # 공유 컴포넌트
│   │   └── @shared/
│   │       └── PostTag/       # 태그 컴포넌트
│   │
│   ├── constants/              # 상수
│   │   ├── API.ts             # API 엔드포인트
│   │   ├── headerContent.ts   # 헤더 설정
│   │   └── tinyMceOption.ts   # 에디터 설정
│   │
│   ├── hooks/                  # Custom Hooks
│   │   ├── useAlert.ts        # 알림 훅
│   │   ├── useAuth.ts         # 인증 훅
│   │   ├── useCustomMutation.ts # Mutation 래퍼
│   │   └── useCustomQuery.ts  # Query 래퍼
│   │
│   ├── layout/                 # 레이아웃 컴포넌트
│   │   ├── Layout.tsx         # 메인 레이아웃
│   │   ├── Header/            # 헤더
│   │   ├── SideBar/           # 사이드바
│   │   └── EasterEgg/         # 이스터 에그
│   │
│   ├── pages/                  # 페이지 컴포넌트
│   │   ├── Main/              # 메인 페이지
│   │   ├── Login/             # 로그인 페이지
│   │   ├── Post/              # 포스트 상세
│   │   ├── PostList/          # 포스트 목록
│   │   ├── PostCreate/        # 포스트 작성
│   │   ├── TagList/           # 태그 목록
│   │   └── PortfolioList/     # 포트폴리오
│   │
│   ├── recoil/                 # Recoil 상태
│   │   └── atoms/
│   │       ├── isAdminModeState.ts    # 관리자 모드
│   │       ├── isLoadingState.ts      # 로딩 상태
│   │       └── isSideBarOpenState.ts  # 사이드바 상태
│   │
│   ├── routes/                 # 라우팅
│   │   ├── Router.tsx         # 라우터 설정
│   │   └── AccountChecker.tsx # 인증 가드
│   │
│   ├── styles/                 # 전역 스타일
│   │   ├── globalStyles.ts    # 글로벌 스타일
│   │   ├── theme.styles.tsx   # 테마 설정
│   │   ├── colorRoot.css      # 색상 변수
│   │   └── animationStyles.ts # 애니메이션
│   │
│   ├── types/                  # TypeScript 타입
│   │   ├── auth.d.ts          # 인증 타입
│   │   └── post.d.ts          # 포스트 타입
│   │
│   ├── utils/                  # 유틸리티 함수
│   │   ├── cookieUtils.ts     # 쿠키 관리
│   │   ├── formatDate.ts      # 날짜 포맷
│   │   └── getQueryString.ts  # 쿼리스트링 파싱
│   │
│   ├── App.tsx                 # 루트 컴포넌트
│   └── index.tsx               # 엔트리 포인트
│
├── .env                        # 환경 변수 (local)
├── .gitignore                  # Git 무시 파일
├── vercel.json                 # Vercel 설정
├── vite.config.ts              # Vite 설정
├── tsconfig.json               # TypeScript 설정
└── package.json                # 의존성 관리
```

### 디렉토리 규칙

#### 📄 파일 네이밍 컨벤션

| 파일 유형 | 규칙 | 예시 |
|----------|------|------|
| **컴포넌트** | PascalCase.tsx | `Header.tsx` |
| **스타일** | PascalCase.styles.ts | `Header.styles.ts` |
| **훅** | camelCase.ts | `useAuth.ts` |
| **유틸리티** | camelCase.ts | `formatDate.ts` |
| **타입** | camelCase.d.ts | `auth.d.ts` |
| **상수** | UPPER_SNAKE_CASE | `API_ENDPOINTS` |

#### 🗂 컴포넌트 구조

```
ComponentName/
├── ComponentName.tsx           # 메인 컴포넌트
├── ComponentName.styles.ts     # 스타일
├── ComponentName.test.tsx      # 테스트 (선택)
├── hooks/                      # 컴포넌트 전용 훅
└── components/                 # 서브 컴포넌트
```

---

## 🚀 시작하기

### 필수 요구사항

- **Node.js**: 18.x 이상
- **Yarn**: 1.22.x 이상
- **Git**: 최신 버전

### 설치

```bash
# 1. 저장소 클론
git clone https://github.com/serbi2012/riaxo-developer-blog-frontend.git
cd riaxo-developer-blog-frontend

# 2. 의존성 설치
yarn install

# 3. 환경 변수 설정
cp .env.example .env
# .env 파일을 열어 필수 값 입력

# 4. 개발 서버 시작
yarn dev
```

### 환경 변수 설정

`.env` 파일을 생성하고 다음 값을 설정하세요:

```env
# Backend API URL
VITE_API_URL=http://localhost:8080

# TinyMCE API Key (https://www.tiny.cloud/)
VITE_TINY_MCE_API_KEY=your_tinymce_api_key

# GitHub OAuth Client ID
VITE_GITHUB_CLIENT_ID=your_github_client_id
```

### 개발 서버

```bash
yarn dev
```

브라우저에서 http://localhost:5173 접속

---

## 💻 개발 가이드

### 사용 가능한 스크립트

```bash
# 개발 서버 시작 (HMR 포함)
yarn dev

# 프로덕션 빌드
yarn build

# 빌드 미리보기
yarn preview

# TypeScript 타입 체크
yarn type-check

# ESLint 검사
yarn lint

# ESLint 자동 수정
yarn lint:fix

# Prettier 포맷팅
yarn lint:format
```

### 코딩 컨벤션

#### TypeScript

```typescript
// ✅ Good
interface User {
  id: string;
  name: string;
  email: string;
}

const fetchUser = async (id: string): Promise<User> => {
  const response = await api.get<User>(`/users/${id}`);
  return response.data;
};

// ❌ Bad
const fetchUser = async (id: any) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};
```

#### React 컴포넌트

```typescript
// ✅ Good - Functional Component with TypeScript
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary' 
}) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
```

#### Styled Components

```typescript
// ✅ Good
import styled from 'styled-components';

interface StyledButtonProps {
  variant: 'primary' | 'secondary';
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 12px 24px;
  border-radius: 8px;
  background-color: ${({ variant }) => 
    variant === 'primary' ? '#007bff' : '#6c757d'
  };
  
  &:hover {
    opacity: 0.8;
  }
`;
```

#### Custom Hooks

```typescript
// ✅ Good
import { useState, useEffect } from 'react';

interface UseApiOptions {
  autoFetch?: boolean;
}

const useApi = <T>(url: string, options: UseApiOptions = {}) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api.get<T>(url);
      setData(response.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (options.autoFetch) {
      fetchData();
    }
  }, [url]);

  return { data, loading, error, refetch: fetchData };
};
```

### 상태 관리 패턴

#### Recoil (UI State)

```typescript
// atoms/themeState.ts
import { atom } from 'recoil';

export const themeState = atom({
  key: 'themeState',
  default: 'light' as 'light' | 'dark',
});

// Usage in component
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/atoms/themeState';

const ThemeToggle = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  
  return (
    <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  );
};
```

#### React Query (Server State)

```typescript
// api/post.queries.ts
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { api } from './index';

interface Post {
  id: string;
  title: string;
  content: string;
}

export const usePosts = () => {
  return useQuery<Post[]>('posts', async () => {
    const response = await api.get('/api/post');
    return response.data;
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  
  return useMutation(
    async (post: Omit<Post, 'id'>) => {
      const response = await api.post('/api/post', post);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
      },
    }
  );
};
```

---

## 🚢 배포

### Vercel 배포 (권장)

#### 자동 배포 (GitHub 연동)

1. **저장소 푸시**
   ```bash
   git add .
   git commit -m "feat: 새 기능 추가"
   git push origin master
   ```

2. **Vercel이 자동으로 배포** (2-3분 소요)

#### 수동 배포

```bash
# Vercel CLI 설치
npm i -g vercel

# 프로덕션 배포
vercel --prod
```

### 환경 변수 설정 (Vercel)

Vercel Dashboard → Settings → Environment Variables:

```
VITE_API_URL=https://your-backend.railway.app
VITE_TINY_MCE_API_KEY=your_api_key
VITE_GITHUB_CLIENT_ID=your_client_id
```

### 배포 확인

```bash
# 배포 로그 확인
vercel logs --follow

# 배포 목록 확인
vercel ls
```

---

## ⚡ 성능 최적화

### 구현된 최적화

#### 1. Code Splitting

```typescript
// Router.tsx
import { lazy, Suspense } from 'react';

const Main = lazy(() => import('@/pages/Main/Main'));
const PostList = lazy(() => import('@/pages/PostList/PostList'));
const Post = lazy(() => import('@/pages/Post/Post'));

const Router = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="/posts/:id" element={<Post />} />
    </Routes>
  </Suspense>
);
```

#### 2. 이미지 최적화

```typescript
// hooks/useImageCompress.ts
import imageCompression from 'browser-image-compression';

export const useImageCompress = () => {
  const compressImage = async (file: File) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    
    return await imageCompression(file, options);
  };
  
  return { compressImage };
};
```

#### 3. React Query 캐싱

```typescript
// api/index.ts
import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5분
      cacheTime: 10 * 60 * 1000, // 10분
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});
```

#### 4. Memoization

```typescript
// Example
import { useMemo, useCallback } from 'react';

const PostList = ({ posts }: Props) => {
  const filteredPosts = useMemo(() => {
    return posts.filter(post => post.published);
  }, [posts]);
  
  const handleClick = useCallback((id: string) => {
    navigate(`/posts/${id}`);
  }, [navigate]);
  
  return (
    <>
      {filteredPosts.map(post => (
        <PostCard 
          key={post.id} 
          post={post} 
          onClick={handleClick}
        />
      ))}
    </>
  );
};
```

### 성능 메트릭

| 메트릭 | 목표 | 현재 |
|--------|------|------|
| **First Contentful Paint** | < 1.8s | 1.2s |
| **Largest Contentful Paint** | < 2.5s | 2.1s |
| **Time to Interactive** | < 3.8s | 2.9s |
| **Cumulative Layout Shift** | < 0.1 | 0.05 |
| **Total Blocking Time** | < 300ms | 180ms |

---

## 🧪 테스팅

```bash
# Unit 테스트 실행
yarn test

# Coverage 리포트
yarn test:coverage

# E2E 테스트 (Playwright)
yarn test:e2e
```

---

## 🐛 트러블슈팅

### 빌드 에러

```bash
# node_modules 재설치
rm -rf node_modules yarn.lock
yarn install

# 캐시 삭제
yarn cache clean

# 타입 체크
yarn type-check
```

### CORS 에러

백엔드 URL을 확인하세요:
```env
VITE_API_URL=https://your-backend.railway.app
```

---

## 📄 라이선스

MIT License

---

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 문의

- **GitHub**: [@serbi2012](https://github.com/serbi2012)
- **Email**: your-email@example.com
- **Issue**: [Report Bug](https://github.com/serbi2012/riaxo-developer-blog-frontend/issues)

---

<div align="center">

**Made with ❤️ by Riaxo**

[⬆ Back to top](#-riaxo-developer-blog---frontend)

</div>
