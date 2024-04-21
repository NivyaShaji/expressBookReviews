const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
    const username = req.body.username;
    const password = req.body.password;
  
    if (username && password) {
      if (!isValid(username)) {
        users.push({"username":username,"password":password});
        return res.status(200).json({message: "User successfully registred. Now you can login"});
      } else {
        return res.status(404).json({message: "User already exists!"});
      }
    }
    return res.status(404).json({message: "Unable to register user."});
  return res.status(300).json({message: "Yet to be implemented"});
});

let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        // Get the book list available in the shop
 public_users.get('/',function (req, res) {
    //Write your code here
    res.send(JSON.stringify(books,null,4));
    return res.status(300).json({message: "This is the book list available in the shop"});
  });
      resolve("Promise resolved")
    },6000)})
//Console log before calling the promise
console.log("Before calling promise");
//Call the promise and wait for it to be resolved and then print a message.
myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })
//Console log after calling the promise
  console.log("After calling promise");



// Get book details based on ISBN
let myPromise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        public_users.get('/isbn/:isbn',function (req, res) {
            //Write your code here
            const isbn = req.params.isbn;
            let filtered_books = [];
            filtered_books = books[isbn];
            return res.send(filtered_books);
            return res.status(300).json({message: "Yet to be implemented"});
           });
      resolve("Promise resolved")
    },6000)})
//Console log before calling the promise
console.log("Before calling promise");
//Call the promise and wait for it to be resolved and then print a message.
myPromise1.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })
//Console log after calling the promise
  console.log("After calling promise");

  
// Get book details based on author
let myPromise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        public_users.get('/author/:author',function (req, res) {
            //Write your code here
            const title = req.params.title;
            let keys = [];
            keys = Object.keys(books);
            for(let i = 0; i < keys.length; i++)
            {
              if(books[keys[i]].title === title)
              {
                  return res.send(books[keys[i]]);
              }
            }
            return res.status(300).json({message: "Yet to be implemented"});
          });
      resolve("Promise resolved")
    },6000)})
//Console log before calling the promise
console.log("Before calling promise");
//Call the promise and wait for it to be resolved and then print a message.
myPromise2.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })
//Console log after calling the promise
  console.log("After calling promise");

let myPromise4 = new Promise((resolve,reject) => {
    setTimeout(() => {
        public_users.get('/title/:title',function (req, res) {
            //Write your code here
            const title = req.params.title;
            let keys = [];
            keys = Object.keys(books);
            for(let i = 0; i < keys.length; i++)
            {
              if(books[keys[i]].title === title)
              {
                  return res.send(books[keys[i]]);
              }
            }
            return res.status(300).json({message: "Yet to be implemented"});
          });
          
      resolve("Promise resolved")
    },6000)})
//Console log before calling the promise
console.log("Before calling promise");
//Call the promise and wait for it to be resolved and then print a message.
myPromise4.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })
//Console log after calling the promise
  console.log("After calling promise");
// Get all books based on title

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;
  return res.send(books[isbn].reviews);
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
