// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
// 1) appends a cat to the cats array
//  and returns a new array, 
//  leaving the cats array unchanged
function appendCat (name){
    return [...cats, name];
}
function prependCat(name){
    return [name, ...cats];
}

// }
function removeLastCat(){
    return cats.slice(0, cats.length -1);
}

function removeFirstCat(){
    return cats.slice(1, cats.length);
}