
# FunWithMarvel
* **Level:** Beginner
* **Description:** Practice displaying data from arrays and objects using loops and ES6 Template Strings.

## Lesson
### Arrays
Data structures denoted by square brackets.
`let myArray = ["hello", "there", 1, true]`
To reference a specific item in an array, use that item's index number. Arrays have indexes that start at 0 (not 1!).
```javascript
myArray[0] // "hello"
myArray[1] // "there"
myArray[2] // 1
myArray[3] // true
```  
### Objects
Data structures denoted by curly brackets, and key-value pairs.
```javascript
let myObject = {
  name: "bella",
  github: "isabellatea",
  number: 6,
  likesPuppies: true
  }
```

To reference a specific item in an object, use that item's key.
```javascript
myObject["name"] // bella
myObject["github"] // isabellatea
myObject["number"] // 8
myObject["likesPuppies"] // true
```

Note that you can reference a value by it's key using `myObject["KEY_NAME"]` or `myObject.KEY_NAME` if the key name is known.

### Template Strings
ES6 introduced template strings to make it easier to incorporate references into our code.

When we want to incorporate references, we use the syntax `${reference_here}`.

**Old Way:**
```javascript
let mySentence = "Hello there my name is " + myObject["name"] + " and my github handle is " + myObject["github"] + ".  My favorite number is " + myObject["number"] + " and it is " + myObject["likesPuppies"] + that I like puppies.
```

**ES6 Way:**
```javascript
let mySentence = "Hello my name is ${myObject["name"]} and my github handle is ${myObject["github"]}. My favorite number is ${myObject["number"]} and it is ${myObject["likesPuppies"]} that I like puppies."
```

Both result in:
*Hello my name is bella and my github handle is isabellatea.  My favorite number is 8 and it is true that I like puppies.*

**If you are creating HTML elements, you can use backticks \` to surround multiple lines.**

Refer to this [great article](https://wesbos.com/template-strings-html/) by Wes Bos for a more in-depth explanation and advanced uses of template strings.

*You will also need to be familiar with basic for loop structure as well as jQuery (.append) to complete the first few challenges.*

### For Loop Strcuture
```javascript
for (var i = 0; i < array.length; i++) {
  //loop things here
}

for (var key in obj) {
  //loop things here
}
```

### jQuery Append
```javascript
let mySentence = "hello there";
$("#target-element").append(mySentence);
```


## Challenges
* **Challenge One:** Copy over the `movieList` array from `data.js` into your `script.js` file.  Write a loop that will append each item in the array on your website in `<div id="display-area"></div>`.

* **Challenge Two:** Comment out the previous challenge. Copy over the `movieIronMan` object from `data.js` into your `script.js` file. Write a **template string** that utilizes multiple key-values in the object and append it on your website in `<div id="display-area"></div>`.

* **Challenge Three:** Comment out the previous challenge.  Copy over the `movieListDetailed` array of objects into your `script.js` file. Write a loop that creates a template string for each item and append it on your website in `<div id="display-area"></div>`.

* **Challenge Four:** Create a homepage for your website. Link all relevant navigation bar items to the appropriate functions.

* **Challenge Five:** For the "Release Date" on your navigation bar, display the `movieListDetailed` in order by Release Date.

* **Challenge Six:** Add style! Create cards! Add your flair and creativity.

## Examples
Given a list of contacts in an array, display them under the element with the id of "myListofContacts":
```javascript
for (var i = 0; i < contactList.length; i++) {
  let newElement = `
    <p>${contactList[i]}</p>
  `
  $("#myListOfContacts").append(newElement)
}
```

Given an object `allOfMyInformation`, display multiple sections of data on your website under the element with the id of "myInfo":
```javascript
let newElement = `
  <h1>${allOfMyInformation["name"]}</h1>
  <img src="${allOfMyInformation["photoURL"]}">
  <p>My favorite color is ${allofMyInformation["color"]}.</p>
`
$("#myInfo").append(newElement);

```

Given an array of objects `mySongs`, display all of the songs with their title, cover art, and duration under the element with the id of "allOfMySongs":
```javascript
for (var i = 0; i < mySongs.length; i++) {
  let song = `
    <h2>${mySongs[i]["title"]}</h2>
    <img src="${mySongs[i]["coverArtURL"]}">
    <p>Song Duration: ${mySongs[i]["duration"]}</p>
  `
  $("#allOfMySongs").append(song);

}

```

![screenshot](http://i65.tinypic.com/usgle.png)



## Solution Gist
[script.js](https://gist.github.com/isabellatea/5c110ae25c202a90dc512904d5fd2be3)
