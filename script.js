/*
Exercício de Teste

A padaria de Rafael vende pães a 0,75 centavos a unidade.
Rafael sempre imprime o cupom fiscal para seus clientes, com algumas informações 
sobre a compra, como; nome, valor da compra, produto, quantidade do produto e a data da compra.

Escreva um programa que leia o nome do cliente e a quantidade de pães que ele deseja comprar.
Alerte o valor da compra.
"Imprima" no cupom fiscal a data e hora da compra.

Alerte em tela o cupom fiscal da seguinte forma.
⁠"Rafael - Valor da compra: 4.5 - Produto: Pães - Quantidade: 6 - Data: Thu, 06 Oct 2022 18:07:03 GMT ".

//SOLUÇÃO:

//Strings
let nomeCliente = prompt("Digite o nome do cliente:")
let produto = prompt("Digite o produto desejado:");
//Int
let quantidadeProduto = parseInt(prompt("Digite a quantidade desejada: "))

//Float
let valorUnitárioPao = 0.75;
let valorTotalCompra = parseFloat(quantidadeProduto * valorUnitárioPao);

alert(`O valor total da compra é R$ ${valorTotalCompra.toFixed(2)}`)

let data = Date.now();
let hoje = new Date(data).toUTCString();

alert(`${nomeCliente} - Produto: ${produto} - Quantidade: ${quantidadeProduto}
 - Valor da compra R$ ${valorTotalCompra} - Data: ${hoje}`);
*/

/*
EXERCÍCIO 1 

O litro da gasolina está custando R$ 6,80. 
Solicite ao usuário que entre com quanto em dinheiro ele deseja comprar de gasolina.

Alerte em tela a quantidade em litros abastecido pelo cliente.

Desta forma: "O Cliente abasteceu 0l".

Use a fórmula:
⁠litros = valorDaCompra / valorLitro

Exemplo:
Entrada: 13.60
Saída: "O Cliente abasteceu 2l".

//SOLUÇÃO:
*/

let valorLitroGasolina = 6.80;
let valorCompra = parseFloat(prompt("Quanto de gasolina em dinheiro deseja comprar?"));

let quantidadeAbastecida = valorCompra / valorLitroGasolina;

alert(`O cliente abasteceu ${quantidadeAbastecida.toFixed(2)} litros de gasolina.`);



/*
EXERCÍCIO 2 

Escreva um programa que leia uma temperatura em graus Celsius e 
alerte o valor convertido em graus Fahrenheit.

Desta forma: "O valor xºc em Fahrenheit é 0".
 
A fórmula de conversão é:
⁠F = (9 * C + 160) / 5 

sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

⁠Exemplo:
Entrada: 22
Saída: "O valor 22ºc em Fahrenheit é 71.6" //verificar

//SOLUÇÃO:
*/

let temperaturaCelsius = parseFloat(prompt("Digite a temperatura em ºC: "));

let Celsius_Fahrenheit = ((9 * temperaturaCelsius) + 160) / 5;

alert(`O valor de ${temperaturaCelsius} ºC em Fahrenheit é ${Celsius_Fahrenheit.toFixed(2)} ºF`);


/*
EXERCÍCIO 3

Escreva um programa que leia uma temperatura em graus Fahrenheit 
e alerte o valor convertido em graus Celsius. 

Desta forma: "O valor xºf em Celsius é 0".

A fórmula de conversão é:
C = ((F - 32) * 5) / 9

⁠sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

⁠Exemplo:
Entrada:71.6
Saída: "O valor 71.6ºf em Celsius é 21.99998".

//SOLUÇÃO:
*/

let temperaturaFahrenheit = parseFloat(prompt("Digite a temperatura em ºF: "));

let Fahrenheit_Celsius = ((temperaturaFahrenheit- 32) * 5) / 9;

alert(`O valor de ${temperaturaFahrenheit} ºF em Celsius é ${Fahrenheit_Celsius.toFixed(2)} ºF`);


/*
EXERCÍCIO 4

Escreva um programa que leia o comprimento, a largura e a altura de uma caixa retangular em metros.

Calcule e alerte o valor do volume desta caixa.

Desta forma: "Área da caixa é: 000m²⁠".

utilizando a fórmula: 
VOLUME = COMPRIMENTO* LARGURA* ALTURA.

Exemplo:
Entrada: 12(Comprimento), 12(Largura) * 6(Altura)
Saída: 864

//SOLUÇÃO:
*/

let comprimentoCaixa = parseInt(prompt("Digite o comprimento da caixa: "));
let larguraCaixa = parseInt(prompt("Digite a largura da caixa: "));
let alturaCaixa = parseInt(prompt("Digite a altura da caixa: "));

let volumeCaixa = comprimentoCaixa * larguraCaixa * alturaCaixa;

alert(`A área da caixa é: ${volumeCaixa} m²`);


/*
EXERCÍCIO 5

Escreva um programa que faça a leitura de um valor numérico inteiro e alerte o valor lido elevado ao quadrado.

Desta forma: "O valor x ao quadrado é xx"

⁠⁠Exemplo:
Entrada: 12
Saída: "O valor 12 ao quadrado é 144"

//SOLUÇÃO:
*/

