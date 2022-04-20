const emailInputLen = document.getElementsByName('email')[0];
const passwordInputLen = document.getElementsByName('password')[0];
const forgetLen = document.getElementById('forgetLen');
const loginLen = document.getElementById('loginLen');
const signupHereLen = document.getElementById('signupHereLen');
const loginButtonLen = document.getElementsByName('login')[0];

var language = {
  ar: {
    emailinput: 'البريد الالكتروني',
    password: 'كلمة السر',
    forget: 'هل نسيت كلمة السر؟',
    login: 'تسجيل الدخول',
    signup: 'قم بأنشاء حساب هنا',
  },
  en: {
    emailinput: 'Email',
    password: 'Password',
    forget: 'Forget your password?',
    login: 'Login',
    signup: 'SignUp here',
  },
};

if (Cookies.get('language') === 'ar') {
  emailInputLen.placeholder = language.ar.emailinput;
  passwordInputLen.placeholder = language.ar.password;
  forgetLen.innerText = language.ar.forget;
  loginLen.innerText = language.ar.login;
  loginButtonLen.value = language.ar.login;
  signupHereLen.innerText = language.ar.signup;
}
if (Cookies.get('language') === 'en') {
  emailInputLen.placeholder = language.en.emailinput;
  passwordInputLen.placeholder = language.en.password;
  forgetLen.innerText = language.en.forget;
  loginLen.innerText = language.en.login;
  loginButtonLen.value = language.en.login;
  signupHereLen.innerText = language.en.signup;
}
