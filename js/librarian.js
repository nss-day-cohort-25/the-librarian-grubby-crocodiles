
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

const librarian = Object.create({},{
    register: {
        value: function register(customer){
            const ID = '_' + Math.random().toString(36).substr(2, 9);
            customer.cardnumber = ID;
        }
    },
    checkout: {
        value: function checkout(bookTitle, customer){
            var includes = Library.some( book =>book["title"] === bookTitle);
            if(!includes){
                return false;
            }else{
                for(var book in Library){
                    if(Library[book].title == bookTitle){
                        Library[book].checkedOut = true;
                        Library[book].customer = customer;
                        Library[book].dueDate = librarian.setDueDate();
                        return true;
                    }
                }
            }
        } 
    },
    setDueDate: {
        value: function setDueDate(){
            var days = 7; // Days you want to add
            var date = new Date();
            var last = new Date(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var day =last.getDate();
            var month=last.getMonth()+1;
            var year=last.getFullYear();
            var dueDate = month + "-" + day + "," + year;
            return dueDate;
        } 
    }
})

