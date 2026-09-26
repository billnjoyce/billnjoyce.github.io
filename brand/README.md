# Joyce Studios — 통합 브랜드 사이트

순수 HTML/CSS/JS (빌드 도구 없음). 내용은 전부 `data/*.json` 에서 관리합니다.

## 실행
- 웹 서버에 폴더째 업로드 (Netlify, Vercel, GitHub Pages, Cloudflare Pages 등) — 가장 권장
- 로컬 확인: `npx serve .` 또는 `python3 -m http.server`
- `index.html` 더블클릭(file://)도 동작합니다. 이때는 `data/bundle.js` 를 읽으므로,
  JSON 을 수정한 뒤에는 `node build-bundle.js` 를 한 번 실행하세요 (참조 오류도 검사해 줍니다).

## JSON 파일
| 파일 | 역할 |
|---|---|
| `order.json` | **상품 표시 순서** (`products` 배열 순서 = 사이트 전체 순서), 홈 대표 자료(`featured`), 숨김(`hidden`) |
| `products.json` | 상품별 모든 콘텐츠·색상·링크·FAQ. 새 상품은 여기에 추가 후 `order.json` 에 id 추가 |
| `categories.json` | 카테고리 |
| `paths.json` | 학습 로드맵 (목표별 추천 순서) |
| `faq.json` | 전체 FAQ + "나에게 맞는 자료" 질문/가중치(tags) |
| `site.json` | 브랜드명, 메뉴, 히어로 문구, 저자 소개, 푸터 고지문 |

## 자주 하는 작업
- 순서 바꾸기: `order.json` 의 id 줄을 위아래로 이동
- 링크/가격 수정: `products.json` → 해당 상품의 `links`, `price`
- 새 판매처 추가: `links` 배열에 `{ "label": "...", "platform": "...", "url": "..." }` 추가 (`primary: true` 가 메인 버튼)
- 상품 숨기기: `order.json` 의 `hidden` 에 id 이동
- 커버 모양: `type` (ebook / prompt / sheet / template / app / free), 색상 `accent`, `accent2`
