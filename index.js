/**
 * This program is a boilerplate code for the standard tic tac toe game
 * Here the “box” represents one placeholder for either a “X” or a “0”
 * We have a 2D array to represent the arrangement of X or O is a grid
 * 0 -> empty box
 * 1 -> box with X
 * 2 -> box with O
 *
 * Below are the tasks which needs to be completed:
 * Imagine you are playing with the computer so every alternate move should be done by the computer
 * X -> player
 * O -> Computer
 *
 * Winner needs to be decided and has to be flashed
 *
 * Extra points will be given for approaching the problem more creatively
 * 
 */
const grid = [];
const GRID_LENGTH = 3;
let turn = 'X';

function initializeGrid() {
    for (let colIdx = 0; colIdx < GRID_LENGTH; colIdx++) {
        const tempArray = [];
        for (let rowidx = 0; rowidx < GRID_LENGTH; rowidx++) {
            tempArray.push(0);
        }
        grid.push(tempArray);
        // console.log(grid);
    }
}

function getRowBoxes(colIdx) {
    let rowDivs = '';

    for (let rowIdx = 0; rowIdx < GRID_LENGTH; rowIdx++) {
        let additionalClass = 'darkBackground';
        let content = '';
        const sum = colIdx + rowIdx;
        if (sum % 2 === 0) {
            additionalClass = 'lightBackground'
        }
        const gridValue = grid[colIdx][rowIdx];
        if (gridValue === 1) {
            content = '<span class="cross">X</span>';
        } else if (gridValue === 2) {
            content = '<span class="open">O</span>';
        }
        rowDivs = rowDivs + '<div colIdx="' + colIdx + '" rowIdx="' + rowIdx + '" class="box ' +
            additionalClass + '">' + content + '</div>';
    }
    return rowDivs;
}

function getColumns() {
    let columnDivs = '';
    for (let colIdx = 0; colIdx < GRID_LENGTH; colIdx++) {
        let coldiv = getRowBoxes(colIdx);
        coldiv = '<div class="rowStyle">' + coldiv + '</div>';
        columnDivs = columnDivs + coldiv;
    }
    return columnDivs;
}

function renderMainGrid() {
    const parent = document.getElementById("grid");
    const columnDivs = getColumns();
    parent.innerHTML = '<div class="columnsStyle">' + columnDivs + '</div>';
}

function onBoxClick() {
    var rowIdx = this.getAttribute("rowIdx");
    var colIdx = this.getAttribute("colIdx");
    let newValue = 1;

    var isGameComplete = checkGameProgress();
    if (isGameComplete == 1) {
        grid[colIdx][rowIdx] = newValue;
        //Identify Winner  
        var stateName = checkisWinner(); // Check if won at last move  
        if(stateName == "won"){
            //Match Won by user
        }else{
            document.getElementsByClassName('winner')[0].innerHTML = "Draw";
            document.getElementsByClassName('winner')[0].style.display = 'block';            
            document.getElementsByClassName('winner')[0].style.color = 'blue';
            document.getElementsByClassName('winner')[0].style.background = '#ffbbbb';            
            document.getElementsByClassName('replay')[0].style.display = 'block';
        }

    } else {
        if (grid[colIdx][rowIdx] > 0) {
            alert("Spot Not Available");
        } else {
            grid[colIdx][rowIdx] = newValue;
            checkisWinner();
            opponentMove();

        }

    }

    renderMainGrid();
    addClickHandlers();
}

