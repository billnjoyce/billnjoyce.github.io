(function(){
'use strict';
/* ===== config ===== */
var PLAY='https://play.google.com/store/apps/details?id=com.joycestudios.flashlight&referrer=utm_source%3Dwebsite%26utm_medium%3Dbadge%26utm_campaign%3Dhomepage';
var ONESTORE_PID='0001000958'; /* 원스토어 상품 ID(PID) */
var ONE=ONESTORE_PID?'https://m.onestore.co.kr/v2/ko-kr/app/'+ONESTORE_PID:'https://m.onestore.co.kr/v2/ko-kr/search/result?searchKeyword=JewLight';
/* ===== copy ===== */
var T={en:{
n_feat:'Features',n_gems:'Gems',n_shots:'Screens',n_plans:'Free & Pro',n_faq:'FAQ',n_dl:'Download',
eyebrow:'The gem flashlight',h1a:'Light up the darkness',h1b:'with a shining jewel.',
lead:'JewLight turns your phone’s flashlight into a glowing 3D gem. One tap, one beautiful light — for dark rooms, quiet nights and emergencies.',
hint:'Free to download · Android · iPhone version in preparation',tap:'Tap the gem',
s1:'Gems',s2:'Light modes',s3:'Languages',s4:'Spin & tilt',
f_eb:'Features',f_h:'A flashlight you’ll actually enjoy.',f_p:'Everything you need in the dark — wrapped in something worth looking at.',
c1h:'One tap, instant light',c1p:'Open the app, tap the gem, and the LED lights up right away. No menus in your way.',
c2h:'Spotlight glow',c2p:'The screen dims and the gem blooms with real-looking light, so it feels like holding a jewel.',
c3h:'Spin it 360°',c3p:'Drag to turn the gem and watch light play across every facet.',
c4h:'Mood Lamp',c4p:'A soft, breathing glow for bedside reading, camping or a calm evening.',
c5h:'Widget & Quick tile',c5p:'Switch the light on from your home screen or notification shade on Android — without opening the app.',
c6h:'SOS & Morse',c6p:'Built-in SOS signal, optional siren, and a Morse mode for when you need to be seen or heard.',
g_eb:'The collection',g_h:'Twelve gems. One light.',g_p:'From classic Diamond to the colour-shifting Alexandrite — tap any gem to see it light up above.',
sh_eb:'Inside the app',sh_h:'Made to be looked at.',sh_p:'Swipe through JewLight on a real phone.',
m_eb:'Light modes',m_h:'Seven ways to shine.',m_p:'Steady for everyday, flashing for signalling, SOS and Morse for emergencies.',
m1:'Steady',m1d:'Constant light',m2:'Slow',m2d:'Gentle blink',m3:'Medium',m3d:'Even blink',m4:'Fast',m4d:'Strobe blink',m5d:'Distress signal',m6:'SOS + Siren',m6d:'Light and sound',m7:'Morse',m7d:'Send your message',m8:'Mood Lamp',m8d:'Breathing glow',
p_eb:'Free & Pro',p_h:'Start free. Go Pro when you’re ready.',p_p:'The flashlight you need is free. Pro adds the full collection.',
pf:'Free',pfd:'Everything to get started',pf1:'Diamond & Sapphire gems',pf2:'Steady, Slow and SOS modes',pf3:'10 minutes of light per day (SOS is never limited)',pf4:'Gem of the Day — free for everyone',
pp:'Pro',pp1:'All 12 gems',pp2:'All 7 light modes',pp3:'No ads',pp4:'No daily time limit',ppd:'The complete JewLight experience',
q_eb:'FAQ',q_h:'Questions, answered.',
q1:'Is JewLight free?',a1:'Yes. You can download and use JewLight for free with two gems, three modes and 10 minutes of light per day. Pro unlocks everything.',
q2:'Is there an iPhone version?',a2:'It’s in preparation. The App Store badge will become active as soon as it’s available.',
q3:'Does it use the real camera flash?',a3:'Yes — the LED torch lights up together with the on-screen gem, so it works as a genuine flashlight.',
q4:'Is the SOS signal limited?',a4:'No. SOS and the SOS siren are not counted against the free daily limit, so they’re always there in an emergency.',
q5:'Can I use it from the home screen?',a5:'On Android, add the JewLight widget or the Quick Settings tile and switch the light on without opening the app.',
q6:'Which languages are supported?',a6:'JewLight is available in 20 languages, including English and Korean, and follows your phone’s language.',
d_h:'Get JewLight',d_p:'Free on Android. Pick your store — the iPhone version is on its way.',qr:'Scan for Google Play',
rights:'All rights reserved.',f_priv:'Privacy',f_terms:'Terms',f_sup:'Support',
b_get:'Get it on',b_play:'Google Play',b_one:'ONE store',b_app:'App Store',b_soon:'Coming soon',a_soon:'Download on the'
},ko:{
n_feat:'기능',n_gems:'보석',n_shots:'화면',n_plans:'무료 · 프로',n_faq:'FAQ',n_dl:'다운로드',
eyebrow:'보석 손전등',h1a:'빛나는 보석으로',h1b:'어둠을 밝히세요.',
lead:'JewLight는 휴대폰 손전등을 빛나는 3D 보석으로 바꿔 줍니다. 탭 한 번으로 만나는 아름다운 불빛 — 어두운 방, 고요한 밤, 비상 상황에서도.',
hint:'무료 다운로드 · 안드로이드 · 아이폰 버전 준비 중',tap:'보석을 눌러보세요',
s1:'보석',s2:'조명 모드',s3:'지원 언어',s4:'회전 · 기울이기',
f_eb:'기능',f_h:'쓰는 즐거움이 있는 손전등.',f_p:'어둠 속에서 필요한 모든 것을, 바라보고 싶은 모습으로.',
c1h:'탭 한 번, 즉시 점등',c1p:'앱을 열고 보석을 누르면 바로 LED가 켜집니다. 길을 막는 메뉴는 없어요.',
c2h:'스포트라이트 글로우',c2p:'화면이 어두워지고 보석이 실제처럼 빛을 뿜어, 보석을 손에 쥔 듯한 느낌을 줍니다.',
c3h:'360° 회전',c3p:'보석을 드래그해 돌려 보세요. 모든 단면 위로 빛이 흐릅니다.',
c4h:'무드 램프',c4p:'침대맡 독서, 캠핑, 차분한 저녁을 위한 부드럽게 숨 쉬는 빛.',
c5h:'위젯 · 퀵 타일',c5p:'안드로이드 홈 화면이나 알림창에서 앱을 열지 않고 바로 불을 켜세요.',
c6h:'SOS · 모스 부호',c6p:'기본 SOS 신호와 사이렌, 모스 부호 모드로 위급할 때 나를 알릴 수 있어요.',
g_eb:'컬렉션',g_h:'열두 개의 보석, 하나의 빛.',g_p:'클래식 다이아몬드부터 색이 변하는 알렉산드라이트까지 — 보석을 누르면 위에서 점등됩니다.',
sh_eb:'앱 미리보기',sh_h:'보기만 해도 아름답게.',sh_p:'실제 휴대폰 화면을 넘겨 보세요.',
m_eb:'조명 모드',m_h:'빛나는 일곱 가지 방법.',m_p:'일상엔 일반, 신호엔 점멸, 비상엔 SOS와 모스 부호.',
m1:'일반',m1d:'꾸준한 빛',m2:'느린 점멸',m2d:'천천히 깜빡임',m3:'보통 점멸',m3d:'일정한 깜빡임',m4:'빠른 점멸',m4d:'스트로브 점멸',m5d:'조난 신호',m6:'SOS + 사이렌',m6d:'빛과 소리',m7:'모스 부호',m7d:'메시지 전송',m8:'무드 램프',m8d:'숨 쉬는 빛',
p_eb:'무료 · 프로',p_h:'무료로 시작하고, 필요할 때 프로로.',p_p:'꼭 필요한 손전등은 무료입니다. 프로는 전체 컬렉션을 열어 줘요.',
pf:'무료',pfd:'시작에 필요한 모든 것',pf1:'다이아몬드 · 사파이어 보석',pf2:'일반 · 느린 점멸 · SOS 모드',pf3:'하루 10분 점등 (SOS는 제한 없음)',pf4:'오늘의 보석 — 모두에게 무료',
pp:'프로',pp1:'보석 12종 전체',pp2:'조명 모드 7종 전체',pp3:'광고 없음',pp4:'일일 시간 제한 없음',ppd:'완전한 JewLight 경험',
q_eb:'FAQ',q_h:'자주 묻는 질문',
q1:'JewLight는 무료인가요?',a1:'네. 보석 2종, 모드 3종, 하루 10분 점등을 무료로 이용할 수 있고, 프로로 모든 기능이 열립니다.',
q2:'아이폰 버전도 있나요?',a2:'준비 중입니다. 출시되면 App Store 배지가 활성화됩니다.',
q3:'실제 카메라 플래시를 사용하나요?',a3:'네. 화면의 보석과 함께 LED 플래시가 켜져 진짜 손전등으로 쓸 수 있습니다.',
q4:'SOS 신호에도 제한이 있나요?',a4:'아니요. SOS와 SOS 사이렌은 무료 일일 한도에 포함되지 않아 위급할 때 언제든 사용할 수 있어요.',
q5:'홈 화면에서 바로 켤 수 있나요?',a5:'안드로이드에서 JewLight 위젯이나 퀵 설정 타일을 추가하면 앱을 열지 않고 바로 켤 수 있어요.',
q6:'어떤 언어를 지원하나요?',a6:'한국어, 영어를 포함한 20개 언어를 지원하며 휴대폰 언어를 따라갑니다.',
d_h:'JewLight 다운로드',d_p:'안드로이드에서 무료. 원하는 스토어를 고르세요 — 아이폰 버전은 준비 중입니다.',qr:'Google Play용 QR 스캔',
rights:'모든 권리 보유.',f_priv:'개인정보처리방침',f_terms:'이용약관',f_sup:'지원',
b_get:'다운로드',b_play:'Google Play',b_one:'원스토어',b_app:'App Store',b_soon:'준비 중',a_soon:'다운로드'
}};
var lang=document.documentElement.lang==='ko'?'ko':'en';
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
/* ===== badges ===== */
var PLAYSVG='<svg viewBox="0 0 30 30" aria-hidden="true"><path fill="#00D2FF" d="M2 1.8 15.6 15 2 28.2c-.4-.3-.6-.9-.6-1.5V3.3c0-.6.2-1.2.6-1.5z"/><path fill="#00F076" d="M2 1.8c.4-.3 1-.3 1.6 0L21 11.8 15.6 15z"/><path fill="#FF3A44" d="M3.6 28.2c-.6.3-1.2.3-1.6 0L15.6 15 21 18.2z"/><path fill="#FFD400" d="m21 11.8 5.4 3.1c.9.5.9 1.3 0 1.8L21 18.2 17.1 15z"/></svg>';
var ONESVG='<svg viewBox="0 0 30 30" aria-hidden="true"><defs><linearGradient id="og" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2E7BFF"/><stop offset="1" stop-color="#1230C8"/></linearGradient></defs><rect x="1" y="1" width="28" height="28" rx="8" fill="url(#og)"/><text x="15" y="19.5" text-anchor="middle" font-family="Poppins,Arial" font-weight="700" font-size="11" fill="#fff">ONE</text></svg>';
var APPSVG='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#fff" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>';
function badges(){var d=T[lang];return '<a class="badge" href="'+PLAY+'" target="_blank" rel="noopener" aria-label="Google Play">'+PLAYSVG+'<span><small>'+d.b_get+'</small><b>'+d.b_play+'</b></span></a>'+
'<a class="badge" href="'+ONE+'" target="_blank" rel="noopener" aria-label="ONE store">'+ONESVG+'<span><small>'+d.b_get+'</small><b>'+d.b_one+'</b></span></a>'+
'<span class="badge soon" role="img" aria-label="App Store – '+d.b_soon+'">'+APPSVG+'<span><small>'+d.a_soon+'</small><b>'+d.b_app+'</b></span><i class="tag">'+d.b_soon+'</i></span>';}
/* ===== i18n apply ===== */
function apply(){
  var d=T[lang];document.documentElement.lang=lang;
  $$('[data-t]').forEach(function(e){e.textContent=d[e.getAttribute('data-t')]});
  $$('[data-badges]').forEach(function(e){e.innerHTML=badges()});
  $$('.lang button').forEach(function(b){b.classList.toggle('on',b.dataset.l===lang)});
  document.title=lang==='ko'?'JewLight – 손전등이 빛나는 보석이 되다':'JewLight – Turn your phone into a glowing gem flashlight';
  $('meta[name=description]').content=lang==='ko'?'JewLight는 휴대폰 손전등을 빛나는 3D 보석으로 바꿔 줍니다. 보석 12종, 조명 모드 7종, SOS·모스 부호, 안드로이드 위젯. Google Play·원스토어에서 무료.':'JewLight turns your phone\'s flashlight into a glowing 3D gem. 12 gems, 7 light modes, SOS & Morse, Android widget. Free on Google Play and ONE store.';
  buildGallery();buildRail();showGem(cur,true);
}
$$('.lang button').forEach(function(b){b.onclick=function(){lang=b.dataset.l;try{localStorage.setItem('jl_site_lang',lang)}catch(e){}apply()}});
/* ===== gems ===== */
var G=window.GEMS,cur=0,lit=false,timer=null,fr=0,loaded={};
var stage=$('#stage'),img=$('#gimg');
var RAR={en:{CLASSIC:'Classic',RARE:'Rare',EPIC:'Epic',LEGEND:'Legend'},ko:{CLASSIC:'클래식',RARE:'레어',EPIC:'에픽',LEGEND:'레전드'}};
var src=function(g,i){return 'assets/gems/'+g.id+'_'+(i==null?'unlit':('0'+i).slice(-2))+'.webp'};
function preload(g){if(loaded[g.id])return;loaded[g.id]=1;for(var i=0;i<14;i++){(new Image()).src=src(g,i)}}
function stop(){clearInterval(timer);timer=null;lit=false;stage.classList.remove('lit');document.body.classList.remove('dim');img.src=src(G[cur])}
function start(){preload(G[cur]);lit=true;stage.classList.add('lit');document.body.classList.add('dim');fr=0;img.src=src(G[cur],0);
  timer=setInterval(function(){fr=(fr+1)%14;img.src=src(G[cur],fr)},130)}
function showGem(i,keep){cur=i;var g=G[i],n=g[lang];
  $('#gn').textContent=n[0];$('#gs').textContent=n[1];var r=$('#gr');r.textContent=RAR[lang][g.r];r.className='rar r-'+g.r;
  $('#gs').style.cssText='display:block';
  document.querySelector('.hero').style.setProperty('--acc',g.c);
  $$('#pick button').forEach(function(b,k){b.classList.toggle('on',k===i)});
  if(lit&&keep!==true){stop();start()}else if(!lit){img.src=src(g)}
}
$('#pick').innerHTML=G.map(function(g,i){return '<button aria-label="'+g.en[0]+'" data-i="'+i+'"><img src="'+src(g)+'" alt="" loading="lazy" width="30" height="30"></button>'}).join('');
$$('#pick button').forEach(function(b){b.onclick=function(){var i=+b.dataset.i;var was=lit;if(lit)stop();showGem(i);preload(G[i]);if(was)start()}});
$('#gemBtn').onclick=function(){lit?stop():start();if(navigator.vibrate)try{navigator.vibrate(lit?18:10)}catch(e){}};
document.addEventListener('click',function(e){if(lit&&!e.target.closest('.hero')&&!e.target.closest('.spot'))return});
$('.spot').onclick=stop;
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&lit)stop()});
function buildGallery(){$('#gg').innerHTML=G.map(function(g,i){return '<button class="gc rv in" style="--c:'+g.c+'" data-i="'+i+'">'+(g.free?'<i class="fr">FREE</i>':'')+'<img src="'+src(g)+'" alt="'+g.en[0]+'" loading="lazy" width="156" height="156"><b>'+g[lang][0]+'</b><span class="s">'+g[lang][1]+'</span><span class="rar r-'+g.r+'">'+RAR[lang][g.r]+'</span></button>'}).join('');
  $$('#gg .gc').forEach(function(b){b.onclick=function(){var i=+b.dataset.i;if(lit)stop();showGem(i);window.scrollTo({top:0,behavior:'smooth'});setTimeout(function(){start()},650)}})}
