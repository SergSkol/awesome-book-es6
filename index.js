import BookShelf from './modules/bookShelf.js';
import { showList, showAdd, showContact } from './modules/menuShow.js';
import formAdd from './modules/formAdd.js';
import { DateTime } from './modules/luxon.js';

const linkAdd = document.querySelector('#link-add');
const linkList = document.querySelector('#link-list');
const linkContact = document.querySelector('#link-contact');
const currentFormBookAddButton = document.querySelector('#book-add-button');
const dateTimeBar = document.querySelector('.date-time');

const awesomeBookShelf = new BookShelf();

linkList.addEventListener('click', () => {
  showList();
});

linkAdd.addEventListener('click', () => {
  showAdd();
});

linkContact.addEventListener('click', () => {
  showContact();
});

currentFormBookAddButton.addEventListener('click', () => {
  formAdd(awesomeBookShelf);
});

const timer = () => {
  const now = DateTime.now();
  dateTimeBar.innerHTML = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

setInterval(timer, 1000);

window.onload = () => {
  awesomeBookShelf.loadDataFromLocalStorage();
  showList();
};
