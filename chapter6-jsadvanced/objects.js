//Metavliti me antikimeno
let studentAlice = {
    firstname: 'Alice',
    lastname: 'Alice in Wonderland',
    age: 18,
    height: 1.65
}

//allazo timi (2 tropoi)
studentAlice.lastname = 'Alice Wonderland';
studentAlice['age'] = 19;

for (let property in studentAlice) {
    document.write(`${studentAlice[property]} `)
}