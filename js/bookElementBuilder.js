// function to return card based on which book is passed to it as argument
const bookElement = book => {
    const section = document.createElement('section')
    const fragment = document.createDocumentFragment()
    Library.forEach(bookItem => {
        if (book === bookItem.title) {
            //create elements for each book item
            const title = document.createElement('h3')
            const author = document.createElement('h5')
            const genre = document.createElement('p')
            const number = document.createElement('p')
            const image = document.createElement('img')

            //add classes to nessesary elements
            image.classList = "book-cover"

            //add element content
            title.textContent = bookItem.title
            author.textContent = bookItem.author
            genre.textContent = bookItem.genre
            number.textContent = bookItem.isbn
            image.setAttribute("src", bookItem.photoSrc)

            //attach elements to fragment
            fragment.appendChild(title)
            fragment.appendChild(author)
            fragment.appendChild(image)
            fragment.appendChild(genre)
            fragment.appendChild(number)

            //create section to hold book
            
            section.appendChild(fragment)

            console.log(section)
            return section
            
            //print to DOM
            // const output = document.querySelector("#output")
            // output.appendChild(section)
        }
    });
    return section

}

