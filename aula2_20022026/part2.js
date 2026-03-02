// ===============================
// PARTE 2 - OBJETO
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