/* Joyce Studios — 통합 브랜드 사이트
 * 데이터는 /data/*.json 에서 읽습니다. (파일 직접 열기 등으로 fetch가 막히면 data/bundle.js 로 자동 대체)
 */
(function () {
  'use strict';

  var DATA = {};          // { site, order, categories, products, paths, faq }
  var LIST = [];          // 순서가 적용된 상품 배열 [{id, ...product}]
  var timers = [];
  var pos = {}, curKey = null, byClick = false, internal = 0, firstRoute = true;
  try { history.scrollRestoration = 'manual'; } catch (e) {}
  function jump(y) { try { window.scrollTo({ top: y, left: 0, behavior: 'instant' }); } catch (e) { window.scrollTo(0, y); } }
  function hkey() { return location.hash || '#/'; }
  var app = document.getElementById('app');

  /* ---------- utils ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function cat(id) { return DATA.categories.filter(function (c) { return c.id === id; })[0]; }
  function prod(id) { return LIST.filter(function (p) { return p.id === id; })[0]; }
  function idx(id) { for (var i = 0; i < LIST.length; i++) if (LIST[i].id === id) return i; return -1; }
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function ext(url) { return 'href="' + esc(url) + '" target="_blank" rel="noopener noreferrer"'; }
  function accent(p) { return '--a:' + esc(p.accent) + ';--a2:' + esc(p.accent2 || p.accent); }
  var TYPE_LABEL = { ebook: 'E-BOOK', prompt: 'PROMPT PACK', sheet: 'TEMPLATE', template: 'DOC KIT', app: 'SERVICE', free: 'FREE PDF' };
  var TYPE_NAME = { ebook: '전자책', prompt: '프롬프트 팩', sheet: '스프레드시트', template: '문서 템플릿', app: '앱·서비스', free: '무료 자료' };

  function clearTimers() { timers.forEach(function (t) { clearTimeout(t); clearInterval(t); }); timers = []; }

  /* ---------- data ---------- */
  function fetchJSON(name) {
    return fetch('data/' + name + '.json', { cache: 'no-cache' }).then(function (r) {
      if (!r.ok) throw new Error(name + ' ' + r.status);
      return r.json();
    });
  }
  function load() {
    var names = ['site', 'order', 'categories', 'products', 'paths', 'faq'];
    if (location.protocol === 'file:' && window.__BRAND_DATA__) return Promise.resolve(window.__BRAND_DATA__);
    return Promise.all(names.map(fetchJSON)).then(function (arr) {
      var d = {}; names.forEach(function (n, i) { d[n] = arr[i]; }); return d;
    }).catch(function (err) {
      if (window.__BRAND_DATA__) return window.__BRAND_DATA__;
      throw err;
    });
  }
  function buildList() {
    var hidden = DATA.order.hidden || [];
    LIST = (DATA.order.products || []).filter(function (id) {
      return DATA.products[id] && hidden.indexOf(id) < 0;
    }).map(function (id) { var p = DATA.products[id]; p.id = id; return p; });
  }

  /* ---------- components ---------- */
  function cover(p, extra) {
    var c = p.cover || { kicker: '', title: p.title };
    var img = p.image ? '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + ' 대표 이미지" loading="lazy" referrerpolicy="no-referrer" onerror="var c=this.parentNode;c.classList.remove(\'shot\');this.remove()">' : '';
    return '<div class="cover t-' + esc(p.type) + ' ' + (p.image ? 'shot ' : '') + (extra || '') + '" style="' + accent(p) + '"' + (p.image ? '' : ' aria-hidden="true"') + '>' + img +
      '<span class="ck">' + esc(c.kicker) + '</span><span class="ci">' + esc(p.icon) + '</span>' +
      '<span class="ct">' + esc(c.title) + '</span>' +
      '<span class="cb"><span>' + esc(DATA.site.brand.name.toUpperCase()) + '</span><span>' + esc(TYPE_LABEL[p.type] || '') + '</span></span></div>';
  }
  function primaryLink(p) {
    var l = (p.links || []).filter(function (x) { return x.primary; })[0] || (p.links || [])[0];
    return l;
  }
  function pcard(p, i, delay) {
    var c = cat(p.category) || {};
    return '<a class="pcard rv rv-z" href="#/p/' + esc(p.id) + '" style="' + accent(p) + ';--d:' + (delay || 0) + 's" data-tilt>' +
      '<span class="corner">' + esc((c.icon || '') + ' ' + (c.label || '')) + '</span>' +
      '<div class="stage">' + cover(p, 'tilt') + '</div>' +
      '<div class="body"><span class="no">NO.' + pad(i + 1) + ' · ' + esc(TYPE_NAME[p.type] || '') + '</span>' +
      '<h3>' + esc(p.title) + '</h3><p class="hook">' + esc(p.hook) + '</p>' +
      '<div class="tags">' + (p.badges || []).slice(0, 2).map(function (b) { return '<span class="tag">' + esc(b) + '</span>'; }).join('') + '</div>' +
      '<div class="meta"><span class="price">' + esc(p.price.label) + '</span><span class="tag plain">자세히 →</span></div></div></a>';
  }
  function sectionHead(eyebrow, title, desc) {
    return '<div class="sec-head rv"><span class="eyebrow"><b></b>' + esc(eyebrow) + '</span><h2>' + title + '</h2>' + (desc ? '<p>' + esc(desc) + '</p>' : '') + '</div>';
  }
  function faqList(items) {
    return items.map(function (f) { return '<details class="rv"><summary>' + esc(f.q) + '</summary><div class="ans">' + esc(f.a) + '</div></details>'; }).join('');
  }
  function buyButtons(p, size) {
    return (p.links || []).map(function (l) {
      return '<a class="btn ' + (l.primary ? 'btn-primary pulse' : 'btn-ghost') + ' ' + (size || '') + '" ' + ext(l.url) + '>' + esc(l.label) + ' ↗</a>';
    }).join('');
  }
  function ctaBanner() {
    return '<section class="section tight"><div class="wrap"><div class="cta rv rv-z"><h2>오늘, 첫 번째 자료를 골라 보세요</h2>' +
      '<p>세 가지 질문에 답하면 지금 나에게 맞는 자료를 추천해 드립니다.</p>' +
      '<a class="btn btn-lg" href="#/finder">나에게 맞는 자료 찾기 →</a></div></div></section>';
  }

  /* ---------- pages ---------- */
  function pageHome() {
    var S = DATA.site, H = S.hero;
    var stage = ['justdo', 'appintoss-playbook', 'rent-20h'].map(prod).filter(Boolean);
    if (stage.length < 3) stage = LIST.slice(0, 3);
    var marq = LIST.map(function (p) {
      return '<a href="#/p/' + esc(p.id) + '" style="--c:' + esc(p.accent) + '"><span>' + esc(p.icon) + '</span>' + esc(p.title) + '</a>';
    }).join('');
    var stats = S.stats.map(function (s, i) {
      var v = s.auto === 'productCount' ? LIST.length : s.value;
      return '<div class="stat rv rv-z" style="--d:' + i * 0.08 + 's"><div class="num grad-text"><span class="counter" data-to="' + v + '"' + (s.plain ? ' data-plain="1"' : '') + '>0</span>' + esc(s.suffix || '') + '</div><div class="lab">' + esc(s.label) + '</div></div>';
    }).join('');
    var feats = (DATA.order.featured || []).map(prod).filter(Boolean).map(function (p) {
      var c = cat(p.category) || {};
      return '<article class="feature rv" style="' + accent(p) + '"><div><span class="tag">' + esc(c.icon + ' ' + c.label) + '</span>' +
        '<h3>' + esc(p.title) + '</h3><p>' + esc(p.summary) + '</p>' +
        '<ul>' + (p.outcomes || []).slice(0, 3).map(function (o) { return '<li>' + esc(o.title) + '</li>'; }).join('') + '</ul>' +
        '<div class="pd-buy" style="margin:0"><div class="pd-price"><b>' + esc(p.price.label) + '</b><small>' + esc(p.price.note || '') + '</small></div>' +
        '<a class="btn btn-primary" href="#/p/' + esc(p.id) + '">자세히 보기 →</a></div></div>' +
        '<div class="f-vis" data-tilt>' + cover(p, 'tilt') + '</div></article>';
    }).join('');
    var cats = DATA.categories.map(function (c, i) {
      var n = LIST.filter(function (p) { return p.category === c.id; }).length;
      return '<a class="cat rv" style="--c:' + esc(c.accent) + ';--d:' + i * 0.07 + 's" href="#/products?c=' + esc(c.id) + '"><span class="ico">' + esc(c.icon) + '</span><b>' + esc(c.label) + '</b><span>' + esc(c.desc) + '</span><em>' + n + '개 자료 →</em></a>';
    }).join('');
    var grid = LIST.slice(0, 8).map(function (p, i) { return pcard(p, i, (i % 4) * 0.07); }).join('');
    var paths = DATA.paths.map(function (pt, i) {
      return '<a class="cat rv" style="--c:' + esc(pt.accent) + ';--d:' + i * 0.07 + 's" href="#/paths#' + esc(pt.id) + '"><span class="ico">' + esc(pt.icon) + '</span><b>' + esc(pt.title) + '</b><span>' + esc(pt.goal) + '</span><em>' + pt.steps.length + '단계 로드맵 →</em></a>';
    }).join('');
    var principles = S.author.principles.map(function (x, i) { return '<div class="rv" style="--d:' + i * 0.07 + 's"><b>' + esc(x.title) + '</b><span>' + esc(x.desc) + '</span></div>'; }).join('');

    return '' +
    '<section class="hero"><div class="wrap hero-grid"><div>' +
      '<span class="eyebrow rv"><b></b>' + esc(H.eyebrow) + '</span>' +
      '<h1 class="rv" style="--d:.08s">' + esc(H.titleLead) + '<br><span class="grad-text rot" id="rot"></span><span class="caret"></span></h1>' +
      '<p class="sub rv" style="--d:.16s">' + esc(H.sub) + '</p>' +
      '<div class="hero-cta rv" style="--d:.24s"><a class="btn btn-primary btn-lg" href="#' + esc(H.ctaPrimary.route) + '">' + esc(H.ctaPrimary.label) + ' →</a><a class="btn btn-ghost btn-lg" href="#' + esc(H.ctaSecondary.route) + '">' + esc(H.ctaSecondary.label) + '</a></div>' +
    '</div><div class="hero-stage rv rv-z" data-tilt>' + stage.map(function (p) { return cover(p, 'tilt'); }).join('') +
    '<div class="chips-floating"><span style="left:0;bottom:6%;animation-delay:-1s">📱 토스 미니앱</span><span style="right:2%;top:2%;animation-delay:-3s">🤖 AI 프롬프트</span><span style="right:12%;bottom:0;animation-delay:-5s">🚀 앱 출시</span></div></div></div></section>' +
    '<div class="marquee" aria-label="상품 목록"><div class="marquee-track">' + marq + marq + '</div></div>' +
    '<section class="section tight"><div class="wrap"><div class="stats">' + stats + '</div></div></section>' +
    '<section class="section"><div class="wrap">' + sectionHead('FEATURED', '가장 먼저 보실 <span class="grad-text">대표 자료</span>', '지금 가장 많이 찾는 주제부터 골랐습니다.') + feats + '</div></section>' +
    '<section class="section"><div class="wrap">' + sectionHead('CATEGORIES', '주제별로 <span class="grad-text">골라 보세요</span>', '목적에 맞는 카테고리에서 바로 시작하세요.') + '<div class="grid cols-3">' + cats + '</div></div></section>' +
    '<section class="section"><div class="wrap">' + sectionHead('LINEUP', '전체 <span class="grad-text">라인업</span>', '전자책, 프롬프트 팩, 템플릿, 그리고 직접 만든 서비스까지.') + '<div class="grid cols-4">' + grid + '</div>' +
      '<div style="text-align:center;margin-top:34px" class="rv"><a class="btn btn-ghost btn-lg" href="#/products">전체 ' + LIST.length + '개 자료 보기 →</a></div></div></section>' +
    '<section class="section"><div class="wrap">' + sectionHead('ROADMAP', '순서대로 따라가는 <span class="grad-text">학습 로드맵</span>', '어떤 자료를 어떤 순서로 보면 좋은지 목표별로 정리했습니다.') + '<div class="grid cols-2">' + paths + '</div></div></section>' +
    '<section class="section"><div class="wrap about-grid"><div class="rv rv-l"><div class="avatar">' + esc(S.brand.short) + '</div></div><div class="rv rv-r">' +
      '<span class="eyebrow"><b></b>ABOUT</span><h2 style="font-size:clamp(1.7rem,4vw,2.6rem);letter-spacing:-.03em;font-weight:900;margin:14px 0">직접 해본 사람이<br><span class="grad-text">직접 쓰는 절차만</span> 담습니다</h2>' +
      '<p style="color:var(--muted)">' + esc(S.author.bio) + '</p><div class="principles">' + principles + '</div>' +
      '<div style="margin-top:24px"><a class="btn btn-ghost" href="#/about">저자 소개 더 보기 →</a></div></div></div></section>' +
    '<section class="section tight"><div class="wrap" style="max-width:820px">' + sectionHead('FAQ', '자주 묻는 <span class="grad-text">질문</span>') + faqList(DATA.faq.global.slice(0, 4)) +
      '<div style="margin-top:22px" class="rv"><a class="btn btn-ghost btn-sm" href="#/faq">질문 더 보기 →</a></div></div></section>' +
    ctaBanner();
  }

  function pageProducts(q) {
    var chips = '<button class="chip on" data-c="">전체 ' + LIST.length + '</button>' + DATA.categories.map(function (c) {
      var n = LIST.filter(function (p) { return p.category === c.id; }).length;
      return n ? '<button class="chip" data-c="' + esc(c.id) + '">' + esc(c.icon + ' ' + c.label) + ' ' + n + '</button>' : '';
    }).join('');
    return '<section class="wrap page-head"><span class="eyebrow rv"><b></b>ALL PRODUCTS</span><h1 class="rv">전체 <span class="grad-text">상품</span></h1><p class="rv">표시 순서는 <code>data/order.json</code> 의 순서를 그대로 따릅니다.</p></section>' +
      '<section class="wrap" style="padding-bottom:40px"><div class="toolbar"><div class="chips" id="chips">' + chips + '</div>' +
      '<input class="search" id="search" type="search" placeholder="자료 검색 (예: 토스, 결제, 프롬프트)" aria-label="자료 검색"></div>' +
      '<div class="grid cols-3" id="plist"></div><div class="empty" id="empty" hidden>조건에 맞는 자료가 없습니다.</div></section>' + ctaBanner();
  }
  function initProducts(q) {
    var state = { c: (q && q.c) || '', s: (q && q.s) || '' };
    $('#search').value = state.s;
    var chipsEl = $('#chips'), list = $('#plist'), empty = $('#empty');
    function draw() {
      var kw = state.s.trim().toLowerCase();
      var rows = LIST.filter(function (p) {
        if (state.c && p.category !== state.c) return false;
        if (!kw) return true;
        return (p.title + ' ' + p.subtitle + ' ' + p.hook + ' ' + p.summary + ' ' + (p.tags || []).join(' ')).toLowerCase().indexOf(kw) >= 0;
      });
      list.innerHTML = rows.map(function (p, i) { return pcard(p, idx(p.id), (i % 3) * 0.07); }).join('');
      empty.hidden = rows.length > 0;
      var qs = []; if (state.c) qs.push('c=' + encodeURIComponent(state.c)); if (state.s) qs.push('s=' + encodeURIComponent(state.s));
      try { history.replaceState(null, '', '#/products' + (qs.length ? '?' + qs.join('&') : '')); curKey = hkey(); } catch (e) {}
      $$('.chip', chipsEl).forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-c') === state.c); });
      observe(); bindTilt();
    }
    chipsEl.addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return; state.c = b.getAttribute('data-c'); draw();
    });
    $('#search').addEventListener('input', function (e) { state.s = e.target.value; draw(); });
    draw();
  }

  function pageProduct(id) {
    var p = prod(id); if (!p) return page404();
    var c = cat(p.category) || {}, i = idx(id), pl = primaryLink(p);
    var spec = (p.stats || []).map(function (s) { return '<div class="rv rv-z"><b>' + esc(s.value) + '</b><span>' + esc(s.label) + '</span></div>'; }).join('');
    var pains = (p.pains || []).map(function (t, k) { return '<li class="rv" style="--d:' + k * 0.06 + 's">' + esc(t) + '</li>'; }).join('');
    var outs = (p.outcomes || []).map(function (o, k) { return '<div class="out rv" style="--d:' + k * 0.07 + 's"><div class="n">' + pad(k + 1) + '</div><b>' + esc(o.title) + '</b><p>' + esc(o.desc) + '</p></div>'; }).join('');
    var inc = (p.includes || []).map(function (o, k) { return '<div class="inc-item rv" style="--d:' + k * 0.06 + 's"><i>' + (k + 1) + '</i><div><b>' + esc(o.name) + '</b><span>' + esc(o.desc) + '</span></div></div>'; }).join('');
    var toc = (p.toc && p.toc.length) ? '<section class="pd-sec"><div class="wrap"><h2 class="rv">목차 · 상세 구성</h2><p class="cap rv">한눈에 훑어보는 전체 구성입니다.</p><div class="toc-box rv"><ol class="toc-list">' + p.toc.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ol></div></div></section>' : '';
    var who = '<section class="pd-sec"><div class="wrap two"><div class="panel yes rv rv-l"><h3>이런 분께 맞습니다</h3><ul>' + (p.forWho || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="panel no rv rv-r"><h3>이런 분께는 맞지 않습니다</h3><ul>' + (p.notFor || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div></div></section>';
    var faq = (p.faq && p.faq.length) ? '<section class="pd-sec"><div class="wrap" style="max-width:820px"><h2 class="rv">자주 묻는 질문</h2><p class="cap rv">구매 전에 많이 묻는 내용입니다.</p>' + faqList(p.faq) + '</div></section>' : '';
    var rel = (p.related || []).map(prod).filter(Boolean).map(function (r, k) { return pcard(r, idx(r.id), k * 0.07); }).join('');
    var prev = LIST[i - 1], next = LIST[i + 1];

    var html = '<div style="' + accent(p) + '">' +
    '<section class="pd-hero"><div class="wrap"><nav class="crumb"><a href="#/">홈</a>/<a href="#/products">전체 상품</a>/<a href="#/products?c=' + esc(p.category) + '">' + esc(c.label) + '</a>/<span>' + esc(p.title) + '</span></nav>' +
      '<div class="pd-grid"><div><div class="tags rv">' + '<span class="tag">' + esc((c.icon || '') + ' ' + (c.label || '')) + '</span><span class="tag plain">' + esc(TYPE_NAME[p.type] || '') + '</span><span class="tag plain">난이도 · ' + esc(p.level) + '</span></div>' +
      '<h1 class="rv" style="--d:.06s">' + esc(p.title) + '</h1><p class="subt rv" style="--d:.1s">' + esc(p.subtitle) + '</p>' +
      '<div class="hookline rv" style="--d:.14s">' + esc(p.hook) + '</div><p class="lead rv" style="--d:.18s">' + esc(p.summary) + '</p>' +
      '<div class="pd-buy rv" id="buyZone" style="--d:.22s"><div class="pd-price"><b>' + esc(p.price.label) + '</b><small>' + esc(p.price.note || '') + '</small></div>' + buyButtons(p, 'btn-lg') + '</div>' +
      '<div class="tags rv" style="margin-top:18px">' + (p.badges || []).map(function (b) { return '<span class="tag">' + esc(b) + '</span>'; }).join('') + '</div></div>' +
      '<div class="pd-vis rv rv-z" data-tilt>' + cover(p, 'tilt') + '<span class="shadow"></span></div></div>' +
      '<div class="spec">' + spec + '</div></div></section>' +
    ((p.pains && p.pains.length) ? '<section class="pd-sec"><div class="wrap"><h2 class="rv">이런 고민, 있으셨죠?</h2><p class="cap rv">하나라도 해당된다면 이 자료가 도움이 됩니다.</p><ul class="pain">' + pains + '</ul></div></section>' : '') +
    '<section class="pd-sec"><div class="wrap"><h2 class="rv">이 자료로 <span class="grad-text">달라지는 것</span></h2><p class="cap rv">핵심만 골랐습니다.</p><div class="outs">' + outs + '</div></div></section>' +
    '<section class="pd-sec"><div class="wrap"><h2 class="rv">구성 · 제공 내용</h2><p class="cap rv">' + esc(p.format) + (p.pages ? ' · ' + esc(p.pages) : '') + '</p><div class="inc">' + inc + '</div></div></section>' +
    toc + who +
    '<section class="pd-sec"><div class="wrap" style="max-width:820px"><div class="honest rv"><b>구매 전 꼭 읽어주세요</b>' + esc(p.honest) + '</div></div></section>' + faq +
    '<section class="pd-sec" id="buy"><div class="wrap" style="max-width:820px"><div class="buy-panel rv rv-z"><h2>' + esc(p.title) + '</h2><p>' + esc(p.hook) + '</p><div class="buy-links">' + buyButtons(p, 'btn-lg') + '</div></div></div></section>' +
    (rel ? '<section class="pd-sec"><div class="wrap"><h2 class="rv">함께 보면 좋은 자료</h2><p class="cap rv">이어서 보면 좋은 순서로 골랐습니다.</p><div class="grid cols-3">' + rel + '</div></div></section>' : '') +
    '<section class="pd-sec"><div class="wrap two">' +
      (prev ? '<a class="btn btn-ghost" href="#/p/' + esc(prev.id) + '">← ' + esc(prev.title) + '</a>' : '<span></span>') +
      (next ? '<a class="btn btn-ghost" href="#/p/' + esc(next.id) + '">' + esc(next.title) + ' →</a>' : '<span></span>') + '</div></section></div>';

    return { html: html, title: p.title + ' — ' + DATA.site.brand.name, buy: pl ? { p: p, link: pl } : null };
  }

  function pagePaths() {
    var body = DATA.paths.map(function (pt) {
      var steps = pt.steps.map(function (s, k) {
        var p = prod(s.product); if (!p) return '';
        return '<div class="step rv" data-n="' + (k + 1) + '" style="--d:' + k * 0.08 + 's">' + cover(p) + '<div><h4>' + esc(p.title) + '</h4><p>' + esc(s.why) + '</p></div><a class="btn btn-ghost btn-sm" href="#/p/' + esc(p.id) + '">보기 →</a></div>';
      }).join('');
      return '<div class="path" id="' + esc(pt.id) + '" style="--c:' + esc(pt.accent) + '"><div class="path-head rv"><div class="pi">' + esc(pt.icon) + '</div><div><h3>' + esc(pt.title) + '</h3><p>목표: ' + esc(pt.goal) + '</p></div></div><div class="timeline">' + steps + '</div></div>';
    }).join('');
    return '<section class="wrap page-head"><span class="eyebrow rv"><b></b>ROADMAP</span><h1 class="rv">목표별 <span class="grad-text">학습 로드맵</span></h1><p class="rv">무엇부터 봐야 할지 모르겠다면, 목표에 맞는 순서를 따라가세요.</p></section><section class="wrap" style="padding-bottom:30px">' + body + '</section>' + ctaBanner();
  }

  function pageFinder() {
    return '<section class="wrap page-head" style="text-align:center"><span class="eyebrow rv"><b></b>FINDER</span><h1 class="rv">나에게 맞는 <span class="grad-text">자료 찾기</span></h1><p class="rv" style="margin-inline:auto">세 가지 질문에 답하면 가장 잘 맞는 자료를 추천해 드립니다.</p></section>' +
      '<section class="wrap finder" style="padding-bottom:70px"><div id="fbox"></div></section>';
  }
  function initFinder() {
    var qs = DATA.faq.finder, ans = [], box = $('#fbox');
    function ask(n) {
      var q = qs[n];
      box.innerHTML = '<div class="fq rv in"><div class="fbar"><b style="width:' + (n / qs.length * 100) + '%"></b></div><span class="step-no">QUESTION ' + (n + 1) + ' / ' + qs.length + '</span><h3>' + esc(q.q) + '</h3><div class="opts">' +
        q.options.map(function (o, k) { return '<button class="opt" data-k="' + k + '"><i>' + String.fromCharCode(65 + k) + '</i>' + esc(o.label) + '</button>'; }).join('') + '</div>' +
        (n > 0 ? '<div style="margin-top:18px"><button class="btn btn-ghost btn-sm" id="back">← 이전 질문</button></div>' : '') + '</div>';
      $$('.opt', box).forEach(function (b) {
        b.addEventListener('click', function () {
          ans[n] = q.options[+b.getAttribute('data-k')].tags;
          n + 1 < qs.length ? ask(n + 1) : result();
        });
      });
      var back = $('#back', box); if (back) back.addEventListener('click', function () { ans.length = n - 1; ask(n - 1); });
    }
    function result() {
      var w = {}; ans.forEach(function (t) { for (var k in t) w[k] = (w[k] || 0) + t[k]; });
      var scored = LIST.map(function (p) {
        var s = 0; (p.tags || []).forEach(function (t) { if (w[t]) s += w[t]; }); return { p: p, s: s };
      }).sort(function (a, b) { return b.s - a.s || idx(a.p.id) - idx(b.p.id); });
      var top = scored.slice(0, 3), max = top[0].s || 1;
      box.innerHTML = '<div class="result-top rv in"><span class="eyebrow"><b></b>RESULT</span><h3 style="margin-top:14px">당신에게 맞는 <span class="grad-text">TOP 3</span></h3></div><div class="rank">' +
        top.map(function (r, k) {
          var p = r.p, pct = Math.max(40, Math.round(r.s / max * (k === 0 ? 98 : 90)));
          return '<div class="rank-item rv in" style="' + accent(p) + ';--d:' + k * 0.1 + 's">' + cover(p) + '<div><span class="tag">' + (k + 1) + '위 · 적합도 <span class="match">' + pct + '%</span></span><h4 style="margin:8px 0 4px;font-size:1.1rem">' + esc(p.title) + '</h4><p style="color:var(--muted);font-size:.92rem">' + esc(p.hook) + '</p></div><a class="btn btn-primary btn-sm" href="#/p/' + esc(p.id) + '">자세히 →</a></div>';
        }).join('') + '</div><div style="text-align:center;margin-top:26px"><button class="btn btn-ghost" id="again">다시 하기</button> <a class="btn btn-ghost" href="#/products">전체 상품 보기</a></div>';
      $('#again').addEventListener('click', function () { ans = []; ask(0); });
    }
    ask(0);
  }

  function pageAbout() {
    var A = DATA.site.author;
    return '<section class="wrap page-head"><span class="eyebrow rv"><b></b>ABOUT</span><h1 class="rv">' + esc(A.name) + '</h1><p class="rv">' + esc(A.role) + '</p></section>' +
      '<section class="wrap" style="padding-bottom:40px"><div class="about-grid"><div class="rv rv-l"><div class="avatar">' + esc(DATA.site.brand.short) + '</div></div><div class="rv rv-r"><p style="font-size:1.1rem;color:var(--muted)">' + esc(A.bio) + '</p>' +
      '<div class="principles">' + A.principles.map(function (x) { return '<div><b>' + esc(x.title) + '</b><span>' + esc(x.desc) + '</span></div>'; }).join('') + '</div>' +
      '<div style="margin-top:24px;display:flex;flex-wrap:wrap;gap:10px">' + A.channels.map(function (c) { return '<a class="btn btn-ghost btn-sm" ' + ext(c.url) + '>' + esc(c.label) + ' ↗</a>'; }).join('') + '</div></div></div></section>' + ctaBanner();
  }
  function pageFaq() {
    return '<section class="wrap page-head"><span class="eyebrow rv"><b></b>FAQ</span><h1 class="rv">자주 묻는 <span class="grad-text">질문</span></h1></section><section class="wrap" style="max-width:820px;padding-bottom:40px">' + faqList(DATA.faq.global) + '</section>' + ctaBanner();
  }
  function page404() {
    return '<section class="wrap page-head" style="text-align:center;padding:120px 0"><h1>페이지를 찾을 수 없어요</h1><p style="margin-inline:auto">주소가 바뀌었거나 숨겨진 상품일 수 있습니다.</p><p><a class="btn btn-primary" href="#/products">전체 상품 보기</a></p></section>';
  }

  /* ---------- chrome ---------- */
  function renderChrome() {
    var S = DATA.site;
    $('#brand').innerHTML = '<span class="logo">' + esc(S.brand.short) + '</span><span>' + esc(S.brand.name) + '</span>';
    $('#navLinks').innerHTML = S.nav.map(function (n) { return '<a href="#' + esc(n.route) + '" data-r="' + esc(n.route) + '">' + esc(n.label) + '</a>'; }).join('');
    var cats = DATA.categories.map(function (c) { return '<li><a href="#/products?c=' + esc(c.id) + '">' + esc(c.icon + ' ' + c.label) + '</a></li>'; }).join('');
    var pl = LIST.slice(0, 6).map(function (p) { return '<li><a href="#/p/' + esc(p.id) + '">' + esc(p.title) + '</a></li>'; }).join('');
    $('#footer').innerHTML = '<div class="wrap"><div class="foot-grid"><div><a class="brand" href="#/"><span class="logo">' + esc(S.brand.short) + '</span><span>' + esc(S.brand.name) + '</span></a><p style="color:var(--muted);margin-top:14px;max-width:340px">' + esc(S.brand.tagline) + '</p></div>' +
      '<div><h5>CATEGORIES</h5><ul>' + cats + '</ul></div><div><h5>POPULAR</h5><ul>' + pl + '</ul></div></div>' +
      '<div class="notes">' + S.footer.notes.map(function (n) { return '<p>' + esc(n) + '</p>'; }).join('') + '</div><p class="copy">© ' + new Date().getFullYear() + ' ' + esc(S.brand.name) + ' · ' + S.author.channels.map(function (c) { return '<a ' + ext(c.url) + ' style="text-decoration:underline">' + esc(c.label) + '</a>'; }).join(' · ') + '</p></div>';
  }
  function setActive(route) {
    $$('#navLinks a').forEach(function (a) {
      var r = a.getAttribute('data-r');
      var on = r === '/' ? route === '/' : (route === r || (r === '/products' && route.indexOf('/p/') === 0));
      a.classList.toggle('active', on);
    });
  }

  /* ---------- effects ---------- */
  var io;
  function observe() {
    if (!('IntersectionObserver' in window)) { $$('.rv,.timeline').forEach(function (e) { e.classList.add('in'); }); runCounters(document); return; }
    if (!io) {
      io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add('in');
          if (e.target.querySelector) runCounters(e.target);
          io.unobserve(e.target);
        });
      }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    }
    $$('.rv:not(.in),.timeline:not(.in)').forEach(function (e) { io.observe(e); });
  }
  function runCounters(root) {
    $$('.counter', root).forEach(function (el) {
      if (el.__d) return; el.__d = 1;
      var to = +el.getAttribute('data-to'), plain = el.getAttribute('data-plain'), t0 = null, dur = 1400;
      function f(n) { return plain ? String(n) : n.toLocaleString('ko-KR'); }
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = f(to); return; }
      (function step(ts) {
        if (!t0) t0 = ts; var k = Math.min(1, (ts - t0) / dur), e = 1 - Math.pow(1 - k, 3);
        el.textContent = f(Math.round(to * e)); if (k < 1) requestAnimationFrame(step);
      })(performance.now());
    });
  }
  function bindTilt() {
    if (!window.matchMedia('(hover: hover)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    $$('[data-tilt]:not([data-tb])').forEach(function (host) {
      host.setAttribute('data-tb', '1');
      var covers = $$('.cover', host);
      host.addEventListener('pointermove', function (e) {
        var r = host.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        covers.forEach(function (c) { c.style.transform = 'perspective(900px) rotateY(' + (x * 18).toFixed(1) + 'deg) rotateX(' + (-y * 18).toFixed(1) + 'deg) rotate(var(--rz,0deg)) scale(1.04)'; });
      });
      host.addEventListener('pointerleave', function () { covers.forEach(function (c) { c.style.transform = ''; }); });
    });
  }
  function typing() {
    var el = $('#rot'); if (!el) return;
    var words = DATA.site.hero.rotating, w = 0, i = 0, del = false;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = words[0]; return; }
    (function tick() {
      var full = words[w];
      el.textContent = full.slice(0, i);
      var delay = del ? 45 : 95;
      if (!del && i === full.length) { del = true; delay = 1500; }
      else if (del && i === 0) { del = false; w = (w + 1) % words.length; delay = 300; }
      else i += del ? -1 : 1;
      timers.push(setTimeout(tick, delay));
    })();
  }

  /* ---------- router ---------- */
  function parse() {
    var h = location.hash.replace(/^#/, '') || '/';
    var hashPart = '';
    var qi = h.indexOf('?'); var q = {};
    var path = qi >= 0 ? h.slice(0, qi) : h;
    if (qi >= 0) h.slice(qi + 1).split('&').forEach(function (kv) { var a = kv.split('='); q[a[0]] = decodeURIComponent(a[1] || ''); });
    var pi = path.indexOf('#'); if (pi >= 0) { hashPart = path.slice(pi + 1); path = path.slice(0, pi); }
    return { path: path || '/', q: q, anchor: hashPart };
  }
  function route() {
    clearTimers();
    var k = hkey(), restore = !byClick && pos[k] != null && !firstRoute; byClick = false; curKey = k;
    var r = parse(), path = r.path, out, title = DATA.site.meta.title, buy = null, after = null;
    if (path === '/') { out = pageHome(); after = typing; }
    else if (path === '/products') { out = pageProducts(r.q); after = function () { initProducts(r.q); }; title = '전체 상품 — ' + DATA.site.brand.name; }
    else if (path.indexOf('/p/') === 0) { var res = pageProduct(path.slice(3)); if (typeof res === 'string') out = res; else { out = res.html; title = res.title; buy = res.buy; } }
    else if (path === '/paths') { out = pagePaths(); title = '학습 로드맵 — ' + DATA.site.brand.name; }
    else if (path === '/finder') { out = pageFinder(); after = initFinder; title = '나에게 맞는 자료 찾기 — ' + DATA.site.brand.name; }
    else if (path === '/about') { out = pageAbout(); title = '저자 소개 — ' + DATA.site.brand.name; }
    else if (path === '/faq') { out = pageFaq(); title = 'FAQ — ' + DATA.site.brand.name; }
    else { out = page404(); }
    app.innerHTML = out;
    app.classList.remove('pg'); void app.offsetWidth; app.classList.add('pg');
    document.title = title;
    setActive(path);
    $('#navLinks').classList.remove('open'); $('#menuBtn').setAttribute('aria-expanded', 'false');
    if (r.anchor && $('#' + r.anchor)) { setTimeout(function () { $('#' + r.anchor).scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 60); }
    else if (restore) { var y = pos[k]; jump(y); requestAnimationFrame(function () { jump(y); }); setTimeout(function () { jump(y); }, 150); }
    else jump(0);
    $('#backBtn').hidden = path === '/';
    if (!firstRoute) { try { app.focus({ preventScroll: true }); } catch (e) {} }
    firstRoute = false;
    if (after) after();
    setupBuyBar(buy);
    observe(); bindTilt();
  }
  function setupBuyBar(buy) {
    var bar = $('#buybar'); bar.classList.remove('show');
    if (!buy) { bar.hidden = true; return; }
    var p = buy.p, l = buy.link;
    bar.hidden = false; bar.setAttribute('style', accent(p));
    bar.innerHTML = '<div class="bb-t"><b>' + esc(p.title) + '</b><span>' + esc(p.price.label) + '</span></div><a class="btn btn-primary btn-sm pulse" ' + ext(l.url) + '>' + esc(l.label) + ' ↗</a>';
    var zone = $('#buyZone'); if (!zone) return;
    var bo = new IntersectionObserver(function (es) { bar.classList.toggle('show', !es[0].isIntersecting && es[0].boundingClientRect.top < 0); }, { threshold: 0 });
    bo.observe(zone);
  }

  /* ---------- global ---------- */
  function bindGlobal() {
    var prog = $('#progress'), top = $('#toTop'), glow = $('#glow');
    window.addEventListener('scroll', function () {
      var h = document.documentElement, m = h.scrollHeight - h.clientHeight;
      prog.style.width = (m > 0 ? h.scrollTop / m * 100 : 0) + '%';
      top.classList.toggle('show', h.scrollTop > 700);
      if (curKey) pos[curKey] = h.scrollTop;
    }, { passive: true });
    top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    if (window.matchMedia('(hover: hover)').matches) {
      window.addEventListener('pointermove', function (e) { glow.style.opacity = 1; glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; }, { passive: true });
    }
    $('#menuBtn').addEventListener('click', function () {
      var o = $('#navLinks').classList.toggle('open'); this.setAttribute('aria-expanded', o ? 'true' : 'false');
    });
    $('#themeBtn').addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme');
      var isLight = cur ? cur === 'light' : window.matchMedia('(prefers-color-scheme: light)').matches;
      var next = isLight ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('bk-theme', next); } catch (e) {}
    });
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#/"]'); if (!a) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return;
      if (a.getAttribute('href') === location.hash || (a.getAttribute('href') === '#/' && !location.hash)) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
      byClick = true; internal++;
    });
    $('#backBtn').addEventListener('click', function () {
      if (internal > 0 && history.length > 1) { internal--; history.back(); return; }
      byClick = true; location.hash = parse().path.indexOf('/p/') === 0 ? '/products' : '/';
    });
    window.addEventListener('hashchange', route);
  }

  function fail(err) {
    app.innerHTML = '<div class="wrap page-head"><h1>데이터를 불러오지 못했어요</h1><p>이 사이트는 <code>data/*.json</code> 파일을 읽습니다. 폴더 그대로 웹 서버에 올리거나, 아래 명령으로 <code>data/bundle.js</code> 를 만들면 파일을 직접 열어도 동작합니다.</p><p><code>node build-bundle.js</code></p><p style="color:var(--faint);font-size:.85rem">' + esc(err && err.message) + '</p></div>';
  }

  load().then(function (d) {
    DATA = d; buildList(); renderChrome(); bindGlobal(); route();
    var m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute('content', DATA.site.meta.description);
  }).catch(fail);
})();
