const libraryDiv = document.getElementById('library')
const newBook = document.getElementById('new-book')
const dialog = document.getElementById('dialogue')
const addBook = document.querySelector('dialog button')
const closeDiaglog = document.getElementById('close-dialog')
let bookRead = document.getElementById('book-read')
let bookNotRead = document.getElementById('book-not-read')

function book(author, title, pages, read) {
    this.bookAuthor = author
    this.bookTitle = title
    this.bookPages = pages
    this.bookRead = read
}

newBook.addEventListener('click', () => {
    dialog.showModal()
})

addBook.addEventListener('click', addNewBook)

let myLibrary = [
    {
    "bookAuthor": 'Joseph Conrad',
    "bookTitle": 'Heart of Darkness',
    "bookPages": '105',
    "bookRead": true
    }
]

let index = ''

function addToLibrary(author, title, pages, read) {
    let latestBookDiv = document.createElement('div')
    // latestBookDiv.setAttribute('id', `${title}`)
    latestBookDiv.setAttribute('class', 'book-entry')
    latestBookDiv.style.cssText = 'border: solid 1px black; width: fit-content; padding: 3px;'
    libraryDiv.appendChild(latestBookDiv)
        
    let latestAuthor = document.createElement('div')
    latestAuthor.style.cssText = 'padding: 2px'
    latestAuthor.textContent = `Author: ${author}`
        
    let latestTitle = document.createElement('div')
    latestTitle.style.cssText = 'padding: 2px'
    latestTitle.textContent = `Title: ${title}`
        
    let latestPages = document.createElement('div')
    latestPages.style.cssText = 'padding: 2px'
    latestPages.textContent = `Length: ${pages} Pages` 
        
    let latestRead = document.createElement('div')
    latestRead.style.cssText = 'padding: 2px'
    read === true ? latestRead.textContent = 'Status: Read' : latestRead.textContent = 'Status: Not Read'

    let changeStatus = document.createElement('button')
    changeStatus.textContent = "Change Status"
    changeStatus.style.cssText = 'padding: 2px'

    changeStatus.addEventListener('click', () => {
        if (read === true) {
            read = false;
            read === true ? latestRead.textContent = 'Status: Read' : latestRead.textContent = 'Status: Not Read'
        } else {
            read = true;
            read === true ? latestRead.textContent = 'Status: Read' : latestRead.textContent = 'Status: Not Read'
        }
    })

    let removeButton = document.createElement('button')
    removeButton.textContent = 'Remove'
    removeButton.style.cssText = 'padding: 2px'

    removeButton.addEventListener('click', () => {
        index = myLibrary.map(e => e.bookTitle).indexOf(`${title}`)
        myLibrary.splice(index, 1)
        generateLibrary()
    })

    latestBookDiv.appendChild(latestAuthor)
    latestBookDiv.appendChild(latestTitle)
    latestBookDiv.appendChild(latestPages)
    latestBookDiv.appendChild(latestRead)
    latestBookDiv.appendChild(changeStatus)
    latestBookDiv.appendChild(removeButton)
}

/*

each removebutton has its own id
each removebutton has its own eventlistener
removing object with removebutton's id removes it from myLibrary

*/

addToLibrary(myLibrary[0].bookAuthor, myLibrary[0].bookTitle, myLibrary[0].bookPages, myLibrary[0].bookRead)

function generateLibrary() {
    resetLibrary()
    for (var i = 0 ; i < myLibrary.length ; i++) {
        addToLibrary(myLibrary[i].bookAuthor, myLibrary[i].bookTitle, myLibrary[i].bookPages, myLibrary[i].bookRead)
    }
}

function resetLibrary() {
    let x = document.querySelectorAll('.book-entry')
    x.forEach(item => {
        libraryDiv.removeChild(item)
    })
}

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
    generateLibrary()
    dialog.close()
}


closeDiaglog.addEventListener('click', () => {
    dialog.close()
})