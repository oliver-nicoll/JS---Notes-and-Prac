// object literals
    // use curly braces to make an obj literal (key/value pairs) - example: 

let user = {
    name: 'Topanga', // This makes up one property of this object literal 
    age: 30, // each key/value pair is on each line for better readability purposes
    email: 'toptest@test.com',
    location: 'Brazil',
    blogs: ['Why Panera mac and cheese is the best', '10 things to know when...'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out')
    },
    logBlogs: function(){
        //onsole.log(this.blogs)
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog)
        });
    }
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

// test out method login - invoke the method with parenthesis, defined on an object

user.login();
user.logout();

//similar to this example:

const name = 'test name';
name.toUpperCase();


//understanding THIS in JavaScript - Blogs:

/*
If you don't use this, it will throw an error that blog isn't defined in the method

The this keyword is a context obj. that represents the context in which the current code 
is executed - depending on where and how we use it the value will be different

If this is used in the root of the document, then it will refer to the global context which 
is called the window obj. - LOCATION OF THIS MATTERS
*/

user.logBlogs();


//Arrow Funtions work different with THIS keyword - the value of this won't change from the value it was at the point in the code where it was invoked (scope)