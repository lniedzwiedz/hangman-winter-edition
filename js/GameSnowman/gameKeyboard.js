const containerSnowmanKeyboardLine = "containerSnowmanKeyboard-line-";

function createKeyboardLines(){
    let keyboardLines = 4;

    for (let i = 1; i <= 4; i++) {
        let newDiv = document.createElement("div");
        document.getElementById("containerGameSnowmanKeyboardElements").append(newDiv);
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
            newButton.setAttribute("onclick", "playGameSnowmanBuild(this.id)");
        }

        if (keysLine[i] === "NEW GAME") {
            newButton.setAttribute("onclick", "playGameSnowmanBuildNewGame(this.id)");
        }

        newButton.innerHTML += keysLine[i];
        newButton.setAttribute("id", "keyboard-" + keysLine[i]);
        newButton.classList.add("snowmanKeyboardButtons");

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

    // const keysLine1 = ["", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "", "", ""];
    // createKeyboardButtonsForOneLine(containerSnowmanKeyboardLine + "1", 14, keysLine1);
    // createKeyboardButtonsForOneLine(containerSnowmanKeyboardLine + "1", buttonsLine1);

    // const keysLine2 = ["", "A", "S", "D", "F", "G", "H", "I", "J", "K", "L", "", "", ""];
    // createKeyboardButtonsForOneLine(containerSnowmanKeyboardLine + "2", 13, keysLine2);
    // createKeyboardButtonsForOneLine(containerSnowmanKeyboardLine + "2", keysLine2);

    // const keysLine3 = ["", "Z", "X", "C", "V", "B", "N", "M", "", "", "", ""];
    // createKeyboardButtonsForOneLine(containerSnowmanKeyboardLine + "3", 12, keysLine3);
    // createKeyboardButtonsForOneLine(containerSnowmanKeyboardLine + "3", keysLine3);

    // const keysLine4 = ["", "", "", "NEW GAME", "", "", "", ""];
    // createKeyboardButtonsForOneLine(containerSnowmanKeyboardLine + "4", 8, keysLine4);
    // createKeyboardButtonsForOneLine(containerSnowmanKeyboardLine + "4", keysLine4);
}

function createKeyboardButtons(){
    createKeyboardLines();
    createKeyboardButtonsForLines();
}
