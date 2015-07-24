# mean-contact-list
App built for the purpose of learning Node.js.  
Some AngularJS improvements made to the original project such as:  
- Eliminated page refresh for updating the DOM elements
- More functional edit mode
- Search
- Sorting

now for some error handling ;)

### Prerequisites
[MEAN][mean] stack

### Project Setup
1. Clone or download the project from the repository into your directory of choice.

2. Open your terminal and navigate to the root of the project directory and type **"npm install"** to install all dependencies.

3. Install MongoDB https://www.mongodb.org/ _(Skip this step if you allready have MongoDB installed)_

4. Follow the instructions below on how to create your db.

5. When you are done with step 3, navigate to your project folder from the terminal window and type **"node server"**. You should get the message **"server running on port 3000"**

6. Open up your web browser and go the the following url or just follow the link: [http://localhost:3000/][localhost]

### Creating Up the MongoDB Database
_By default the app will look for a database named contactlist. Make the appropriate changes to the server.js file if you want a different name for the database._

1. Start your mongoDB server by typing **"mongod"** in your command line.   
(if you haven't added the path to your system variables you need to be in your mongoDB directory)

2. Open a new tab or terminal window and type **"mongo"** to enter the mongoDB shell.

3. **"show dbs"** will list the current databases available. To select or create a db, type **"use contactlist"**.

4. Finally populate the database with data by pasting the code from **db/populate-mongo.js**. Press **"ctrl + c"** to exit the mongoDB shell
 
A big thank you to [Learn Coding Tutorials][tutorial] for providing learning material!

[mean]: http://mean.io/#!/
[localhost]: http://localhost:3000/
[tutorial]: https://www.youtube.com/channel/UC8Szh5ZJeGFBWyqKyTCVPpA
