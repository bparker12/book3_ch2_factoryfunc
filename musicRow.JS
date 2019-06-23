
//Create an array for the Record labels
// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.

let JumpStop = []
let Chatten = []
let Polar = []

console.log("jumpstop", JumpStop)
console.log ("chatten", Chatten)
console.log("polar", Polar)


// Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.
let createCountryArtist = (name, genre, age) => { //chatten
    let country = {
        artName: name,
        artGenre: genre,
        artAge: age
    }
Chatten.push(country)
}
createCountryArtist("Bruce Atkins", "Country", 23)
createCountryArtist("Avilee Dallas", "Country", 19)

// console.log(createCountryArtist("bob", "poo", 76))
let createPopArtist = (name, genre, age) => { //polar
    let pop = {
        artName: name,
        artGenre: genre,
        artAge: age
    }
Polar.push(pop)
}
createPopArtist("Jensen Brown", "Pop", 20)
createPopArtist("Austin Kinkaid", "Pop", 22)

let createFunkArtist = (name, genre, age) => { //
    let funk = {
        artName: name,
        artGenre: genre,
        artAge: age
    }
JumpStop.push(funk)
}
createFunkArtist("Dre Funkz", "Funk", 25)

let createRapArtist = (name, genre, age) => {
    let rap = {
        artName: name,
        artGenre: genre,
        artAge: age
    }
    JumpStop.push(rap)
}
createRapArtist("Dusta Grimes", "Rap", 21)
createRapArtist("Loyonce Branis", "Rap", 27)

let createBlueGrass = (name, genre, age) => {
    let blue = {
        artName: name,
        artGenre: genre,
        artAge: age
    }
    Chatten.push(blue)
}
createBlueGrass("Bartholomew Danielson", "Bluegrass", 23)


let artistInfo = [
    {
        artistName: "Bruce Atikins",
        artistGenre: "Country",
        artistAge: 23
    },
    {
        artistName: "Jensen Brown",
        artistGenre: "Pop",
        artistAge: 20
    },
    {
        artistName: "Dre Funkz",
        artistGenre: "Funk",
        artistAge: 25
    },
    {
        artistName: "Busta Grimes",
        artistGenre: "Rap",
        artistAge: 21
    },
    {
        artistName: "Bartholomew Danielson",
        artistGenre: "Bluegrass",
        artistAge: 23
    },
    {
        artistName: "Avilee Dallas",
        artistGenre: "Country",
        artistAge: 19
    },
    {
        artistName: "Austin Kinkaid",
        artistGenre: "Pop",
        artistAge: 22
    },
    {
        artistName: "Loyonce Branis",
        artistGenre: "Rap",
        artistAge: 27
    },
]

// artistInfo.forEach(person => {
//     if (person.artistGenre === "country") {
//        Chatten.push(person)
//     }
// })