function saldoDoHeroi(vitorias, derrotas){
    let resultado = vitorias - derrotas
    return resultado
}

function nivel(resultado){
    let rancker
    if (resultado <= 10)
        rancker = "Ferro"
        else if (resultado >= 11 && resultado <= 20)
            rancker = "Bronze"
            else if (resultado >= 21 && resultado <= 50) 
                rancker = "Prata"
                else if (resultado >= 51 && resultado <= 80)
                    rancker = "Ouro"
                    else if (resultado >= 81 && resultado <= 90)
                        rancker = "Diamante"
                        else if (resultado >= 91 && resultado <= 100) 
                            rancker = "Lendário"
                            else rancker = "Imortal"
    return rancker
}

let vitorias = 88
let derrotas = 32

let resultado = saldoDoHeroi(vitorias,derrotas)
let rancker = nivel(resultado)
console.log("O Herói tem de saldo " + resultado + " vitórias e está no nível de " + rancker)