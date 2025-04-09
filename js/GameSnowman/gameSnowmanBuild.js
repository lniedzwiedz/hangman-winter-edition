const maxContainerDivNumberToDisplay = 17;

let word;
let wordChar;
let wordCharsWithoutDuplicate;

// 1/2/3/4 - hat
// 5/6 - head
// 14/15 - left - hand
// 16/17 - right - hand

const indexGroups1 = [
    [12, 11], // cut 6 -> 2
    [10, 9], // cut 4 -> 2
    [8, 7, 6], // cut 1 -> 3 ---------------- 1
    [5, 4], // cut 7 -> 9
    [13, 14], // cut 3 -> 2 -----------------4
    // [1, 2, 3, 4], // cut 5 -> 4
    [3, 2, 1, 0], // cut 5 -> 4
    [15, 16] // cut 2 -> 2 -------------  6
];

const indexGroups2 = [
    [12, 11, 10, 9, 8, 7, 6],
    [5, 4, 13, 15],
    [16, 14, 3, 2, 1, 0],
];

let indexGroups;

let cutDirection; // number index = indexGroups
let cutDirection2;
let animationMaxNumber;
let countedCorrectShots;
let countedWrongShots;
let maxWrongShots;

let countedAnimationElements;
let gameLives;
let gameLivesChars;

function playGameSnowmanBuildConfiguration() {
    word = getWord();
    wordChar = getCharsNumber(word);
    wordCharsWithoutDuplicate = getCharsNumberWithoutDuplicate();

    cutDirection = [2, 6, 4, 1, 5, 0, 3]; // number index = indexGroups
    cutDirection2 = [0, 2];
    animationMaxNumber = cutDirection.length;
    countedCorrectShots = 0;
    countedWrongShots = 0;
    countedAnimationElements = 0;
    maxWrongShots = animationMaxNumber;
    getAnimationIndexGroups();

    gameLives = "LIVES" + " " + maxWrongShots;
    gameLivesChars = getCharsNumber(gameLives);

    // createSnowmanFigure("containerSnowmanFigureAction", "gameSnowman");
    // createSnowmanFigure("containerSnowmanFigureAction");
    removeMainContainerForGameSnowman();
    createStartContainersForGameSnowman();
    // createMainContainerForGameSnowman()
    // createStartContainersForGameSnowmanAnimation();
    // createContainersForGameSnowmanFigureMessage("snowmanFigureStartGameElement-1-welcomeText", "?")
    // createStartContainersForGameSnowmanWord();
    // createStartContainersForGameSnowmanKeyboard();
    // createSnowmanFigure();
    // createContainerGameSnowmanWordElements();
    // createKeyboardButtons();


    randomNumber(); // remove

}

const fileWithWords = "JAVA, TEST, QWERTYU, TESTLONGXD, QWERTYUIOPASD, " +
    "TESTTEST, TESTTESZ, TESTTEQZ, TESTTQAZ, " +
    "TEST AL";

const words = fileWithWords.split(", ")

function randomNumber() {
    // let min = 0;
    // let max = words.length-1;
    // return Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.floor(Math.random() * words.length - 1) + 1;

}

function getWord() {
    // word max length 17 -> animation has 17 pieces
    // const fileWithWords = "JAVA, TEST, QWERTYU, TESTLONGXD, QWERTYUIOPASD, " +
    //     "TESTTEST, TESTTESZ, TESTTEQZ, TESTTQAZ, " +
    //     "TEST AL";

    // add random index
    let index = randomNumber();
    console.log("  ");
    console.log("index = " + index);
    console.log("words = " + words[index]);
    // return words[index];
    return "JAVA";


}

// const word = getWord();
// let word;

function getCharsNumber(word) {
    return word.split("");
}

function getCharsNumberWithoutDuplicate() {

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

    return finalChar.split("");
}

// const wordChar = getCharsNumber(word);
// const wordCharsWithoutDuplicate = getCharsNumberWithoutDuplicate();
//
// let wordChar;
// let wordCharsWithoutDuplicate;


function checkCharacter(keyValue) {
    for (let i = 0; i < wordChar.length; i++) {
        if (keyValue === wordChar[i])
            return true;
    }
    return false;
}

function getKeyboardChar(clickedId) {
    let getKeyElementPressedByUSer = document.getElementById(clickedId);
    return getKeyElementPressedByUSer.getAttribute("value");
}

