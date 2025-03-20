function getWord() {
    // word max length 17 -> animation has 17 pieces
    const fileWithWords = "JAVA, TEST, QWERTYU, TESTLONGXD, QWERTYUIOPASD, " +
        "TESTTEST, TESTTESZ, TESTTEQZ, TESTTQAZ, " +
        "TEST AL";
    const words = fileWithWords.split(", ")
    // add random index
    return words[9];

}

const word = getWord();

function getCharsNumber(word) {
    return word.split("");
}

function getCharsNumberWithoutDuplicate() {

    // console.log("wordChar = " + wordChar);

    let temWord = word;
    let finalChar = temWord.substring(0, 1);

    for (let i = 1; i < word.length; i++) {

        let char = temWord.substring(i, i + 1);

        // console.log("char = " + char);
        if (char !== " ") {
            // console.log("2 char =" + char) + ".";
            if (!finalChar.includes(char)) {
                finalChar = finalChar + char;
            }
        }
    }

    console.log("finalChar = " + finalChar);
    return finalChar.split("");

}

const wordChar = getCharsNumber(word);
const wordCharsWithoutDuplicate = getCharsNumberWithoutDuplicate();


function checkCharacter(keyValue) {
    for (let i = 0; i < wordChar.length; i++) {
        if (keyValue === wordChar[i])
            return true;
    }
    return false;
}

function getKeyboardChar(clickedId) {
    // let keyIdPressedByUSer = (clickedId);
    let getKeyElementPressedByUSer = document.getElementById(clickedId);
    // let getKeyValuePressedByUSer = getKeyElementPressedByUSer.getAttribute("value");
    return getKeyElementPressedByUSer.getAttribute("value");

    // remove from button onclick="playGameSnowmanBuild(this.id) after clicked, change color, disable -> button
}

function disableKeyboardButton(clickedId){

    let getKeyElementPressedByUSer = document.getElementById(clickedId);
    getKeyElementPressedByUSer.removeAttribute("onclick");


}

function changeDiscoveredCharVisibility(charToShow) {
    for (let i = 0; i < wordChar.length; i++) {
        if (charToShow === wordChar[i]) {
            document.getElementById("wordChar-" + i).innerHTML = charToShow;
        }
    }
}

// 1/2/3/4 - hat
// 5/6 - head
// 14/15 - left - hand
// 16/17 - right - hand

const indexGroups1 = [
    [13, 12], // cut 6 -> 2
    [11, 10], // cut 4 -> 2
    [9, 8, 7], // cut 1 -> 3 ---------------- 1
    [6, 5], // cut 7 -> 9
    [14, 15], // cut 3 -> 2 -----------------4
    // [1, 2, 3, 4], // cut 5 -> 4
    [4, 3, 2, 1], // cut 5 -> 4
    [16, 17] // cut 2 -> 2 -------------  6
];

const indexGroups2 = [
    [13, 12, 11, 10, 9, 8, 7],
    [6, 5, 14, 16],
    [17, 15, 4, 3, 2, 1],
];

let indexGroups;

const maxContainerDivNumberToDisplay = 17;
let cutDirection = [2, 6, 4, 1, 5, 0, 3]; // number index = indexGroups
let cutDirection2 = [0, 2];
let animationMaxNumber = cutDirection.length;
let countedCorrectShots = 0;
let countedWrongShots = 0;
let maxWrongShots = animationMaxNumber;


// let wordLength = 13;  // can not be lower than 7 -> start animation length (let cutNumber)
// let charsNumber = wordChar.length;  // can not be lower than 7 -> start animation length (let cutNumber)
// let charsNumber = getCharsNumberWithoutDuplicate();

const animationMaxNumberToDisplay = function getAnimationMaxNumberToDisplay() {
    if (animationMaxNumber > wordCharsWithoutDuplicate.length) {
        return animationMaxNumber
    }
    return wordCharsWithoutDuplicate.length;
}


function getNewIndexGroups(tempCutIndexGroups) {
    let newIndexGroups = [];

    for (let i = 0; i < indexGroups.length; i++) {

        let finishCut = 0;

        for (let j = 0; j < tempCutIndexGroups.length; j++) {

            if (finishCut === 0) {

                if (cutDirection[j] === i) {
                    cutDirection[j] = 77;

                    for (let i = 0; i < tempCutIndexGroups[j].length; i++) {
                        newIndexGroups.push(tempCutIndexGroups[j][i])
                    }

                    finishCut += 100;
                } else {

                    if (j === tempCutIndexGroups.length - 1) {
                        newIndexGroups.push(indexGroups[i]);
                    }
                }

            }
        }
    }

    // indexGroups = newIndexGroups;
    return newIndexGroups;
}

