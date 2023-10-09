const libraryDiv = document.getElementById('library')
const newBook = document.getElementById('new-book')
const dialog = document.getElementById('dialogue')
const addBook = document.querySelector('dialog button')

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

let firstBook = 
    {
    "author": 'Joseph Conrad',
    "title": 'Heart of Darkness',
    "pages": '105',
    "read": 'Read'
    }

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
    lRead.textContent = read
        
    latestBookDiv.appendChild(lAuthor)
    latestBookDiv.appendChild(lTitle)
    latestBookDiv.appendChild(lPages)
    latestBookDiv.appendChild(lRead)
}

addToLibrary(firstBook.author, firstBook.title, firstBook.pages, firstBook.read)

function addNewBook() {
    let bAuthor = document.getElementById('book-author').value
    let bTitle = document.getElementById('book-title').value
    let bPages = document.getElementById('book-pages').value
    let bRead = document.getElementById('book-read').value
    let enteredBook = new book(bAuthor, bTitle, bPages, bRead)
    addToLibrary(enteredBook.author, enteredBook.title, enteredBook.pages, enteredBook.read)
    dialog.close()
}