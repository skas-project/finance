const CACHE_NAME = "finance-pwa-cache-v1";
const urlsToCache = [
  "/",
  "/index.html"
];

// Install SW and cache content
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Serve cached assets
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
