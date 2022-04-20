const paymentLen = document.getElementById('paymentLen');
const paymentParaLen = document.getElementById('paymentParaLen');
const deliveryLen = document.getElementById('deliveryLen');
const totalLen = document.getElementById('totalLen');
const payOnlineLen = document.getElementById('payOnlineLen');
const cashOnDeliveryLen = document.getElementById('cashOnDeliveryLen');
const cancelPaymentLen = document.getElementById('cancelPaymentLen');
const maintenanceLen = document.getElementById('maintenanceLen');

var language = {
  ar: {
    payment: 'الدفع',
    paymentpara: 'يرجى ملاحظة أن الأموال التي تدفعها غير قابلة للاسترداد',
    delivery: 'رسوم التوصيل',
    total: 'المجموع الكلي',
    payonline: 'الدفع أونلاين',
    cashondelivery: 'الدفع عند التوصيل',
    cancel: 'الغاء عملية الشراء',
    maintenance: 'الدفع أونلاين لا يعمل الأن أختر الدفع عند توصيل',
  },
  en: {
    payment: 'Payment',
    paymentpara: 'Please note that the money you pay is non refundable.',
    delivery: 'Delivery fee',
    total: 'Total',
    payonline: 'Pay Online',
    cashondelivery: 'Cash On Delivery',
    cancel: 'Cancel',
    maintenance: 'Paying Online is not working now, it will work soon',
  },
};

if (Cookies.get('language') === 'ar') {
  paymentLen.innerText = language.ar.payment;
  paymentParaLen.innerText = language.ar.paymentpara;
  deliveryLen.innerText = language.ar.delivery;
  totalLen.innerText = language.ar.total;
  payOnlineLen.innerText = language.ar.payonline;
  cashOnDeliveryLen.innerText = language.ar.cashondelivery;
  cancelPaymentLen.innerText = language.ar.cancel;
  maintenanceLen.innerText = language.ar.maintenance;
}

if (Cookies.get('language') === 'en') {
  paymentLen.innerText = language.en.payment;
  paymentParaLen.innerText = language.en.paymentpara;
  deliveryLen.innerText = language.en.delivery;
  totalLen.innerText = language.en.total;
  payOnlineLen.innerText = language.en.payonline;
  cashOnDeliveryLen.innerText = language.en.cashondelivery;
  cancelPaymentLen.innerText = language.en.cancel;
  maintenanceLen.innerText = language.en.maintenance;
}
