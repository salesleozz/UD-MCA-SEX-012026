// ===============================
// PARTE 3 - ARRAY DE OBJETOS
// Gustavo
// ===============================

let produtos = [
{ nome: 'Notebook', preco: 3500, estoque: 12 },
{ nome: 'Mouse Gamer', preco: 150, estoque: 40 },
{ nome: 'Teclado Mecânico', preco: 300, estoque: 25 },
{ nome: 'Monitor 24"', preco: 900, estoque: 18 },
{ nome: 'Headset', preco: 200, estoque: 35 },
{ nome: 'Webcam', preco: 250, estoque: 20 },
{ nome: 'Cadeira Gamer', preco: 1200, estoque: 10 },
{ nome: 'Mesa Digitalizadora', preco: 600, estoque: 8 },
{ nome: 'HD Externo', preco: 450, estoque: 22 },
{ nome: 'Pen Drive 64GB', preco: 80, estoque: 60 }
];

// A
console.log("Preço do segundo objeto:", produtos[1].preco);

// B
console.log("Nome do terceiro objeto:", produtos[2].nome);

// C
console.log("Quantidade de itens:", produtos.length);

// D
for (let i = 0; i < produtos.length; i++) {
    console.log("Nome do produto:", produtos[i].nome);
}

// E
let totalEstoque = 0;

for (let i = 0; i < produtos.length; i++) {
    totalEstoque += produtos[i].estoque;
}

console.log("Total de estoque:", totalEstoque);

// F
let maiorEstoque = produtos[0];

for (let i = 1; i < produtos.length; i++) {
    if (produtos[i].estoque > maiorEstoque.estoque) {
        maiorEstoque = produtos[i];
    }
}

console.log("Produto com maior estoque:", maiorEstoque);
