"use strict";
const cpf = document.getElementById("cpf");
const btnValidar = document.getElementById("btnValidar");
const saida = document.getElementById("saida");

function Verifica1(CPF)
{
    let primeiro = 0, conta = 100000000, soma = 0, num1 = 0, contador = 1;
    do
    {
        primeiro = CPF / conta;
        primeiro = Math.floor(primeiro);
        CPF = CPF - (primeiro * conta);
        primeiro *= contador;
        contador++;
        soma = soma + primeiro;
        conta = conta / 10;
    } while (contador < 10);
    num1 = soma % 11;
    if (num1 >= 10)
    {
        num1 = 0;
    }
    return num1;
}

function Verifica2(CPF, num1)
{
    let primeiro = 0, conta = 1000000000, soma = 0, num2 = 0, contador = 0;
        CPF = (CPF * 10) + num1;
        do
        {
            primeiro = CPF / conta;
            primeiro = Math.floor(primeiro);
            CPF = CPF - primeiro * conta;
            primeiro *= contador;
            contador++;
            soma = soma + primeiro;
            conta = conta / 10;
        } while (contador < 10);
        num2 = soma % 11;
        if (num2 >= 10)
        {
            num2 = 0;
        }
        return num2;
}


function MostraTela(CPF, num1, num2)
{
    saida.textContent = `Seu CPF: ${CPF}-${num1}${num2}`;
} 

function onClick()
{
    let Valido = PegarCPF();
    let num1 = Verifica1(Valido);
    let num2 = Verifica2(Valido, num1)
    MostraTela(cpf.value, num1, num2);
}


function PegarCPF()
{
    let Validar = ValidarValor(cpf.value);
    Validar = Validar[0]+Validar[1]+Validar[2];
    return Validar;
}


function ValidarValor(valor)
{
    const SemPonto = valor.split(".");
    return SemPonto;
}


btnValidar.addEventListener("click", onClick);