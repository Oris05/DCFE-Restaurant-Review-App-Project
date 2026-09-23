var express = require("express"); // call express to be used by the application.
var app = express();
  

var User = require("./user.js") //call the file to be used
 
//Call all the folders that will be
app.use(express.static("style"))
app.use(express.static("views")); 
app.use(express.static("images")); 

var bodyParser = require("body-parser") // call body parser module and make use of it
app.use(bodyParser.urlencoded({extended:true}));

// set the template engine 
app.set('view engine', 'ejs'); 


// function to render the home page
app.get('/Reviews', (req, res) => {
  const user = new User();
  user.getAllreviews((reviews) => {
      res.render('review', { reviews });
  });  
  
});


  // Review page route
 // This route will read from the database
app.get('/', function(req,res){
  const user = new User();
  user.getAllreviews((reviews) => {
      res.render('home', { reviews });
  });           
})

// this route will add a review 
app.post('/', (req, res) => {
  let user = new User();
  //const { users question } = req.body;
var userQuestion = req.body.theReview

  // Assuming you have a method in your class (e.g., User) to insert a user into the database
  user.insertUser(userQuestion, (err) => {
      if (err) {
          // Handle error, for example, send an error response
          return res.status(500).send('Error occurred while adding user to the database');
      }
      
      // Redirect to the home page after the user is successfully inserted
      res.redirect('/');
  });
});

// We need to set the requirements for teh application to run

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0" , function(){
  console.log("App is Running ...")
});