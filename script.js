'use strict'

let btns = document.getElementsByClassName('btn');
let area = document.querySelector('.grid_item1')
let acc = 0
let op = 0
const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
  };

document.addEventListener("keydown", function(e){
    // console.log(e.key);
    if (Number(e.key)){
        // console.log('int');
        area.textContent+=String(e.key)
        }
        if (e.key == 'Backspace'){
            let str = String(area.textContent);
            // console.log(str);
            str = str.split('')
            str.pop()
            str = str.join('')
            area.textContent = str
            // console.log(str);
            // console.log(str.split('').pop());
        }
        if (e.key == 'c'){
            area.textContent = '';
        }
});

document.addEventListener("click", function(e) {
    function operation() {
        acc = area.textContent;
        area.textContent = '';
        op = e.target.innerText
    }
    if (e.target.className=="btn") {
    // console.log(Number(e.target.innerText));
        if (Number(e.target.innerText)){
            // console.log('int');
            area.textContent+=String(e.target.innerText)
        }
        switch (e.target.innerText){
            case 'c':
                area.textContent = '';
                acc = 0;
                break;
            case '÷':
                operation()
                op = '/'
                break;
            case '-':
                operation()
                break;
            case '+':
                operation()
                break;
            case 'x':
                operation()
                op = '*'
                break;
            case '=':
                area.textContent = operators[op](Number(acc),Number(area.textContent))
                break;
        }

    }
  });