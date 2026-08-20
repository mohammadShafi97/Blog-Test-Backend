- We are going to create an API service for a Blog App.
- we are not using database for now. we will be saving the blog data in a json format.

# what data for a blog

- blog title
- blog content
- blog date
- blog author

# what apis to build

- get all blogs (GET)
- get a single blog (GET)
- add a new blog (POST)
- edit a blog (PATCH / PUT)
- delete a blog (DELETE)

# DATABASE

## SQL - (relational Database) - oracle DB, mySQL, postgresSQL, Sqlite

## NoSQL - (Non relational Database) - MongoDB, Redis, Dynamo DB, Cassandra DB

| Feature           | SQL                                       | NoSQL                                                |
| ----------------- | ----------------------------------------- | ---------------------------------------------------- |
| Data Model        | Tables (rows & columns)                   | Documents, key-value, column-family, or graph        |
| Schema            | Fixed (predefined schema)                 | Flexible or schema-less                              |
| Query Language    | SQL (Structured Query Language)           | Varies by database                                   |
| Scalability       | Primarily vertical (more powerful server) | Primarily horizontal (more servers)                  |
| ACID Transactions | Strong support                            | Varies; many prioritize availability and scalability |
| Best For          | Structured, relational data               | Large-scale, rapidly changing, or unstructured data  |

The main thing in a database is CRUD

C - Create
R - Read
U - Update
D - Delete

# SQL

1. To Create a Table

CREATE TABLE table_name (
column1 datatype constraint,
column2 datatype constraint,
column3 datatype constraint,
....
);
The table_name parameter specifies the name of the new table.

The column1, column2, ... parameters specify the names of the columns within the table.

The datatype parameter specifies the data type of each column (e.g. varchar, int, date, etc.).

The constraint parameter is optional, and specifies rules for data integrity (e.g. primary key, not null, etc.).

2. To add new Data

The INSERT INTO statement is used to insert new records in a table.

It is possible to write the INSERT INTO statement in two ways:

Syntax 1
Specify both the column names and the values to be inserted:

INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
Syntax 2
If you insert values for ALL the columns of the table, you can omit the column names.

However, the order of the values must be in the same order as the columns in the table:

INSERT INTO table_name
VALUES (value1, value2, value3, ...);

3. To Read data

## select specific columns

The SELECT statement is used to select data from a database.

The data returned is stored in a result table, called the result-set.

The following SQL selects the "CustomerName", "City", and "Country" columns from the "Customers" table:

ExampleGet your own SQL Server
SELECT CustomerName, City, Country FROM Customers;

SELECT Syntax

SELECT column1, column2, ...
FROM table_name;

Here, column1, column2, ... are the column names in the table you want to select data from.

The table_name represents the name of the table you want to select data from.

## select all columns

To select all columns, without specifying every column name, use the following syntax:

SELECT \* FROM table_name;

## select based on condition

he WHERE clause is used to filter records.

The WHERE clause is used to extract only those records that fulfill a specific condition.

The following SQL selects all customers from "Mexico":

ExampleGet your own SQL Server
SELECT \* FROM Customers
WHERE Country = 'Mexico';

4. Update Data

The UPDATE statement is used to update or modify one or more records in a table.

UPDATE Syntax

UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

Note: Be careful when updating records in a table! Notice the WHERE clause in the UPDATE statement. The WHERE clause specifies which record(s) that should be updated. If you omit the WHERE clause, all records in the table will be updated!

## refer ALTER table in W3schools documentation

5. Delete Data

The DELETE statement is used to delete existing records in a table.

DELETE Syntax

DELETE FROM table_name WHERE condition;

Note: Be careful when deleting records in a table! Notice the WHERE clause in the DELETE statement. The WHERE clause specifies which record(s) should be deleted. If you omit the WHERE clause, all records in the table will be deleted!

## FORIEGN KEY

MySQL FOREIGN KEY Constraint
The FOREIGN KEY constraint establishes a link between two tables, and prevents action that will destroy the link between them.

