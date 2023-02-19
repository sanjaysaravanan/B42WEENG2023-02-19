// localstorage
// localStorage.setItem('isLoggedIn', 'true');
// localStorage.setItem(
//   'user',
//   JSON.stringify({ name: 'Sanjay Saravanan', email: 'sanjay@gmail.com' })
// );

// sessionStorage.setItem('isLoggedIn', 'true');
// sessionStorage.setItem(
//   'user',
//   JSON.stringify({ name: 'Sanjay Saravanan', email: 'sanjay@gmail.com' })
// );


const triggerLogin = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === 'sanjay@gmail.com' && data.password === '12345') {
        resolve({ email: 'sanjay@gmail.com', name: 'Sanjay Saravanan' });
      } else {
        reject({ msg: 'Invalid Credentials' })
      }
    }, 2000);
  })
}

const triggerLogout = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ msg: 'User Successfully Logged out' });
    }, 2000);
  })
}



const loader = document.getElementById('loader');

const afterLogin = document.getElementById('after-login');

const beforeLogin = document.getElementById('before-login')

const msgArea = document.getElementById('msg-area');
const successMsg = document.getElementById('success-msg');
const errorEle = document.getElementById('failure-msg')

const form = document.querySelector('form');



form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // initialization of data outside loop
  var data = {};

  Array.from(e.target.elements).forEach((element) => {

    // nodeName
    if (element.nodeName === 'INPUT') {
      if (element.type === 'radio') {
        if (element.checked) {
          data[element.name] = element.id;
        }
      } else {
        data[element.name] = element.value;
      }
    }
  });

  try {
    loader.style.display = 'flex';
    const loginResponse = await triggerLogin(data);
    successMsg.style.display = 'block';
    errorEle.style.display = 'none';
    afterLogin.style.display = 'block';
    beforeLogin.style.display = 'none';
    document.getElementById('name').innerText = loginResponse.name;
  } catch (errRes) {
    errorEle.style.display = 'block';
    successMsg.style.display = 'none';
  } finally {
    msgArea.style.display = 'block';
    loader.style.display = 'none';
  }
});


const logout = async () => {
  loader.style.display = 'flex';
  const logoutResponse = await triggerLogout();
  successMsg.style.display = 'block';
  errorEle.style.display = 'none';
  afterLogin.style.display = 'none';
  beforeLogin.style.display = 'block';
  successMsg.innerText = logoutResponse.msg;
  loader.style.display = 'none';
}


