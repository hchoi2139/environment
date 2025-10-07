// A name for our cache
const CACHE_NAME = 'environmental-app-cache-v1';

// A list of all the files we want to cache for offline use
const urlsToCache = [
  '/',
  '/index.html',
  '/styles/style.css',
  
  // All your detail pages
  '/fertilizer.html',
  '/pesticide.html',
  '/livestock.html',
  '/sediment.html',
  '/discharge.html',
  '/mining.html',
  '/oil.html',
  '/thermal.html',
  '/sewage.html',
  '/wastewater.html',
  '/stormwater.html',
  '/disposal.html',
  '/radioactive.html',
  '/landfill.html',
  '/deforestation.html',
  '/aquaculture.html',
  '/marine.html',
  '/species.html',

  // Placeholder images - IMPORTANT: Replace with your actual image paths
  '/images/air_pollution.svg',
  '/images/water_pollution.svg',
  '/images/upper_fertilizer.svg',
  '/images/lower_fertilizer.svg',
  '/images/upper_pesticide.svg',
  '/images/lower_pesticide.svg',
  '/images/upper_livestock.svg',
  '/images/lower_livestock.svg',
  '/images/upper_sediment.svg',
  '/images/lower_sediment.svg',
  '/images/upper_discharge.svg',
  '/images/lower_discharge.svg',
  '/images/upper_mining.svg',
  '/images/lower_mining.svg',
  '/images/upper_oil.svg',
  '/images/lower_oil.svg',
  '/images/upper_thermal.svg',
  '/images/lower_thermal.svg',
  '/images/upper_sewage.svg',
  '/images/lower_sewage.svg',
  '/images/upper_wastewater.svg',
  '/images/lower_wastewater.svg',
  '/images/upper_stormwater.svg',
  '/images/lower_stormwater.svg',
  '/images/upper_disposal.svg',
  '/images/lower_disposal.svg',
  '/images/upper_radioactive.svg',
  '/images/lower_radioactive.svg',
  '/images/upper_landfill.svg',
  '/images/lower_landfill.svg',
  '/images/upper_deforestation.svg',
  '/images/lower_deforestation.svg',
  '/images/upper_aquaculture.svg',
  '/images/lower_aquaculture.svg',
  '/images/upper_marine.svg',
  '/images/lower_marine.svg',
  '/images/upper_species.svg',
  '/images/lower_species.svg',

  // icon files
  '/images/favicon.ico',
  '/images/apple-touch-icon.png',
  '/images/icons/icon-192x192.png',
  '/images/icons/icon-512x512.png'
];

// Event listener for when the service worker is installed
self.addEventListener('install', event => {
  // We wait until the installation is complete
  event.waitUntil(
    // Open the cache
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        // Add all the files from our list to the cache
        return cache.addAll(urlsToCache);
      })
  );
});

// Event listener for when the browser makes a fetch request
self.addEventListener('fetch', event => {
  event.respondWith(
    // Check if the requested resource is in our cache
    caches.match(event.request)
      .then(response => {
        // If we have a cached response, return it
        if (response) {
          return response;
        }
        // If not, fetch the resource from the network
        return fetch(event.request);
      }
    )
  );
});
