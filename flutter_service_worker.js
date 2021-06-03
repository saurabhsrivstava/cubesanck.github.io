'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c5178d7d148885174fb149dd70c1835f",
"index.html": "f0ad81b5a194b620bec74e3a96d8ef79",
"/": "f0ad81b5a194b620bec74e3a96d8ef79",
"main.dart.js": "e22e6c9372e60aed72ba04350fb71e8b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e3ba1f62cf9c6c957a4ab56dd156d5c0",
"assets/AssetManifest.json": "78f6a90d1e1dbe819c0cfa6a2d419a11",
"assets/NOTICES": "662ea52a5a4281c3fcf9ca088198a460",
"assets/languages/en.json": "774e08a35a0dc568833303721d4d2329",
"assets/FontManifest.json": "b7235f0e0a1b94efdb6760baaaa99780",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/auto.png": "9d3385d6da51335d1b5c915d03a79049",
"assets/assets/images/shipping_box.svg": "fe3ac4a4518f1da1f16acd2ffd431c23",
"assets/assets/images/see_more.svg": "56c01656bf747701143a5e8d5dba85b0",
"assets/assets/images/cart.png": "dc0ea4975222dd199922393403bb61e1",
"assets/assets/images/profile_image.png": "e50c43f9adfa421f54613ceccbf07904",
"assets/assets/images/warranty.svg": "277eec9f3f5b29ab025c8eaaaec2c01d",
"assets/assets/images/return.svg": "6fa4f1336c2c46696dd8471eabccb701",
"assets/assets/images/user.png": "59167e393887f34e7f603370fbaea50e",
"assets/assets/images/security_check.svg": "063392be1d7f61624118c187f6c4d85b",
"assets/assets/images/applliances.png": "b059d0cbbbd1b91be6d4563733d01df2",
"assets/assets/images/report_listing.svg": "807fc3ddd357c8b5b743feffce49436c",
"assets/assets/images/legal.svg": "2c5483007047a0f01000668dc14917ee",
"assets/assets/images/return_available.svg": "4ddd32898a3f3f050b6d124f1c0bb055",
"assets/assets/images/Share.svg": "53401aeb825da82bf4382bcbc5cf65f3",
"assets/assets/images/location_icon.svg": "ac3db8c4bfb15f4a738d224f42176949",
"assets/assets/images/art.png": "4daa9738b4fabe546bd2239980f9f780",
"assets/assets/images/baby.png": "654df031d96741a1559f6a7bb458b7f8",
"assets/assets/images/logo.svg": "39af99c4e93699fbdf81dad278533815",
"assets/assets/images/improve_page.svg": "0873fcd3da7f986c14af26256afdb327",
"assets/assets/images/delivery_truck.svg": "fc83fe676da34c063ef58956ba7961ab",
"assets/assets/signup/googleLogo.svg": "510d3b26c58bfd398386c446ebf52bc1",
"assets/assets/signup/account.svg": "1554516a7106aef7bd0d7f9982de65bc",
"assets/assets/signup/appleLogo.svg": "54d049d7aeb6b4cfc94beefd0f447367",
"assets/assets/signup/blank.svg": "12f902193335cd2dc6659ad2fec85cf8",
"assets/assets/signup/spaceship.svg": "74141c369f2f69981dade71cac03030f",
"assets/assets/signup/facebookLogo.svg": "70c0980aaa5adeae1caf62f2a842d720",
"assets/assets/signup/no-intenet-bg.svg": "1d951eef2aadb06f22790a27c8aa555c",
"assets/assets/signup/cubesnak-logo.svg": "1fa4abf899ae38f3c7e2352b8c9fcdba",
"assets/assets/signup/reset-password.svg": "e71bc03439080f65570b4c450906ddbe",
"assets/assets/signup/forget-password.svg": "d8b44c28d390dac47e9763f0d221b2a0",
"assets/assets/fonts/ProximaNova-BoldIt.ttf": "433f6ed4f11b8b2d2bfa0ef845843f5c",
"assets/assets/fonts/ProximaNova-Light.ttf": "cce41361d0547a4e953837d810fb91eb",
"assets/assets/fonts/ProximaNova-Bold.ttf": "051971401be17b30d84613eac3ea76e5",
"assets/assets/fonts/ProximaNova-Semibold.ttf": "4e939f46468d86ac233e77975a119e74",
"assets/assets/fonts/ProximaNova-Extrabld.ttf": "c6fa915fbca0315763bb64c6b87047c4",
"assets/assets/fonts/ProximaNova-Regular.ttf": "f10515dff08524051871a9bafb4526af",
"assets/assets/fonts/ProximaNova-SemiboldIt.ttf": "ce6d6b42f49c787661f14a7ab2384410",
"assets/assets/fonts/ProximaNova-Black.ttf": "d17b689a8deb9684f1e4d4d8fc5e1b56",
"assets/assets/fonts/ProximaNova-LightIt.ttf": "27ab67334f4cfe376535491fc2fa585d",
"assets/assets/fonts/ProximaNova-RegularIt.ttf": "5cabb956835c62c5266635b3f7136a24"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
