import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = "feedback-form-state";



const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}

let localItem;

populateStorage();


refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(e){
    e.preventDefault();
    localStorage.clear(); 
    console.log(localItem);
    localItem = {};
    e.currentTarget.reset();
}

function  onInput(e){
 const emailStorage = e.target.value;

 localItem.email = emailStorage;

 localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localItem));
}

function onTextareaInput(e){
const messageStorage = e.target.value;

localItem.message = messageStorage;

localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localItem));
}

function populateStorage(){

    localItem = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
    refs.input.value = localItem.email || '' ;
    refs.textarea.value = localItem.message || '';
}