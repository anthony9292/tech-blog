
module.exports = { 
    //'formate_date takes in a timestamp 
    formate_date: (date) => { 
        //using a javascript date method, which formatss the month,date and year
        // since month is returned as a zero-based, value we need to addd one to the month. 
        return `${new Date(date).getMonth() + 1}/${new Date(date)}/${ 
            new Date(date).getFullYear()
        }`;
    },
};