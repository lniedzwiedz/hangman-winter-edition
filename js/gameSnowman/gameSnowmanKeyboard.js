function createKeyboardLines() {
    for (let i = 1; i <= 4; i++) {
        createElementDiv(containerGameSnowmanKeyboardElements, containerSnowmanKeyboardLine + valueToString(i));
    }
}

function createKeyboardButtonsForOneLine(elementId, keysLine) {

    let rowStart = 2;
    let columnStart = 2;
    let rowEnd = 3;
    let columnEnd = 3;
    let keysNumber = keysLine.length;

    for (let i = 0; i < keysNumber; i++) {
        let buttonId = "keyboard-" + keysLine[i];

        if (keysLine[i] === "") {
            buttonId = keysLine + i;
        }
        createElementButton(elementId, buttonId);
        setElementStyletAsGrid(buttonId, rowStart, columnStart, rowEnd, columnEnd, "1fr", "1fr");
        setElementClassNameByElementId(buttonId, snowmanKeyboardButtons);

        if ((keysLine[i] !== "") && (keysLine[i] !== "NEW GAME"))
            setElementValueById(buttonId, keysLine[i]);

        setElementTextById(buttonId, keysLine[i]);

        columnStart += 3;
        columnEnd += 3;
    }
}

const buttonsLine0 = [];
const buttonsLine1 = ["", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "", "", ""];
// const buttonsLine2 = ["", "A", "S", "D", "F", "G", "H", "I", "J", "K", "L", "", "", ""];
const buttonsLine2 = ["", "A", "S", "D", "F", "G", "H", "J", "K", "L", "", "", "", ""];
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
    setKeyboardGameSnowmanFunctionOnclick(functionNameOnclickPlayGameSnowmanBuild, functionNameOnclickSetConfigurationForGameSnowmanBuild);
}

function createKeyboardButtonsGameSnowmanDestroy() {
    createKeyboardButtons();
    setKeyboardGameSnowmanFunctionOnclick(functionNameOnclickPlayGameSnowmanDestroy, functionNameOnclickSetConfigurationForGameSnowmanDestroy);
}

function setKeyboardGameSnowmanFunctionOnclick(functionNameOnclickPlayGameSnowman, functionNameOnclickSetConfigurationForGameSnowman) {

    for (let i = 1; i <= lines; i++) {

        let keysLine = eval(buttonsLine + i);

        for (let j = 0; j < keysLine.length; j++) {

            let keyValue = keysLine[j]
            let keyId = "keyboard-" + keyValue;
            let button = getElementById(keyId);

            if ((button !== null) && ("" !== keyValue)) {
                if (keyValue !== "NEW GAME")
                    setFunctionOnclickByElement(button, functionNameOnclickPlayGameSnowman);
                else
                    setFunctionOnclickByElement(button, functionNameOnclickSetConfigurationForGameSnowman);
            }
        }
    }
}

// game snowman functions:
function getKeyboardChar(clickedId) {
    return getElementAttributeValueById(clickedId);
}

function disableKeyboardButton(clickedId) {
    removeElementAttributeOnclickById(clickedId);
}

function disableKeyboardButtons() {
    let keys = document.getElementsByClassName(snowmanKeyboardButtons);
    for (let i = 0; i < keys.length; i++) {
        removeElementAttributeOnclick(keys[i]);
    }
}

function changeKeyboardButtonNewGameWhenGameOver(functionNameOnclick) {
    let elementId = "keyboard-NEW GAME";
    setElementClassNameByElementId(elementId, snowmanKeyboardButtonNewGameGameOver);
    setFunctionOnclickByElementId(elementId, functionNameOnclick);
}

// time === setColorForSnowman(), gameSnowmanBuild.js
function changeKeyboardButtonsGameOver(functionNameOnclick) {
    disableKeyboardButtons();
    setTimeout(function () {
        changeKeyboardButtonNewGameWhenGameOver(functionNameOnclick)
    }, 9000)
}

function changeKeyboardButtonsGameSnowmanBuildGameOver() {
    changeKeyboardButtonsGameOver(functionNameOnclickSetConfigurationForGameSnowmanBuild);
}

function changeKeyboardButtonsGameSnowmanDestroyGameOver() {
    changeKeyboardButtonsGameOver(functionNameOnclickSetConfigurationForGameSnowmanDestroy);
}