function disableKeyboardButton(clickedId) {
    let getKeyElementPressedByUSer = document.getElementById(clickedId);
    getKeyElementPressedByUSer.removeAttribute("onclick");
}

function disableKeyboardButtons() {
    let keys = document.getElementsByClassName("snowmanKeyboardButtons");

    for (let i = 0; i < keys.length; i++) {
        keys[i].removeAttribute("onclick");
    }

}


function changeKeyboardButtonNewGameWhenGameOver() {
    let element = document.getElementById("keyboard-NEW GAME");
    element.className += " snowmanKeyboardButtonNewGameGameOver";
    element.setAttribute("onclick", "playGameSnowmanBuildNewGame(this.id)");
}

function changeKeyboardButtonNewGameWhenStartNewGame() {
    let element = document.getElementById("keyboard-NEW GAME");
    element.classList.remove("snowmanKeyboardButtonNewGameGameOver");
}


function changeKeyboardButtonsGameOver() {
    disableKeyboardButtons();
    changeKeyboardButtonNewGameWhenGameOver();
}

function changeDiscoveredCharVisibility(charToShow) {
    for (let i = 0; i < wordChar.length; i++) {
        if (charToShow === wordChar[i]) {
            document.getElementById("wordChar-" + i).innerHTML = charToShow;
        }
    }
}

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

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

function playGameSnowmanBuild(clickedId) {


    let keyValue = getKeyboardChar(clickedId);
    // console.log("clickedId = " + clickedId );

    let isCharExist = checkCharacter(keyValue);

    // console.log(" cutDirection.length = " + cutDirection.length);

    if (isCharExist) {





        countedCorrectShots += 1;

        if(countedCorrectShots === 1){
            removeContainerSnowmanFigureMessageActionsWelcomeText();
            createSnowmanFigure();
            setTimeout(function(){
                addShapeSnowmanFigureElements();
            },1000);
        }


        addShapeSnowmanFigureElements();
        changeDiscoveredCharVisibility(keyValue);
        disableKeyboardButton(clickedId);

        if (countedCorrectShots >= wordCharsWithoutDuplicate.length) {
            setGameOverTextWinner();
            changeKeyboardButtonsGameOver();
            setColorForSnowman();
            // changeColourSnowmanFigureElements()
            console.log("YOU WIN !!!");
            console.log("GO countedWrongShots = " + countedWrongShots);
        }


        // animationPartToDisplay -= 1;
    } else {

        if (countedWrongShots < maxWrongShots) {
            console.log("countedWrongShots = " + countedWrongShots);
            changeLivesNumberVisible();
            countedWrongShots += 1;
        }

        if (countedWrongShots === maxWrongShots) {
            // else{
            // removeContainerSnowmanFigureMessage();
            // createContainersForGameOver()
            // removeContainerSnowmanFigureMessageActionsWelcomeText();
            // setAnimationSnowmanFigureElementsShapeRemoveColor();
            createContainersForGameSnowmanFigureMessageGameOver();
            
            setGameOverTextLoser();
            changeKeyboardButtonsGameOver();
            console.log("GAME OVER");
            console.log("GO countedWrongShots = " + countedWrongShots);
            countedWrongShots += 77;
        }
    }


}

// let countedAnimationElements = 0;
// let countedAnimationElements;

function addShapeSnowmanFigureElements() {

    let tempChangeColor = "#A05880";
    let elementIdPartialText = "snowmanFigureElementAction-";

    let indexGroup = indexGroups[countedAnimationElements];

    for (let i = 0; i < indexGroup.length; i++) {
        let index = indexGroup[i];

        let element = document.getElementById("snowmanFigureElementAction-"+index.toString());
        element.className += " snowmanFigureElementActionAddShapeColor ";

        if(index < 4){

            element.className += " snowmanFigureElementAction-"+index+"-hatElementInitialPositionForShape";
        }

        if(index === 4){
            let eyes = document.getElementsByClassName("snowmanFigureElementEyes ");

            for (let e = 0; e < eyes.length; e++) {
                eyes[e].className += " snowmanFigureElementActionAddShapeColor ";
            }
        }

        if(index === 5){
            let smile = document.getElementById("snowmanFigureElementSmile");
            smile.className += "snowmanFigureElementActionAddShapeColor snowmanFigureElementActionAddShapeSmile";
        }

        if (index > 5 && index < 12) {
            let button = document.getElementById("snowmanFigureElementButtonNo-"+index.toString());
            button.className += " snowmanFigureElementActionAddShapeColor snowmanFigureElementActionAddShapeButton";
        }

        if (index > 12 && index < 17) {
            element.className = "snowmanFigureElementAction-"+index+"-handInitialPositionForShape ";
            element.className += "snowmanFigureElementActionAddShapeColor ";
            element.className += "snowmanFigureElementActionAddShapeHands";
        }

    }
    countedAnimationElements += 1;

}

