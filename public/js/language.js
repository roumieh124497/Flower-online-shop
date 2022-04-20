const english = document.querySelector('.englishLanguage');
const arabic = document.querySelector('.arabicLanguage');
const settingLe = document.getElementById('settingLe');
const logoutLe = document.getElementById('logoutLe');
const signUpLe1 = document.getElementById('signUpLe1');
const signUpLe2 = document.getElementById('signUpLe2');
const loginLe = document.getElementById('loginLe');
const searchLabelLen = document.getElementById('searchLabelLen');
const cartLen = document.getElementById('cartLen');
const wrapperLen = document.getElementById('wrapperLen');

const totalLen = document.getElementById('totalLen');
const cartFilledLen = document.getElementById('cartFilledLen');
const deliveryTimeLen = document.getElementById('deliveryTimeLen');
const checkoutLen = document.getElementById('checkoutLen');
const homeLe = document.getElementById('homeLen');
const homeLe1 = document.getElementById('homeLen1');
const productLen1 = document.getElementById('productLen1');
const productLen2 = document.getElementById('productLen2');
const productLen3 = document.getElementById('productLen3');
const bestSellerLen = document.getElementById('bestSellerLen');
const bestSellerLen1 = document.getElementById('bestSellerLen1');
const bestSellerLen2 = document.getElementById('bestSellerLen2');
const aboutLen = document.getElementById('aboutLen');
const contactLen = document.getElementById('contactLen');
const contactLen1 = document.getElementById('contactLen1');
const shopLen1 = document.getElementById('shopLen1');
const shopLen2 = document.getElementById('shopLen2');
const shopLen3 = document.getElementById('shopLen3');
const shopLen4 = document.getElementById('shopLen4');
const aboutLen2 = document.getElementById('aboutLen2');
const aboutTextLen = document.getElementById('aboutTextLen');
const bestFlowerLen = document.getElementById('bestFlowerLen');
const flowersLen = document.getElementById('flowersLen');
const bouquetsLen = document.getElementById('bouquetsLen');
const vasesLen = document.getElementById('vasesLen');
const addToCartLen = document.querySelectorAll('.addToCartLen');
const emailInputLen = document.getElementsByName('email')[0];
const nameInputLen = document.getElementsByName('name')[0];
const messageInputLen = document.getElementsByName('message')[0];
const sendInputLen = document.getElementsByName('sendButton')[0];
const phoneNumberLen = document.getElementsByName('phoneNumber')[0];
const addressLen = document.getElementsByName('address')[0];
const orderFeedBackLen = document.getElementsByName('orderFeedBack')[0];
const informationLen = document.getElementById('informationLen');
const locationLen = document.getElementById('locationLen');
const quickLinkLen = document.getElementById('quickLinkLen');
const openingHoursLen = document.getElementById('openingHoursLen');
const dayhourLen = document.getElementById('dayhourLen');

english.addEventListener('click', () => {
  location.reload(true);
  Cookies.set('language', 'en');
});
arabic.addEventListener('click', () => {
  location.reload(true);
  Cookies.set('language', 'ar');
});

