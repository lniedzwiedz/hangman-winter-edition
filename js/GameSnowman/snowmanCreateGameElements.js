createSnowmanFigure("containerSnowmanFigureAction", "gameSnowman");

function createKeyboardButton(elementId, keysNumber, keysLine) {

    let line = document.getElementById(elementId)
    let rowStart = 2;
    let columntStart = 2;
    let rowEnd = 3;
    let columntEnd = 3;

    for (let i = 0; i < keysNumber; i++) {

        var newButton = document.createElement("button");
        document.getElementById(elementId).append(newButton);
        newButton.style.display = "grid";
        // newButton.style.backgroundColor = "black";
        newButton.style.gridRow = rowStart;
        newButton.style.gridColumn = columntStart;
        newButton.style.gridRowEnd = rowEnd;
        newButton.style.gridColumnEnd = columntEnd;
        newButton.style.gridTemplateRows = "1fr";
        newButton.style.gridTemplateColumns = "1fr";

        if (keysLine[i] !== "") {
            newButton.value = keysLine[i];
            newButton.setAttribute("onclick", "playGameSnowmanBuild(this.id)")
        }

        newButton.innerHTML += keysLine[i];
        newButton.setAttribute("id", "keyboard-" + keysLine[i]);
        newButton.classList.add("snowmanKeyboardButtons");
        // newButton.setAttribute("onclick", "playGameSnowmanBuild(this.id)")
        // newButton.addEventListener("onclick", playGameSnowmanBuild());

        columntStart += 3;
        columntEnd += 3;

    }

}

function createKeyboardButtons() {
    const keysLine1 = ["", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "", "", ""];
    createKeyboardButton("containerSnowmanKeyboard-line-1", 14, keysLine1);

    const keysLine2 = ["", "A", "S", "D", "F", "G", "H", "I", "J", "K", "L", "", "", ""];
    createKeyboardButton("containerSnowmanKeyboard-line-2", 13, keysLine2);

    const keysLine3 = ["", "Z", "X", "C", "V", "B", "N", "M", "", "", "", ""];
    createKeyboardButton("containerSnowmanKeyboard-line-3", 12, keysLine3);

    const keysLine4 = ["", "", "", "NEW GAME", "", "", "", ""];
    createKeyboardButton("containerSnowmanKeyboard-line-4", 8, keysLine4);
}

createKeyboardButtons();

// // create buttons for word

// function createContainersForDescription(elementId) {
//
//     // const word = "JAVA";
//
//     let parentElement = document.getElementById(elementId)
//
//     let rowStart = 2;
//     let columntStart = 2;
//     let rowEnd = 2;
//     let columntEnd = 3;
//
//     parentElement.style.display = "grid";
//     parentElement.style.backgroundColor = "black";
//     parentElement.style.gridRow = rowStart;
//     parentElement.style.gridColumn = columntStart;
//     parentElement.style.gridRowEnd = rowEnd;
//     parentElement.style.gridColumnEnd = columntEnd;
//     parentElement.style.gridTemplateRows = "1fr repeat(3, 8fr) 1fr";
//     parentElement.style.gridTemplateColumns = "1fr 80fr 1fr";
//
// }


// // createContainersForDescription("containerGameSnowmanWordToDiscover");
// createContainersForWord("containerGameSnowmanWordToDiscover", "JAVA");