let numero = parseInt(prompt("Digite um número inteiro: "));
let numeroAoQuadrado = numero**2;

alert(`O valor de ${numero} ao quadrado é: ${numeroAoQuadrado}`);


/*
EXERCÍCIO 6

Escreva um programa que leia 5 números.

Atribua cada nota a uma variável, realize a soma de todas e tire a média. Alerte a soma e a média.

Desta forma: "A soma dos valores informados é: x e a média das notas é: x".

Fórmula para o cálculo da média:

Ma = (x + x + x .... xn) / n

Os valores entre parenteses representam os valores lidos pelo programa. n representa a quantidade de números usados no cálculo.

Exemplo:
Entrada: 5,2,4,9,10
Saída: "A soma dos valores informados é: 30 e a média das notas é: 6"

//SOLUÇÃO:
*/

let nota_1 = parseFloat(prompt("Digite a 1º nota: "));
let nota_2 = parseFloat(prompt("Digite a 2º nota: "));
let nota_3 = parseFloat(prompt("Digite a 3º nota: "));
let nota_4 = parseFloat(prompt("Digite a 4º nota: "));
let nota_5 = parseFloat(prompt("Digite a 5º nota: "));


let soma = (nota_1 + nota_2 + nota_3 + nota_4 + nota_5);
let media = soma / 5;

alert(`A soma das notas informadas é: ${soma.toFixed(2)} e a média das notas é: ${media.toFixed(2)}`);


/*
EXERCÍCIO 7

Escreva um programa que leia 2 valores inteiros positivos e alerte o resto da divisão do primeiro pelo segundo.

Desta forma: "O resto da divisão de x por y é: xy "

⁠Exemplo:
Entrada: 11 e 2
Saída: "O resto da divisão de 11 por 2 é: 1 "

//SOLUÇÃO:
*/

let valor_1 = parseInt(prompt("Digite o 1º valor: "));
let valor_2 = parseInt(prompt("Digite o 2º valor: "));

let restoDivisao = (valor_1 % valor_2);

alert(`O resto da divisão de ${valor_1} por ${valor_2} é: ${restoDivisao}`);


/*
EXERCÍCIO 8

Escreva um programa que leia uma frase ou uma palavra, e alerte o comprimento desta string.

Desta forma: "Este texto tem x caracteres".

Exemplo:
Entrada:'pneumoultramicroscopicossilicovulcanoconiótico'
Saída: "Este texto tem 46 caracteres".

//SOLUÇÃO:
*/

let caracteres = prompt("Digite uma frase SEM espaçamento:");

let tamanho = caracteres.length;

alert(`Esta frase tem ${tamanho} caracteres.`);

let caracteres2 = prompt("Digite uma frase COM espaçamento:");

let tamanho2 = caracteres2.length;

alert(`Observe que esta frase tem ${tamanho2} caracteres, pois a propriedade ".length" conta letras e espaços.`);


/*
EXERCÍCIO 9

Escreva um programa que leia uma palavra ou frase e 
alerte qual a primeira e a última letra de uma string, 

a primeira deve ser alertada em caixa alta(Maiúscula) e a segunda em caixa baixa(Minúscula).

Desta forma: "A primeira letra deste texto é A e última é a".

⁠Exemplo:
Entrada:'pneumoultramicroscopicossilicovulcanoconiótico'
Saída: "A primeira letra deste texto é P e última é o".

//SOLUÇÃO:
*/


let frase = prompt("Digite uma frase ou palavra:");
let primeiraLetra = frase[0];

let ultimaLetra = frase[frase.length-1];

alert(`A primeira letra desta frase é "${primeiraLetra.toUpperCase()}" e a última letra é "${ultimaLetra.toLowerCase()}".`);


/*

EXERCÍCIO 10

Escreva um programa que leia o nome, sobrenome e a idade e setor de uma pessoa. 
Estas informações são as informações do crachá de um funcionário.

A primeira letra do nome e do sobrenome devem estar em maiúsculo.
A primeira letra do setor deve estar em maiúsculo.

Alerte os dados do funcionário em tela, para que ele confirme as informações.

Desta forma: "nome: Geraldo Luiz - idade: 32 - Setor: Produção"

Exemplo:
Entrada:geraldo(nome), luiz(sobrenome), 32(idade), produção(setor)
Saída: "nome: Geraldo Luiz - idade: 32 - Setor: Produção"

//SOLUÇÃO:
*/

let nomeFuncionario = prompt("Digite o nome do funcionário:");

let sobrenomeFuncionario = prompt("Digite o sobrenome do funcionário:");

let idadeFuncionario = parseInt(prompt("Digite a idade do funcionário:"));

let setorFuncionario = prompt("Digite o setor do funcionário:");

alert(`Nome: ${nomeFuncionario[0].toUpperCase()}${nomeFuncionario.slice(1, nomeFuncionario.length)} ${sobrenomeFuncionario[0].toUpperCase()}${sobrenomeFuncionario.slice(1, sobrenomeFuncionario.length)} - Idade: ${idadeFuncionario} - Setor: ${setorFuncionario[0].toUpperCase()}${setorFuncionario.slice(1, setorFuncionario.length)}`);

