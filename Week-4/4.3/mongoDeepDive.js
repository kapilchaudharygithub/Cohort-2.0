//? What is database?
// It is a place where data is stored persistently.
// Browser--->Express(http server-->servers auto scales)(server can be many)---->Database(pwersistent)

//? example of data stored in db
// for linkedin
// user data
// ? why don't we let user hit the db directly?
//? what extra does the http server provide exactly?
//1. db are created using protocols that browsers don't understand
//2. db don't have granual access as a first class citizen . very hard to do user specific access in them.
//. 3. there are some db(firebase) that let you get rid of the http server and try their best to provide granola access

//. http server does auth check .



//? DB's usually allow access to 4 primitives
// Create data
// read data
// update data
// delete data
// popular known as CRUD