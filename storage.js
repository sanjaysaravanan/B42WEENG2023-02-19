// localStorage - Does not have any expiry
var write = false;

if (write) {
  localStorage.setItem('isLogged', 'true');
  localStorage.setItem(
    'user',
    JSON.stringify({ name: 'Sanjay Saravanan', email: 'sanjay@gmail.com' })
  );
}

// sessionStorage - Expires once the tab/session is closed
if (write) {
  sessionStorage.setItem('isLogged', 'true');
  sessionStorage.setItem(
    'user',
    JSON.stringify({ name: 'Sanjay Saravanan', email: 'sanjay@gmail.com' })
  );
}