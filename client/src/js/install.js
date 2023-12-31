const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  butInstall.style.visibility = 'visible';

  // Click event handler for install button
  butInstall.addEventListener('click', async () => {
    event.prompt();
    butInstall.setAttribute('disabled', true);
  });
});

// Event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  butInstall.textContent = 'Installed!';
  console.log('👍', 'appinstalled', event);
});
