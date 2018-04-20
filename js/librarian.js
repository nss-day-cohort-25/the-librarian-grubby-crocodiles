const giveInfo = (genre, requestee) => {
    let response = ""
    Library.forEach(book => {
        if (book.genre.toLowerCase() === genre.toLowerCase()) {
            response += `${book.title}, `
        }
    });
    response = response.slice(0, response.length - 2)
    response += "."
    //will eventually rewrite to call get current date function
    const thisDate = null;
    timeline.push(
        {
            who: "Librarian",
            what: "provided information about " + genre + " books to " + requestee,
            date: thisDate
        }
    )
    return response
}