function changeLivesNumberVisible() {
    let tempChangeColor = "#292929";
    let elem = document.getElementById("gameLive-" + countedWrongShots);
    elem.style.backgroundColor = tempChangeColor;

    let elemEnd = document.getElementById("gameLive-" + (gameLives.length - 1));
    elemEnd.innerHTML = (gameLives.length - 1) - countedWrongShots;


}


// create buttons for word

function createNewDiv(parentId, newChildId) {
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
    // parentElement.style.gridTemplateRows = " repeat(1, 40fr 100fr 40fr) ";
    // parentElement.style.gridTemplateRows = " repeat(1, 60fr 100fr 20fr) ";
    parentElement.style.gridTemplateRows = " repeat(1, 70fr 100fr 10fr) ";

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
            // newDiv.style.backgroundColor = "darkslategrey";
            newDiv.style.backgroundColor = "#00000";
        } else {
            // newDiv.style.backgroundColor = "orange";
            newDiv.classList.add("gameSnowmanWordElementToDiscover");
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

// let gameLives = "LIVES" + " " + maxWrongShots; // right now the same number is for the lives and animation
// let gameLivesChars = getCharsNumber(gameLives);


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
    // parentElement.style.gridTemplateRows = " repeat(1, 60fr 30fr 10fr) ";
    // parentElement.style.gridTemplateRows = " repeat(1, 40fr 50fr 10fr) ";
    parentElement.style.gridTemplateRows = " repeat(1, 50fr 40fr 10fr) ";
    parentElement.style.gridTemplateColumns = " repeat(" + maxWrongShots + ", 5fr 100fr 5fr)";

    let rowChildStart = 2;
    let columnChildStart = 2;
    let rowChildEnd = 3;
    let columnChildEnd = 3;

    for (let i = 0; i < maxWrongShots; i++) {

        let newDiv = document.createElement("div");
        parentElement.append(newDiv);
        newDiv.style.display = "grid";

        // if (gameLives.substring(i, i + 1) === " ") {
        //     newDiv.style.backgroundColor = "darkslategrey";
        // } else {
        //     // newDiv.style.backgroundColor = "orange";
        //     newDiv.classList.add("gameSnowmanLives");
        // }

        newDiv.classList.add("gameSnowmanLives");

        if (i === maxWrongShots - 1) {
            newDiv.classList.add("gameSnowmanLivesNumber");
        }

        newDiv.style.gridRow = rowChildStart;
        newDiv.style.gridColumn = columnChildStart;
        newDiv.style.gridRowEnd = rowChildEnd;
        newDiv.style.gridColumnEnd = columnChildEnd;
        newDiv.style.gridTemplateRows = "1fr";
        newDiv.style.gridTemplateColumns = "1fr";
        newDiv.innerHTML += gameLivesChars[i];
        newDiv.setAttribute("id", "gameLive-" + i);

        columnChildStart += 3;
        columnChildEnd += 3;

    }
}

const containerGameSnowmanDescription = "containerGameSnowmanDescription";

const gameSnowmanWordElementTextBuild = "gameSnowmanWordElementTextBuild";
// const gameSnowmanDescriptionTextBuild = "Build a snowman by discovering the colour. " +
//     "Each guessed letter is one part of the snowman." +
//     "When you win, the snowman will change colour.";
//
// const gameSnowmanDescriptionTextBuild = "Build snowman discover colour " +
//     "when you win, the snowman will change colour";
//
// const gameSnowmanDescriptionTextBuild = ["Build snowman!", "discover colour", "when you win, the snowman will change colour"];
// const gameSnowmanDescriptionTextBuild = ["BUILD SNOWMAN", "discover colour", "when you win, the snowman will change colour"];
// const gameSnowmanDescriptionTextBuild = ["BUILD SNOWMAN", "discover colour name", "WIN GAME", "AND", "snowman will change colour"];
const gameSnowmanDescriptionTextBuild = ["BUILD SNOWMAN", "discover colour name", "WIN GAME", "&", "snowman will change colour"];

