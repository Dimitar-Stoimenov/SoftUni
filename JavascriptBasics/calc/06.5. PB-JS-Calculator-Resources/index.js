let htmlSelectors = {
    'operands': document.querySelectorAll('.calc-operand'),
    'operators': document.querySelectorAll('.calc-operator'),
    'decimal-point': document.querySelector('.calc-decimal-point'),
    'remove': document.querySelector('.calc-remove'),
    'reset': document.querySelector('.calc-result--reset-btn'),
    'equals': document.querySelector('.calc-equals'),
    'result-final': document.querySelector('.calc-result--final'),
    'result-progress': document.querySelector('.calc-result--progress')
}
// TODO: Да се инициализират нужните променливи
let firstOperand = ''
let secondOperand = ''
let operator = ''
let firstIsSelected = false

let allOperandBtns = htmlSelectors['operands'];
let allOperatorBtns = htmlSelectors['operators'];
let decimalPointBtn = htmlSelectors['decimal-point'];
let equalsBtn = htmlSelectors['equals'];
let removeBtn = htmlSelectors['remove'];
let resetBtn = htmlSelectors['reset'];
for (let index = 0; index < allOperandBtns.length; index++) {
    let operandBtn = allOperandBtns[index];

    operandBtn.addEventListener('click', operandClickListenerHandler);
}
for (let index = 0; index < allOperatorBtns.length; index++) {
    let operatorBtn = allOperatorBtns[index];

    operatorBtn.addEventListener('click', operatorClickListenerHandler);
}
decimalPointBtn.addEventListener('click', decimalPointClickListenerHandler);
equalsBtn.addEventListener('click', equalsClickListenerHandler);
removeBtn.addEventListener('click', removeSymbolClickListenerHandler);
resetBtn.addEventListener('click', resetClickListenerHandler);

function operandClickListenerHandler(e) {
    let selectedOperand = e.target.textContent;
    let resultFinalDiv = htmlSelectors['result-final'];

    if (!firstIsSelected) {
        firstOperand += selectedOperand
        resultFinalDiv.textContent = firstOperand
    } else {
        secondOperand += selectedOperand
        resultFinalDiv.textContent = secondOperand
    }
    // TODO: Да се допише функцията
}

function operatorClickListenerHandler(e) {
    let selectedOperator = e.target.getAttribute('data-target');
    let resultProgressDiv = htmlSelectors['result-progress'];

    if (firstOperand !== '') {
        if (selectedOperator === 'add') {
            operator = '+'
        } else if (selectedOperator === 'subtract') {
            operator = '-'
        } else if (selectedOperator === 'multiply') {
            operator = '*'
        } else {
            operator = '/'
        }
        resultProgressDiv.textContent = firstOperand + operator
        firstIsSelected = true
    }   // TODO: Да се допише функцията
}

function decimalPointClickListenerHandler() {
    let resultFinalDiv = htmlSelectors['result-final'];

    // TODO: Да се допише функцията
}

function removeSymbolClickListenerHandler() {
    let finalResultDiv = htmlSelectors['result-final'];

    // TODO: Да се допише функцията
}

function equalsClickListenerHandler() {
    let resultProgressDiv = htmlSelectors['result-progress'];
    let resultFinalDiv = htmlSelectors['result-final'];

    // TODO: Да се допише функцията
}

function resetClickListenerHandler() {
    let resultProgressDiv = htmlSelectors['result-progress'];
    let resultFinalDiv = htmlSelectors['result-final'];

    // TODO: Да се допише функцията
}
