//Grab the query string remove the "?"
let query = location.search.slice(1);
//Get rid of and "+" and add a space
query = decodeURIComponent(query.replace(/\+/g,' '));

//Turn a query string into an array and split with "&" in between
let cardFields = query.split('&');

//Iterate over each key value pair
for(let field of cardFields){
    let nameValue = field.split('=');
    let name = nameValue[0];
    console.log(name);
    let value = nameValue[1];
    document.getElementById(name).textContent = value;
}