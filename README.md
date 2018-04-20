# The Librarian

Your job is to build a system that allows the public to interact with a librarian at a library to get information about books, get a library card, check out books, and return books.

## The Library

Build a database of books. Each book will have the following properties.

1. Book object
1. Title
1. Author
1. Genre
1. ISBN number
1. Checked out
1. Date due (blank string as default)

## The Customers

Each of you must define yourselves as an actor in this system. The following properties and methods must be defined.

1. Favorite genre(s)
1. An empty bookshelf
1. First name
1. Last name
1. Address
1. Library card number (blank to start)
1. Checkout a book. If it's available, add it to your bookshelf.
1. Return a book. It should be removed from your bookshelf.

## The Librarian

Define the Librarian actor in the system. The Librarian has the following responsiblities.

1. Register a customer by providing a library card number
1. Checkout a book requested by a customer.
    1. If the book is already checked out, don't give it to the customer.
    1. If the book is available, set its due date for one week in the future, and mark that it has been checked out.
1. Check a book back in.
    1. If it is overdue, tell the customer that they owe $5.
    1. Mark the book as checked in.
    1. Reset its due date to its default value
1. If a customer requests which books are in stock for a particular genre, provide a list of corresponding book titles.

## Story Mode

Once you have the basic design of the system in place, here's what you should display in the browser.

When any action takes place between the actors, log an entry in a timeline as a DOM component.

1. Customer got a library card
1. Librarian provided info about a genre
1. Customer checked out a book
1. Librarian charged for a late book
1. Customer checked a book back in
1. Librarian gave a book to a customer
1. Librarian put a book back into library.

etc...
