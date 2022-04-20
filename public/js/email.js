const send = document.querySelector('.sendEmail');
const name = document.querySelector('#nameEmail');
const email = document.querySelector('#emailEmail');
const message = document.querySelector('#messageEmail');
send.addEventListener('click', function () {
  emailjs
    .send('service_cqtr20r', 'template_oo2b4qc', {
      from_name: name.value,
      name: name.value,
      email: email.value,
      message: message.value,
    })
    .then(response => {
      alert('You send email successfully!');
    })
    .catch(err => {
      alert("We couldn't send your email try again later :(");
    });
});
