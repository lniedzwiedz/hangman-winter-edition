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
let cutDirection;
let cutDirection2;
let animationMaxNumber;
let countedCorrectShots;
let countedWrongShots;
let maxWrongShots;
let countedAnimationElements;
let gameLives;
// let gameLives = "LIVES " + maxWrongShots;
let gameLivesChars;

const fileWithWords = "JAVA, TEST, QWERTYU, TESTLONGXD, QWERTYUIOPASD, " +
    "TESTTEST, TESTTESZ, TESTTEQZ, TESTTQAZ, " +
    "TEST AL";



function setConfigurationForGameSnowmanBuild() {
    word = getWord();
    wordChar = getCharsNumber(word);
    // wordChar = getCharsNumber();
    wordCharsWithoutDuplicate = getCharsNumberWithoutDuplicate();
    cutDirection = [2, 6, 4, 1, 5, 0, 3]; // number index = indexGroups
    cutDirection2 = [0, 2];
    animationMaxNumber = cutDirection.length;
    countedCorrectShots = 0;
    countedWrongShots = 0;
    countedAnimationElements = 0;
    maxWrongShots = animationMaxNumber;
    getAnimationIndexGroups();
    gameLives = "LIVES " + maxWrongShots;
    gameLivesChars = getCharsNumber(gameLives);
    // removeMainContainerForGameSnowman();
    removeContainerMainSection();
    createStartContainersForGameSnowman();
    randomNumber();
}

const words = fileWithWords.split(", ")

function randomNumber() {
    return Math.floor(Math.random() * words.length - 1) + 1;
}

function getWord() {
    let index = randomNumber();
    console.log("  ");
    console.log("index = " + index);
    console.log("words = " + words[index]);
    // return words[index];
    return "JAVA";
    // return "QWERTYUIOPASDFGHJKL";
}

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

function checkCharacter(keyValue) {
    for (let i = 0; i < wordChar.length; i++) {
        if (keyValue === wordChar[i])
            return true;
    }
    return false;
}

function setDiscoveredChar(charToShow) {
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
    let isCharExist = checkCharacter(keyValue);

    if (isCharExist) {
        countedCorrectShots += 1;

        if (countedCorrectShots >= wordCharsWithoutDuplicate.length) {
            setGameOverTextWinner();
            changeKeyboardButtonsGameOver();
            disableKeyboardButton(clickedId);
            setDiscoveredChar(keyValue);
            setShapeSnowmanFigureElements();
            setColorForSnowman();
            console.log("YOU WIN !!!");
            // console.log("GO countedWrongShots = " + countedWrongShots);
        }else{
            if(countedCorrectShots === 1){
                removeContainerSnowmanFigureMessageActionsWelcomeText();
                createContainersSnowmanFigureMainElements();
                setTimeout(function(){

                    setShapeSnowmanFigureElements();
                },1000);
                setDiscoveredChar(keyValue);
                disableKeyboardButton(clickedId);
            }else{
                setShapeSnowmanFigureElements();
                setDiscoveredChar(keyValue);
                disableKeyboardButton(clickedId);
            }
        }
    } else {

        changeLivesNumberVisible();

        if (countedWrongShots < maxWrongShots -1) {
            // console.log("maxWrongShots = " + maxWrongShots);
            // console.log("countedWrongShots = " + countedWrongShots);
            countedWrongShots += 1;
        }
        else {
            createContainersForGameSnowmanFigureMessageGameOver();
            setGameOverTextLoser();
            changeKeyboardButtonsGameOver();
            console.log("GAME OVER");
            // console.log("GO countedWrongShots = " + countedWrongShots);
            countedWrongShots += 77;
        }
    }
}

