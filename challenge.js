//Objects


let instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

/* 1. Display all the keys and values of a nested obj
*/

function keyValuePrinter(obj){
    for(let key in obj){
        if(typeof obj[key] !== "object"){
            console.log("[" + key + " : " + obj[key] + "]");
        } else {
            keyValuePrinter(obj[key])
        }
    }
}