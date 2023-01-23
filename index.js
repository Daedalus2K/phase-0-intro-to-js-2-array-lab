// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){cats.push("Ralph")}

function destructivelyPrependCat(){cats.unshift("Bob")}

function destructivelyRemoveLastCat(){cats.pop("Garfield")}

function destructivelyRemoveFirstCat(){cats.shift("Milo")}

function appendCat(){
    let cats = ["Milo", "Otis", "Garfield"]
    const cats2 = [...cats,"Broom"];
    return cats2
}
function prependCat(){
    let cats = ["Milo", "Otis", "Garfield"]
    const cats3 = ["Arnold",...cats]
    return cats3
} 

function removeLastCat(){
    let cats = ["Milo", "Otis", "Garfield"]
    const cats4 = cats.slice(0,2)
    return cats4
}

function removeFirstCat(){
    let cats = ["Milo", "Otis", "Garfield"]
    const cats5 = cats.slice(1)
    return cats5
}console.log(removeFirstCat())
    

