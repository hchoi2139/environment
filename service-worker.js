// A name for our cache
const CACHE_NAME = 'environmental-app-cache-v1';

// A list of all the files we want to cache for offline use
const urlsToCache = [
  '/environment/',
  '/environment/index.html',
  '/environment/styles/style.css',
  
  // All your detail pages
  '/environment/fertilizer.html',
  '/environment/pesticide.html',
  '/environment/livestock.html',
  '/environment/sediment.html',
  '/environment/discharge.html',
  '/environment/mining.html',
  '/environment/oil.html',
  '/environment/thermal.html',
  '/environment/sewage.html',
  '/environment/wastewater.html',
  '/environment/stormwater.html',
  '/environment/disposal.html',
  '/environment/radioactive.html',
  '/environment/landfill.html',
  '/environment/deforestation.html',
  '/environment/aquaculture.html',
  '/environment/marine.html',
  '/environment/species.html',

  // Placeholder images - IMPORTANT: Replace with your actual image paths
  '/environment/images/air_pollution.svg',
  '/environment/images/water_pollution.svg',
  '/environment/images/upper_fertilizer.svg',
  '/environment/images/lower_fertilizer.svg',
  '/environment/images/upper_pesticide.svg',
  '/environment/images/lower_pesticide.svg',
  '/environment/images/upper_livestock.svg',
  '/environment/images/lower_livestock.svg',
  '/environment/images/upper_sediment.svg',
  '/environment/images/lower_sediment.svg',
  '/environment/images/upper_discharge.svg',
  '/environment/images/lower_discharge.svg',
  '/environment/images/upper_mining.svg',
  '/environment/images/lower_mining.svg',
  '/environment/images/upper_oil.svg',
  '/environment/images/lower_oil.svg',
  '/environment/images/upper_thermal.svg',
  '/environment/images/lower_thermal.svg',
  '/environment/images/upper_sewage.svg',
  '/environment/images/lower_sewage.svg',
  '/environment/images/upper_wastewater.svg',
  '/environment/images/lower_wastewater.svg',
  '/environment/images/upper_stormwater.svg',
  '/environment/images/lower_stormwater.svg',
  '/environment/images/upper_disposal.svg',
  '/environment/images/lower_disposal.svg',
  '/environment/images/upper_radioactive.svg',
  '/environment/images/lower_radioactive.svg',
  '/environment/images/upper_landfill.svg',
  '/environment/images/lower_landfill.svg',
  '/environment/images/upper_deforestation.svg',
  '/environment/images/lower_deforestation.svg',
  '/environment/images/upper_aquaculture.svg',
  '/environment/images/lower_aquaculture.svg',
  '/environment/images/upper_marine.svg',
  '/environment/images/lower_marine.svg',
  '/environment/images/upper_species.svg',
  '/environment/images/lower_species.svg',

  // icon files
  '/environment/images/icons/favicon.ico',
  '/environment/images/icons/apple-touch-icon.png',
  '/environment/images/icons/icon-192x192.png',
  '/environment/images/icons/icon-512x512.png'
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
