// ===============================
// PARTE 1 - ARRAY SIMPLES
// Gustavo
// ===============================

let linguagens = [
'JavaScript', 'Python', 'Java', 'C#', 'C++',
'PHP', 'Ruby', 'Go', 'Swift', 'Kotlin',
'TypeScript', 'Rust', 'Dart', 'Scala', 'Perl',
'Haskell', 'Lua', 'Elixir', 'Groovy', 'Assembly',
'SQL'
];

// A
console.log("Posição 0:", linguagens[0]);
console.log("Posição 7:", linguagens[7]);
console.log("Posição 11:", linguagens[11]);
console.log("Posição 15:", linguagens[15]);
console.log("Posição 18:", linguagens[18]);
console.log("Posição 20:", linguagens[20]);

// B
console.log("Penúltima posição:", linguagens[linguagens.length - 2]);
console.log("Última posição:", linguagens[linguagens.length - 1]);

// C
console.log("Quantidade total de elementos:", linguagens.length);

// D
linguagens.push("COBOL");
console.log("Array após adicionar COBOL:", linguagens);

// E
for (let i = 0; i < linguagens.length; i++) {
    console.log("Elemento:", linguagens[i]);
}