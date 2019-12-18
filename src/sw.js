const STATIC_CACHE_NAME = 'static-assets-4'
const DYNAMIC_CACHE_NAME = 'dynamic-4'

self.addEventListener('install', function (event) {
  console.log('[SERVICE WORKER] Installing...', event);
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
    .then(function (cache) {
      console.log('[SERVICE WORKER] caching app shell');
      cache.addAll([
        '/',
        // aqui vão tbm fonts externas fonts, grids etc
      ]);
    })
  );
});

self.addEventListener('activate', function (event) {
  console.log('[SERVICE WORKER] Activating...', event);
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== STATIC_CACHE_NAME && key !== DYNAMIC_CACHE_NAME) {
          console.log('[SERVICE WORKER] deleting cache', key)
          caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    // verifica se existe algum cache
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request)
          .then(function (res) {
            return caches.open(DYNAMIC_CACHE_NAME)
              .then(function (cache) {
                cache.put(event.request.url, res.clone());
                return res;
              })
          })
          // .catch(function (err) {
          //   return caches.open(STATIC_CACHE_NAME).then(function (cache) {
          //     return cache.match('/offile.html');
          //   })
          // });
      }
    })
  );
});

// var CACHE_STATIC_NAME = 'static-v1';
// var CACHE_DYNAMIC_NAME = 'dynamic-v1';
// var STATIC_FILES = [
//   '/',
//   '/index.html',
//   '/offline.html'
// ];

// // function trimCache(cacheName, maxItems) {
// //   caches.open(cacheName)
// //     .then(function (cache) {
// //       return cache.keys()
// //         .then(function (keys) {
// //           if (keys.length > maxItems) {
// //             cache.delete(keys[0])
// //               .then(trimCache(cacheName, maxItems));
// //           }
// //         });
// //     })
// // }

// self.addEventListener('install', function (event) {
//   console.log('[Service Worker] Installing Service Worker ...', event);
//   event.waitUntil(
//     caches.open(CACHE_STATIC_NAME)
//       .then(function (cache) {
//         console.log('[Service Worker] Precaching App Shell');
//         cache.addAll(STATIC_FILES);
//       })
//   )
// });

// self.addEventListener('activate', function (event) {
//   console.log('[Service Worker] Activating Service Worker ....', event);
//   event.waitUntil(
//     caches.keys()
//       .then(function (keyList) {
//         return Promise.all(keyList.map(function (key) {
//           if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
//             console.log('[Service Worker] Removing old cache.', key);
//             return caches.delete(key);
//           }
//         }));
//       })
//   );
//   return self.clients.claim();
// });

// function isInArray(string, array) {
//   var cachePath;
//   if (string.indexOf(self.origin) === 0) { // request targets domain where we serve the page from (i.e. NOT a CDN)
//     console.log('matched ', string);
//     cachePath = string.substring(self.origin.length); // take the part of the URL AFTER the domain (e.g. after localhost:8080)
//   } else {
//     cachePath = string; // store the full request (for CDNs)
//   }
//   return array.indexOf(cachePath) > -1;
// }

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         if (response) {
//           return response;
//         } else {
//           return fetch(event.request)
//             .then(function(res) {
//               return caches.open(CACHE_DYNAMIC_NAME)
//                 .then(function(cache) {
//                   cache.put(event.request.url, res.clone());
//                   return res;
//                 })
//             })
//             .catch(function(err) {
//               return caches.open(CACHE_STATIC_NAME)
//                 .then(function(cache) {
//                   return cache.match('/offline.html');
//                 });
//             });
//         }
//       })
//   );
// });

// // self.addEventListener('fetch', function(event) {
// //   event.respondWith(
// //     fetch(event.request)
// //       .then(function(res) {
// //         return caches.open(CACHE_DYNAMIC_NAME)
// //                 .then(function(cache) {
// //                   cache.put(event.request.url, res.clone());
// //                   return res;
// //                 })
// //       })
// //       .catch(function(err) {
// //         return caches.match(event.request);
// //       })
// //   );
// // });
