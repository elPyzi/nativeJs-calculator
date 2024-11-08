const BTNS = document.querySelectorAll('.calculator__buttons');
const DISPLAY_INPUT = document.querySelector('.calculator__input');
const DISPLAY_OUTPUT = document.querySelector('.calculator__output');

/**
 * * currentOperator это текщуий оператор вводимый пользователем
 * * previousValue предыдущие значение что бы делать расчет и наверх переместить
 * * проверка новое ли число как на калькуляторе на винде
 */
let currentOperator = null;
let previousValue = null;
let isNewNumber = false;

BTNS.forEach((btn) => {
    btn.addEventListener('click', calc);
});

function calc(event) {
    const VALUE = event.target.value;

    switch (VALUE) {
        case '=': {
            calculate();
            break;
        }
        case 'C':
            clearDisplay();
            break;
        case '%': {
            getPrecent();
            break;
        }
        case ',': {
            getFloat();
            break;
        }
        case 'change': {
            signChange();
            break;
        }
        case 'del':
            DISPLAY_OUTPUT.textContent =
                DISPLAY_OUTPUT.textContent.slice(0, -1) || '0';
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            setOperator(VALUE);
            break;
        default: {
            addValue(VALUE);
            break;
        }
    }
}

function addValue(value) {
    if (DISPLAY_OUTPUT.textContent.length >= 15) return;
    // if (countLine > 15) {
    //     DISPLAY_OUTPUT.innerHTML += '<br>';
    //     countLine = 0;
    // }
    // DISPLAY_OUTPUT.innerHTML += value;
    // countLine++;
    if (isNewNumber) {
        DISPLAY_OUTPUT.textContent = value;
        isNewNumber = false;
    } else {
        DISPLAY_OUTPUT.textContent =
            DISPLAY_OUTPUT.textContent === '0'
                ? value
                : DISPLAY_OUTPUT.textContent + value;
    }
}

function clearDisplay() {
    DISPLAY_OUTPUT.textContent = '';
    DISPLAY_INPUT.textContent = '';
    currentOperator = null;
    previousValue = null;
    isNewNumber = false;
}

function signChange() {
    const currentValue = parseFloat(DISPLAY_OUTPUT.textContent);
    DISPLAY_OUTPUT.textContent = currentValue
        ? (currentValue * -1).toString()
        : DISPLAY_OUTPUT.textContent;
}

function getPrecent() {
    DISPLAY_OUTPUT.textContent = parseFloat(DISPLAY_OUTPUT.textContent) / 100;
}

function getFloat() {
    if (DISPLAY_OUTPUT.textContent.includes('.')) return;
    else DISPLAY_OUTPUT.textContent += '.';
}

function setOperator(operator) {
    if (DISPLAY_OUTPUT.textContent.length >= 15) return;
    if (currentOperator && isNewNumber) {
        calculate();
    }
    currentOperator = operator;
    previousValue = parseFloat(DISPLAY_OUTPUT.textContent);
    DISPLAY_INPUT.textContent = `${previousValue} ${currentOperator}`;
    isNewNumber = true;
}

function calculate() {
    if (DISPLAY_OUTPUT.textContent.length >= 15) return;
    if (currentOperator && previousValue !== null) {
        const currentValue = parseFloat(DISPLAY_OUTPUT.textContent);
        let result;

        switch (currentOperator) {
            case '+':
                result = previousValue + currentValue;
                break;
            case '-':
                result = previousValue - currentValue;
                break;
            case '/':
                result =
                    currentValue !== 0 ? previousValue / currentValue : 'Rrror';
                break;
            case '*':
                result = previousValue * currentValue;
                break;

            default:
                break;
        }
        DISPLAY_OUTPUT.textContent = result;
        DISPLAY_INPUT.textContent = '';
        previousValue = result;
        currentOperator = null;
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;

    switch (key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            calc({ target: { value: key } });
            break;
        case 'Enter':
        case '=':
            calc({ target: { value: '=' } });
            break;
        case '+':
            calc({ target: { value: '+' } });
            break;
        case '-':
            calc({ target: { value: '-' } });
            break;
        case '*':
            calc({ target: { value: '*' } });
            break;
        case '/':
            calc({ target: { value: '/' } });
            break;
        case '%':
            calc({ target: { value: '%' } });
            break;
        case '.':
        case ',':
            calc({ target: { value: ',' } });
            break;
        case 'Backspace':
            DISPLAY_OUTPUT.textContent =
                DISPLAY_OUTPUT.textContent.slice(0, -1) || '0';
            break;
        default:
            break;
    }
});

// function signChange() {
//     let value = DISPLAY_OUTPUT.textContent;
//     const match = value.match(/(-?\d+)(?!.*\d)/);
//     if (match) {
//         const num = match[0];
//         const newNum = num.startsWith('-') ? num.slice(1) : '-' + num;
//         DISPLAY_OUTPUT.innerHTML = value.slice(0, match.index) + newNum;
//     }
// }

//100/100% + 25 - 48 * 2 + (2*(1-5)) = 21

// function calculate(expresion) {
//     //3+9 9-3 8/2 5*6 1-2
//     // 3+9+2 9-3-10 10+10*2
//     //['+', '-', '*', '/']
//     expresion = expresion.trim();
//     let i = 0;
//     const operators = [];
//     const operands = [];
//     while (i < expresion.length) {
//         //10+50-5+100/2+5*3
//         const symbol = expresion[i];
//         if (['+', '-', '*', '/'].includes(symbol)) {
//             while (
//                 operators.length &&
//                 priority[operators[operators.length - 1]] > priority(symbol)
//             ) {
//                 calculateValue(operators, operands);
//             }
//             operators.push(symbol);
//         } else {
//             let num = '';
//             while (i < expresion.length && !isNaN(expresion[i])) {
//                 num += expresion[i];
//                 i++;
//             }
//             operands.push(Number(num));
//             continue;
//         }
//         i++;
//     }

//     while (operators.length) {
//         calculateValue(operators, operands);
//     }
//     DISPLAY_OUTPUT.innerHTML = operands[0];
// }

// function priority(operators) {
//     if (operators == '+' || operators == '-') {
//         return 1;
//     } else if (operators == '*' || operators == '/') {
//         return 2;
//     }
//     return 0;
// }

// function calculateValue(operators, operands) {
//     const operator = operators.pop();
//     const a = operands.pop();
//     const b = operands.pop();
//     switch (operator) {
//         case '+': {
//             operands.push(a + b);
//             break;
//         }
//         case '-': {
//             operands.push(a - b);
//             break;
//         }
//         case '*': {
//             operands.push(a * b);
//             break;
//         }
//         case '/': {
//             operands.push(a / b);
//             break;
//         }
//         default:
//             DISPLAY_OUTPUT.innerHTML = 'Error';
//             break;
//     }
// }
