const libraryContent = document.querySelector(".library-content");
const addBookButton = document.querySelector(".add-book-button");
const myLibrary = [];

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

addBookButton.addEventListener("click", (e) => {
    addBookToLibrary(e);
});

function addBookToLibrary(e) {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const isRead = false;

    const bookObject = new Book(title, author, pages, isRead);
    myLibrary.push(bookObject);

    displayLibrary();
}

function displayLibrary() {
    libraryContent.innerHTML = "";
    myLibrary.forEach((book, index) => {
        const libraryCard = document.createElement("div");
        const titleText = document.createElement("h1");
        const authorText = document.createElement("h2");
        const pagesText = document.createElement("h3");
        const markAsReadButton = document.createElement("button");
        const removeBookButton = document.createElement("button");

        libraryCard.classList.add("library-card");
        titleText.textContent = book.title;
        authorText.textContent = book.author;
        pagesText.textContent = book.pages;
        markAsReadButton.textContent = "Mark as read";
        removeBookButton.textContent = "Remove";

        markAsReadButton.addEventListener("click", () => {
            book.isRead = !book.isRead;
            markAsReadButton.textContent = book.isRead
                ? "Unread"
                : "Mark as read";
            markAsReadButton.style.backgroundColor = book.isRead
                ? "green"
                : "red";
            markAsReadButton.style.color = "white";
        });

        removeBookButton.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            displayLibrary();
        });

        libraryCard.appendChild(titleText);
        libraryCard.appendChild(authorText);
        libraryCard.appendChild(pagesText);
        libraryCard.appendChild(markAsReadButton);
        libraryCard.appendChild(removeBookButton);
        libraryContent.appendChild(libraryCard);
    });
}