A FOREIGN KEY is a column in a table that refers to the PRIMARY KEY in another table.

The table with the foreign key column is called the child table, and the table with the primary key column is called the referenced or parent table.

The FOREIGN KEY constraint prevents invalid data from being inserted into the foreign key column (in the child table), because the value has to exist in the parent table.

The FOREIGN KEY constraint also prevents you from deleting a record in the parent table, if related rows still exist in the child table.

example in creating a table

CREATE TABLE Orders (
OrderID int PRIMARY KEY,
OrderNumber int NOT NULL,
PersonID int,
FOREIGN KEY (PersonID)
REFERENCES Persons(PersonID)

);

INNER JOIN

SELECT users.name, users.place, orders.orderNumber
FROM orders
INNER JOIN users
ON order.user = users.id

# MONGO DB

1. to get the list of all databases - "show dbs"
2. to know the current database you are in "db.getName()".
3. to create a new database - use "databaseName"
4. to create a new collection in the current database (u must be in the current database)- "db.createCollection('collectionName')"
5. to delete a database which you are currently in - db.dropDatabase()
6. to get all collections in the database - show collections

# The main operations of a database is CRUD.

1. To Create or insert a document in the collection

   db.collectionName.insertOne({"field1": "value1", "field2": "value2" })

2. to create or insert more than 1 document in the collection

   db.collectionName.insertMany([{"field1": "value1", "field2": "value2" }, {"field1": "value1", "field2": "value2" }, {"field1": "value1", "field2": "value2" }])

3. To fetch all the data from a collection

   db.collectionName.find()

4. to fetch data based on filter.

   db.collectionName.find({"field": "value"})

5. to select or deselect a field

   db.collectionName.find({}, {field: 1, field2: 0})

1 means it will be fetched 0 means its omitted

6. To count , limit, sort and skip data.

   db.collectionName.find({}).count()
   db.collectionName.find().limit(number)
   db.collectionName.find().skip(number)
   db.collectionName.find().sort({name: 1}) 1 for ascending order , -1 for descending order

7. To Update a document

   db.collectionName.updateOne({filter}, {$set: {field to be updated}})

8. To update Many

   db.collectionName.updateMany({filter}, {$set: {fields to be updated}})

9. To Delete One

   db.collectionName.deleteOne({filter})

10. To Delete Many

    db.collectionName.deleteMany({filter})

11. comparison operators used in FIND Method.

db.collectionName.find({age: {$ne: 15}}) => find all documents where age is not equal to 15 
db.collectionName.find({age: {$lt: 15}}) => find all documents where age is less than to 15
db.collectionName.find({age: {$lte: 15}}) => find all documents where age is less than or equal to 15
db.collectionName.find({age: {$gt: 15}}) => find all documents where age is greater than to 15
db.collectionName.find({age: {$gte: 15}}) => find all documents where age is greater than or equal to 15

db.collectionName.find({age: {$lt: 15, $gt: 5}}) => find all documents where age is less than to 15 and greater than 5
db.collectionName.find({age: {$in : [3, 5, 10]}}) => find all documents where age is included in 3, 5 or 10
db.collectionName.find({age: {$nin : [3, 5, 10]}}) => find all documents where age is not included in 3, 5 or 10

// we use mongoose to integrate mongodb in express

1. install mongoose - npm i mongoose
2. setup models and schema for the collections.2
3. then we connect to the database using connection string.

do not openly use connection strings, secret keys in .js files. Instead create a .env file and add all the keys inside it.
eg:
MONGODB_URL=mongodb+srv://clawlynx77:YourPASSWORD@cluster0.a2ukuei.mongodb.net/DATABASENAME?appName=Cluster0
SECRETKEY=djfnakscdmdvxcs

to use the keys and strings in .env install dotenv.
npm i dotenv.

then go to the top of index.js and
import \* as dotenv from "dotenv"
dotenv.config()

then to use or access these variable use

process.env.MONGODB_URL or process.env.SECRETKEY .......

and then create a .gitignore file and add the names of files and folders that you do not want to push to github or cloud. eg(node modules, .env)
