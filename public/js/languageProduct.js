const flowersLen = document.getElementById('flowersLen');
const bouquetsLen = document.getElementById('bouquetsLen');
const vasesLen = document.getElementById('vasesLen');
const goBackLen = document.getElementById('goBackLen');
const addToCartLen = document.querySelectorAll('.addToCartLen');

var language = {
  ar: {
    flower: 'الزهور',
    bouquets: 'باقات الورود',
    vase: 'المزهريات',
    goback: 'العودة الى الصفحة الرئيسية',
    addtocart: 'أضف الى العربة',
  },
  en: {
    flower: 'Flowers',
    bouquets: 'Bouquets',
    vase: 'Vases',
    goback: 'Go Back',
    addtocart: 'Add to Cart',
  },
};

if (Cookies.get('language') === 'ar') {
  flowersLen.innerText = language.ar.flower;
  bouquetsLen.innerText = language.ar.bouquets;
  vasesLen.innerText = language.ar.vase;
  goBackLen.innerText = language.ar.goback;
  addToCartLen.forEach(el => {
    el.innerText = language.ar.addtocart;
  });
}
if (Cookies.get('language') === 'en') {
  flowersLen.innerText = language.en.flower;
  bouquetsLen.innerText = language.en.bouquets;
  vasesLen.innerText = language.en.vase;
  goBackLen.innerText = language.en.goback;
  addToCartLen.forEach(el => {
    el.innerText = language.en.addtocart;
  });
}
