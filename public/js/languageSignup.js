const nameInputLen = document.getElementsByName('name')[0];
const surnameLen = document.getElementsByName('surname')[0];
const emailInputLen = document.getElementsByName('email')[0];
const passwordInputLen = document.getElementsByName('password')[0];
const passwordConfirmInputLen =
  document.getElementsByName('confirmPassword')[0];
const signUpLe1 = document.getElementById('signUpLe1');
const signUpLe2 = document.getElementById('signUpLe2');
const signButtonLen = document.getElementsByName('signup')[0];

var language = {
  ar: {
    nameinput: 'الاسم الأول',
    surnameinput: 'أسم العائلة',
    emailinput: 'البريد الالكتروني',
    password: 'كلمة السر',
    passwordconfirm: 'أعد كتابة كلمة سر',
    signup: 'أنشاء حساب',
  },
  en: {
    nameinput: 'First Name',
    surnameinput: 'Last Name',
    emailinput: 'Email',
    password: 'Password',
    passwordconfirm: 'Confirm password',
    signup: 'Sign Up',
  },
};

if (Cookies.get('language') === 'ar') {
  nameInputLen.placeholder = language.ar.nameinput;
  surnameLen.placeholder = language.ar.surnameinput;
  emailInputLen.placeholder = language.ar.emailinput;
  passwordInputLen.placeholder = language.ar.password;
  passwordConfirmInputLen.placeholder = language.ar.passwordconfirm;
  signUpLe1.innerText = language.ar.signup;
  signButtonLen.value = language.ar.signup;
}

if (Cookies.get('language') === 'en') {
  nameInputLen.placeholder = language.en.nameinput;
  surnameLen.placeholder = language.en.surnameinput;
  emailInputLen.placeholder = language.en.emailinput;
  passwordInputLen.placeholder = language.en.password;
  passwordConfirmInputLen.placeholder = language.en.passwordconfirm;
  signUpLe1.innerText = language.en.signup;
  signButtonLen.value = language.en.signup;
}
