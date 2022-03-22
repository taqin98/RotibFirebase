// Service Worker
const CACHE_STATIC_NAME = "static-s-V4";
const CACHE_DYNAMIC_NAME = "dynamic-d-v3";
const CACHE_IMAGES_NAME = "images-v3";

const filesToCache = [
	'/',
	'manifest.json',
	'assets/css/style.css',
	'assets/css/helper.css',
	'https://unpkg.com/swiper/swiper-bundle.min.css',
	'https://fonts.googleapis.com/css?family=Inter:400,500,700&amp;display=swap',
	'https://cdn.jsdelivr.net/npm/ionicons@5.0.0/dist/ionicons/ionicons.esm.js',
	'https://cdn.jsdelivr.net/npm/ionicons@5.0.0/dist/ionicons/ionicons.js',
	'https://unpkg.com/swiper/swiper-bundle.min.js'
]

const myCaches = [{
    name: CACHE_STATIC_NAME,
    urls: filesToCache,
  },
  {
    name: CACHE_IMAGES_NAME,
    urls: []
  }
 ]

self.addEventListener("install", e => {
  console.log("[ServiceWorker**] Install", e);
  // e.waitUntil(
  //   caches.open(CACHE_STATIC_NAME).then(cache => {

  //     console.log("[ServiceWorker**] Caching app shell");
  //     return cache.addAll(filesToCache);
  //   })
  // );

  e.waitUntil(Promise.all(
  	myCaches.map(function (myCache) {
  		return caches.open(myCache.name).then(function (cache) {
  			console.log("[ServiceWorker**] Caching app shell", myCache);
  			return cache.addAll(myCache.urls);
  		})
  	})
  	));
});


self.addEventListener("activate", event => {
  caches.keys().then(keyList => {

    return Promise.all(
      keyList.map(key => {

        if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME && key !== CACHE_IMAGES_NAME) {
          console.log("[ServiceWorker] - Removing old cache", key);
          return caches.delete(key);
        }

      })
    );
  });
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
      .then(function(res) {
        return caches.open(CACHE_DYNAMIC_NAME)
                .then(function(cache) {
                  cache.put(event.request.url, res.clone());
                  return res;
                })
      })
      .catch(function(err) {
        return caches.match(event.request);
      })
  );
});