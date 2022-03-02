// object literals
    // use curly braces to make an obj literal (key/value pairs) - example: 

let user = {
    name: 'Topanga', // This makes up one property of this object literal 
    age: 30, // each key/value pair is on each line for better readability purposes
    email: 'toptest@test.com',
    location: 'Brazil',
    blogs: ['Why Panera mac and cheese is the best', '10 things to know when...']
};

// test it out, either run "node FILENAME.js" in terminal or open FILENAME.html that is connected to the file:

console.log(user);

// to access a specific property or key/value pair from the object, use dot notation

console.log(user.blogs)

//to change a specific property of the object LATER in the code:

user.age = 32;

//check if the age was changed

console.log(user.age)


//ANOTHER way to access properties by using square bracket notation

console.log(user['name'])

console.log(user['blogs'][1]) //accessing the second blog title specifically

// to change a property using this square bracket notation: 
user['location'] = 'Peru'
//check to see if changed
console.log(user['location'])

console.log(typeof user);