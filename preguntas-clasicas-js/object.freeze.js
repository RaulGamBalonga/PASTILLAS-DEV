const persona = {
    name: 'Juan',
}
Object.freeze(persona);
persona.name = 'Pedro';
console.log(persona);