const forgetPasswordLen = document.getElementById('forgetPasswordLen');
const forgetPasswordParaLen = document.getElementById('forgetPasswordParaLen');
const emailInputLen = document.getElementsByName('email')[0];
const resetButtonLen = document.getElementsByName('recover-submit')[0];
const loginLe = document.getElementById('loginLe');

var language = {
  ar: {
    forgetpassword: 'نسيت كلمة السر؟',
    forgetpasswordpara: 'تستطيع أعادة تعين كلمة السر هنا',
    emailinput: 'البريد الالكتروني',
    resetbutton: 'قم بالتعين',
    login: 'تسجيل الدخول',
  },
  en: {
    forgetpassword: 'Forgot Password?',
    forgetpasswordpara: 'You can reset your password here.',
    emailinput: 'Email',
    resetbutton: 'Reset Password',
    login: 'Login',
  },
};

if (Cookies.get('language') === 'ar') {
  forgetPasswordLen.innerText = language.ar.forgetpassword;
  forgetPasswordParaLen.innerText = language.ar.forgetpasswordpara;
  emailInputLen.placeholder = language.ar.emailinput;
  resetButtonLen.value = language.ar.resetbutton;
  loginLe.innerText = language.ar.login;
}
if (Cookies.get('language') === 'en') {
  forgetPasswordLen.innerText = language.en.forgetpassword;
  forgetPasswordParaLen.innerText = language.en.forgetpasswordpara;
  emailInputLen.placeholder = language.en.emailinput;
  resetButtonLen.value = language.en.resetbutton;
  loginLe.innerText = language.en.login;
}
