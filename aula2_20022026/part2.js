// ===============================
// PARTE 2 - OBJETO
// Murilo Amorim Castro RA:823135117
// ===============================

let carro = {
    nome: 'Toyota Corolla',
    cor: 'Branco',
    preco: 120000,
    estoque: 15
};

// A
console.log("Nome do carro:", carro.nome);

// B
console.log("Preço do carro:", carro['preco']);

// C
carro.estoque = 80;
console.log("Estoque atualizado:", carro.estoque);

// D
for (let propriedade in carro) 
    console.log(propriedade + ":", carro[propriedade]);

// Denner
// ===============================

let computador = {
    nome: 'PC Gamer',
    cor: 'Preto',
    preco: 5500,
    estoque: 20
};

// A
console.log("Nome:", computador.nome);

// B
console.log("Preço:", computador['preco']);

// C
computador.estoque = 80;
console.log("Estoque atualizado:", computador.estoque);

// D
for (let chave in computador) {
    console.log(chave + ":", computador[chave]);

}
