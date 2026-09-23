var mysql = require("mysql2") //uses mysql v2

class Database { // the first class connects to the database
    constructor() {
        this.connection = mysql.createConnection({
            host: '127.0.0.1',
    user: 'root', // user
    port: '3306', // port
    password: '1234', // MySQL database password
    database: 'review' // The name of the Database in MySQL
        });
    }
  
    connect() {
        this.connection.connect((err) => {
            if (err) throw err;
            console.log('Connected to MySQL database'); // if sucesefully connected to the database
        });
    }
  
    disconnect() {
        this.connection.end((err) => {
            if (err) throw err;
            console.log('Disconnected from MySQL database'); // if failed to connect to database
        });
    }
  }
module.exports = Database  