function getAnimationIndexGroupWhenWordCharsNumberWithoutDuplicateIsLowerThanBaseCutDirectionNumber(cutNumber) {

    let tempCutIndexGroups = [[]];
    let indnexCut = 0;
    let count = 0;

    for (let i = 0; i < cutDirection.length; i++) {

        let tempMiddleIndexGroups = indexGroups[cutDirection[i]];
        let tempCutMiddleIndexGroups = [[]];


        if (count < cutNumber) {

            for (let j = 0; j < tempMiddleIndexGroups.length; j++) {


                if (count < cutNumber) {
                    // console.log("A indnexCut = " + indnexCut + " indnexCut + 2 = " + (indnexCut + 2))
                    // let index = tempMiddleIndexGroups.slice(indnexCut, indnexCut + 2);
                    let index = tempMiddleIndexGroups.slice(indnexCut, indnexCut + 2);
                    indnexCut += 2;
                    // console.log("A indnexCut = " + indnexCut);
                    tempCutMiddleIndexGroups[j] = index;
                    // console.log("A tempCutMiddleIndexGroups[j] = " + tempCutMiddleIndexGroups[j]);


                    count = count + 1;
                } else {

                    let index = tempMiddleIndexGroups.slice(j, tempMiddleIndexGroups.length);

                    tempCutMiddleIndexGroups[j] = index;
                    count = count + 100;
                    break;

                }

                console.log(tempCutIndexGroups[j]);
            }

            tempCutIndexGroups[i] = tempCutMiddleIndexGroups;
        }

    }

    return tempCutIndexGroups;
}

function getAnimationIndexGroupWhenWordCharsNumberWithoutDuplicateIsBiggerThanBaseCutDirectionNumber() {

    let cutNumber = wordCharsWithoutDuplicate.length - cutDirection.length;
    let count = 1;
    // let tempCutMiddleIndexGroups = [];
    // let tempStart = [];
    let tempCutIndexGroups = [[]];

    for (let i = 0; i < cutDirection.length; i++) {

        let tempMiddleIndexGroups = indexGroups[cutDirection[i]];
        let tempCutMiddleIndexGroups = [[]];

        if (tempMiddleIndexGroups.length >= 2) {
            cutNumber = cutNumber + 1;
        } else {

        }

        if (count < cutNumber) {

            for (let j = 0; j < tempMiddleIndexGroups.length; j++) {

                if (count < cutNumber) {
                    let index = tempMiddleIndexGroups.slice(j, j + 1);

                    tempCutMiddleIndexGroups[j] = index;
                    count = count + 1;
                } else {

                    let index = tempMiddleIndexGroups.slice(j, tempMiddleIndexGroups.length);

                    tempCutMiddleIndexGroups[j] = index;
                    count = count + 100;
                    break;

                }
            }

            tempCutIndexGroups[i] = tempCutMiddleIndexGroups;
        }
    }

    return tempCutIndexGroups;
}

function getAnimationIndexGroups() {

    if (wordCharsWithoutDuplicate.length < cutDirection.length) {

        indexGroups = indexGroups2;

        let cutNumber = wordCharsWithoutDuplicate.length - indexGroups.length;

        cutDirection = cutDirection2;

        if (cutNumber > 0 && cutNumber <= indexGroups.length) {

            let tempCutIndexGroups = getAnimationIndexGroupWhenWordCharsNumberWithoutDuplicateIsLowerThanBaseCutDirectionNumber(cutNumber);
            indexGroups = getNewIndexGroups(tempCutIndexGroups);
        }

    } else if (wordCharsWithoutDuplicate.length > cutDirection.length) {

        indexGroups = indexGroups1;
        let tempCutIndexGroups = getAnimationIndexGroupWhenWordCharsNumberWithoutDuplicateIsBiggerThanBaseCutDirectionNumber();

        indexGroups = getNewIndexGroups(tempCutIndexGroups);

    }
}

getAnimationIndexGroups(); // remove

