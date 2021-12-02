"use strict"

const iconMenu = document.querySelector('.header_burger');
const menuBody = document.querySelector('.menu');
if(iconMenu){
    iconMenu.addEventListener("click", function(){
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');

    });
}

const menuLink = document.querySelectorAll('.menu_link');
if(menuLink.length > 0){
    menuLink.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinckClick)
    })

    function onMenuLinckClick(e){

        if(iconMenu.classList.contains('active')){
            document.body.classList.remove('lock');
            iconMenu.classList.remove('active');
            menuBody.classList.remove('active');
        }
    }
}

const form = document.getElementById('form');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const inputNameValue = inputName.value.trim();
    const inputEmailValue = inputEmail.value.trim();
    const message = message.value.trim();

    if (inputNameValue === '') {
        // добавляем error + error class
        setErrorFor(inputName, 'Имя должно быть заполненно')
    }else{
        // добавляем success class
        setSuccessFor(inputName);
    }
}

    function setErrorFor(input){
        input.classList.add('_error');
    }
    function setSuccessFor(input){
        input.classList.add('_success');
    }
