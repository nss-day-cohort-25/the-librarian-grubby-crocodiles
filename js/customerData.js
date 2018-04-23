const jeremiah = Object.create({}, {
    firstName: {
        value: "Jeremiah",
    },
    lastName: {
        value: "Pritchard",
    },
    address: {
        value: "456 Halloway Rd, Antioch, TN"
    },
    favoriteGenres: {
        value: "Science Fiction"
    },
    libraryCardNumber: {
        value: "",
        writable: true
    },
    bookshelf: {
        value: [],
        writable: true
    },
    customerCheckout: {
        value: function (book) {
            if (librarian.checkout(book, this.name)) {
                this.bookshelf.push(Library.find(function (obj) {
                    return obj.title == book;
                }
                ))
            }
        }
    },
    askgenre: {
        value: function (genre) {
            librarian.giveInfo(genre, this.firstName)
        }
    },
    returnBook: {
        value: function (book) {
            this.bookshelf.forEach(element => {
                if (element.title === book) {
                    const index = this.bookshelf.indexOf(element);
                    if (index > -1) {
                        this.bookshelf.splice(index, 1);
                    }
                }
            })
        }
    }
})

const riley = Object.create({}, {
    firstName: {
        value: "Riley",
    },
    lastName: {
        value: "Mathews",
    },
    address: {
        value: "45876 Calloway Rd, Nashvile, TN"
    },
    favoriteGenres: {
        value: "Science Fiction"
    },
    libraryCardNumber: {
        value: "",
        writable: true
    },
    bookshelf: {
        value: [],
        writable: true
    },
    customerCheckout: {
        value: function (book) {
            if (librarian.checkout(book, this.name)) {
                this.bookshelf.push(Library.find(function (obj) {
                    return obj.title == book;
                }
                ))
            }
        }
    },

    askgenre: {
        value: function (genre) {
            librarian.giveInfo(genre, this.firstName)
        }
    },
    returnBook: {
        value: function (book) {
            this.bookshelf.forEach(element => {
                if (element.title === book) {
                    const index = this.bookshelf.indexOf(element);
                    if (index > -1) {
                        this.bookshelf.splice(index, 1);
                    }
                }
            })
        }
    }
})

const patrick = Object.create({}, {
    firstName: {
        value: "Patrick",
    },
    lastName: {
        value: "Murphy",
    },
    address: {
        value: "476 Hanover Rd, Nashvile, TN"
    },
    favoriteGenres: {
        value: "Biography"
    },
    libraryCardNumber: {
        value: "",
        writable: true
    },
    bookshelf: {
        value: [],
        writable: true
    },
    customerCheckout: {
        function(book) {
            if (librarian.checkout(book, this.name)) {
                this.bookshelf.push(Library.find(function (obj) {
                    return obj.title == book;
                }
                ))
            }
        }
    },
    askgenre: {
        value: function (genre) {
            librarian.giveInfo(genre, this.firstName)
        }
    },
    returnBook: {
        value: function (book) {
            this.bookshelf.forEach(element => {
                if (element.title === book) {
                    const index = this.bookshelf.indexOf(element);
                    if (index > -1) {
                        this.bookshelf.splice(index, 1);
                    }
                }
            })
        }
    }
})

const jacob = Object.create({}, {
    firstName: {
        value: "Jacob",
    },
    lastName: {
        value: "Smith",
    },
    address: {
        value: "45876 Calloway Rd, Nashvile, TN"
    },
    favoriteGenres: {
        value: "Thriller"
    },
    libraryCardNumber: {
        value: "",
        writable: true
    },
    bookshelf: {
        value: [],
        writable: true
    },
    customerCheckout: {
        function(book) {
            if (librarian.checkout(book, this.name)) {
                this.bookshelf.push(Library.find(function (obj) {
                    return obj.title == book;
                }
                ))
            }
        }
    },
    askgenre: {
        value: function (genre) {
            librarian.giveInfo(genre, this.firstName)
        }
    },
    returnBook: {
        value: function (book) {
            this.bookshelf.forEach(element => {
                if (element.title === book) {
                    const index = this.bookshelf.indexOf(element);
                    if (index > -1) {
                        this.bookshelf.splice(index, 1);
                    }
                }
            })
        }
    }
})
