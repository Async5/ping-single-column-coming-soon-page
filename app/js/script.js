const email = document.querySelector('#email');
const formControl = document.querySelector('.form-control');
const form = document.querySelector('#form');

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const emailInput = email.value;

  if (!validateEmail(emailInput)) {
    formControl.classList.add('error');
  } else {
    formControl.classList.remove('error');
  }
});
