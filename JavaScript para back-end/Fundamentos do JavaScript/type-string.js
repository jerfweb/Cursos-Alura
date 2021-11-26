const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//Trabalhando com Strings
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const cidade02 = "belo horizonte";
const input02 = "Belo Horizonte";

const inputMinusculo02 = input02.toLowerCase(); //Suando função toLowercase para deixa todos caracters minusculos

console.log(cidade02 === inputMinusculo02); // true