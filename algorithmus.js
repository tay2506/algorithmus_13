alert("vamos ver a média da nota?");
let nota1 = parseFloat(prompt("Digite a nota 1:"));
let nota2 = parseFloat(prompt("Digite a nota 2:"));
let media = (nota1 + nota2) / 2;
let mensagem;
if (media>=0 && media<= 4.5) {
    mensagem = "Reprovado:" + media;
}
else if (media>=4.6 && media<= 5.9) {
    mensagem = "Aprovado por média: " + media;
}
else if (media>= 6 && media<= 9.9) {
    mensagem = "Aprovado, acima da média: " + media;
}
else if (media==10) {
    mensagem = "Aprovado com média máxima, Parabéns!: " + media;
}
else {
    mensagem = "Nota inválida";
}
alert(mensagem);
document.write( "<p style='font-size: 2rem;'>" + mensagem + "</p>" );