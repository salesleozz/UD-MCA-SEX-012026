// ===============================
// PARTE 1 - ARRAY SIMPLES
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