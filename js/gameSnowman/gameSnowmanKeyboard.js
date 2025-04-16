const containerGameSnowmanKeyboard = "containerGameSnowmanKeyboard";
const containerGameSnowmanKeyboardElements = "containerGameSnowmanKeyboardElements";
const containerSnowmanKeyboardLine = "containerSnowmanKeyboard-line-";
const snowmanKeyboardButtons = "snowmanKeyboardButtons";
const snowmanKeyboardButtonNewGameGameOver = "snowmanKeyboardButtonNewGameGameOver";
const buttonsLine = "buttonsLine";

function createKeyboardLines() {
    let keyboardLines = 4;

    for (let i = 1; i <= 4; i++) {
        let newDiv = document.createElement("div");
        document.getElementById(containerGameSnowmanKeyboardElements).append(newDiv);
        newDiv.setAttribute("id", containerSnowmanKeyboardLine + i);
    }
}

function createKeyboardButtonsForOneLine(elementId, keysLine) {

    let rowStart = 2;
    let columntStart = 2;
    let rowEnd = 3;
    let columntEnd = 3;
    let keysNumber = keysLine.length;

    for (let i = 0; i < keysNumber; i++) {

        let newButton = document.createElement("button");
        document.getElementById(elementId).append(newButton);
        newButton.style.display = "grid";
        // newButton.style.backgroundColor = "black";
        newButton.style.gridRow = rowStart;
        newButton.style.gridColumn = columntStart;
        newButton.style.gridRowEnd = rowEnd;
        newButton.style.gridColumnEnd = columntEnd;
        newButton.style.gridTemplateRows = "1fr";
        newButton.style.gridTemplateColumns = "1fr";

        if ((keysLine[i] !== "") && (keysLine[i] !== "NEW GAME")) {
            newButton.value = keysLine[i];
        }

        newButton.innerHTML += keysLine[i];
        newButton.setAttribute("id", "keyboard-" + keysLine[i]);
        newButton.classList.add(snowmanKeyboardButtons);
        columntStart += 3;
        columntEnd += 3;
    }
}

const buttonsLine0 = [];
const buttonsLine1 = ["", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "", "", ""];
const buttonsLine2 = ["", "A", "S", "D", "F", "G", "H", "I", "J", "K", "L", "", "", ""];
const buttonsLine3 = ["", "Z", "X", "C", "V", "B", "N", "M", "", "", "", ""];
const buttonsLine4 = ["", "", "", "NEW GAME", "", "", "", ""];
const lines = 4;

function createKeyboardButtonsForLines() {
    for (let i = 1; i <= lines; i++) {
        let lineValues = eval(buttonsLine + i);
        createKeyboardButtonsForOneLine(containerSnowmanKeyboardLine + i, lineValues);
    }
}

function createKeyboardButtons() {
    createKeyboardLines();
    createKeyboardButtonsForLines();
}

function createKeyboardButtonsGameSnowmanBuild() {
    createKeyboardButtons();
    setKeyboardGameSnowmanFunctionNameOnclick(functionNameOnclickPlayGameSnowmanBuild, functionNameOnclickSetConfigurationForGameSnowmanBuild);
}

function createKeyboardButtonsGameSnowmanDestroy() {
    createKeyboardButtons();
    setKeyboardGameSnowmanFunctionNameOnclick(functionNameOnclickPlayGameSnowmanDestroy, functionNameOnclickSetConfigurationForGameSnowmanDestroy);
}

function setKeyboardGameSnowmanFunctionNameOnclick(functionNameOnclickPlayGameSnowman, functionNameOnclickSetConfigurationForGameSnowman) {

    for (let i = 1; i <= lines; i++) {
        let keysLine = eval(buttonsLine + i);
        for (let j = 0; j < keysLine.length; j++) {

            let keyValue = keysLine[j];
            let button = document.getElementById("keyboard-" + keyValue);
            if ((button !== null) && ("" !== keyValue)) {

                if (keyValue !== "NEW GAME") {
                    button.setAttribute("onclick", functionNameOnclickPlayGameSnowman + "(this.id)");
                } else {
                    button.setAttribute("onclick", functionNameOnclickSetConfigurationForGameSnowman + "(this.id)");
                }
            }
        }
    }
}

// game snowman functions:

function getKeyboardChar(clickedId) {
    let getKeyElementPressedByUSer = document.getElementById(clickedId);
    return getKeyElementPressedByUSer.getAttribute("value");
}

function disableKeyboardButton(clickedId) {
    let getKeyElementPressedByUSer = document.getElementById(clickedId);
    getKeyElementPressedByUSer.removeAttribute("onclick");
}

function disableKeyboardButtons() {
    let keys = document.getElementsByClassName(snowmanKeyboardButtons);

    for (let i = 0; i < keys.length; i++) {
        keys[i].removeAttribute("onclick");
    }
}

function changeKeyboardButtonNewGameWhenGameOver(functionNameOnclick) {
    let element = document.getElementById("keyboard-NEW GAME");
    element.classList.add(snowmanKeyboardButtonNewGameGameOver);
    element.setAttribute("onclick", functionNameOnclick + "(this.id)");
}

// time === setColorForSnowman(), gameSnowmanBuild.js
function changeKeyboardButtonsGameOver(functionNameOnclick) {
    disableKeyboardButtons();
    setTimeout(function(){
        changeKeyboardButtonNewGameWhenGameOver(functionNameOnclick)
    }, 9000)
}

function changeKeyboardButtonsGameSnowmanBuildGameOver() {
    changeKeyboardButtonsGameOver(functionNameOnclickSetConfigurationForGameSnowmanBuild)
}

function changeKeyboardButtonsGameSnowmanDestroyGameOver() {
    changeKeyboardButtonsGameOver(functionNameOnclickSetConfigurationForGameSnowmanDestroy)
}