function setShapeSnowmanFigureElements() {

    let tempChangeColor = "#A05880";

    let indexGroup = indexGroups[countedAnimationElements];

    for (let i = 0; i < indexGroup.length; i++) {
        let index = indexGroup[i];


        let element = document.getElementById(snowmanFigureElementAction+index.toString());
        // element.className += " snowmanFigureElementActionAddShapeColor ";
        // console.log("index < 4, index = " + index);
        if(index < 4){

            // console.log("index < 4, index = " + index);

            element.classList.add(snowmanFigureElementAction+index+hatElementInitialPositionForShape);
            element.classList.add(snowmanFigureElementActionAddShapeColor);
        }

        if(index === 4){
            // innerDiv.innerHTML = "O,O" eyes;
            // element.className += "snowmanFigureElementActionAddShapeColor";
            element.classList.add(snowmanFigureElementActionAddShapeColor);

            for (let j = 0; j < 2; j++) {
                let divEye = document.createElement('div');
                document.getElementById(snowmanFigureElementAction + index.toString()).append(divEye);
                divEye.classList.add(snowmanFigureElementEyes);
                divEye.classList.add(snowmanFigureElementActionAddShapeColor);
            }
        }

        if(index === 5){

            // innerDiv.innerHTML = "U" mouth;
            let divSmile = document.createElement('div');
            divSmile.setAttribute('id', snowmanFigureElementSmile);
            document.getElementById(snowmanFigureElementAction + index.toString()).append(divSmile);

            // element.className += " snowmanFigureElementActionAddShapeColor ";
            element.classList.add(snowmanFigureElementActionAddShapeColor);
            let smile = document.getElementById(snowmanFigureElementSmile);
            // smile.className += "snowmanFigureElementActionAddShapeColor snowmanFigureElementActionAddShapeSmile";
            // smile.className += snowmanFigureElementActionAddShapeColor;
            smile.classList.add(snowmanFigureElementActionAddShapeColor);
        }

        if (index > 5 && index < 12) {

            let divButtonBox = document.createElement('div');
            document.getElementById(snowmanFigureElementAction + index.toString()).append(divButtonBox);
            divButtonBox.setAttribute("id", containerSnowmanFigureElementButtonNo + index.toString())

            let divButton = document.createElement('div');
            // document.getElementById("containerSnowmanFigureElementButtonNo-" + i.toString()).append(divButton);
            let button = document.getElementById(containerSnowmanFigureElementButtonNo + index.toString());
            button.append(divButton);
            divButton.setAttribute("id", snowmanFigureElementButtonNo + index.toString())
            divButton.classList.add(snowmanFigureElementButton);
            divButton.classList.add(snowmanFigureElementActionAddShapeColor);
            divButton.classList.add(snowmanFigureElementActionAddShapeButton);

            // element.className += " snowmanFigureElementActionAddShapeColor ";
            element.classList.add(snowmanFigureElementActionAddShapeColor);

        }

        if (index > 12 && index < 17) {
            // element.className = snowmanFigureElementAction+index+"-handInitialPositionForShape ";
            // element.className += "snowmanFigureElementActionAddShapeColor ";
            // element.className += "snowmanFigureElementActionAddShapeHands";

            element.classList.add(snowmanFigureElementAction+index+handInitialPositionForShape);
            element.classList.add(snowmanFigureElementActionAddShapeColor);
            element.classList.add(snowmanFigureElementActionAddShapeHands);
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

// function createElementDiv(parentId, newChildId) {
//     let newDiv = document.createElement("div");
//     let mainElem = document.getElementById(parentId);
//     mainElem.append(newDiv);
//     newDiv.setAttribute("id", newChildId);
// }

function createContainersForWord() {

    createElementDiv(containerGameSnowmanWordElements, containerGameSnowmanWordToDiscover);
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
            newDiv.classList.add(gameSnowmanWordElementToDiscover);
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

gameLives = "" + "" + maxWrongShots; // right now the same number is for the lives and animation
// let gameLivesChars = getCharsNumber(gameLives);

function createContainersForLives() {

    // gameLivesChars = getCharsNumber(gameLives);

    createElementDiv(containerGameSnowmanWordElements, containerGameSnowmanLives);
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
        console.log("lives -> "+gameLivesChars[i]);
        newDiv.innerHTML += gameLivesChars[i];
        newDiv.setAttribute("id", "gameLive-" + i);

        columnChildStart += 3;
        columnChildEnd += 3;

    }
}

function setClassNameGameSnowman(elementId, suffixText) {
    let name = containerGameSnowmanDescription + "-" + suffixText;
    document.getElementById(elementId).classList.add(name);
}

function createContainersForGameDescription(gameName, gameSnowmanDescriptionText) {

    let containerGameSnowmanDescriptionSpecified = containerGameSnowmanDescription + gameName;
    let containerButtonFiled = containerGameSnowmanDescriptionSpecified + "-gameOn";
    createElementDiv(containerGameSnowmanWordElements, containerButtonFiled);
    setClassNameGameSnowman(containerButtonFiled, "gameOn");

    let containerDescription = containerGameSnowmanDescriptionSpecified + "-gameButtonText";
    createElementDiv(containerButtonFiled, containerDescription);
    setClassNameGameSnowman(containerDescription, "gameButtonText");

    for (let i = 0; i < gameSnowmanDescriptionText.length; i++) {

        let elementId = gameSnowmanWordElementText + gameName + "-" + i;
        createElementDiv(containerDescription, elementId);

        let elementClass = containerGameSnowmanWordElementText + "-" + i;
        setClassName(elementId, elementClass);

        let newP = document.createElement("p");
        document.getElementById(elementId).append(newP);
        newP.innerHTML = gameSnowmanDescriptionText[i];
        newP.classList.add(gameSnowmanWordElementText);
        newP.classList.add(gameSnowmanWordElementText + "-" + i);
    }

}

function createContainersForGameDescription1() {

    createElementDiv(containerGameSnowmanWordElements, containerGameSnowmanDescription);
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
    parentElement.append(newDiv);
    newDiv.style.display = "grid";

    newDiv.style.gridRow = rowChildStart;
    newDiv.style.gridColumn = columnChildStart;
    newDiv.style.gridRowEnd = rowChildEnd;
    newDiv.style.gridColumnEnd = columnChildEnd;
    newDiv.style.gridTemplateRows = "1fr";
    newDiv.style.gridTemplateColumns = "1fr";

    newDiv.setAttribute("id", gameSnowmanDescription);

    for (let i = 0; i < gameSnowmanDescriptionTextBuild.length; i++) {

        let newP = document.createElement("p");
        // document.getElementById(containerGameSnowmanDescription).append(newDiv);
        newDiv.append(newP);
        newP.innerHTML = gameSnowmanDescriptionTextBuild[i];

        newP.classList.add(gameSnowmanWordElementTextBuild+"-p"+i)
        // newP.setAttribute("id", gameSnowmanWordElementTextBuild + "-p" + i)
        newP.classList.add(gameSnowmanWordElementTextBuild)
    }

}

function createContainerGameSnowmanWordElements() {
    createContainersForGameDescription( gameNameSnowmanBuild, gameSnowmanDescriptionTextBuild);
    createContainersForWord();
    createContainersForLives();
}

function removeElementsById(elementId) {
    let element = document.getElementById(elementId);
    if(element != null){
        element.remove();
    }
}

// function removeContainerGameSnowmanWordElements() {
//     removeElementsById(containerGameSnowmanDescription);
//     removeElementsById(containerGameSnowmanWordToDiscover);
//     removeElementsById(containerGameSnowmanLives);
// }
//
// function removeContainerSnowmanKeyboardLines() {
//
//     for (let i = 1; i < 5; i++) {
//         removeElementsById("containerSnowmanKeyboard-line-" + i);
//     }
//
// }
//
// function removeContainerSnowmanFigureElementsGameSnowman() {
//
//     removeElementsById("containerSnowmanFigureElements-gameSnowman");
// }




function setGameOverTextColorName(){
    let text = "color: " + word;
    let cn = gameSnowmanWordElementText+"-1";
    setElementTextByClassName(cn, text);
}

function setGameOverEndText(textEnd){
    setElementTextByClassName(gameSnowmanWordElementText + "-4", textEnd);
}

function setGameOverTextGameResult(textIsWin){
    setElementTextByClassName(gameSnowmanWordElementText + "-2", textIsWin);
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

let colorTest = "antiquewhite";
// let colorTest = "green";

function setAnimationAfterWinSnowmanFigureElementsSnowballs() {

    // rootVariables.style.setProperty("--snowmanFigureColor", colorTest);
    rootVariables.style.setProperty(cssSnowmanFigureColor, colorTest);

    for (let i = 0; i <= 16; i++) {

        let element = document.getElementById(snowmanFigureElementAction+i.toString());

        if(i >= 4) {
            element.classList.add(snowmanFigureElementActionFinalSnowballs);
        }

        if(i < 4){
            element.classList.add(snowmanFigureElementAction+i+setAnimationHatFinalColor);
        }

        if(i === 4){

            let eyes = document.getElementsByClassName(snowmanFigureElementEyes);

            for (let e = 0; e < eyes.length; e++) {
                // eyes[e].classList.remove("snowmanFigureElementActionAddShapeColor");
                eyes[e].classList.remove(snowmanFigureElementActionAddShapeColor);
                eyes[e].classList.add(snowmanFigureElementActionFinalEyes);
            }
        }

        if(i === 5){
            let smile = document.getElementById(snowmanFigureElementSmile);
            // smile.classList.add("snowmanFigureElementActionAddShape snowmanFigureElementActionAddShapeSmile");
            smile.classList.remove(snowmanFigureElementActionAddShapeSmile);
            // smile.classList.remove("snowmanFigureElementActionAddShapeColor");
            smile.classList.remove(snowmanFigureElementActionAddShapeColor);
            smile.classList.add(snowmanFigureElementActionFinalSmile);
        }

        if (i > 5 && i < 12) {

            let button = document.getElementById(snowmanFigureElementButtonNo+i.toString());
            button.classList.remove(snowmanFigureElementActionAddShapeButton);
            // button.classList.remove("snowmanFigureElementActionAddShapeColor");
            button.classList.remove(snowmanFigureElementActionAddShapeColor);
            button.classList.add(snowmanFigureElementButtonFinal);
        }

        if (i > 12 && i <= 16) {
            element.classList.remove(snowmanFigureElementActionAddShapeHands);
        }
    }
}

function setAnimationSnowmanFigureElementsShapeRemoveColor() {
    // rootVariables.style.setProperty("--snowmanFigureColor", colorTest);
    rootVariables.style.setProperty(cssSnowmanFigureColor, colorTest);

    for (let i = 0; i <= 16; i++) {
        let element = document.getElementById(snowmanFigureElementAction+i.toString());

        if(element !=  null){
            if(i >= 0 || (i > 12 && i <= 16)) {
                element.classList.add(snowmanFigureElementActionShapeRemoveColor);
            }

            if(i === 4){
                let eyes = document.getElementsByClassName( snowmanFigureElementEyes);
                if(eyes !=  null){
                    for (let e = 0; e < eyes.length; e++) {
                        eyes[e].classList.add(snowmanFigureElementActionShapeRemoveColor);
                    }
                }
            }

            if(i === 5){
                let smile = document.getElementById(snowmanFigureElementSmile);
                if(smile !=  null){
                    smile.classList.add(snowmanFigureElementActionShapeRemoveColor);
                }
            }

            if (i > 5 && i < 12) {
                let button = document.getElementById(snowmanFigureElementButtonNo+i.toString());
                if(button !=  null){
                    button.classList.add(snowmanFigureElementActionShapeRemoveColor);
                }
            }
        }
    }
}

function setAnimationInitialPositionsOfElementsAfterWinSnowmanFigureElementsHandsAndHat(){

    for (let i = 12; i <= 16; i++) {
        let element = document.getElementById(snowmanFigureElementAction+i.toString());
        if(element != null){
            element.classList.remove(snowmanFigureElementActionAddShapeColor);
            element.classList.remove(snowmanFigureElementActionShapeRemoveColor);
            element.classList.add(snowmanFigureElementAction+i+handInitialPositionForAnimation);
        }
    }

    for (let i = 0; i <= 3; i++) {
        let element = document.getElementById(snowmanFigureElementAction + i.toString());
        if (element != null) {
            element.classList.remove(snowmanFigureElementActionAddShapeColor);
            element.classList.remove(snowmanFigureElementActionShapeRemoveColor);
            element.classList.add(snowmanFigureElementAction + i + hatElementInitialPositionForAnimation);
        }
    }
}

function setAnimationsAfterWinSnowmanFigureElementsHandsAndHat(){

    for (let i = 13; i <= 16; i++) {
        let element = document.getElementById(snowmanFigureElementAction+i.toString());
        if(element != null) {
            element.classList.remove(snowmanFigureElementActionFinalSnowballs);
            element.classList.add(snowmanFigureElementActionFinalSnowballsColor);
            element.classList.add(snowmanFigureElementAction + i + "");
        }
    }

    for (let i = 0; i <= 3; i++) {
        let element = document.getElementById(snowmanFigureElementAction+i.toString());
        if(element != null) {
            element.classList.remove(snowmanFigureElementAction + i + setAnimationHatFinalColor);
            element.classList.add(snowmanFigureElementAction + i + setHatFinalColor);
            element.classList.add(snowmanFigureElementAction + i);
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
    createElementDiv(containerMainSectionActions, containerMainSectionGameSnowman);
}

function removeMainContainerForGameSnowman(){
    removeElementsById(containerMainSectionGameSnowman);
}

function createStartContainersForGameSnowmanAnimation(){
    createElementDiv(containerMainSectionGameSnowman, containerGameSnowmanAnimation);
    createElementDiv(containerGameSnowmanAnimation, containerGameSnowmanAnimationElements);
}

function createContainersForGameSnowmanFigureMessageWelcomeText(){
    createElementDiv(containerGameSnowmanAnimationElements, containerSnowmanFigureMessage1welcomeText);
    createNewP(containerSnowmanFigureMessage1welcomeText, snowmanFigureStartGameElement1welcomeText);
    document.getElementById(snowmanFigureStartGameElement1welcomeText).innerHTML= welcomeText;
    document.getElementById(snowmanFigureStartGameElement1welcomeText).classList.add(snowmanFigureStartGameElementSetAnimationToShowColor);
}

function createContainersForGameSnowmanFigureMessageGoodbyeText(){
    createElementDiv(containerGameSnowmanAnimationElements, containerSnowmanFigureMessage1goodbyeText);
    createNewP(containerSnowmanFigureMessage1goodbyeText, snowmanFigureStartGameElement1goodbyeText);
    document.getElementById(snowmanFigureStartGameElement1goodbyeText).innerHTML= goodbyeText;
    document.getElementById(snowmanFigureStartGameElement1goodbyeText).classList.add(snowmanFigureStartGameElementSetAnimationToShowColor);
}

function createStartContainersForGameSnowmanWord(){
    createElementDiv(containerMainSectionGameSnowman, containerGameSnowmanWord);
    createElementDiv(containerGameSnowmanWord, containerGameSnowmanWordElements);
}

function createStartContainersForGameSnowmanKeyboard(){
    createElementDiv(containerMainSectionGameSnowman, containerGameSnowmanKeyboard);
    createElementDiv(containerGameSnowmanKeyboard, containerGameSnowmanKeyboardElements);
}

function createStartContainersForGameSnowman(){
    createMainContainerForGameSnowman();
    createStartContainersForGameSnowmanAnimation();
    createContainersForGameSnowmanFigureMessageWelcomeText();
    createStartContainersForGameSnowmanWord();
    createStartContainersForGameSnowmanKeyboard();
    createContainerGameSnowmanWordElements();
    createKeyboardButtons();
}

function removeContainerSnowmanFigureMessageWelcomeText(){
    setTimeout(function(){
        removeElementsById(containerSnowmanFigureMessage1welcomeText)
    }, 3000);
}

function setAnimationGameSnowmanFigureMessageToRemoveText(){
    let element = document.getElementById(snowmanFigureStartGameElement1welcomeText);

    if(element != null){
    element.classList.remove(snowmanFigureStartGameElementSetAnimationToShowColor);
    element.classList.add(snowmanFigureStartGameElementSetAnimationToRemoveColor);
    }
}

function removeContainerSnowmanFigureMessageActionsWelcomeText(){
    setAnimationGameSnowmanFigureMessageToRemoveText();
    removeContainerSnowmanFigureMessageWelcomeText();
}

function createContainersForGameSnowmanFigureMessageGameOver(){
    removeContainerSnowmanFigureMessageActionsWelcomeText();

    if(document.getElementById(containerSnowmanFigureElements) != null){
        setAnimationSnowmanFigureElementsShapeRemoveColor();
    }

    setTimeout(function(){
        createContainersForGameSnowmanFigureMessageGoodbyeText();
    }, 3000);

}

function createContainersSnowmanFigureMainElements(){

    createElementDiv(containerGameSnowmanAnimationElements, containerSnowmanFigureAction);

    let parentDiv = document.createElement('div');
    parentDiv.setAttribute('id', containerSnowmanFigureElements);
    document.getElementById(containerSnowmanFigureAction).append(parentDiv);

    for (let i = 0; i <= 16; i++) {

        // container element
        let innerDivContainer = document.createElement('div');
        innerDivContainer.setAttribute('id', containerSnowmanFigureElement + i.toString());
        document.getElementById(containerSnowmanFigureElements).append(innerDivContainer);

        // action
        let innerDiv = document.createElement("div");
        innerDiv.setAttribute("id", snowmanFigureElementAction + i.toString());
        let div1 = document.getElementById(containerSnowmanFigureElement + i.toString());
        div1.append(innerDiv);
    }

}



// createStartContainersForGameSnowman();

// createContainerGameSnowmanWordElements();

// setConfigurationForGameSnowmanBuild(); // onclick - temp
