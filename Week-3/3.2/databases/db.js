// until now we have been stored the data in memory 
//this is bad for a few reasons
//~ 1. Data can't be dynamic , if you update in memory objects , the updates are lost if the process restarts.
//~ 2. there are multiple servers in the real workd

//? In the reaL world, a basic structure looks like this:
// User hits the backend
// backend hits the db
// user doesn't have access to the db /can't talk to DB
/**
                  --------------------------------------------
                  |
                  |
  Browser-------> |      BE--------->DB
                  |
                  |--------------------------------------------
 */


//? In the real worls, a basic architecture looks like this
//~ There are various types of DB
//  Graph DBs
//  Vector DB's
//   SQL DB's
// NoSql DB's


//? Start with NoSql Db--->MongoDb
// let's you create db
// in each db, it let's you create tables (collections)
// In each table, it lets you dump JSON data
// It is schemaless(need not to define the structure)
// It scales welll and is a decent choice for most use cases

//? How does the backend connect to the database?
// using libraries!
//~ 1. Express lets u create an HTTP server
//~ 2.Jsonwebtokens library lets you create jwt's
//~ 3. Mongoose lets you connect to your database. 