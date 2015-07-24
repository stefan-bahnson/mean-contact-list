// 1. start your mongoDB server by typing "mongod" in your command line.
// (if you haven't added the path to your system variables you need to be in your mongoDB directory)

// 2. type mongo to enter the mongoDB shell.

// 3. to select or create a db type "use contactlist"
// (show dbs will list current dbs available)

// 4. finally populate database with data by pasting the code below. (ctrl + c will exit the mongoDB shell)

db.contactlist.insert([
    {name:"Homer", email:"homer@simpsons.com", number: "(555) 555-5555"},
    {name:"Marge", email:"marge@simpsons.com", number: "(555) 555-5555"},
    {name:"Bart", email:"bart@simpsons.com", number: "(555) 555-5555"},
    {name:"Lisa", email:"lisa@simpsons.com", number: "(555) 555-5555"},
    {name:"Maggie", email:"maggie@simpsons.com", number: "(555) 555-5555"},
    {name:"Moe", email:"moe@simpsons.com", number: "(555) 555-5555"}
]);