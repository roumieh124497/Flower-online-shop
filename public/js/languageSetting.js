const homeLe = document.getElementById('homeLen');
const profileSettingLen = document.getElementById('profileSettingLen');
const accountSettingLen = document.getElementById('accountSettingLen');
const accountSettingLen1 = document.getElementById('accountSettingLen1');
const securityLen = document.getElementById('securityLen');
const securityLen1 = document.getElementById('securityLen1');
const deleteAccountLen = document.getElementById('deleteAccountLen');
const deleteAccountLen1 = document.getElementById('deleteAccountLen1');
const deleteAccountParaLen = document.getElementById('deleteAccountParaLen');
const changePasswordLen = document.getElementById('changePasswordLen');
const changeLen = document.getElementById('changeLen');
const currentPasswordLen = document.getElementsByName('currentPassword')[0];
const newPasswordLen = document.getElementsByName('newPassword')[0];
const newPasswordConfirmLen =
  document.getElementsByName('newPasswordConfirm')[0];

var language = {
  ar: {
    home: 'الصفحة الرئيسية',
    profilesetting: 'أعدادات الملف الشخصي',
    accountsetting: 'أعدادات الحساب',
    security: 'أمن الحساب',
    deleteaccount: 'أمسح الحساب الشخصي',
    deleteaccountpara: 'بمجرد حذف حسابك ، لن يكون هناك عودة. من فضلك كن متأكدا',
    changepassword: 'تغير كلمة السر',
    currentpassword: 'كلمة السر الحاليا',
    newpassword: 'كلمة السر الجديدة',
    newpasswordconfirm: 'أعد كتابة كلمة السر الجديدة',
    change: 'تغير',
  },
  en: {
    home: 'Home',
    profilesetting: 'Profile Settings',
    accountsetting: 'Account Settings',
    security: 'Security',
    deleteaccount: 'Delete Account',
    deleteaccountpara:
      ' Once you delete your account, there is no going back. Please be certain.',
    changepassword: 'Change Password',
    currentpassword: 'Enter your old password',
    newpassword: 'New password',
    newpasswordconfirm: 'Confirm new password',
    change: 'Change',
  },
};

if (Cookies.get('language') === 'ar') {
  homeLe.innerText = language.ar.home;
  profileSettingLen.innerText = language.ar.profilesetting;
  accountSettingLen.innerText = language.ar.accountsetting;
  accountSettingLen1.innerText = language.ar.accountsetting;
  securityLen.innerText = language.ar.security;
  securityLen1.innerText = language.ar.security;
  deleteAccountLen.innerText = language.ar.deleteaccount;
  deleteAccountLen1.innerText = language.ar.deleteaccount;
  deleteAccountParaLen.innerText = language.ar.deleteaccountpara;
  changePasswordLen.innerText = language.ar.changepassword;
  changeLen.innerText = language.ar.change;
  currentPasswordLen.placeholder = language.ar.currentpassword;
  newPasswordLen.placeholder = language.ar.newpassword;
  newPasswordConfirmLen.placeholder = language.ar.newpasswordconfirm;
}

if (Cookies.get('language') === 'en') {
  homeLe.innerText = language.en.home;
  profileSettingLen.innerText = language.en.profilesetting;
  accountSettingLen.innerText = language.en.accountsetting;
  accountSettingLen1.innerText = language.en.accountsetting;
  securityLen.innerText = language.en.security;
  securityLen1.innerText = language.en.security;
  deleteAccountLen.innerText = language.en.deleteaccount;
  deleteAccountLen1.innerText = language.en.deleteaccount;
  deleteAccountParaLen.innerText = language.en.deleteaccountpara;
  changePasswordLen.innerText = language.en.changepassword;
  changeLen.innerText = language.en.change;
  currentPasswordLen.placeholder = language.en.currentpassword;
  newPasswordLen.placeholder = language.en.newpassword;
  newPasswordConfirmLen.placeholder = language.en.newpasswordconfirm;
}
