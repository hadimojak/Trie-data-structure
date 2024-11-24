const fs = require('fs');
const Trie = require("./trie");

const { data: arrayOfString } = JSON.parse(fs.readFileSync('./sample-arr.json'));

const trie = new Trie();

// insert all of the items into the trie
arrayOfString.forEach((title) => trie.insert(title.toLowerCase()));

// search for article titles that start with the user's query
const userInput = "cak";
const suggestions = [];

console.log(trie.suggestions(userInput));
