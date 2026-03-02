// ===============================
// PARTE 2 - OBJETO
// Lucas 
// ===============================

let celular = {
    nome: 'iPhone 15',
    cor: 'Azul',
    preco: 7800,
    estoque: 25
};

// A
console.log("Nome do celular:", celular.nome);

// B
console.log("Preço do celular:", celular['preco']);

// C
celular.estoque = 80;
console.log("Novo estoque:", celular.estoque);

// D
for (let propriedade in celular) {
    console.log(propriedade + ":", celular[propriedade]);
}