const gameSnowmanDescriptionTextGameOverLoser = "GAME OVER";
const gameSnowmanDescriptionTextGameOverLoserGiveHope = "You did well!";
const gameSnowmanDescriptionTextGameOverWinner = "YOU WIN";
const gameSnowmanDescriptionTextGameOverWinnerCongratulations = "Congratulations!";

const gameSnowmanDescription = "gameSnowmanDescription";

function createContainersForGameDescription() {

    createNewDiv(containerGameSnowmanWordElements, containerGameSnowmanDescription);
    let parentElement = document.getElementById(containerGameSnowmanDescription)

    // let gameKind = "build";

    let rowStart = 2;
    let columnStart = 2;
    let rowEnd = 2;
    let columnEnd = 3;

    parentElement.style.display = "grid";
    // parentElement.style.backgroundColor = "cadetblue";
    parentElement.style.gridRow = rowStart;
    parentElement.style.gridColumn = columnStart;
    parentElement.style.gridRowEnd = rowEnd;
    parentElement.style.gridColumnEnd = columnEnd;

    parentElement.style.gridTemplateRows = " repeat(1, 0.00001fr 100fr  0.00001fr) ";
    parentElement.style.gridTemplateColumns = "0.00001fr 100fr 0.00001fr";

    let rowChildStart = 2;
    let columnChildStart = 2;
    let rowChildEnd = 2;
    let columnChildEnd = 3;


    let newDiv = document.createElement("div");
    // document.getElementById(containerGameSnowmanDescription).append(newDiv);
    parentElement.append(newDiv);
    newDiv.style.display = "grid";

    // newDiv.style.backgroundColor = "darkslategrey";


    newDiv.style.gridRow = rowChildStart;
    newDiv.style.gridColumn = columnChildStart;
    newDiv.style.gridRowEnd = rowChildEnd;
    newDiv.style.gridColumnEnd = columnChildEnd;
    newDiv.style.gridTemplateRows = "1fr";
    newDiv.style.gridTemplateColumns = "1fr";
    // newDiv.innerHTML = gameSnowmanDescriptionTextBuild;

    // newDiv.style.color = "#5c3243";

    /*color: #5c3243;*/
    /*color: #ae7498;*/
    /*color: #e76e9e;*/
    /*color: #fc86b5;*/
    /*color: #ec7ba8;*/
    // color: #d682a4;
    // color: #e26899;
    // color: #ac4a71;

    // newDiv.style.color = "#ac4a71";
    // newDiv.style.color = "#bf889b";
    // newDiv.style.fontWeight = "200";
    // newDiv.classList.add("gameSnowmanWordElementTextBuild");
    // newDiv.classList.add(gameSnowmanWordElementTextBuild);

    // //.
    // // newDiv.value = keysLine[i];
    // // newDiv.innerHTML += keysLine[i];
    // // newDiv.classList.add("snowmanKeyboard")

    // newDiv.setAttribute("id", "gameSnowmanDescription-" + gameKind);
    newDiv.setAttribute("id", gameSnowmanDescription);

    for (let i = 0; i < gameSnowmanDescriptionTextBuild.length; i++) {

        let newP = document.createElement("p");
        // document.getElementById(containerGameSnowmanDescription).append(newDiv);
        newDiv.append(newP);
        newP.innerHTML = gameSnowmanDescriptionTextBuild[i];

        // newP.classList.add(gameSnowmanWordElementTextBuild+"-p"+i)
        newP.setAttribute("id", gameSnowmanWordElementTextBuild + "-p" + i)
        newP.classList.add(gameSnowmanWordElementTextBuild)
    }

}

function createContainerGameSnowmanWordElements() {
    createContainersForWord();
    createContainersForLives();
    createContainersForGameDescription();
}

function removeElementsById(elementId) {
    let element = document.getElementById(elementId);
    if(element != null){
        element.remove();
    }
}

