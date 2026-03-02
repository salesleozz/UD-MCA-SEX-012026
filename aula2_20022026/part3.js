// ===============================
// PARTE 3 - ARRAY DE OBJETOS
// Denner
// ===============================

let itensMercado = [
{ nome: 'Arroz', preco: 25, estoque: 100 },
{ nome: 'Feijão', preco: 10, estoque: 80 },
{ nome: 'Macarrão', preco: 7, estoque: 60 },
{ nome: 'Óleo', preco: 9, estoque: 50 },
{ nome: 'Açúcar', preco: 6, estoque: 70 },
{ nome: 'Café', preco: 18, estoque: 40 },
{ nome: 'Leite', preco: 5, estoque: 120 },
{ nome: 'Pão', preco: 8, estoque: 90 },
{ nome: 'Manteiga', preco: 12, estoque: 30 },
{ nome: 'Queijo', preco: 35, estoque: 25 }
];

// A
console.log("Preço do segundo item:", itensMercado[1].preco);

// B
console.log("Nome do terceiro item:", itensMercado[2].nome);

// C
console.log("Quantidade de itens:", itensMercado.length);

// D
for (let i = 0; i < itensMercado.length; i++) {
    console.log("Item:", itensMercado[i].nome);
}

// E
let somaEstoque = 0;

for (let i = 0; i < itensMercado.length; i++) {
    somaEstoque += itensMercado[i].estoque;
}

console.log("Total de estoque:", somaEstoque);

// F
let maiorItem = itensMercado[0];

for (let i = 1; i < itensMercado.length; i++) {
    if (itensMercado[i].estoque > maiorItem.estoque) {
        maiorItem = itensMercado[i];
    }
}

console.log("Item com maior estoque:", maiorItem);