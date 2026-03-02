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
for (let i = 0; i < livros.length; i++) 
    console.log("Livro:", livros[i].nome);

// Lucas 
// ===============================

let jogos = [
{ nome: 'FIFA 24', preco: 300, estoque: 40 },
{ nome: 'GTA V', preco: 150, estoque: 35 },
{ nome: 'Minecraft', preco: 120, estoque: 50 },
{ nome: 'Call of Duty', preco: 280, estoque: 20 },
{ nome: 'Fortnite', preco: 0, estoque: 100 },
{ nome: 'The Last of Us', preco: 250, estoque: 18 },
{ nome: 'God of War', preco: 220, estoque: 22 },
{ nome: 'Red Dead Redemption 2', preco: 270, estoque: 15 },
{ nome: 'Cyberpunk 2077', preco: 200, estoque: 30 },
{ nome: 'Assassin’s Creed', preco: 190, estoque: 28 }
];

// A
console.log("Preço do segundo jogo:", jogos[1].preco);

// B
console.log("Nome do terceiro jogo:", jogos[2].nome);

// C
console.log("Quantidade de jogos:", jogos.length);

// D (usando for...of para variar)
for (let jogo of jogos) {
    console.log("Jogo:", jogo.nome);
}

// E
let totalEstoque = 0;


for (let i = 0; i < livros.length; i++) 
    totalEstoque += livros[i].estoque;

for (let jogo of jogos) {
    totalEstoque += jogo.estoque;

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


let Estoque = jogos[0];

for (let jogo of jogos) {
    if (jogo.estoque > Estoque.estoque) {
        Estoque = jogo;
    }
}

console.log("Jogo com maior estoque:", Estoque);

