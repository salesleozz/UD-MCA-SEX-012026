// ===============================
// PARTE 3 - ARRAY DE OBJETOS
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

for (let jogo of jogos) {
    totalEstoque += jogo.estoque;
}

console.log("Total de estoque:", totalEstoque);

// F
let maiorEstoque = jogos[0];

for (let jogo of jogos) {
    if (jogo.estoque > maiorEstoque.estoque) {
        maiorEstoque = jogo;
    }
}

console.log("Jogo com maior estoque:", maiorEstoque);