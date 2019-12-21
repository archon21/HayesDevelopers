const registerServiceWorker = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service workers are not supported.');
  }
  const url = window.location.origin + '/register-sw.js';
  const registration = await navigator.serviceWorker.register(url, {
    scope: '/'
  });
  console.log('SW registered.' );
};

registerServiceWorker();
