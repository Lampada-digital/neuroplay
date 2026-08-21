const CACHE = 'neuroplay-v1';
const ASSETS = ['./','./index.html','./css/style.css','./css/accessibility.css','./css/responsive.css','./css/games.css','./js/app.js','./js/storage.js','./js/accessibility.js','./js/recommendations.js','./manifest.json'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(()=>{}))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(cached => {
    const f = fetch(e.request).then(r => { if (r && r.status === 200) { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); } return r; }).catch(() => cached);
    return cached || f;
  }));
});