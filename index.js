function subtrair(vitorias, derrotas) {
    return vitorias - derrotas;
}

let saldoVitorias = subtrair(97, 9);
let ranking = saldoVitorias;

//níveis do ranking
if (saldoVitorias <= 10) {
    ranking = "Ferro";
} else if (saldoVitorias > 10 && saldoVitorias <= 20) {
    ranking = "Bronze";
} else if (saldoVitorias > 20 && saldoVitorias <= 50) {
    ranking = "Prata";
} else if (saldoVitorias > 50 && saldoVitorias <= 80) {
    ranking = "Ouro";
} else if (saldoVitorias > 80 && saldoVitorias <= 90) {
    ranking = "Diamante";
} else if (saldoVitorias > 90 && saldoVitorias <= 100) {
    ranking = "Lendário";
} else if (saldoVitorias >= 101) {
    ranking = "Imortal";
}

//conclusão
console.log("O herói tem o saldo de " + saldoVitorias + " vitórias e está no nível " + ranking + ".");