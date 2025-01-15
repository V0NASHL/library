const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookInfo = function(){
        console.log(this.title, this.author, this.pages, this.read)
    };
};

function addBookToLibrary(){};
