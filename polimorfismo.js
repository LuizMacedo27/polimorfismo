// Criando uma classe ebase
class Animal {
    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    }
    falar() {
        return `Ola, meu nome é ${this.nome}.`;
    }
}

// criando uma classe derivada de animal
class Cachorro extends Animal {
    constructor(nome, cor, raça) {
        super(nome, cor);
        this.raça = raça;
    }
    latir() {
        return `Au au!`;
    }
}

// criando uma classe derivada de Animal
class Gato extends Animal {
    constructor(nome, cor, raça) {
        super(nome, cor);
        this.raça = raça;
    }
    miar() {
        return `Miau!`;
    }
}

// criando um array de animais
const animais = [
    new Cachorro("Rex", "Marrom", "Pastor Alemão"),
    new Gato("Mia", "Preto", "Siamês"),
];

// Percorrendo o array e imprimindo o nome e a cor de cada animal
for(const animal of animais) {
    console.log(`O animal "${animal.nome}" é ${animal.cor}.`);
}

// criando o método "Falar()" em cada animal
for (const animal of animais) {
    console.log(animal.falar());
}

// chamando o método "latir()" no cachorro
const cachorro = animais[0];
console.log(cachorro.latir());

// chamando o método "miar()" no gato
const gato = animais[1];
console.log(gato.miar());''