function playGameSnowmanBuild(clickedId) {


    let keyValue = getKeyboardChar(clickedId);
    // console.log("clickedId = " + clickedId );

    let isCharExist = checkCharacter(keyValue);

    console.log(" cutDirection.length = " + cutDirection.length);

    if (isCharExist) {


        changeDiscoveredCharVisibility(keyValue);

        // console.log("animationPartToDisplay = " + animationPartToDisplay);
        // console.log("countedCorrectShots = " + countedCorrectShots);
        changeSnowmanElementsVisible();

        disableKeyboardButton(clickedId);

        countedCorrectShots += 1;

        if (countedCorrectShots >= wordCharsWithoutDuplicate.length) {
            createContainerGameOver();
            console.log("YOU WIN !!!");
            console.log("GO countedWrongShots = " + countedWrongShots);
        }

        // animationPartToDisplay -= 1;
    } else {
        console.log("countedWrongShots = " + countedWrongShots);
        changeLivesNumberVisible();
        countedWrongShots += 1;
        if (countedWrongShots >= maxWrongShots) {
            removeContainerGameSnowmanWordElements();
            createContainerGameOver();
            console.log("GAME OVER");
            console.log("GO countedWrongShots = " + countedWrongShots);
        }
    }


}

let countedAnimationElements = 0;

function changeSnowmanElementsVisible() {

    let tempChangeColor = "#A05880";

    // console.log("countedAnimationElements = " + countedAnimationElements);
    let indexGroup = indexGroups[countedAnimationElements];
    // console.log("indexGroups[countedAnimationElements] = " + indexGroups[countedAnimationElements]);

    for (let i = 0; i < indexGroup.length; i++) {
        let index = indexGroup[i];

        // console.log("index = " + index);

        // change to id, it is too long, element remove when subpage change
        let parent = document.getElementById("containerSnowmanFigureElements-gameSnowman");
        let child = parent.getElementsByClassName("containerSnowmanFigureElement-" + index);
        let grandChild = child[0].getElementsByClassName("snowmanFigureElementAction-" + index);
        grandChild[0].setAttribute("style", "background-color:" + tempChangeColor);


    }
    countedAnimationElements += 1;

}

function changeLivesNumberVisible() {
    let tempChangeColor = "#A05880";
    let elem = document.getElementById("gameLive-" + countedWrongShots);
    elem.style.backgroundColor = "green";

    let elemEnd = document.getElementById("gameLive-" + (gameLives.length - 1));
    elemEnd.innerHTML = (gameLives.length - 1) - countedWrongShots;


}


// create buttons for word

function createNewDiv(parentId, newChildId){
    let newDiv = document.createElement("div");
    let mainElem = document.getElementById(parentId);
    mainElem.append(newDiv);
    newDiv.setAttribute("id", newChildId);
}

const containerGameSnowmanWordElements = "containerGameSnowmanWordElements";
const containerGameSnowmanWordToDiscover = "containerGameSnowmanWordToDiscover";

function createContainersForWord() {

    createNewDiv(containerGameSnowmanWordElements, containerGameSnowmanWordToDiscover);
    let parentElement = document.getElementById(containerGameSnowmanWordToDiscover)

    let rowStart = 3;
    let columnStart = 2;
    let rowEnd = 4;
    let columnEnd = 3;

    parentElement.style.display = "grid";
    parentElement.style.backgroundColor = "black";
    parentElement.style.gridRow = rowStart;
    parentElement.style.gridColumn = columnStart;
    parentElement.style.gridRowEnd = rowEnd;
    parentElement.style.gridColumnEnd = columnEnd;
    // parentElement.style.gridTemplateRows = "1fr repeat(3, 8fr) 1fr";
    // parentElement.style.gridTemplateRows = " repeat(1, 1fr 10fr 1fr) ";
    // static
    parentElement.style.gridTemplateRows = " repeat(1, 40fr 100fr 40fr) ";

    // static
    // parentElement.style.gridTemplateColumns = "1fr 80fr 1fr";
    // parentElement.style.gridTemplateColumns = " repeat(4, 1fr 10fr 1fr)";
    // dynamic
    parentElement.style.gridTemplateColumns = " repeat(" + word.length + ", 5fr 100fr 5fr)";


    let rowChildStart = 2;
    let columnChildStart = 2;
    let rowChildEnd = 2;
    let columnChildEnd = 3;


    for (let i = 0; i < word.length; i++) {

        let newDiv = document.createElement("div");
        parentElement.append(newDiv);
        newDiv.style.display = "grid";
        // newDiv.style.backgroundColor = "orange";

        if (wordChar[i] === " ") {
            newDiv.style.backgroundColor = "darkslategrey";
        } else {
            newDiv.style.backgroundColor = "orange";
        }

        newDiv.style.gridRow = rowChildStart;
        newDiv.style.gridColumn = columnChildStart;
        newDiv.style.gridRowEnd = rowChildEnd;
        newDiv.style.gridColumnEnd = columnChildEnd;
        newDiv.style.gridTemplateRows = "1fr";
        newDiv.style.gridTemplateColumns = "1fr";
        //
        // newDiv.value = keysLine[i];
        // newDiv.innerHTML += keysLine[i];
        // newDiv.classList.add("snowmanKeyboard")

        newDiv.setAttribute("id", "wordChar-" + i);

        columnChildStart += 3;
        columnChildEnd += 3;

    }
}

