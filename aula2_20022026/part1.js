// ===============================
// PARTE 1 - ARRAY SIMPLES
//Murilo Amorim Castro RA:823135117
// ===============================

let filmes = [
'Vingadores', 'Titanic', 'Avatar', 'Interestelar', 'Gladiador',
'Matrix', 'Batman', 'Coringa', 'Frozen', 'Shrek',
'Homem-Aranha', 'Pantera Negra', 'Up', 'Toy Story', 'Moana',
'Jurassic Park', 'Harry Potter', 'Star Wars', 'Senhor dos Anéis', 'Deadpool',
'Transformers'
];

// A
console.log("Posição 0:", filmes[0]);
console.log("Posição 7:", filmes[7]);
console.log("Posição 11:", filmes[11]);
console.log("Posição 15:", filmes[15]);
console.log("Posição 18:", filmes[18]);
console.log("Posição 20:", filmes[20]);

// B
console.log("Penúltimo:", filmes[filmes.length - 2]);
console.log("Último:", filmes[filmes.length - 1]);

// C
console.log("Total de elementos:", filmes.length);

// D
filmes.push("Oppenheimer");
console.log("Após adicionar:", filmes);

// E
for (let i = 0; i < filmes.length; i++) 
    console.log("Filme:", filmes[i]);

// Denner
// ===============================

let times = [
'Palmeiras', 'Corinthians', 'São Paulo', 'Santos', 'Flamengo',
'Fluminense', 'Vasco', 'Botafogo', 'Grêmio', 'Internacional',
'Atlético-MG', 'Cruzeiro', 'Bahia', 'Fortaleza', 'Ceará',
'Athletico-PR', 'Coritiba', 'Bragantino', 'Chapecoense', 'Sport',
'Goiás'
];

// A
console.log("Posição 0:", times[0]);
console.log("Posição 7:", times[7]);
console.log("Posição 11:", times[11]);
console.log("Posição 15:", times[15]);
console.log("Posição 18:", times[18]);
console.log("Posição 20:", times[20]);

// B
console.log("Penúltimo time:", times[times.length - 2]);
console.log("Último time:", times[times.length - 1]);

// C
console.log("Total de times:", times.length);

// D
times.push("Juventude");
console.log("Após adicionar:", times);

// E
for (let i = 0; i < times.length; i++) {
    console.log("Time:", times[i]);
}

