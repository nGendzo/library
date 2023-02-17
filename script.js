let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function render() {
  let library = document.querySelector("#library");
  for (i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

// Clicking "New Book" button shows input form.
let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", () => {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "flex";
});

//Clicking "Add Book" button calls function that constructs new book object, pushes to library array and displays it to screen using "render" function.
document.querySelector("#new-book-form").addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
});