function buildRail(){var h='';for(var i=1;i<=8;i++)h+='<figure><img src="assets/shots/'+lang+'/ss'+i+'.webp" alt="JewLight screen '+i+'" loading="lazy" width="260" height="563"></figure>';$('#rail').innerHTML=h}
$('#prev').onclick=function(){$('#rail').scrollBy({left:-300,behavior:'smooth'})};$('#next').onclick=function(){$('#rail').scrollBy({left:300,behavior:'smooth'})};
/* ===== nav + reveal ===== */
var nav=$('#nav');function sc(){nav.classList.toggle('s',scrollY>30)}addEventListener('scroll',sc,{passive:true});sc();
$$('.card').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px')})});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});$$('.rv').forEach(function(e){io.observe(e)})}else $$('.rv').forEach(function(e){e.classList.add('in')});
/* ===== stars ===== */
(function(){var c=$('#stars'),x=c.getContext('2d'),S=[],W,H,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
function rs(){W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;S=[];var n=Math.min(110,W*H/9000|0);for(var i=0;i<n;i++)S.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.4+.3,p:Math.random()*6.28,s:Math.random()*.02+.005})}
function dr(){x.clearRect(0,0,W,H);S.forEach(function(s){s.p+=s.s;var a=.35+.65*Math.abs(Math.sin(s.p));x.fillStyle='rgba(255,244,214,'+a.toFixed(2)+')';x.beginPath();x.arc(s.x,s.y,s.r,0,6.283);x.fill()});if(!rm&&!document.hidden)requestAnimationFrame(dr)}
rs();dr();addEventListener('resize',rs);if(!rm)document.addEventListener('visibilitychange',dr)})();
$('#yr').textContent=new Date().getFullYear();
apply();
})();
