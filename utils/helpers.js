
module.exports = { 
    //'formate_date takes in a timestamp 
    format_date: (date) => { 
        //using a javascript date method, which formatss the month,date and year
        // since month is returned as a zero-based, value we need to addd one to the month. 
        return `${new Date(date).getDate()}/${new Date(date).getMonth()}/${ 
            new Date(date).getFullYear()}`
    },
};