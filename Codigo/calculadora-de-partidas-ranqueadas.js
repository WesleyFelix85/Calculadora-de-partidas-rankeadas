
let vitorias = 30;
let derrotas = 20;
let nivel;

function calcularSaldo(vitorias,derrotas){
    let saldo = vitorias - derrotas;
     return saldo;
}

if (vitorias <= 10) {
    nivel = "Ferro";
}
if (vitorias > 10 && vitorias <= 20 ){
    nivel = "Bronze";
}
if (vitorias > 20 && vitorias <= 50){
    nivel ="Prata";
}
if (vitorias > 50 && vitorias <= 80){
    nivel = "Ouro";
}
if (vitorias > 80 && vitorias <= 90){
    nivel = "Diamante";
}
if (vitorias > 90 && vitorias <= 100){
    nivel = "Lendário";
}
if (vitorias > 100){
    nivel ="Imortal";
}
let saldo = calcularSaldo(vitorias, derrotas);

console.log("O Herói de saldo de " + saldo + " está no nível de " + nivel);