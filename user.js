const { request } = require('express'); // call express to be used by the application.
var Database = require("./database") // call the database 

class User extends Database { // User inherits from the database
    constructor() {
        super();
    }

    getAllreviews(callback) { // This gets all the reviews
        this.connection.query('SELECT * FROM userQuest', (err, results) => { //this access the MySQL table "userQuest"
            if (err) throw err;
            callback(results); //Gets the results
            console.log(results) //prints the information from the database into the terminal
            
        });
    }



    insertUser(thereview, callback) { //This method inserts the new user review into the database table
        this.connection.query('INSERT INTO userQuest (theReview) VALUES (?)', [thereview], (err, result) => { // inserts the "theReview" into the database table userQuest
            if (err) {
                callback(err);
            } else {
                callback(null);
            }
        });
    }


    
}
module.exports = User