function checkisWinner() {

    if (grid[0][0] === 1 && grid[0][1] === 1 && grid[0][2] === 1) {
        document.getElementsByClassName('winner')[0].innerHTML = "You Won !";
        document.getElementsByClassName('winner')[0].style.display = 'block';
        document.getElementsByClassName('replay')[0].style.display = 'block';
        return "won";

    } else if (grid[1][0] === 1 && grid[1][1] === 1 && grid[1][2] === 1) {
        document.getElementsByClassName('winner')[0].innerHTML = "You Won !";
        document.getElementsByClassName('winner')[0].style.display = 'block';
        document.getElementsByClassName('replay')[0].style.display = 'block';
         return "won";

    } else if (grid[2][0] === 1 && grid[2][1] === 1 && grid[2][2] === 1) {
        document.getElementsByClassName('winner')[0].innerHTML = "You Won !";
        document.getElementsByClassName('winner')[0].style.display = 'block';
        document.getElementsByClassName('replay')[0].style.display = 'block';
         return "won";

    } else if (grid[0][0] === 1 && grid[1][0] === 1 && grid[2][0] === 1) {
        document.getElementsByClassName('winner')[0].innerHTML = "You Won !";
        document.getElementsByClassName('winner')[0].style.display = 'block';
        document.getElementsByClassName('replay')[0].style.display = 'block';
         return "won";

    } else if (grid[0][1] === 1 && grid[1][1] === 1 && grid[2][1] === 1) {
        document.getElementsByClassName('winner')[0].innerHTML = "You Won !";
        document.getElementsByClassName('winner')[0].style.display = 'block';
        document.getElementsByClassName('replay')[0].style.display = 'block';
         return "won";

    } else if (grid[0][2] === 1 && grid[1][2] === 1 && grid[2][2] === 1) {
        document.getElementsByClassName('winner')[0].innerHTML = "You Won !";
        document.getElementsByClassName('winner')[0].style.display = 'block';
        document.getElementsByClassName('replay')[0].style.display = 'block';
         return "won";

    } else if (grid[0][0] === 1 && grid[1][1] === 1 && grid[2][2] === 1) {
        document.getElementsByClassName('winner')[0].innerHTML = "You Won !";
        document.getElementsByClassName('winner')[0].style.display = 'block';
        document.getElementsByClassName('replay')[0].style.display = 'block';
         return "won";

    } else if (grid[0][2] === 1 && grid[1][1] === 1 && grid[2][0] === 1) {
        document.getElementsByClassName('winner')[0].innerHTML = "You Won !";
        document.getElementsByClassName('winner')[0].style.display = 'block';
        document.getElementsByClassName('replay')[0].style.display = 'block';
         return "won";

    } else if (grid[0][0] === 2 && grid[0][1] === 2 && grid[0][2] === 2) {
        document.getElementsByClassName('winner')[0].innerHTML = "Computer Won";
        document.getElementsByClassName('winner')[0].style.display = 'block';
        document.getElementsByClassName('winner')[0].style.color = 'red';
        document.getElementsByClassName('winner')[0].style.background = '#ffbbbb';
        document.getElementsByClassName('replay')[0].style.display = 'block';
         return "won";

    } else if (grid[1][0] === 2 && grid[1][1] === 2 && grid[1][2] === 2) {
        document.getElementsByClassName('winner')[0].innerHTML = "Computer Won";
        document.getElementsByClassName('winner')[0].style.display = 'block';
        document.getElementsByClassName('winner')[0].style.color = 'red';
        document.getElementsByClassName('winner')[0].style.background = '#ffbbbb';
        document.getElementsByClassName('replay')[0].style.display = 'block';
        return "won";


    } else if (grid[2][0] === 2 && grid[2][1] === 2 && grid[2][2] === 2) {
        document.getElementsByClassName('winner')[0].innerHTML = "Computer Won";
        document.getElementsByClassName('winner')[0].style.display = 'block';
        document.getElementsByClassName('winner')[0].style.color = 'red';
        document.getElementsByClassName('winner')[0].style.background = '#ffbbbb';
        document.getElementsByClassName('replay')[0].style.display = 'block';
        return "won";

    } else if (grid[0][0] === 2 && grid[1][0] === 2 && grid[2][0] === 2) {
        document.getElementsByClassName('winner')[0].innerHTML = "Computer Won";
        document.getElementsByClassName('winner')[0].style.display = 'block';
        document.getElementsByClassName('winner')[0].style.color = 'red';
        document.getElementsByClassName('winner')[0].style.background = '#ffbbbb';
        document.getElementsByClassName('replay')[0].style.display = 'block';
        return "won";

    } else if (grid[0][1] === 2 && grid[1][1] === 2 && grid[2][1] === 2) {
        document.getElementsByClassName('winner')[0].innerHTML = "Computer Won";
        document.getElementsByClassName('winner')[0].style.display = 'block';
        document.getElementsByClassName('winner')[0].style.color = 'red';
        document.getElementsByClassName('winner')[0].style.background = '#ffbbbb';
        document.getElementsByClassName('replay')[0].style.display = 'block';
        return "won";

    } else if (grid[0][2] === 2 && grid[1][2] === 2 && grid[2][2] === 2) {
        document.getElementsByClassName('winner')[0].innerHTML = "Computer Won";
        document.getElementsByClassName('winner')[0].style.display = 'block';
        document.getElementsByClassName('winner')[0].style.color = 'red';
        document.getElementsByClassName('winner')[0].style.background = '#ffbbbb';
        document.getElementsByClassName('replay')[0].style.display = 'block';
        return "won";

    } else if (grid[0][0] === 2 && grid[1][1] === 2 && grid[2][2] === 2) {
        document.getElementsByClassName('winner')[0].innerHTML = "Computer Won";
        document.getElementsByClassName('winner')[0].style.display = 'block';
        document.getElementsByClassName('winner')[0].style.color = 'red';
        document.getElementsByClassName('winner')[0].style.background = '#ffbbbb';
        document.getElementsByClassName('replay')[0].style.display = 'block';
        return "won";

    } else if (grid[0][2] === 2 && grid[1][1] === 2 && grid[2][0] === 2) {
        document.getElementsByClassName('winner')[0].innerHTML = "Computer Won";
        document.getElementsByClassName('winner')[0].style.display = 'block';
        document.getElementsByClassName('winner')[0].style.color = 'red';
        document.getElementsByClassName('winner')[0].style.background = '#ffbbbb';
        document.getElementsByClassName('replay')[0].style.display = 'block';
        return "won";

    }

}


function addClickHandlers() {
    var boxes = document.getElementsByClassName("box");
    for (var idx = 0; idx < boxes.length; idx++) {
        boxes[idx].addEventListener('click', onBoxClick, false);
    }
}

function opponentMove() {
    var ispositionTaken = document.getElementsByClassName('cross');
    let newValues = 2;
    opponentPosition();

}

function checkGameProgress() {
    checkResults = [];
    for (let xd = 0; xd < GRID_LENGTH; xd++) {
        result = grid[xd].filter(i => i === 0).length;
        checkResults.push(result);
    }
    return checkResults.reduce(sumchkResult);
}

function sumchkResult(sumTotal, sumNum) {
    return sumTotal + sumNum;
}

function opponentPosition() {

    let newValues = 2;
    var numberOne = 3;
    var numberTwo = 3;

    do {
        numberOne = Math.floor(Math.random() * 3);
        numberTwo = Math.floor(Math.random() * 3);
    } while (grid[numberOne][numberTwo] > 0);


    if (grid[numberOne][numberTwo] == 0) {
        grid[numberOne][numberTwo] = newValues;
    }

    checkisWinner();

}


initializeGrid();
renderMainGrid();
addClickHandlers();