// Member 4 owns this file.
// It updates the visible status when AR.js detects or loses the Hiro marker.
window.addEventListener('DOMContentLoaded', () => {
  const marker = document.querySelector('#hiro-marker');
  const banner = document.querySelector('#status-banner');

  marker.addEventListener('markerFound', () => {
    banner.textContent = 'Hiro marker found — tap the blue ball or treasure chest!';
    banner.style.background = '#137333';
  });

  marker.addEventListener('markerLost', () => {
    banner.textContent = 'Marker lost — point your camera at the Hiro marker';
    banner.style.background = '#9b1c1c';
  });
});
