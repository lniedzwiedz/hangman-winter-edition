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

// remove - more polite
const indexGroups3GameSnowmanDestroy = [
    [13, 14],
    [15, 16],
    [3, 2, 1, 0],
    [12, 11],
    [10, 9],
    [8, 7, 6],
    [5, 4]
];

// remove - from top
const indexGroups3GameSnowmanDestroy1 = [
    [3, 2, 1, 0],
    [13, 14],
    [15, 16],
    [5, 4],
    [8, 7, 6],
    [10, 9],
    [12, 11]
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
let gameLivesChars;

const fileWithWords = "NAVAJO WHITE, IVORY, BONE WHITE, ALABASTER, EGGSHELL, SEASHELL";
const fileWithWordsH = "#FFDEAD, #F5F5DC, #FFF8DC, #EDEADE, #F0EAD6, #FFF5EE";
const wordsH = fileWithWordsH.split(", ")
let winColorSnowman;

function setConfigurationForGameSnowmanBuild() {
    word = getWord();
    console.log("word: " + word);
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
    gameLives = "LIVES " + maxWrongShots;
    gameLivesChars = getCharsNumber(gameLives);
    removeContainerMainSection();

    createStartContainersGameSnowman();
}

function setConfigurationForGameSnowmanDestroy() {
    word = getWord();
    console.log("word: " + word);
    wordChar = getCharsNumber(word);
    wordCharsWithoutDuplicate = getCharsNumberWithoutDuplicate();
    cutDirection = [2, 6, 4, 1, 5, 0, 3]; // number index = indexGroups
    cutDirection2 = [0, 2];
    animationMaxNumber = cutDirection.length;
    countedCorrectShots = 0;
    countedWrongShots = 0;
    countedAnimationElements = 0;
    maxWrongShots = animationMaxNumber;
    gameLives = "LIVES " + maxWrongShots;
    gameLivesChars = getCharsNumber(gameLives);
    removeContainerMainSection();
    indexGroups = indexGroups3GameSnowmanDestroy;
    createStartContainersGameSnowmanDestroy();
}

const words = fileWithWords.split(", ")

function randomNumber() {
    return Math.floor((Math.random() * (words.length)));
}

function getWord() {
    let index = randomNumber();
    winColorSnowman = wordsH[index];
    return words[index];
}

function getCharsNumber(word) {
    return word.split("");
}

function getCharsNumberWithoutDuplicate() {
    let temWord = word;
    let finalChar = temWord.substring(0, 1);

    for (let i = 1; i < word.length; i++) {
        let char = temWord.substring(i, i + 1);

        if (char !== " ") {
            if (!finalChar.includes(char))
                finalChar = finalChar + char;
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

    // console.log("newIndexGroups " + newIndexGroups);
    // indexGroups = newIndexGroups;
    return newIndexGroups;
}

function getAnimationIndexGroupWhenWordCharsNumberWithoutDuplicateIsLowerThanBaseCutDirectionNumber(cutNumber) {
    // console.log("168");
    let tempCutIndexGroups = [[]];
    // let indnexCut = 0;
    let count = 0;

    // console.log("cutDirection.length " + cutDirection.length);
    // console.log("indexGroups.length " + indexGroups.length);

    for (let i = 0; i < cutDirection.length; i++) {

        let tempMiddleIndexGroups = indexGroups[cutDirection[i]];
        let tempCutMiddleIndexGroups = [[]];


        // if (count < cutNumber) {
        if (count < cutNumber) {

            for (let j = 0; j < tempMiddleIndexGroups.length; j++) {


                // if (count < cutNumber) {
                if (count < cutNumber) {

                    // let index = tempMiddleIndexGroups.slice(indnexCut, indnexCut + 2);
                    let index = tempMiddleIndexGroups.slice(j, j + 1);
                    // indnexCut += 2;
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

                // console.log(tempCutIndexGroups[j]);
            }

            tempCutIndexGroups[i] = tempCutMiddleIndexGroups;
        }

    }

    return tempCutIndexGroups;
}

function getAnimationIndexGroupWhenWordCharsNumberWithoutDuplicateIsBiggerThanBaseCutDirectionNumber() {


    // console.log("getAnimationIndexGroupWhenWordCharsNumberWithoutDuplicateIsBiggerThanBaseCutDirectionNumber");
    let cutNumber = wordCharsWithoutDuplicate.length - cutDirection.length;
    let wordCharsLength = wordCharsWithoutDuplicate.length;
    // let wordCharsLength = maxWrongShotsGameSnowmanToDestroy;
    // let cutNumber = wordCharsLength - cutDirection.length;
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

    let wordCharsWithoutDuplicateLength = wordCharsWithoutDuplicate.length;
    // let wordCharsLength = maxWrongShotsGameSnowmanToDestroy;
    // if (wordCharsWithoutDuplicate.length < cutDirection.length) {
    if (wordCharsWithoutDuplicateLength < cutDirection.length) {
        // console.log(" 1 wordCharsWithoutDuplicate.length " + wordCharsWithoutDuplicate.length + "   ?  "+cutDirection.length+"  wordCharsWithoutDuplicate.length"  );

        indexGroups = indexGroups2;

        // let cutNumber = wordCharsWithoutDuplicate.length - indexGroups.length;
        let cutNumber = wordCharsWithoutDuplicateLength - indexGroups.length;

        cutDirection = cutDirection2;

        if (cutNumber > 0 && cutNumber <= indexGroups.length) {

            let tempCutIndexGroups = getAnimationIndexGroupWhenWordCharsNumberWithoutDuplicateIsLowerThanBaseCutDirectionNumber(cutNumber);
            // let tempCutIndexGroups = getAnimationIndexGroupWhenWordCharsNumberWithoutDuplicateIsBiggerThanBaseCutDirectionNumber(cutNumber);
            // console.log("tempCutIndexGroups " + tempCutIndexGroups);
            indexGroups = getNewIndexGroups(tempCutIndexGroups);
        }

        // } else if (wordCharsWithoutDuplicate.length > cutDirection.length) {
    } else if (wordCharsWithoutDuplicateLength > cutDirection.length) {

        // console.log("2 wordCharsWithoutDuplicate.length " + wordCharsWithoutDuplicate.length + "   ?  "+cutDirection.length+"  wordCharsWithoutDuplicate.length"  );
        indexGroups = indexGroups1;
        let tempCutIndexGroups = getAnimationIndexGroupWhenWordCharsNumberWithoutDuplicateIsBiggerThanBaseCutDirectionNumber();

        indexGroups = getNewIndexGroups(tempCutIndexGroups);
    } else {
        // console.log("3 wordCharsWithoutDuplicate.length " + wordCharsWithoutDuplicate.length + "   ?  "+cutDirection.length+"  wordCharsWithoutDuplicate.length"  );
        indexGroups = indexGroups1;
    }
}

function playGameSnowmanBuild(clickedId) {
    let keyValue = getKeyboardChar(clickedId);
    let isCharExist = checkCharacter(keyValue);

    if (isCharExist) {
        countedCorrectShots += 1;

        if (countedCorrectShots >= wordCharsWithoutDuplicate.length) {
            setGameOverTextWinner();
            disableKeyboardButton(clickedId);
            setDiscoveredChar(keyValue);
            setShapeGameSnowmanBuildFigureElements();
            setColorForSnowman();
            console.log("YOU WIN !!!");
        } else {
            if (countedCorrectShots === 1) {
                removeContainerSnowmanFigureMessageActionsWelcomeText();
                createContainersSnowmanFigureMainElements();
                setTimeout(function () {

                    setShapeGameSnowmanBuildFigureElements();
                }, 1000);

                setDiscoveredChar(keyValue);
                disableKeyboardButton(clickedId);
            } else {
                setShapeGameSnowmanBuildFigureElements();
                setDiscoveredChar(keyValue);
                disableKeyboardButton(clickedId);
            }
        }
    } else {
        changeLivesNumberVisible();

        if (countedWrongShots < maxWrongShots - 1) {
            countedWrongShots += 1;
        } else {
            createContainersForGameSnowmanFigureMessageGameOver();
            setGameOverTextLoser();
            changeKeyboardButtonsGameSnowmanBuildGameOver();
            console.log("GAME OVER");
            countedWrongShots += 77;
        }
    }
}

function playGameSnowmanDestroy(clickedId) {
    let keyValue = getKeyboardChar(clickedId);
    let isCharExist = checkCharacter(keyValue);

    if (isCharExist) {
        countedCorrectShots += 1;
        console.log("1  ");

        if (countedCorrectShots >= wordCharsWithoutDuplicate.length) {
            console.log("1  a");
            setGameOverTextWinner();
            changeKeyboardButtonsGameSnowmanDestroyGameOver()
            disableKeyboardButton(clickedId);
            setDiscoveredChar(keyValue);
            setColorForSnowman();
            console.log("YOU WIN !!!");
        } else {
            console.log("1  b");
            setDiscoveredChar(keyValue);
            disableKeyboardButton(clickedId);
        }
    } else {
        changeLivesNumberVisible();
        removeShapeGameSnowmanDestroyFigureElements();
        countedWrongShots += 1;
        console.log("2  ");
        if (countedWrongShots < maxWrongShots) {
            console.log("2  a");

        } else {
            console.log("2  b");
            createContainersForGameSnowmanFigureMessageGameOver();
            setGameOverTextLoser();
            changeKeyboardButtonsGameSnowmanDestroyGameOver()
            console.log("GAME OVER");
            countedWrongShots += 77;
        }
    }
}

function setShapeSnowmanFigureElements(indexGroup) {

    for (let i = 0; i < indexGroup.length; i++) {

        let index = indexGroup[i];
        let element = document.getElementById(snowmanFigureElementAction + index.toString());

        if (index < 4) {
            element.classList.add(snowmanFigureElementAction + index + hatElementInitialPositionForShape);
            element.classList.add(snowmanFigureElementActionAddShapeColor);
        }

        if (index === 4) {

            for (let j = 0; j < 2; j++) {
                let divEye = document.createElement('div');
                document.getElementById(snowmanFigureElementAction + index.toString()).append(divEye);
                divEye.setAttribute('id', snowmanFigureElementEyes + j.toString());
                divEye.classList.add(snowmanFigureElementEyes);
                divEye.classList.add(snowmanFigureElementActionAddShapeColor);
            }
            element.classList.add(snowmanFigureElementActionAddShapeColor);
        }

        if (index === 5) {
            let divSmile = document.createElement('div');
            divSmile.setAttribute('id', snowmanFigureElementSmile);
            document.getElementById(snowmanFigureElementAction + index.toString()).append(divSmile);

            let smile = document.getElementById(snowmanFigureElementSmile);
            smile.classList.add(snowmanFigureElementActionAddShapeColor);

            element.classList.add(snowmanFigureElementActionAddShapeColor);
        }

        if (index > 5 && index <= 12) {
            let divButtonBox = document.createElement('div');
            document.getElementById(snowmanFigureElementAction + index.toString()).append(divButtonBox);
            divButtonBox.setAttribute("id", containerSnowmanFigureElementButtonNo + index.toString())

            let divButton = document.createElement('div');
            let button = document.getElementById(containerSnowmanFigureElementButtonNo + index.toString());
            button.append(divButton);
            divButton.setAttribute("id", snowmanFigureElementButtonNo + index.toString())
            divButton.classList.add(snowmanFigureElementButton);
            divButton.classList.add(snowmanFigureElementActionAddShapeButton);
            divButton.classList.add(snowmanFigureElementActionAddShapeColor);

            element.classList.add(snowmanFigureElementActionAddShapeColor);
        }

        if (index > 12 && index <= 16) {
            element.classList.add(snowmanFigureElementAction + index + handInitialPositionForShape);
            element.classList.add(snowmanFigureElementActionAddShapeColor);
            element.classList.add(snowmanFigureElementActionAddShapeHands);
        }
    }
    countedAnimationElements += 1;
}

function setShapeGameSnowmanBuildFigureElements() {
    let indexGroup = indexGroups[countedAnimationElements];
    setShapeSnowmanFigureElements(indexGroup);
}

function setShapeGameSnowmanDestroyFigureElements() {
    for (let i = 0; i < indexGroups.length; i++) {
        let indexGroup = indexGroups[i];
        setShapeSnowmanFigureElements(indexGroup);
    }
}

function removeShapeSnowmanFigureElements(indexGroup) {

    for (let i = 0; i < indexGroup.length; i++) {
        let index = indexGroup[i];

        let element = document.getElementById(snowmanFigureElementAction + index.toString());

        if (index === 4) {
            for (let j = 0; j < 2; j++) {
                let divEye = document.getElementById(snowmanFigureElementEyes + j.toString());
                divEye.classList.add(snowmanFigureElementActionShapeRemoveColor);
            }
        }

        if (index === 5) {
            let smile = document.getElementById(snowmanFigureElementSmile);
            smile.classList.add(snowmanFigureElementActionShapeRemoveColor);
        }

        if (index > 5 && index <= 12) {
            let divButton = document.getElementById(snowmanFigureElementButtonNo + index.toString());
            divButton.classList.add(snowmanFigureElementActionShapeRemoveColor);
        }
        element.classList.add(snowmanFigureElementActionShapeRemoveColor);
    }
    countedAnimationElements -= 1;
}

function removeShapeGameSnowmanDestroyFigureElements() {
    let tempCountedAnimationElements = cutDirection.length - countedAnimationElements;
    let indexGroup = indexGroups[tempCountedAnimationElements];
    removeShapeSnowmanFigureElements(indexGroup);
}

function changeLivesNumberVisible() {
    let tempChangeColor = "#292929";
    let elem = document.getElementById("gameLive-" + countedWrongShots);
    elem.style.backgroundColor = tempChangeColor;

    let elemEnd = document.getElementById("gameLive-" + (gameLives.length - 1));
    elemEnd.innerHTML = (gameLives.length - 1) - countedWrongShots;
}

function createContainersForWord() {
    createElementDiv(containerGameSnowmanDescriptionElements, containerGameSnowmanWordToDiscover);
    let parentElement = document.getElementById(containerGameSnowmanWordToDiscover)
    parentElement.classList.add(containerGameSnowmanWordToDiscover)

    parentElement.style.gridTemplateRows = " repeat(1, 70fr 100fr 10fr) ";
    parentElement.style.gridTemplateColumns = " repeat(" + word.length + ", 5fr 100fr 5fr)";

    let rowChildStart = 2;
    let columnChildStart = 2;
    let rowChildEnd = 2;
    let columnChildEnd = 3;

    for (let i = 0; i < word.length; i++) {
        let newDiv = document.createElement("div");
        parentElement.append(newDiv);
        newDiv.style.display = "grid";

        if (wordChar[i] === " ") {
            newDiv.style.backgroundColor = "#00000";
        } else {
            newDiv.classList.add(gameSnowmanElementWordToDiscover);
        }

        newDiv.style.gridRow = rowChildStart;
        newDiv.style.gridColumn = columnChildStart;
        newDiv.style.gridRowEnd = rowChildEnd;
        newDiv.style.gridColumnEnd = columnChildEnd;
        newDiv.style.gridTemplateRows = "1fr";
        newDiv.style.gridTemplateColumns = "1fr";
        newDiv.setAttribute("id", "wordChar-" + i);
        columnChildStart += 3;
        columnChildEnd += 3;
    }
}

gameLives = "" + "" + maxWrongShots;

function createContainersForLives() {
    createElementDiv(containerGameSnowmanDescriptionElements, containerGameSnowmanLives);
    let parentElement = document.getElementById(containerGameSnowmanLives)
    parentElement.classList.add(containerGameSnowmanLives)

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

function setClassNameGameSnowman(elementId, suffixText) {
    let name = containerGameSnowmanDescription + "-" + suffixText;
    document.getElementById(elementId).classList.add(name);
}

function createContainersForGameDescription(gameName, gameSnowmanDescriptionText) {

    let containerGameSnowmanDescriptionSpecified = containerGameSnowmanDescription + gameName;
    let containerButtonFiled = containerGameSnowmanDescriptionSpecified + "-gameOn";
    createElementDiv(containerGameSnowmanDescriptionElements, containerButtonFiled);
    setClassNameGameSnowman(containerButtonFiled, "gameOn");

    let containerDescription = containerGameSnowmanDescriptionSpecified + "-gameButtonText";
    createElementDiv(containerButtonFiled, containerDescription);
    setClassNameGameSnowman(containerDescription, "gameButtonText");

    for (let i = 0; i < gameSnowmanDescriptionText.length; i++) {

        let elementId = gameSnowmanDescriptionElementText + gameName + "-" + i;
        createElementDiv(containerDescription, elementId);

        let elementClass = containerGameSnowmanDescriptionElementText + "-" + i;
        setElementClassName(elementId, elementClass);

        let newP = document.createElement("p");
        document.getElementById(elementId).append(newP);
        newP.innerHTML = gameSnowmanDescriptionText[i];
        newP.classList.add(gameSnowmanDescriptionElementText);
        newP.classList.add(gameSnowmanDescriptionElementText + "-" + i);
    }

}

function createContainerGameSnowmanWordElements111(gameNameSnowmanBuild, gameSnowmanDescriptionTextBuild) {
    createContainersForGameDescription(gameNameSnowmanBuild, gameSnowmanDescriptionTextBuild);
    createContainersForWord();
    createContainersForLives();
}

function createContainerGameSnowmanBuildWordElements() {
    createContainerGameSnowmanWordElements111(gameNameSnowmanBuild, gameSnowmanDescriptionTextBuild);
}

function createContainerGameSnowmanDestroyWordElements() {
    createContainerGameSnowmanWordElements111(gameNameSnowmanBuild, gameSnowmanDescriptionTextDestroy);
}

function removeElementsById(elementId) {
    let element = document.getElementById(elementId);
    if (element != null) {
        element.remove();
    }
}

function setGameOverTextColorName() {
    let text = "color: " + winColorSnowman;
    let cn = gameSnowmanDescriptionElementText + "-1";
    setElementTextByClassName(cn, text);
}

function setGameOverEndText(textEnd) {
    setElementTextByClassName(gameSnowmanDescriptionElementText + "-4", textEnd);
}

function setGameOverTextGameResult(textIsWin) {
    setElementTextByClassName(gameSnowmanDescriptionElementText + "-2", textIsWin);
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

function setAnimationAfterWinSnowmanFigureElementsSnowballs() {
    rootVariables.style.setProperty(cssSnowmanFigureColor, winColorSnowman);

    for (let i = 0; i <= 16; i++) {
        let element = document.getElementById(snowmanFigureElementAction + i.toString());

        if (i >= 4) {
            element.classList.add(snowmanFigureElementActionFinalSnowballs);
        }

        if (i < 4) {
            element.classList.add(snowmanFigureElementAction + i + setAnimationHatFinalColor);
        }

        if (i === 4) {
            let eyes = document.getElementsByClassName(snowmanFigureElementEyes);

            for (let e = 0; e < eyes.length; e++) {
                eyes[e].classList.remove(snowmanFigureElementActionAddShapeColor);
                eyes[e].classList.add(snowmanFigureElementActionFinalEyes);
            }
        }

        if (i === 5) {
            let smile = document.getElementById(snowmanFigureElementSmile);
            smile.classList.remove(snowmanFigureElementActionAddShapeSmile);
            smile.classList.remove(snowmanFigureElementActionAddShapeColor);
            smile.classList.add(snowmanFigureElementActionFinalSmile);
        }

        if (i > 5 && i < 12) {
            let button = document.getElementById(snowmanFigureElementButtonNo + i.toString());
            button.classList.remove(snowmanFigureElementActionAddShapeButton);
            button.classList.remove(snowmanFigureElementActionAddShapeColor);
            button.classList.add(snowmanFigureElementButtonFinal);
        }

        if (i > 12 && i <= 16) {
            element.classList.remove(snowmanFigureElementActionAddShapeHands);
        }
    }
}

function setAnimationSnowmanFigureElementsShapeRemoveColor() {
    rootVariables.style.setProperty("--snowmanFigureColor", winColorSnowman);

    for (let i = 0; i <= 16; i++) {
        let element = document.getElementById(snowmanFigureElementAction + i.toString());

        if (element != null) {
            if (i >= 0 || (i > 12 && i <= 16)) {
                element.classList.add(snowmanFigureElementActionShapeRemoveColor);
            }

            if (i === 4) {
                let eyes = document.getElementsByClassName(snowmanFigureElementEyes);
                if (eyes != null) {
                    for (let e = 0; e < eyes.length; e++) {
                        eyes[e].classList.add(snowmanFigureElementActionShapeRemoveColor);
                    }
                }
            }

            if (i === 5) {
                let smile = document.getElementById(snowmanFigureElementSmile);
                if (smile != null) {
                    smile.classList.add(snowmanFigureElementActionShapeRemoveColor);
                }
            }

            if (i > 5 && i < 12) {
                let button = document.getElementById(snowmanFigureElementButtonNo + i.toString());
                if (button != null) {
                    button.classList.add(snowmanFigureElementActionShapeRemoveColor);
                }
            }
        }
    }
}

function setAnimationInitialPositionsOfElementsAfterWinSnowmanFigureElementsHandsAndHat() {

    for (let i = 12; i <= 16; i++) {
        let element = document.getElementById(snowmanFigureElementAction + i.toString());
        if (element != null) {
            element.classList.remove(snowmanFigureElementActionAddShapeColor);
            element.classList.remove(snowmanFigureElementActionShapeRemoveColor);
            element.classList.add(snowmanFigureElementAction + i + handInitialPositionForAnimation);
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

function setAnimationsAfterWinSnowmanFigureElementsHandsAndHat() {

    for (let i = 13; i <= 16; i++) {
        let element = document.getElementById(snowmanFigureElementAction + i.toString());
        if (element != null) {
            element.classList.remove(snowmanFigureElementActionFinalSnowballs);
            element.classList.add(snowmanFigureElementActionFinalSnowballsColor);
            element.classList.add(snowmanFigureElementAction + i + "");
        }
    }

    for (let i = 0; i <= 3; i++) {
        let element = document.getElementById(snowmanFigureElementAction + i.toString());
        if (element != null) {
            element.classList.remove(snowmanFigureElementAction + i + setAnimationHatFinalColor);
            element.classList.add(snowmanFigureElementAction + i + setHatFinalColor);
            element.classList.add(snowmanFigureElementAction + i);
        }
    }
}

//// time === changeKeyboardButtonsGameOver(), gameSnowmanBuildKeyboard.js
function setColorForSnowman() {
    setTimeout(function () {
        setAnimationSnowmanFigureElementsShapeRemoveColor()
    }, 2000)

    setTimeout(function () {
        setAnimationInitialPositionsOfElementsAfterWinSnowmanFigureElementsHandsAndHat()
    }, 6000)

    setTimeout(function () {
        setAnimationAfterWinSnowmanFigureElementsSnowballs()
    }, 6000)

    setTimeout(function () {
        setAnimationsAfterWinSnowmanFigureElementsHandsAndHat()
    }, 9000)
}

function createNewP(parentId, newChildId) {
    let newDiv = document.createElement("p");
    let mainElem = document.getElementById(parentId);
    mainElem.append(newDiv);
    newDiv.setAttribute("id", newChildId);
}

function createMainContainerForGameSnowman() {
    createElementDiv(containerMainSectionActions, containerMainSectionGameSnowman);
}

function removeMainContainerForGameSnowman() {
    removeElementsById(containerMainSectionGameSnowman);
}

function createStartContainersForGameSnowmanAnimation() {
    createElementDiv(containerMainSectionGameSnowman, containerGameSnowmanAnimation);
    createElementDiv(containerGameSnowmanAnimation, containerGameSnowmanAnimationElements);
}

function createContainersForGameSnowmanFigureMessageWelcomeText() {
    createElementDiv(containerGameSnowmanAnimationElements, containerSnowmanFigureMessage1welcomeText);
    createNewP(containerSnowmanFigureMessage1welcomeText, snowmanFigureStartGameElement1welcomeText);
    document.getElementById(snowmanFigureStartGameElement1welcomeText).innerHTML = welcomeText;
    document.getElementById(snowmanFigureStartGameElement1welcomeText).classList.add(snowmanFigureStartGameElementSetAnimationToShowColor);
}

function createContainersForGameSnowmanFigureMessageGoodbyeText() {
    createElementDiv(containerGameSnowmanAnimationElements, containerSnowmanFigureMessage1goodbyeText);
    createNewP(containerSnowmanFigureMessage1goodbyeText, snowmanFigureStartGameElement1goodbyeText);
    document.getElementById(snowmanFigureStartGameElement1goodbyeText).innerHTML = goodbyeText;
    document.getElementById(snowmanFigureStartGameElement1goodbyeText).classList.add(snowmanFigureStartGameElementSetAnimationToShowColor);
}

function createStartContainersForGameSnowmanWord() {
    createElementDiv(containerMainSectionGameSnowman, containerGameSnowmanWord);
    createElementDiv(containerGameSnowmanWord, containerGameSnowmanDescriptionElements);
}

function createStartContainersForGameSnowmanKeyboard() {
    createElementDiv(containerMainSectionGameSnowman, containerGameSnowmanKeyboard);
    createElementDiv(containerGameSnowmanKeyboard, containerGameSnowmanKeyboardElements);
}

function createStartContainersGameSnowmanMain() {
    createMainContainerForGameSnowman();
    createStartContainersForGameSnowmanAnimation();
    createStartContainersForGameSnowmanWord();
    createStartContainersForGameSnowmanKeyboard();
}

function createStartContainersGameSnowman() {
    createStartContainersGameSnowmanMain();
    createContainersForGameSnowmanFigureMessageWelcomeText();
    createContainerGameSnowmanBuildWordElements();
    createKeyboardButtonsGameSnowmanBuild();
}

function createStartContainersGameSnowmanDestroy() {
    createStartContainersGameSnowmanMain();
    createContainersSnowmanFigureMainElements();
    setShapeGameSnowmanDestroyFigureElements();

    createContainerGameSnowmanDestroyWordElements();
    createKeyboardButtonsGameSnowmanDestroy();
}

function removeContainerSnowmanFigureMessageWelcomeText() {
    setTimeout(function () {
        removeElementsById(containerSnowmanFigureMessage1welcomeText)
    }, 3000);
}

function setAnimationGameSnowmanFigureMessageToRemoveText() {
    let element = document.getElementById(snowmanFigureStartGameElement1welcomeText);

    if (element != null) {
        element.classList.remove(snowmanFigureStartGameElementSetAnimationToShowColor);
        element.classList.add(snowmanFigureStartGameElementSetAnimationToRemoveColor);
    }
}

function removeContainerSnowmanFigureMessageActionsWelcomeText() {
    setAnimationGameSnowmanFigureMessageToRemoveText();
    removeContainerSnowmanFigureMessageWelcomeText();
}

function createContainersForGameSnowmanFigureMessageGameOver() {
    removeContainerSnowmanFigureMessageActionsWelcomeText();

    if (document.getElementById(containerSnowmanFigureElements) != null) {
        setAnimationSnowmanFigureElementsShapeRemoveColor();
    }

    setTimeout(function () {
        createContainersForGameSnowmanFigureMessageGoodbyeText();
    }, 3000);

}

function createContainersSnowmanFigureMainElements() {
    createElementDiv(containerGameSnowmanAnimationElements, containerSnowmanFigureAction);

    let parentDiv = document.createElement('div');
    parentDiv.setAttribute('id', containerSnowmanFigureElements);
    document.getElementById(containerSnowmanFigureAction).append(parentDiv);

    for (let i = 0; i <= 16; i++) {

        // container element
        let innerDivContainer = document.createElement('div');
        innerDivContainer.setAttribute('id', containerSnowmanFigureElement + i.toString());
        document.getElementById(containerSnowmanFigureElements).append(innerDivContainer);

        // container action
        let innerDiv = document.createElement("div");
        innerDiv.setAttribute("id", snowmanFigureElementAction + i.toString());
        let div1 = document.getElementById(containerSnowmanFigureElement + i.toString());
        div1.append(innerDiv);
    }
}

