//function to represent a function of a doctor

let createsDoctor = (name, specialty, address) => {
    return {
        DocName: name,
        DocSpec: specialty,
        DocAddr: address
    }
}
//function to create a pet

let createPet = (name, breed) => {
    return {
        petName: name,
        petBreed: breed
    }
}

// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels
const BowWowKennels = [
createPet("fito", "pitbull"),
createPet("lola", "aussie"),
createPet("aspen", "retriever")
]
console.log(BowWowKennels)

    
