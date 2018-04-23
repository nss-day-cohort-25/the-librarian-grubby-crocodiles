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
    },
    returnBook: {
        value: function(book){
            for(var i =0;i <Library.length;i++){
                if(Library[i].title == book){
                    var today = new Date();
                    var todayTime = today.getTime(); //miliseconds
                    let eightHourWorkDay = todayTime + (1000 * 60 * 60 * 8) // adds eight hours to the day
                    var dueDateTime = Date.parse(Library[i].dueDate); // miliseconds
                    Library[i].dueDate = "";
                    Library.checkedOut = false;
                    if(eightHourWorkDay > dueDateTime){
                        return "late"
                    }else{
                        return "not late"
                    }
                
                }
            }
        }
    }
})


