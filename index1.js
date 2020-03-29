// Initialize Firebase(2)
var config = {
          apiKey: "AIzaSyA063-ngsexQ0rhIvtHRKP0LmB0yBrH5vk",	
          authDomain: "oneclick-73406.firebaseapp.com",
          databaseURL: "https://oneclick-73406.firebaseio.com",
          projectId: "oneclick-73406",
          storageBucket: "oneclick-73406.appspot.com",
          messagingSenderId: "69122383434"
      };
firebase.initializeApp(config);

//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document
  .getElementById('registrationform')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let fname = document.querySelector('#first_name').value;
  let lname = document.querySelector('#last_name').value;
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  let pname = document.querySelector('#pin_name').value;
  let sname = document.querySelector('#sponce_name').value;
  let userid = document.querySelector('#user_id').value;
  let mobile = document.querySelector('#mobile').value;

  //send message values
  sendMessage(fname,lname, email, password,pname,sname, userid, mobile);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('registrationform').reset();
}

//Send Message to Firebase(4)

function sendMessage(fname,lname,email, password, pname,sname, userid, mobile) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    fname: fname,
    lname: lname,
    email: email,
    password: password,
    pname: pname,
    sname: sname,
    mobile: mobile
  });
}