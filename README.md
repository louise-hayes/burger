# Eat Da Burger

# A Full Stack Javascript, node.js, Express, Handlebars App deployed on Heroku, with a custom built ORM to map to mySQL DB and mocha npm unit testing package 

Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.
Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.
The app stores every burger in a database, whether devoured or not.


# Starting/Stopping the app
In the package.json file, you'll see a scripts section. You can run of any them by doing  
`npm run server.js`  
`npm run start` -Runs our app in 'production'  

#to launch from the client
http://localhost:8080/

#Git hub Repo
https://github.com/louise-hayes/burger.git
  
#Heroku
https://warm-cliffs-18252.herokuapp.com/


# Routes
/updateOne  
/findAll  (default from /)
/insertOne  

# Tables in sql database

burgers:  
burger_name: string,  
devoured:TinyInt

# To Launch Unit Testing
1. pull latest repo from master in github
2. `npm install` will install mocha and proxyrequire from package.json
3. `npm test` will run all unit tests automatically
The unit test files are stored (and must be stored) in project root/test (i.e. burger/test)

Each file is named exactly the same as the file it tests for transparency as per standard practice
test/burger_controller.js ---> tests the creation of a burger, the insertion of a burger, 

All files in test directory are run each time `npm test` is run from command line, as per standard practice.


