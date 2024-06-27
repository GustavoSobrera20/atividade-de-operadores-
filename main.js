//texto -> 1. Escreva um programa que receba duas variáveis de números inteiros e realize as quatro operações básicas (adição, subtração, multiplicação e divisão). Mostre os resultados
//2. Crie um programa que converta uma temperatura de Fahrenheit  para Celsius. A fórmula de conversão é: C = (F - 32 ) / 1,8
//3. Crie um programa que converta uma temperatura de Celsius para Fahrenheit. A fórmula de conversão é: F = x (9/5) + 32 C
//4. Faça um programa que converta metros para centímetros. A variavel deve receber o valor em metros
//5. Crie um programa que calcule o preço final de um produto após um desconto de 10%, a variável deve receber o valor total da venda



var number2 = 200
var number1 = 84
                            
console.log ("-----------------------------------")
console.log (number2 + number1, " = conta de +") 
  console.log ()                                 
console.log (number2 - number1, " = conta de -") 
  console.log ()                                 
console.log (number2 * number1, " = conta de x") 
  console.log ()                                 
console.log (number2 / number1, " = conta de ÷") 
console.log ("-----------------------------------")

var Celsius = ((90 - 32 ) / 1.8)
var Celsius_redondo = parseInt (Celsius)
console.log (Celsius_redondo, "grau celsius")

var Fahrenheit = (13 * (9/5) + 32)
var Fahrenheit_redondo = parseInt (Fahrenheit)
console.log (Fahrenheit_redondo,"Fahrenheit")
 
var metros = 19
var centímetros = 100
console.log ("10 metros é", metros * centímetros, "centimetros")

var valordoproduto = 7
var valordodesconto = valordoproduto * (10 / 100)
var valorfinal = (valordoproduto - valordodesconto)
console.log(valordoproduto * valordodesconto )
  console.log ("-----------------------------------")