function removeContainerGameSnowmanWordElements() {
    removeElementsById(containerGameSnowmanDescription);
    removeElementsById(containerGameSnowmanWordToDiscover);
    removeElementsById(containerGameSnowmanLives);
}

function removeContainerSnowmanKeyboardLines() {

    for (let i = 1; i < 5; i++) {
        removeElementsById("containerSnowmanKeyboard-line-" + i);
    }

}

function removeContainerSnowmanFigureElementsGameSnowman() {

    removeElementsById("containerSnowmanFigureElements-gameSnowman");
}


const containerGameSnowmanGameOver = "containerGameSnowmanGameOver";
const containerGameSnowmanGameOverDescription = "containerGameSnowmanGameOverDescription";

function setGameOverTextColorName(){
    let element = document.getElementById(gameSnowmanWordElementTextBuild + "-p1");
    element.innerHTML = "color: " + word;
}

function setGameOverEndText(textEnd){
    let element = document.getElementById(gameSnowmanWordElementTextBuild + "-p4");
    element.innerHTML = textEnd;
}

function setGameOverTextGameResult(textIsWin){
    let element = document.getElementById(gameSnowmanWordElementTextBuild + "-p2");
    element.innerHTML = textIsWin;
}

function setGameOverTextLoser() {

    setGameOverTextColorName()
    setGameOverTextGameResult(gameSnowmanDescriptionTextGameOverLoser);
    setGameOverEndText(gameSnowmanDescriptionTextGameOverLoserGiveHope);

}

function setGameOverTextWinner() {

    setGameOverTextColorName()
    setGameOverTextGameResult(gameSnowmanDescriptionTextGameOverWinner);
    setGameOverEndText(gameSnowmanDescriptionTextGameOverWinnerCongratulations);
}


let rootVariables = document.querySelector(":root");
let colorTest = "antiquewhite";
// let colorTest = "green";

function setAnimationAfterWinSnowmanFigureElementsSnowballs() {

    rootVariables.style.setProperty("--snowmanFigureColor", colorTest);

    for (let i = 0; i <= 16; i++) {

        let element = document.getElementById("snowmanFigureElementAction-"+i.toString());

        if(i >= 4) {
            element.classList.add("snowmanFigureElementActionFinalSnowballs");
        }

        if(i < 4){
            element.classList.add("snowmanFigureElementAction-"+i+"-setAnimationHatFinalColor");
        }

        if(i === 4){

            let eyes = document.getElementsByClassName("snowmanFigureElementEyes ");

            for (let e = 0; e < eyes.length; e++) {
                eyes[e].classList.remove("snowmanFigureElementActionAddShapeColor");
                eyes[e].classList.add("snowmanFigureElementActionFinalEyes");
            }
        }

        if(i === 5){
            let smile = document.getElementById("snowmanFigureElementSmile");
            // smile.classList.add("snowmanFigureElementActionAddShape snowmanFigureElementActionAddShapeSmile");
            smile.classList.remove("snowmanFigureElementActionAddShapeSmile");
            smile.classList.remove("snowmanFigureElementActionAddShapeColor");
            smile.classList.add("snowmanFigureElementActionFinalSmile");
        }

        if (i > 5 && i < 12) {

            let button = document.getElementById("snowmanFigureElementButtonNo-"+i.toString());
            button.classList.remove("snowmanFigureElementActionAddShapeButton");
            button.classList.remove("snowmanFigureElementActionAddShapeColor");
            button.classList.add("snowmanFigureElementButtonFinal");
        }

        if (i > 12 && i <= 16) {
            element.classList.remove("snowmanFigureElementActionAddShapeHands");
        }
    }
}

function playGameSnowmanBuildNewGame() {
    // window.location.reload(); //-> fast pass

    // removeContainerSnowmanFigureElementsGameSnowman();
    // removeContainerGameSnowmanWordElements();
    // removeContainerSnowmanKeyboardLines();

    playGameSnowmanBuildConfiguration();


}


