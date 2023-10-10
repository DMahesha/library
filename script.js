const libraryDiv = document.getElementById('library')
const newBook = document.getElementById('new-book')
const dialog = document.getElementById('dialogue')
const addBook = document.querySelector('dialog button')
const closeDiaglog = document.getElementById('close-dialog')
let bookRead = document.getElementById('book-read')
let bookNotRead = document.getElementById('book-not-read')

function book(author, title, pages, read) {
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
}

newBook.addEventListener('click', () => {
    dialog.showModal()
})

addBook.addEventListener('click', addNewBook)

let myLibrary = [
    {
    "author": 'Joseph Conrad',
    "title": 'Heart of Darkness',
    "pages": '105',
    "read": true
    }
]

function addToLibrary(author, title, pages, read) {
    let latestBookDiv = document.createElement('div')
    latestBookDiv.setAttribute('id', 'book-entry')
    latestBookDiv.style.cssText = 'border: solid 1px black; width: fit-content; padding: 3px;'
    libraryDiv.appendChild(latestBookDiv)
        
    let lAuthor = document.createElement('div')
    lAuthor.setAttribute('id', 'book-result')
    lAuthor.style.cssText = 'padding: 2px'
    lAuthor.textContent = `Author: ${author}`
        
    let lTitle = document.createElement('div')
    lTitle.setAttribute('id', 'book-result')
    lTitle.style.cssText = 'padding: 2px'
    lTitle.textContent = `Title: ${title}`
        
    let lPages = document.createElement('div')
    lPages.setAttribute('id', 'book-result')
    lPages.style.cssText = 'padding: 2px'
    lPages.textContent = `${pages} Pages` 
        
    let lRead = document.createElement('div')
    lRead.setAttribute('id', 'book-result')
    lRead.style.cssText = 'padding: 2px'
    read === true ? lRead.textContent = 'Read' : lRead.textContent = 'Not Read'
        
    latestBookDiv.appendChild(lAuthor)
    latestBookDiv.appendChild(lTitle)
    latestBookDiv.appendChild(lPages)
    latestBookDiv.appendChild(lRead)
}

addToLibrary(myLibrary[0].author, myLibrary[0].title, myLibrary[0].pages, myLibrary[0].read)

function addNewBook() {
    let bAuthor = document.getElementById('book-author').value
    let bTitle = document.getElementById('book-title').value
    let bPages = document.getElementById('book-pages').value
    if (document.getElementById('book-read').checked) {
        bRead = true
    } else if (document.getElementById('book-not-read').checked) {
        bRead = false
    }
    let enteredBook = new book(bAuthor, bTitle, bPages, bRead)
    myLibrary.push(enteredBook)
    addToLibrary(enteredBook.author, enteredBook.title, enteredBook.pages, enteredBook.read)
    dialog.close()
}

closeDiaglog.addEventListener('click', () => {
    dialog.close()
})