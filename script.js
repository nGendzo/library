let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function render() {
  let library = document.querySelector("#library");
  library.textContent = "";
  for (i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookDiv = document.createElement("div");
    bookDiv.classList.toggle("book-card");
    library.appendChild(bookDiv);
    let bookTitle = document.createElement("h2");
    bookTitle.textContent = `${book.title}`;
    bookDiv.appendChild(bookTitle);
    let bookAuthor = document.createElement("p");
    bookAuthor.textContent = `${book.author}`;
    bookDiv.appendChild(bookAuthor);
    let bookPages = document.createElement("p");
    bookPages.textContent = `${book.pages}`;
    bookDiv.appendChild(bookPages);
    let bookRead = document.createElement("p");
    bookRead.textContent = `${book.read ? "Read" : "Not Read Yet"}`;
    bookDiv.appendChild(bookRead);
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.setAttribute("onclick", `removeBook(${i})`);
    bookDiv.appendChild(removeBtn);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
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
