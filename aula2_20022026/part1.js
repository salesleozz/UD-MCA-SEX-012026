// ===============================
// PARTE 1 - ARRAY SIMPLES
// Lucas 
// ===============================

let paises = [
'Brasil', 'Argentina', 'Chile', 'Uruguai', 'Paraguai',
'Estados Unidos', 'Canadá', 'México', 'Alemanha', 'França',
'Itália', 'Espanha', 'Portugal', 'Inglaterra', 'Japão',
'China', 'Coreia do Sul', 'Índia', 'Austrália', 'Egito',
'África do Sul'
];

// A
console.log("Posição 0:", paises[0]);
console.log("Posição 7:", paises[7]);
console.log("Posição 11:", paises[11]);
console.log("Posição 15:", paises[15]);
console.log("Posição 18:", paises[18]);
console.log("Posição 20:", paises[20]);

// B
console.log("Penúltimo país:", paises[paises.length - 2]);
console.log("Último país:", paises[paises.length - 1]);

// C
console.log("Total de países:", paises.length);

// D
paises.push("Noruega");
console.log("Array atualizado:", paises);

// E
for (let i = 0; i < paises.length; i++) {
    console.log("País:", paises[i]);
}