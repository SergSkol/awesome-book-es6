const books = document.querySelector('.book-shelf');
const form = document.querySelector('.form');
const contact = document.querySelector('.contact');

const showList = () => {
  books.classList.remove('hide');
  form.classList.add('hide');
  contact.classList.add('hide');
}

const showAdd = () => {
  books.classList.add('hide');
  form.classList.remove('hide');
  contact.classList.add('hide');
}

const showContact = () => {
  books.classList.add('hide');
  form.classList.add('hide');
  contact.classList.remove('hide');
}

export {showList, showAdd, showContact};
