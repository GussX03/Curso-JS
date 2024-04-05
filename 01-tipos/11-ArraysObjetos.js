// EN ARRAYS
let animales = ['perro', 'gato', 'caballo'];
for (let animal of animales) {
    console.log(animal);
}
// EN OBJETOS
let user = {
    id: 1,
    name: 'Gus',
    age: 25,
}
for (let propiedad in user) {
    console.log(propiedad, user[propiedad]);
}