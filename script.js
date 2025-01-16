const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function render(){
    let table = document.getElementById("tableData").getElementsByTagName("tbody")[0];
    table.innerHTML = ""; 

    for (let i = 0; i < myLibrary.length; i++) {
        let bookInfo = myLibrary[i];
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${bookInfo.title}</td>
            <td>${bookInfo.author}</td>
            <td>${bookInfo.pages}</td>
            <td>${bookInfo.read}</td>
            <td><button class="remove" onclick="remove(${i})">Remove</button></td>
            `;

        table.appendChild(row);

    }
};

function remove(index){
    myLibrary.splice(index, 1);
    render();
};


function addBookToLibrary(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("status").value

    let newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
    render();

};