function setAnimationSnowmanFigureElementsShapeRemoveColor() {

    rootVariables.style.setProperty("--snowmanFigureColor", colorTest);

    for (let i = 0; i <= 16; i++) {

        let element = document.getElementById("snowmanFigureElementAction-"+i.toString());

        if(i >= 0 || (i > 12 && i <= 16)) {
            element.classList.add("snowmanFigureElementActionShapeRemoveColor");
        }

        if(i === 4){
            let eyes = document.getElementsByClassName("snowmanFigureElementEyes ");
            for (let e = 0; e < eyes.length; e++) {
                eyes[e].classList.add("snowmanFigureElementActionShapeRemoveColor");
            }
        }

        if(i === 5){
            let smile = document.getElementById("snowmanFigureElementSmile");
            smile.classList.add("snowmanFigureElementActionShapeRemoveColor");
        }

        if (i > 5 && i < 12) {
            let button = document.getElementById("snowmanFigureElementButtonNo-"+i.toString());
            button.classList.add("snowmanFigureElementActionShapeRemoveColor");
        }
    }

}

// function setTimeoutAnimationForHands(element, i){
//
//      setTimeout(function(){
//          element.classList.add("snowmanFigureElementActionFinalSnowballsColor")
//          element.classList.add("snowmanFigureElementAction-"+i)
//      }, 8000);
// }
//
// function setTimeoutAnimationForSetFinalColorForSnowballs(element, i){
//
//     setTimeout(function(){
//         rootVariables.style.setProperty("--snowmanFigureColor", colorTest);
//         element.classList.add("snowmanFigureElementActionFinalSnowballs");
//     }, 4000);
// }

function setAnimationInitialPositionsOfElementsAfterWinSnowmanFigureElementsHandsAndHat(){

    for (let i = 12; i <= 16; i++) {
        let element = document.getElementById("snowmanFigureElementAction-"+i.toString());
        if(element != null){
            element.classList.remove("snowmanFigureElementActionAddShapeColor");
            element.classList.remove("snowmanFigureElementActionShapeRemoveColor");
            element.classList.add("snowmanFigureElementAction-"+i+"-handInitialPositionForAnimation");
        }

    }

    for (let i = 0; i <= 3; i++) {
        let element = document.getElementById("snowmanFigureElementAction-" + i.toString());
        if (element != null) {
            element.classList.remove("snowmanFigureElementActionAddShapeColor");
            element.classList.remove("snowmanFigureElementActionShapeRemoveColor");
            // element.classList.remove("snowmanFigureElementAction-"+i+"-hatElementInitialPositionForShape");
            element.classList.add("snowmanFigureElementAction-" + i + "-hatElementInitialPositionForAnimation");
        }
    }
}


function setAnimationsAfterWinSnowmanFigureElementsHandsAndHat(){

    for (let i = 13; i <= 16; i++) {
        let element = document.getElementById("snowmanFigureElementAction-"+i.toString());
        if(element != null) {
            element.classList.remove("snowmanFigureElementActionFinalSnowballs");
            element.classList.add("snowmanFigureElementActionFinalSnowballsColor");
            element.classList.add("snowmanFigureElementAction-" + i + "");
        }
    }

    for (let i = 0; i <= 3; i++) {
        let element = document.getElementById("snowmanFigureElementAction-"+i.toString());
        if(element != null) {
            element.classList.remove("snowmanFigureElementAction-" + i + "-setAnimationHatFinalColor");
            element.classList.add("snowmanFigureElementAction-" + i + "-setHatFinalColor");
            element.classList.add("snowmanFigureElementAction-" + i);
        }
    }
}


function setColorForSnowman(){


    setTimeout(function(){
        setAnimationSnowmanFigureElementsShapeRemoveColor()
    }, 2000)

    setTimeout(function(){
        setAnimationInitialPositionsOfElementsAfterWinSnowmanFigureElementsHandsAndHat()
    }, 6000)

    setTimeout(function(){
        setAnimationAfterWinSnowmanFigureElementsSnowballs()
    }, 6000)


    setTimeout(function(){
        setAnimationsAfterWinSnowmanFigureElementsHandsAndHat()
    }, 9000)

}

function createNewP(parentId, newChildId) {
    let newDiv = document.createElement("p");
    let mainElem = document.getElementById(parentId);
    mainElem.append(newDiv);
    newDiv.setAttribute("id", newChildId);
}


function createMainContainerForGameSnowman(){

    let mainElement = document.getElementsByClassName("containerMain")[0];
    let newDiv = document.createElement("div");
    mainElement.append(newDiv);
    let elementId1 = "sectionGameSnowman";
    newDiv.setAttribute("id", elementId1);
    newDiv.classList.add("item-2")
    newDiv.classList.add("containerSectionGameSnowman")
}