var language = {
  ar: {
    setting: 'الاعدادات',
    logout: 'تسجيل الخروج',
    signup: 'أنشاء حساب',
    login: 'تسجيل الدخول',
    searchLabel: 'أكتب أسم الزهرة بالانجليزي',
    cart: 'عربة التسوق',
    wrapper: '  لون تغليف الزهرة',
    delivery: 'رسوم التوصيل 30 درهم',
    total: 'الرسوم الاجمالية : ',
    cartfields: 'يرجى ملئ جميع الحقول : ',
    deliverytime: 'موعد التوصيل',
    checkout: 'شراء',
    home: 'الصفحة الرئيسية',
    product: 'المتجر',
    bestseller: 'أفضل مبيعاتنا',
    about: 'من نحن',
    contact: 'تواصل معنا',
    shop: 'تسوق الأن',
    abouttext:
      'هيسنت فلاور هو محل زهور جديد في أبو ظبي ، الإمارات العربية المتحدة. نفتح بابنا منذ عام 2021 هدفنا الرئيسي هو تقديم زهور عالية الجودة لعملائنا لإسعادهم لأننا نؤمن دائمًا أن العملاء يجب أن يكونوا سعداء دائمًا بباقة زهور جميلة.',
    bestflower: 'من أفضل محلات الزهور في ابوظبي',
    flower: 'الزهور',
    bouquets: 'باقات الورود',
    vase: 'المزهريات',
    addtocart: 'أضف الى العربة',
    emailinput: 'بريد إلكتروني',
    nameinput: 'الاسم الكامل',
    messageinput: 'أكتب رسالتك هنا',
    snedinput: 'أرسل',
    phonenumberinput: 'رقم الهاتف',
    addressinput: 'أكتب العنوان',
    feedbackInput: 'ماذا تريد ان تخبرنا ',
    information: 'موقع متجر هايسنت',
    location: 'العنوان: أبوظبي - غياثي - جمعية الظفرة التعاونية - الطابق الأول',
    quicklink: 'روابط سريعة',
    openinghour: 'ساعات العمل',
    dayhour: 'الأحد - السبت: 10 صباحًا - 10 مساءً',
  },
  en: {
    setting: 'Settings',
    logout: 'Log Out',
    signup: 'Sign Up',
    login: 'Login',
    searchLabel: 'Search a flowers in English',
    cart: 'Cart',
    wrapper: 'Rose Wrap color',
    delivery: 'Delivery 30 AED ',
    total: 'Total : ',
    cartfields: 'Please Fill the following fields:',
    deliverytime: 'Delivery Time',
    checkout: 'Checkout',
    home: 'Home',
    product: 'Products',
    bestseller: 'Best Sellers',
    about: 'About Us',
    contact: 'Contact Us',
    shop: 'Shop Now',
    abouttext:
      'Hiscent Flower is a brand new flower shop in Abu Dhabi, United Emirates. We open our door since 2021 our main goal is to provide a high quality flowers to our customers to make them happy because we always believes that customers should always be happy with a nice bouquet of flower.',
    bestflower: 'One of the best shop in Abu Dhabi.',
    flower: 'Flowers',
    bouquets: 'Bouquets',
    vase: 'Vases',
    addtocart: 'Add to Cart',
    emailinput: 'Email',
    nameinput: 'Full Name',
    messageinput: 'Message',
    snedinput: 'Send',
    phonenumberinput: 'Your phone number',
    addressinput: 'Address',
    feedbackInput: 'Your order feedback',
    information: 'Hiscent Flower Location',
    location:
      ' Address : Abu Dhabi - Ghiyathi - AL Dahfra Co-Operative Society - First floor.',
    quicklink: 'Quick Links',
    openinghour: 'Opening Hours',
    dayhour: 'Sun-Sat: 10am - 10pm',
  },
};

