JewLight 운영툴 (빌드 완료본) — 이 admin 폴더를 그대로 올리면 됩니다.

1) config.js 의 apiKey 에 Firebase 웹 앱 apiKey 를 넣으세요 (콘솔 > 프로젝트 설정 > 일반 > 웹 앱).
2) 배포:
   · Firebase Hosting: backend/public/admin 에 이 폴더 내용을 덮어쓰고 `firebase deploy --only hosting`
     (backend.zip 안의 public/admin 에는 이미 이 빌드가 들어 있어요)
   · 다른 서버: 정적 호스팅이면 어디든 OK (상대경로라 하위 폴더에 올려도 동작)
3) 미리보기: 주소 끝에 ?demo=1 (가짜 데이터)
자세한 설정은 backend/ADMIN_SETUP.md
