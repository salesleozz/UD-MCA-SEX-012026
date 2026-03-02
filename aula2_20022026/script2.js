// ===============================
// PARTE 2 - OBJETO
// Gustavo
// ===============================

let produto = {
    nome: 'Smartphone',
    cor: 'Preto',
    preco: 2500,
    estoque: 45
};

// A
console.log("Nome do produto:", produto.nome);

// B
console.log("Preço do produto:", produto['preco']);

// C
produto.estoque = 80;
console.log("Estoque atualizado:", produto.estoque);

// D
for (let chave in produto) {
    console.log(chave + ":", produto[chave]);
}