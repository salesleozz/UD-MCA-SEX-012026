// ===============================
// PARTE 3 - ARRAY DE OBJETOS
// Murilo Amorim Castro RA:823135117
// ===============================

let livros = [
{ nome: 'Dom Casmurro', preco: 35, estoque: 20 },
{ nome: '1984', preco: 40, estoque: 15 },
{ nome: 'O Hobbit', preco: 50, estoque: 25 },
{ nome: 'A Revolução dos Bichos', preco: 30, estoque: 18 },
{ nome: 'Percy Jackson', preco: 45, estoque: 12 },
{ nome: 'O Pequeno Príncipe', preco: 25, estoque: 40 },
{ nome: 'Harry Potter', preco: 60, estoque: 22 },
{ nome: 'Senhor dos Anéis', preco: 80, estoque: 10 },
{ nome: 'Crepúsculo', preco: 38, estoque: 14 },
{ nome: 'Jogos Vorazes', preco: 42, estoque: 28 }
];

// A
console.log("Preço do segundo livro:", livros[1].preco);

// B
console.log("Nome do terceiro livro:", livros[2].nome);

// C
console.log("Quantidade de livros:", livros.length);

// D
for (let i = 0; i < livros.length; i++) {
    console.log("Livro:", livros[i].nome);
}

// E
let totalEstoque = 0;

for (let i = 0; i < livros.length; i++) {
    totalEstoque += livros[i].estoque;
}

console.log("Total de estoque:", totalEstoque);

// F
let maiorEstoque = livros[0];

for (let i = 1; i < livros.length; i++) {
    if (livros[i].estoque > maiorEstoque.estoque) {
        maiorEstoque = livros[i];
    }
}

console.log("Livro com maior estoque:", maiorEstoque);