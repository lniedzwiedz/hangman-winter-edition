const containerGameSnowmanKeyboard = "containerGameSnowmanKeyboard";
const containerGameSnowmanKeyboardElements = "containerGameSnowmanKeyboardElements";
const containerSnowmanKeyboardLine = "containerSnowmanKeyboard-line-";
const snowmanKeyboardButtons = "snowmanKeyboardButtons";
const snowmanKeyboardButtonNewGameGameOver = "snowmanKeyboardButtonNewGameGameOver";

function createKeyboardLines(){
    let keyboardLines = 4;

    for (let i = 1; i <= 4; i++) {
        let newDiv = document.createElement("div");
        document.getElementById(containerGameSnowmanKeyboardElements).append(newDiv);
        newDiv.setAttribute("id", containerSnowmanKeyboardLine+i);
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
            console.log("")
            newButton.value = keysLine[i];
            newButton.setAttribute("onclick", functionNameOnclickPlayGameSnowmanBuild+"(this.id)");
        }

        if (keysLine[i] === "NEW GAME") {
            newButton.setAttribute("onclick", functionSetConfigurationForGameSnowmanBuild+"(this.id)");
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
    let text = "buttonsLine";

    for (let i = 1; i <= lines; i++) {
        let lineValues = eval(text + i);
        createKeyboardButtonsForOneLine(containerSnowmanKeyboardLine + i, lineValues);
    }
}

function createKeyboardButtons(){
    createKeyboardLines();
    createKeyboardButtonsForLines();
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

function changeKeyboardButtonNewGameWhenGameOver(functionNameOnclickPlayGameSnowman) {
    let element = document.getElementById("keyboard-NEW GAME");
    // element.className += snowmanKeyboardButtonNewGameGameOver;
    element.classList.add(snowmanKeyboardButtonNewGameGameOver);
    element.setAttribute("onclick", functionNameOnclickPlayGameSnowman+"(this.id)");
}

function changeKeyboardButtonsGameOver() {
    disableKeyboardButtons();
    changeKeyboardButtonNewGameWhenGameOver(functionSetConfigurationForGameSnowmanBuild);
}
