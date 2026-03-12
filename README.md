# H2CI Lab Homepage

POSTECH H2CI Lab (Health and Human-Computer Interaction Lab) 공식 홈페이지입니다.

🌐 **사이트 주소:** https://h2ci-lab-homepage.vercel.app

---

## ✅ 내용 수정하는 법 (핵심!)

> **모든 내용은 `lib/data.ts` 파일 하나에서 관리합니다.**
> 이 파일만 수정하면 사이트 전체가 자동으로 업데이트됩니다.

---

## 📁 파일 구조 (알아두면 좋은 것들)

```
lab_homepage/
├── lib/
│   └── data.ts          ← ⭐ 모든 내용 수정은 여기서!
├── public/
│   ├── logo.svg         ← 랩 로고
│   └── people/          ← 멤버 사진 저장 폴더
│       ├── eunkyungjo.jpg
│       ├── sangeunseo.jpg
│       └── ...
├── app/                 ← 각 페이지 코드 (건드릴 일 거의 없음)
└── components/          ← 공통 컴포넌트 (건드릴 일 거의 없음)
```

---

## 🔄 수정 후 사이트에 반영하는 법

파일을 수정했으면 터미널(PowerShell)에서 아래 명령어 실행:

```powershell
git add .
git commit -m "수정 내용 간단히 적기"
git push
```

→ 1~2분 후 Vercel이 자동으로 사이트를 업데이트합니다.

---

## 👥 멤버 추가/수정하기

`lib/data.ts`의 `MEMBERS` 배열을 수정합니다.

### 새 멤버 추가

```ts
{
  id: "firstname-lastname",        // 고유 ID (영문 소문자, 하이픈)
  name: "Gildong Hong",            // 영문 이름
  nameKr: "홍길동",                 // 한글 이름
  role: "phd",                     // 역할: "pi" | "phd" | "ms" | "undergrad" | "alumni"
  roleLabel: "Ph.D. Student",      // 화면에 표시될 역할명
  affiliation: "Dept. of CSE, POSTECH",
  bio: "자기소개 문장...",
  research: ["키워드1", "키워드2", "키워드3"],
  website: "https://개인홈페이지.com",   // 없으면 이 줄 삭제
  email: "email@postech.ac.kr",         // 없으면 이 줄 삭제
  scholar: "https://scholar.google.com/...",  // 없으면 이 줄 삭제
  startYear: 2026,
  photo: "/people/gildонghong.jpg",     // 없으면 이 줄 삭제
},
```

**role 값 종류:**
| 값 | 의미 |
|---|---|
| `"pi"` | 지도교수 |
| `"phd"` | 박사과정 |
| `"ms"` | 석사과정 |
| `"undergrad"` | 학부연구생 |
| `"alumni"` | 졸업생 |

### 멤버 사진 추가하는 법

1. 사진 파일을 `public/people/` 폴더에 넣기 (예: `gildонghong.jpg`)
2. `data.ts`에서 `photo: "/people/gildонghong.jpg"` 로 경로 지정
3. 권장 사이즈: **정사각형**, 최소 400×400px

> ⚠️ 경로는 반드시 `/people/파일명.확장자` 형식으로 (앞에 `/` 꼭 붙이기!)

---

## 📄 논문 추가하기

`lib/data.ts`의 `PUBLICATIONS` 배열 맨 앞에 추가합니다 (최신순 유지).

```ts
{
  id: "pub-chi2026",                    // 고유 ID
  title: "논문 제목",
  authors: "저자1, 저자2, 저자3",
  venue: "ACM CHI Conference on Human Factors in Computing Systems",  // 학술대회/저널 전체명
  venueShort: "CHI 2026",               // 약어
  year: 2026,
  type: "conference",                   // "conference" | "journal" | "workshop"
  doi: "https://doi.org/10.1145/...",   // 없으면 이 줄 삭제
  pdf: "https://...",                   // PDF 링크 (없으면 이 줄 삭제)
  award: "Best Paper Award",            // 수상했을 때만 추가 (없으면 이 줄 삭제)
  tags: ["태그1", "태그2"],
},
```

---

## 📰 뉴스 추가하기

`lib/data.ts`의 `NEWS` 배열 맨 앞에 추가합니다.

```ts
{
  id: "news-7",                        // 고유 ID (숫자 순서대로)
  date: "2026-03",                     // "YYYY-MM" 형식
  category: "paper",                   // 아래 카테고리 표 참고
  content: "뉴스 내용을 여기에 적습니다.",
  link: "https://...",                  // 관련 링크 (없으면 이 줄 삭제)
},
```

**category 값 종류:**
| 값 | 의미 | 색상 |
|---|---|---|
| `"paper"` | 논문 발표 | 파란색 |
| `"award"` | 수상 | 노란색 |
| `"talk"` | 초청강연/발표 | 보라색 |
| `"event"` | 행사/이벤트 | 초록색 |
| `"join"` | 새 멤버 합류 | 주황색 |
| `"misc"` | 기타 | 회색 |

---

## 🔬 연구 분야 수정하기

`lib/data.ts`의 `RESEARCH_AREAS` 배열을 수정합니다.

```ts
{
  icon: "🩺",                          // 이모지
  title: "연구 분야 제목",
  description: "설명 문장...",
  tags: ["태그1", "태그2", "태그3"],
},
```

---

## 🖼️ 히어로 슬라이드쇼 사진 바꾸기

`lib/data.ts`의 `LAB.heroPhotos` 배열을 수정합니다.

```ts
heroPhotos: [
  "/sigchi.png",
  "/people/sangeunseo.jpg",
  "/people/jiminlee.png",
  // 사진 추가할 때 여기에 한 줄씩 추가
],
```

- 배열이 비어있으면 (`[]`) → 텍스트만 중앙 정렬로 표시
- 사진이 1장 이상이면 → 텍스트 왼쪽 + 슬라이드쇼 오른쪽 레이아웃

---

## 🏠 랩 기본 정보 수정하기

`lib/data.ts`의 `LAB` 객체를 수정합니다.

```ts
export const LAB = {
  name: "H2CI Lab",
  fullName: "Health and Human-Computer Interaction Lab",
  affiliation: "POSTECH",
  department: "Department of ...",
  description: "랩 소개 문장...",
  email: "eunkyungjo@postech.ac.kr",
  location: "POSTECH, Pohang, Gyeongbuk, South Korea",
  twitter: "https://x.com/...",
  github: "https://github.com/...",
};
```

---

## 🖥️ 로컬에서 미리보기 (개발 환경)

수정 결과를 올리기 전에 로컬에서 먼저 확인하고 싶을 때:

```powershell
# 처음 한 번만: 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

→ 브라우저에서 `http://localhost:3000` 접속

> ⚠️ 서버를 끄려면 터미널에서 `Ctrl + C`

---

## 🚨 자주 발생하는 문제

### 사이트가 안 뜨거나 이상하게 보일 때
```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

### push 했는데 사이트가 안 바뀔 때
- Vercel 배포는 1~2분 걸립니다. 조금 기다려보세요.
- https://vercel.com 에서 배포 상태 확인 가능

### 사진이 안 뜰 때
- 경로가 `/people/파일명.jpg` 형식인지 확인 (앞에 `/` 필수!)
- 파일이 `public/people/` 폴더에 실제로 있는지 확인
- 파일명 대소문자 구분 주의 (`Hong.jpg` ≠ `hong.jpg`)

---

## 🛠️ 기술 스택

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel (자동 배포)
- **Repository:** GitHub

---

*H2CI Lab @ POSTECH*