function removeMainContainerForGameSnowman(){
    removeElementsById("sectionGameSnowman");
}


function createStartContainersForGameSnowmanAnimation(){
    let elementId1 = "sectionGameSnowman";
    let elementId2 = "containerGameSnowmanAnimation";
    let elementId3 = "containerGameSnowmanAnimationElements";

createNewDiv(elementId1, elementId2);
createNewDiv(elementId2, elementId3);

}

function createContainersForGameSnowmanFigureMessageWelcomeText(){

    let elementId3 = "containerGameSnowmanAnimationElements";
    let elementId4 = "containerSnowmanFigureMessage-1-welcomeText";
    let elementId5 = "snowmanFigureStartGameElement-1-welcomeText";
    let welcomeText = "?";
    createNewDiv(elementId3, elementId4);
    createNewP(elementId4, elementId5);
    document.getElementById(elementId5).innerHTML= welcomeText;
    document.getElementById(elementId5).classList.add("snowmanFigureStartGameElement-setAnimationToShowColor");

}

function createContainersForGameSnowmanFigureMessageGoodbyeText(){
    let elementId3 = "containerGameSnowmanAnimationElements";
    let elementId4 = "containerSnowmanFigureMessage-1-goodbyeText";
    let elementId5 = "snowmanFigureStartGameElement-1-goodbyeText";
    let welcomeText = "GAME\nOVER";
    createNewDiv(elementId3, elementId4);
    createNewP(elementId4, elementId5);
    document.getElementById(elementId5).innerHTML= welcomeText;
    document.getElementById(elementId5).classList.add("snowmanFigureStartGameElement-setAnimationToShowColor");

}

function createStartContainersForGameSnowmanWord(){
    let elementId1 = "sectionGameSnowman";
    let elementId2 = "containerGameSnowmanWord";
    let elementId3 = "containerGameSnowmanWordElements";

    createNewDiv(elementId1, elementId2);
    createNewDiv(elementId2, elementId3);
}

function createStartContainersForGameSnowmanKeyboard(){
    let elementId1 = "sectionGameSnowman";
    let elementId2 = "containerGameSnowmanKeyboard";
    let elementId3 = "containerGameSnowmanKeyboardElements";

    createNewDiv(elementId1, elementId2);
    createNewDiv(elementId2, elementId3);
}

function createStartContainersForGameSnowman(){
    createMainContainerForGameSnowman()
    createStartContainersForGameSnowmanAnimation();
    createContainersForGameSnowmanFigureMessageWelcomeText();
    createStartContainersForGameSnowmanWord();
    createStartContainersForGameSnowmanKeyboard();
    createContainerGameSnowmanWordElements();
    createKeyboardButtons();
}

function removeContainerSnowmanFigureMessageWelcomeText(){
    setTimeout(function(){
        removeElementsById("containerSnowmanFigureMessage-1-welcomeText")
    }, 3000);
}

function setAnimationGameSnowmanFigureMessageToRemoveText(){
    let elementId = "snowmanFigureStartGameElement-1-welcomeText";
    let element = document.getElementById(elementId);

    if(element != null){
    element.classList.remove("snowmanFigureStartGameElement-setAnimationToShowColor");
    element.classList.add("snowmanFigureStartGameElement-setAnimationToRemoveColor");
    }
    // document.getElementById(elementId).classList.remove("snowmanFigureStartGameElement-setAnimationToShowColor");
    // document.getElementById(elementId).classList.add("snowmanFigureStartGameElement-setAnimationToRemoveColor");
}

function removeContainerSnowmanFigureMessageActionsWelcomeText(){
    setAnimationGameSnowmanFigureMessageToRemoveText();
    removeContainerSnowmanFigureMessageWelcomeText();
}

function createContainersForGameSnowmanFigureMessageGameOver(){

    removeContainerSnowmanFigureMessageActionsWelcomeText();


    if(document.getElementById("containerSnowmanFigureElements") != null){
        setAnimationSnowmanFigureElementsShapeRemoveColor();
    }


    setTimeout(function(){
        createContainersForGameSnowmanFigureMessageGoodbyeText();
    }, 3000);

}





// createStartContainersForGameSnowman();

// createContainerGameSnowmanWordElements();

playGameSnowmanBuildConfiguration(); // onclick - temp
