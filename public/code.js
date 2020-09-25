let login_button = document.getElementById('entrance'); 
let login_popup = document.getElementById('login_popup'); 
let popup_error = document.getElementById('popup_error'); 
let popup_success = document.getElementById('popup_success'); 
let popup_close = document.getElementById('popup_close'); 
let form = document.querySelector("form");
let login = form.querySelector('#login');
let password = form.querySelector('#password');
let ok_button = popup_error.querySelector('#popup_ok');
let close_button = popup_success.querySelector('#popup_close');
let mobile_menu = document.querySelector('#mobile_drop_menu');
let burger = document.getElementById('burger'); 
let mobile_cross = document.getElementById('mobile_cross'); 

var storage = localStorage.getItem("login");
var isStorageSupport = true;
// var storage = localStorage.getItem("login");
// var login = localStorage.getItem("login");
// var storage = localStorage.getItem("login");

login_button.addEventListener('click', (evt)=>{
    evt.preventDefault();
    login_popup.classList.remove('hidden');
});

burger.addEventListener('click', (evt)=>{
    evt.preventDefault();
    drop_menu.classList.remove('hidden');
    burger.classList.add('hidden');
});

popup_close.addEventListener('click', (evt)=>{
    evt.preventDefault();
    login_popup.classList.add('hidden');
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (!login_popup.classList.contains("hidden")) {
        evt.preventDefault();
        login_popup.classList.add("hidden");
      }
    }
});

  form.addEventListener("submit", function(evt) {
    if (!login.value || !password.value) {
      evt.preventDefault();
      login.style = 'outline: 2px solid red';
      password.style = 'outline: 2px solid red';
      popup_error.classList.remove("hidden");
    } else {
        evt.preventDefault();
        popup_success.classList.remove("hidden");
    }
  });

  ok_button.addEventListener('click', ()=>{
    popup_error.classList.add('hidden');
  });

  close_button.addEventListener('click', ()=>{
    popup_success.classList.add('hidden');
    login_popup.classList.add("hidden");
  });

  burger.addEventListener('click', ()=>{
    mobile_menu.classList.remove('hidden');
    burger.classList.add("hidden");
    if (mobile_cross.classList.contains("hidden")) {
        mobile_cross.classList.remove("hidden");
    }
  });

  mobile_cross.addEventListener('click', ()=>{
    mobile_menu.classList.add('hidden');
    mobile_cross.classList.add("hidden");
    burger.classList.remove("hidden");
  });