//arabic
if (Cookies.get('language') === 'ar') {
  if (settingLe && logoutLe) {
    settingLe.innerText = language.ar.setting;
    logoutLe.innerText = language.ar.logout;
  }
  if (signUpLe1 && signUpLe2) {
    signUpLe1.innerText = language.ar.signup;
    signUpLe2.innerText = language.ar.signup;
  }

  if (loginLe) {
    loginLe.innerText = language.ar.login;
  }
  searchLabelLen.innerText = language.ar.searchLabel;
  cartLen.innerText = language.ar.cart;
  if (wrapperLen) {
    wrapperLen.innerText = language.ar.wrapper;
  }

  totalLen.innerText = language.ar.total;
  cartFilledLen.innerText = language.ar.cartfields;
  deliveryTimeLen.innerText = language.ar.deliverytime;
  checkoutLen.innerText = language.ar.checkout;
  homeLe.innerText = language.ar.home;
  homeLe1.innerText = language.ar.home;
  productLen1.innerText = language.ar.product;
  productLen2.innerText = language.ar.product;
  productLen3.innerText = language.ar.product;
  bestSellerLen.innerText = language.ar.bestseller;
  bestSellerLen1.innerText = language.ar.bestseller;
  bestSellerLen2.innerText = language.ar.bestseller;
  aboutLen.innerText = language.ar.about;
  aboutLen2.innerText = language.ar.about;
  contactLen.innerText = language.ar.contact;
  contactLen1.innerText = language.ar.contact;
  shopLen1.innerText = language.ar.shop;
  shopLen2.innerText = language.ar.shop;
  shopLen3.innerText = language.ar.shop;
  shopLen4.innerText = language.ar.shop;
  aboutTextLen.innerText = language.ar.abouttext;
  bestFlowerLen.innerText = language.ar.bestflower;
  flowersLen.innerText = language.ar.flower;
  bouquetsLen.innerText = language.ar.bouquets;
  vasesLen.innerText = language.ar.vase;
  addToCartLen.forEach(el => {
    el.innerText = language.ar.addtocart;
  });
  emailInputLen.placeholder = language.ar.emailinput;
  nameInputLen.placeholder = language.ar.nameinput;
  messageInputLen.placeholder = language.ar.messageinput;
  phoneNumberLen.placeholder = language.ar.phonenumberinput;
  addressLen.placeholder = language.ar.addressinput;
  orderFeedBackLen.placeholder = language.ar.feedbackInput;
  sendInputLen.value = language.ar.snedinput;
  informationLen.innerText = language.ar.information;
  locationLen.innerText = language.ar.location;
  quickLinkLen.innerText = language.ar.quicklink;
  openingHoursLen.innerText = language.ar.openinghour;
  dayhourLen.innerText = language.ar.dayhour;
}

//////////
//english//
if (Cookies.get('language') === 'en') {
  if (settingLe && logoutLe) {
    settingLe.innerText = language.en.setting;
    logoutLe.innerText = language.en.logout;
  }

  if (signUpLe1 && signUpLe2) {
    signUpLe1.innerText = language.en.signup;
    signUpLe2.innerText = language.en.signup;
  }

  if (loginLe) {
    loginLe.innerText = language.en.login;
  }
  searchLabelLen.innerText = language.en.searchLabel;
  cartLen.innerText = language.en.cart;
  if (wrapperLen) {
    wrapperLen.innerText = language.en.wrapper;
  }

  totalLen.innerText = language.en.total;
  cartFilledLen.innerText = language.en.cartfields;
  deliveryTimeLen.innerText = language.en.deliverytime;
  checkoutLen.innerText = language.en.checkout;
  homeLe.innerText = language.en.home;
  homeLe1.innerText = language.en.home;
  productLen1.innerText = language.en.product;
  productLen2.innerText = language.en.product;
  productLen3.innerText = language.en.product;
  bestSellerLen.innerText = language.en.bestseller;
  bestSellerLen1.innerText = language.en.bestseller;
  bestSellerLen2.innerText = language.en.bestseller;
  aboutLen.innerText = language.en.about;
  contactLen.innerText = language.en.contact;
  contactLen1.innerText = language.en.contact;
  shopLen1.innerText = language.en.shop;
  shopLen2.innerText = language.en.shop;
  shopLen3.innerText = language.en.shop;
  shopLen4.innerText = language.en.shop;
  aboutTextLen.innerText = language.en.abouttext;
  bestFlowerLen.innerText = language.en.bestflower;
  flowersLen.innerText = language.en.flower;
  bouquetsLen.innerText = language.en.bouquets;
  vasesLen.innerText = language.en.vase;
  addToCartLen.forEach(el => {
    el.innerText = language.en.addtocart;
  });
  emailInputLen.placeholder = language.en.emailinput;
  nameInputLen.placeholder = language.en.nameinput;
  messageInputLen.placeholder = language.en.messageinput;
  phoneNumberLen.placeholder = language.en.phonenumberinput;
  addressLen.placeholder = language.en.addressinput;
  orderFeedBackLen.placeholder = language.en.feedbackInput;
  sendInputLen.value = language.en.snedinput;
  informationLen.innerText = language.en.information;
  locationLen.innerText = language.en.location;
  quickLinkLen.innerText = language.en.quicklink;
  openingHoursLen.innerText = language.en.openinghour;
  dayhourLen.innerText = language.en.dayhour;
}
