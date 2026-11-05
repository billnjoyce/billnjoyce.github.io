병팔이 홈페이지 — 배포용

■ 어떻게 올리나
  이 폴더를 통째로 웹서버에 올리면 끝입니다. 빌드 과정이 없습니다.
  index.html 과 img/ 폴더가 같은 위치에 있기만 하면 됩니다.

  · 카페24 / 가비아 등 웹호스팅 → FTP 로 public_html 에 업로드
  · Netlify / Vercel → 이 폴더를 끌어다 놓으면 바로 배포
  · GitHub Pages → 저장소에 넣고 Pages 켜기
  · 도메인 연결 후 https 적용 권장 (대부분 무료로 제공)

■ 고칠 때
  index.html 하나만 열면 됩니다. 글과 스타일이 전부 그 안에 있습니다.
  구글 폰트(Black Han Sans, IBM Plex Sans KR)만 외부에서 불러옵니다.

■ 자주 바꾸는 곳
  스토어 링크   "apps.apple.com" 으로 검색
  연락처        "ibillkim@gmail.com" 으로 검색
  영상          img/play.mp4 교체 (420x900 권장, 무음)
  챕터 이미지   img/ch**.webp 교체

■ 검색·공유 미리보기
  아래 메타 태그가 <head> 에 들어 있습니다. 도메인이 정해지면
  og:url 과 og:image 의 주소를 실제 도메인으로 바꿔 주세요.

■ 용량
  전체 약 4MB. 대부분 영상(img/play.mp4)입니다.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ 공식 스토어 배지 넣기 (코드 수정 불필요)

  img/ 폴더에 아래 이름으로 파일만 넣으면, 지금 보이는 텍스트 배지가
  자동으로 그 이미지로 바뀝니다. 없으면 텍스트 배지가 그대로 남습니다.

    img/badge-appstore.svg     (또는 .png)
    img/badge-googleplay.svg   (또는 .png)
    img/badge-onestore.svg     (또는 .png)

  받는 곳
    App Store    Apple Marketing Resources 에서 "Download on the App Store"
                 한국어 배지를 받으세요. (developer.apple.com → App Store →
                 Marketing Resources)
    Google Play  Google Play 브랜드 가이드라인 페이지의 배지 생성기에서
                 한국어 배지를 받으세요. (play.google.com/intl/ko/badges)
    원스토어     원스토어 개발자센터 / 브랜드 자료실 문의

  ⚠️ 애플·구글 배지는 각 사의 상표 자산입니다. 비슷하게 그려 쓰면 안 되고,
     반드시 공식 파일을 받아 쓰고 각 사의 사용 규정(최소 크기, 여백,
     색상 변형 금지)을 지키세요. 그래서 이 페이지에는 모사본을 넣지
     않았습니다.

  높이는 56px 로 맞춰집니다(모바일 48px). 그 비율에 맞는 파일을 쓰세요.
