const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  butInstall.style.visibility = 'visible';
});

// Click event handler for install button
butInstall.addEventListener('click', async () => {
  installBtn.setAttribute('disabled', true);
});

// Event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  installBtn.textContent = 'Installed!';
  console.log('👍', 'appinstalled', event);
});
