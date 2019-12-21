var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");

let questionItem = {
    type: '',
    question: '',
    answers: []
};
let alphabet = 'vdfkugvhzsvgszhvnsydvbsdvhnsdjbLHAhcbsdvhjsdgcsdjvhsbvkfdnvkfdbbfdhb';
let id = Math.random().toString().slice(2) ;
console.log(id);

let quiz = [];
function saveQuiz() {

}