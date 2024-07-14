const mongoose = require("mongoose");

// connection using mongoose
mongoose.connect("mongodb://localhost:27017/fruitsDB");

// creating a schema for collection
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [
      true,
      "Please check your data, Name is not mentioned for a fruit",
    ],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

// using the model of the schema
const Fruit = mongoose.model("Fruit", fruitSchema);
// Here we gave "Fruit" but mongoose creates fruits as db as it uses lodash
// but for "People" it keeps it that way as there is no Peoples

// creating new object for insertion
const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Tastes Good!",
});

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "The Best Fruit!",
});

const orange = new Fruit({
  name: "Orange",
  rating: 4,
  review: "Too sour for me",
});

const banana = new Fruit({
  name: "Banana",
  rating: 3,
  review: "Weird texture",
});

// insert operation
// fruit.save();

// insert many operation
// Fruit.insertMany([kiwi, orange, banana])
//   .then(function () {
//     console.log("Successfully saved all the fruits");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);
const person = new Person({
  name: "John",
  age: 37,
});

// person.save();

// Read, find operation
Fruit.find({})
  .then(function (fruitsFound) {
    mongoose.connection.close();
    fruitsFound.forEach((fruit) => {
      console.log(fruit.name);
    });
  })
  .catch(function (err) {
    console.log(err);
  });
