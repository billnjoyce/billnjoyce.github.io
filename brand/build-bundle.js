// 사용법: node build-bundle.js
// data/*.json 을 묶어 data/bundle.js 를 생성합니다.
// index.html 을 더블클릭(file://)으로 열어도 동작하게 해주는 용도이며,
// 웹 서버에 올릴 때는 JSON 이 우선 사용되므로 JSON 만 수정해도 됩니다.
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, 'data');
const names = ['site', 'order', 'categories', 'products', 'paths', 'faq'];
const out = {};
for (const n of names) out[n] = JSON.parse(fs.readFileSync(path.join(dir, n + '.json'), 'utf8'));

// 참조 무결성 검사
const ids = Object.keys(out.products), cats = out.categories.map(c => c.id);
let bad = 0;
const err = m => { console.error('✖ ' + m); bad++; };
out.order.products.forEach(i => { if (!out.products[i]) err('order.json 에 없는 상품: ' + i); });
ids.forEach(i => {
  if (!out.order.products.includes(i) && !(out.order.hidden || []).includes(i)) err('order.json 에 빠진 상품: ' + i);
  if (!cats.includes(out.products[i].category)) err(i + ' 의 category 가 categories.json 에 없음');
  (out.products[i].related || []).forEach(r => { if (!out.products[r]) err(i + ' 의 related 에 없는 상품: ' + r); });
});
out.paths.forEach(p => p.steps.forEach(s => { if (!out.products[s.product]) err('paths.json 에 없는 상품: ' + s.product); }));
(out.order.featured || []).forEach(i => { if (!out.products[i]) err('featured 에 없는 상품: ' + i); });
if (bad) process.exit(1);

fs.writeFileSync(path.join(dir, 'bundle.js'), 'window.__BRAND_DATA__=' + JSON.stringify(out) + ';\n');
console.log('✔ data/bundle.js 생성 완료 (상품 ' + ids.length + '개)');
