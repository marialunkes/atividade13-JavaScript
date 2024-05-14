function calcular() {
     
    let var1 = document.getElementById("var1").value;
    let var2 = document.getElementById("var2").value;

    let resultado = ""

    if (var2 < var1){
        resultado += "Difernça entre as duas variáveis: " +(var1 - var2) +"<br>"; 
    }else{
        resultado += "Diferença entre as duas variáveis" +(var2 - var1) +"<br>";
    }
    resultado += "O dobro da primeira mais o triplo da segunda é: " +(2* var1 + 3* var2) +"<br>";
    resultado += "A multiplicação das duas variáveis é: " +(var1 * var2) +"<br>";

    if (var2 < var1) {
        resultado += "Em ordem decrescente: " + var1 + "," + var2 + "<br>";
    }else{
        resultado += "Em ordem crescente: " + var2 + "," + var1 + "<br>";
    }

    if (salarioBruto <= 1000){
        taxaDesconto = 0.08;
    }else if (salarioBruto > 100 && salarioBruto <= 1500) {
        texaDesconto = 0.05;
    }else{
        taxaDesconto = 0.09;    
    }

    let valorINSS = salarioBruto + taxaDesconto;
    let salarioLiquido = salarioBruto - valorINSS;

    resultado += "Nome do funcionário:" + nomeFuncionario +"<br>";
    resultado += "Salário bruto do funcionário é: R$:" + salarioBruto + "<br>";
    resultado += "Valor do INSS é: R$: " + valorINSS +"<br>";
    resultado += "Salário liquido é R$: :" + salarioLiquido + "<br>";

    document.getElementById("resultado").innerHTML = resultado;

}
