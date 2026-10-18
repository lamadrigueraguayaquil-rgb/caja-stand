// Caja Stand + Despacho: funciona sin internet una vez abierta con conexión.
// Archivos propios: primero intenta la red (para recibir actualizaciones) y, si no hay señal en 3 s, usa la copia guardada.
// Las conexiones a Firebase (sincronización) no pasan por aquí.
const CACHE = 'caja-stand-v4';
const FILES = ['./', './index.html', './despacho.html', './firebase-config.js', './manifest.json', './manifest-despacho.json',
  './icon-192.png', './icon-512.png', './lib/firebase-app-compat.js', './lib/firebase-auth-compat.js', './lib/firebase-firestore-compat.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(req, { ignoreSearch: true });
    const net = fetch(req).then(r => { if (r && r.ok) cache.put(req, r.clone()); return r; });
    if (!hit) { try { return await net; } catch (err) { return (await cache.match('./index.html')) || Response.error(); } }
    const timeout = new Promise(res => setTimeout(() => res(null), 3000));
    try { const r = await Promise.race([net, timeout]); return r || hit; } catch (err) { return hit; }
  })());
});
