alert("Calcule sua média."); 
let num1 = parseFloat(prompt("Digite a nota 1:"));
let num2 = parseFloat(prompt("Digite a nota 2:")); 
let media = (num1 + num2) / 2; 
if (media >= 0 && media <= 4.5){
    mensagem = "Reprovado: " + media; 
} 
else if (media >= 4.6 && media <= 5.9){
    mensagem = "Aprovado por média: " + media;
} 
else if (media >= 6 && media <= 9.9){
    mensagem = "Aprovado, acima da média: " + media;
} 
else if (media == 10){
    mensagem = "Aprovado com média máxima. Parabéns! " + media;
} 
else {
    mensagem = "Nota inválida"; 
} 
alert(mensagem);
document.write( "<p style='font-size: 2rem;'>" + mensagem + "</p>" );