const gameLives = "Lives" + " " + maxWrongShots; // right now the same number is for the lives and animation
const gameLivesChars = getCharsNumber(gameLives);


const containerGameSnowmanLives = "containerGameSnowmanLives";

function createContainersForLives() {

    createNewDiv(containerGameSnowmanWordElements, containerGameSnowmanLives);

    let parentElement = document.getElementById(containerGameSnowmanLives)

    let rowStart = 4;
    let columnStart = 2;
    let rowEnd = 5;
    let columnEnd = 3;

    parentElement.style.display = "grid";
    parentElement.style.backgroundColor = "black";
    parentElement.style.gridRow = rowStart;
    parentElement.style.gridColumn = columnStart;
    parentElement.style.gridRowEnd = rowEnd;
    parentElement.style.gridColumnEnd = columnEnd;

    parentElement.style.gridTemplateRows = " repeat(1, 60fr 30fr 10fr) ";
    // parentElement.style.gridTemplateColumns = " repeat(" + gameLives.length + ", 5fr 100fr 5fr)";
    parentElement.style.gridTemplateColumns = " repeat(" + maxWrongShots + ", 5fr 100fr 5fr)";


    // let newAtr = document.createAttribute("class");
    // newAtr.value = "gameLives";
    // parentElement.setAttributeNode(newAtr);
    // let currentClass = document.querySelector(".gameLives");
    // currentClass.style.display = "grid";
    // // parentElement.style.backgroundColor = "gray";
    // currentClass.style.backgroundColor = "black";
    // currentClass.style.gridRow = rowStart;
    // currentClass.style.gridColumn = columnStart;
    // currentClass.style.gridRowEnd = rowEnd;
    // currentClass.style.gridColumnEnd = columnEnd;
    //
    // currentClass.style.gridTemplateRows = " repeat(1, 60fr 30fr 10fr) ";
    // currentClass.style.gridTemplateColumns = " repeat(" + gameLives.length + ", 5fr 100fr 5fr)";


    let rowChildStart = 2;
    let columnChildStart = 2;
    let rowChildEnd = 3;
    let columnChildEnd = 3;


    for (let i = 0; i < maxWrongShots; i++) {

        let newDiv = document.createElement("div");
        parentElement.append(newDiv);
        newDiv.style.display = "grid";

        if (gameLives.substring(i, i + 1) === " ") {
            newDiv.style.backgroundColor = "darkslategrey";
        } else {
            newDiv.style.backgroundColor = "orange";
        }

        newDiv.style.gridRow = rowChildStart;
        newDiv.style.gridColumn = columnChildStart;
        newDiv.style.gridRowEnd = rowChildEnd;
        newDiv.style.gridColumnEnd = columnChildEnd;
        newDiv.style.gridTemplateRows = "1fr";
        newDiv.style.gridTemplateColumns = "1fr";
        newDiv.innerHTML += gameLivesChars[i];
        // //
        // // newDiv.value = keysLine[i];
        // // newDiv.innerHTML += keysLine[i];
        // // newDiv.classList.add("snowmanKeyboard")

        newDiv.setAttribute("id", "gameLive-" + i);


        // let newAtr = document.createAttribute("class");
        // newAtr.value = "gameLives1";
        // newDiv.setAttributeNode(newAtr);
        // let currentClass = document.querySelector(".gameLives1");
        // newDiv.style.display = "grid";
        // // newDiv.style.backgroundColor = "orange";
        //
        // if (gameLives.substring(i, i + 1) === " ") {
        //     newDiv.style.backgroundColor = "darkslategrey";
        // } else {
        //     newDiv.style.backgroundColor = "orange";
        // }
        //
        // newDiv.style.gridRow = rowChildStart;
        // newDiv.style.gridColumn = columnChildStart;
        // newDiv.style.gridRowEnd = rowChildEnd;
        // newDiv.style.gridColumnEnd = columnChildEnd;
        // newDiv.style.gridTemplateRows = "1fr";
        // newDiv.style.gridTemplateColumns = "1fr";
        // newDiv.innerHTML += gameLivesChars[i];

        columnChildStart += 3;
        columnChildEnd += 3;

    }
}

