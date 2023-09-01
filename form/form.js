const form=document.getElementById(`myform`);
const passwordInput=document.getElementById(`password`);
let eyeIcon = document.querySelector('.input-icon');
eyeIcon.addEventListener('click', function () {
    if(passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash');
    }
    else{
      passwordInput.type = 'password';
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye');
    }
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone_number = document.getElementById('phone_nunmber').value;
    const gender = document.getElementById('gender').value;
    const language = document.getElementById('language').value;
    const zip_code = document.getElementById('zip_code').value;
    const about = document.getElementById('about').value;
    const password = passwordInput.value;
    
  
    if (name === '') {
      alert('Please enter your name.');
      return;
    }
    if(email===''){
      alert('please enter your email.');
      return;
    }
    
    const form = document.getElementById('myForm');
    if (password === '') {
        alert('Please enter your password.');
        return;
      }

      
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if(!regex.test(password)) {
    alert('Password should be 8 characters long along with one special character, one number and one capital letter');
    return;
  }

  
  submitForm();
});
function submitForm() {
    alert('Form submitted successfully!');
  }
  
