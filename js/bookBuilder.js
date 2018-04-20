//function to push objects into the library array

const bookBuilder = (title, author, genre, isbn, photoSrc) => {
    Library.push(
        Object.create({}, {
            "title": {
                value: title,
                enumerable: true
            },
            "author": {
                value: author,
                enumerable: true
            },
            "genre": {
                value: genre,
                enumerable: true
            },
            "isbn": {
                value: isbn,
                enumerable: true
            },
            "checkedOut": {
                value: false,
                enumerable: true,
                writable: true
            },
            "dueDate": {
                value: "",
                enumerable: true,
                writable: true
            },
            "photoSrc": {
                value: photoSrc,
                enumerable: true,
            }
        })
    )
}