const containerGameSnowmanDescription = "containerGameSnowmanDescription";

function createContainersForGameDescription() {

    createNewDiv(containerGameSnowmanWordElements, containerGameSnowmanDescription);
    let parentElement = document.getElementById(containerGameSnowmanDescription)

    let gameKind = "build";

    let rowStart = 2;
    let columnStart = 2;
    let rowEnd = 2;
    let columnEnd = 3;

    parentElement.style.display = "grid";
    parentElement.style.backgroundColor = "cadetblue";
    parentElement.style.gridRow = rowStart;
    parentElement.style.gridColumn = columnStart;
    parentElement.style.gridRowEnd = rowEnd;
    parentElement.style.gridColumnEnd = columnEnd;

    parentElement.style.gridTemplateRows = " repeat(1, 5fr 100fr 5fr) ";
    parentElement.style.gridTemplateColumns = "5fr 100fr 5fr";

    let rowChildStart = 2;
    let columnChildStart = 2;
    let rowChildEnd = 2;
    let columnChildEnd = 3;


    let newDiv = document.createElement("div");
    // document.getElementById(containerGameSnowmanDescription).append(newDiv);
    parentElement.append(newDiv);
    newDiv.style.display = "grid";

    newDiv.style.backgroundColor = "darkslategrey";


    newDiv.style.gridRow = rowChildStart;
    newDiv.style.gridColumn = columnChildStart;
    newDiv.style.gridRowEnd = rowChildEnd;
    newDiv.style.gridColumnEnd = columnChildEnd;
    newDiv.style.gridTemplateRows = "1fr";
    newDiv.style.gridTemplateColumns = "1fr";
    newDiv.innerHTML = "Discover the word and the snowman will chane color.";

    // //
    // // newDiv.value = keysLine[i];
    // // newDiv.innerHTML += keysLine[i];
    // // newDiv.classList.add("snowmanKeyboard")

    newDiv.setAttribute("id", "gameSnowmanDescription-" + gameKind);

}

function createContainerGameSnowmanWordElements(){
    createContainersForWord();
    createContainersForLives();
    createContainersForGameDescription();
}

function removeElementsById(elementId){
    let description = document.getElementById(elementId);
    description.remove();
}

function removeContainerGameSnowmanWordElements(){
    removeElementsById(containerGameSnowmanDescription);
    removeElementsById(containerGameSnowmanWordToDiscover);
    removeElementsById(containerGameSnowmanLives);
}

const containerGameSnowmanGameOver = "containerGameSnowmanGameOver";
function createContainerGameOver(){

    createNewDiv(containerGameSnowmanWordElements, containerGameSnowmanGameOver);
    let parentElement = document.getElementById(containerGameSnowmanGameOver)

    let rowStart = 2;
    let columnStart = 2;
    let rowEnd = 5;
    let columnEnd = 3;

    parentElement.style.display = "grid";
    parentElement.style.backgroundColor = "cadetblue";
    parentElement.style.gridRow = rowStart;
    parentElement.style.gridColumn = columnStart;
    parentElement.style.gridRowEnd = rowEnd;
    parentElement.style.gridColumnEnd = columnEnd;

    parentElement.style.gridTemplateRows = "5fr 100fr 5fr";
    parentElement.style.gridTemplateColumns = "5fr 100fr 5fr"; // to split

    let rowChildStart = 2;
    let columnChildStart = 2;
    let rowChildEnd = 2;
    let columnChildEnd = 3;

    let newDiv = document.createElement("div");
    parentElement.append(newDiv);
    newDiv.style.display = "grid";
    newDiv.style.backgroundColor = "darkslategrey";
    newDiv.style.gridRow = rowChildStart;
    newDiv.style.gridColumn = columnChildStart;
    newDiv.style.gridRowEnd = rowChildEnd;
    newDiv.style.gridColumnEnd = columnChildEnd;
    newDiv.style.gridTemplateRows = "1fr";
    newDiv.style.gridTemplateColumns = "1fr";
    newDiv.innerHTML = "Game over. You did well."; // variable text game over and winner the same, but not the same

    newDiv.setAttribute("id", "containerGameSnowmanGameOverDescription");

    // create button new game

}

createContainerGameSnowmanWordElements();
