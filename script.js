const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btnStart = document.getElementById('btnStart');
const btnReset = document.getElementById('btnReset');
const btnFlexAll = document.querySelectorAll('.button');
const turnPlayer = document.getElementById('turnPlayer');

let turn = 1;

btn1.addEventListener('click', () => {
    btn1BoardGame();
});

btn2.addEventListener('click', () => {
    btn2BoardGame();
});

btn3.addEventListener('click', () => {
    btn3BoardGame();
});

btn4.addEventListener('click', () => {
    btn4BoardGame();
});

btn5.addEventListener('click', () => {
    btn5BoardGame();
});

btn6.addEventListener('click', () => {
    btn6BoardGame();
});

btn7.addEventListener('click', () => {
    btn7BoardGame();
});

btn8.addEventListener('click', () => {
    btn8BoardGame();
});

btn9.addEventListener('click', () => {
    btn9BoardGame();
});

btnStart.addEventListener('click', () => {
    startGame();
});

btnReset.addEventListener('click', () => {
    resetBoard();
});

const btn1BoardGame = () => {
    if (turn == 1) {
        btn1.value = 'X';
        btn1.innerText = 'X';
        turn = 0;
        checkResult(btn1.value);
    } else {
        btn1.value = 'O';
        btn1.innerText = 'O';
        turn = 1;
        checkResult(btn1.value);
    }
}

const btn2BoardGame = () => {
    if (turn == 1) {
        btn2.value = 'X';
        btn2.innerText = 'X';
        turn = 0;
        checkResult(btn2.value);
    } else {
        btn2.value = 'O';
        btn2.innerText = 'O';
        turn = 1;
        checkResult(btn2.value);
    }
}

const btn3BoardGame = () => {
    if (turn == 1) {
        btn3.value = 'X';
        btn3.innerText = 'X';
        turn = 0;
        checkResult(btn3.value);    
    } else {
        btn3.value = 'O';
        btn3.innerText = 'O';
        turn = 1;
        checkResult(btn3.value);
    }
}

const btn4BoardGame = () => {
    if (turn == 1) {
        btn4.value = 'X';
        btn4.innerText = 'X';
        turn = 0;
        checkResult(btn4.value);
        
    } else {
        btn4.value = 'O';
        btn4.innerText = 'O';
        turn = 1;
        checkResult(btn4.value);
    }
}

const btn5BoardGame = () => {
    if (turn == 1) {
        btn5.value = 'X';
        btn5.innerText = 'X';
        turn = 0;
        checkResult(btn5.value);
    } else {
        btn5.value = 'O';
        btn5.innerText = 'O';
        turn = 1;
        checkResult(btn5.value);
    }
}

const btn6BoardGame = () => {
    if (turn == 1) {
        btn6.value = 'X';
        btn6.innerText = 'X';
        turn = 0;
        checkResult(btn6.value);
    } else {
        btn6.value = 'O';
        btn6.innerText = 'O';
        turn = 1;
        checkResult(btn6.value);
    }
}

const btn7BoardGame = () => {
    if (turn == 1) {
        btn7.value = 'X';
        btn7.innerText = 'X';
        turn = 0;
        checkResult(btn7.value);
    } else {
        btn7.value = 'O';
        btn7.innerText = 'O';
        turn = 1;
        checkResult(btn7.value);
    }
}

const btn8BoardGame = () => {
    if (turn == 1) {
        btn8.value = 'X';
        btn8.innerText = 'X';
        turn = 0;
        checkResult(btn8.value);
    } else {
        btn8.value = 'O';
        btn8.innerText = 'O';
        turn = 1;
        checkResult(btn8.value);
    }
}

const btn9BoardGame = () => {
    if (turn == 1) {
        btn9.value = 'X';
        btn9.innerText = 'X';
        turn = 0;
        checkResult(btn9.value);
    } else {
        btn9.value = 'O';
        btn9.innerText = 'O';
        turn = 1;
        checkResult(btn9.value);
    }
}

const startGame = () => {
    for (const btn of btnFlexAll) {
        btn.removeAttribute('hidden');
    }
    btnStart.setAttribute('hidden','');
    btnReset.removeAttribute('hidden');
}

const resetBoard = () => {
    for (const btn of btnFlexAll) {
        btn.value = '';
        btn.innerText = '';
    }
}

const checkResult = (playerTurnValue) => {
    if (
        (btn1.value == playerTurnValue && btn2.value == playerTurnValue && btn3.value == playerTurnValue) ||
        (btn4.value == playerTurnValue && btn5.value == playerTurnValue && btn6.value == playerTurnValue) ||
        (btn7.value == playerTurnValue && btn8.value == playerTurnValue && btn9.value == playerTurnValue) ||

        (btn1.value == playerTurnValue && btn4.value == playerTurnValue && btn7.value == playerTurnValue) ||
        (btn2.value == playerTurnValue && btn5.value == playerTurnValue && btn8.value == playerTurnValue) ||
        (btn3.value == playerTurnValue && btn6.value == playerTurnValue && btn9.value == playerTurnValue) ||

        (btn1.value == playerTurnValue && btn5.value == playerTurnValue && btn9.value == playerTurnValue) ||
        (btn7.value == playerTurnValue && btn5.value == playerTurnValue && btn3.value == playerTurnValue)
    ) {
        if (playerTurnValue == 'X') {
            alert('Player X WIN')
            resetBoard();
        } else {
            alert('Player O WIN')
            resetBoard();
        }
    }
    if (turn == 1) {
        turnPlayer.innerText = 'Turn Player X';
    } else {
        turnPlayer.innerText = 'Turn Player O';
    }
}
