const currentFormTitle = document.querySelector('#title');
const currentFormAuthor = document.querySelector('#author');

const formAdd = (awesomeBookShelf) => {
  const title = currentFormTitle.value;
  const author = currentFormAuthor.value;
  awesomeBookShelf.addBook(title, author);
  awesomeBookShelf.saveDataToLocalStorage();
};

export default formAdd;
