function createKeyboardLines() {
    for (let i = 1; i <= 4; i++) {
        createElementDiv(containerGameSnowmanKeyboardElements, containerSnowmanKeyboardLinePrefix + valueToString(i));
    }
}

function createKeyboardButtonsForOneLine(elementId, keysLine) {

    let rowStart = 2;
    let columnStart = 2;
    let rowEnd = 3;
    let columnEnd = 3;
    let keysNumber = keysLine.length;

    for (let i = 0; i < keysNumber; i++) {
        let buttonId = keyboardKeyIdPrefix + keysLine[i];

        if (keysLine[i] === "") {
            buttonId = keysLine + i;
        }
        createElementButton(elementId, buttonId);
        setElementStyletAsGrid(buttonId, rowStart, columnStart, rowEnd, columnEnd, "1fr", "1fr");
        addElementClassNameByElementId(buttonId, snowmanKeyboardButtons);

        if ((keysLine[i] !== "") && (keysLine[i] !== keyboardKeyValueNewGame))
            setElementValueById(buttonId, keysLine[i]);

        setElementTextById(buttonId, keysLine[i]);

        columnStart += 3;
        columnEnd += 3;
    }
}

function createKeyboardButtonsForLines() {
    for (let i = 1; i <= lines; i++) {
        let lineValues = eval(buttonsLine + i);
        createKeyboardButtonsForOneLine(containerSnowmanKeyboardLinePrefix + i, lineValues);
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
            // let keyId = "keyboard-" + keyValue;
            let keyId = keyboardKeyIdPrefix + keyValue;
            let button = getElementById(keyId);

            if ((button !== null) && ("" !== keyValue)) {
                if (keyValue !== keyboardKeyValueNewGame)
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
    // let elementId = "keyboard-NEW GAME";
    let elementId = keyboardKeyIdPrefix + keyboardKeyValueNewGame;
    addElementClassNameByElementId(elementId, snowmanKeyboardButtonNewGameGameOver);
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