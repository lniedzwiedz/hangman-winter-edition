let word;
let wordChar;
let wordCharsWithoutDuplicate;

// 1/2/3/4 - hat
// 5/6 - head
// 14/15 - left - hand
// 16/17 - right - hand

const indexGroups1 = [[12, 11], // cut 6 -> 2
    [10, 9], // cut 4 -> 2
    [8, 7, 6], // cut 1 -> 3 ---------------- 1
    [5, 4], // cut 7 -> 9
    [13, 14], // cut 3 -> 2 -----------------4
    // [1, 2, 3, 4], // cut 5 -> 4
    [3, 2, 1, 0], // cut 5 -> 4
    [15, 16] // cut 2 -> 2 -------------  6
];

// remove - more polite
const indexGroups3GameSnowmanDestroy = [[13, 14], [15, 16], [3, 2, 1, 0], [12, 11], [10, 9], [8, 7, 6], [5, 4]];

// remove - from top
const indexGroups3GameSnowmanDestroy1 = [[3, 2, 1, 0], [13, 14], [15, 16], [5, 4], [8, 7, 6], [10, 9], [12, 11]];

const indexGroups2 = [[12, 11, 10, 9, 8, 7, 6], [5, 4, 13, 15], [16, 14, 3, 2, 1, 0],];

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

const colorNamesList = "NAVAJO WHITE, IVORY, BONE WHITE, ALABASTER, EGGSHELL, SEASHELL";
const colorHexCodesList = "#FFDEAD, #F5F5DC, #FFF8DC, #EDEADE, #F0EAD6, #FFF5EE";
const colorHexCodesArray = colorHexCodesToArray(colorHexCodesList);
let winColorSnowman;

function setConfigurationForGameCommon() {
    word = getRandomColorName();
    // word = "JAVA";
    console.log("word: " + word);
    wordChar = wordToCharsArray(word);
    wordCharsWithoutDuplicate = getCharsNumberWithoutDuplicate();
    cutDirection = [2, 6, 4, 1, 5, 0, 3]; // number index = indexGroups
    cutDirection2 = [0, 2];
    animationMaxNumber = cutDirection.length;
    countedCorrectShots = 0;
    countedWrongShots = 0;
    countedAnimationElements = 0;
    maxWrongShots = animationMaxNumber;
    gameLives = "LIVES " + maxWrongShots;
    gameLivesChars = wordToCharsArray(gameLives);
    removeContainerMainSection();
}

function setConfigurationForGameSnowmanBuild() {
    setConfigurationForGameCommon();
    getAnimationIndexGroups();
    createStartContainersGameSnowman();
}

function setConfigurationForGameSnowmanDestroy() {
    setConfigurationForGameCommon();
    indexGroups = indexGroups3GameSnowmanDestroy;
    createStartContainersGameSnowmanDestroy();
}

const colorNamesArray = splitTextToArray(colorNamesList, ", ");

function colorHexCodesToArray(colorHexCodesList) {
    return splitTextToArray(colorHexCodesList, ", ");
}

function getRandomColorName() {
    // let index = randomNumber();
    let index = randomNumber(colorNamesArray.length);
    winColorSnowman = colorHexCodesArray[index];
    return colorNamesArray[index];
}

function wordToCharsArray(word) {
    return splitTextToArray(word, "");
}

function getCharsNumberWithoutDuplicate() {
    let temWord = word;
    let finalChar = temWord.substring(0, 1);

    for (let i = 1; i < word.length; i++) {
        let char = temWord.substring(i, i + 1);

        if (char !== " ") {
            if (!finalChar.includes(char)) finalChar = finalChar + char;
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
            let wordCharId = wordChar + i;
            setElementTextById(wordCharId, charToShow);
            setElementClassNameByElementId(wordCharId, gameSnowmanElementWordToDiscoverVisibleColor);
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
                    if (j === tempCutIndexGroups.length - 1)
                        newIndexGroups.push(indexGroups[i]);
                }
            }
        }
    }
    return newIndexGroups;
}

function getAnimationIndexGroupWhenWordCharsNumberWithoutDuplicateIsLowerThanBaseCutDirectionNumber(cutNumber) {
    let tempCutIndexGroups = [[]];

    let count = 0;

    for (let i = 0; i < cutDirection.length; i++) {

        let tempMiddleIndexGroups = indexGroups[cutDirection[i]];
        let tempCutMiddleIndexGroups = [[]];

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

function getAnimationIndexGroupWhenWordCharsNumberWithoutDuplicateIsBiggerThanBaseCutDirectionNumber() {

    let cutNumber = wordCharsWithoutDuplicate.length - cutDirection.length;
    let wordCharsLength = wordCharsWithoutDuplicate.length;
    let count = 1;
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
                    tempCutMiddleIndexGroups[j] = tempMiddleIndexGroups.slice(j, j + 1);
                    count = count + 1;

                } else {
                    tempCutMiddleIndexGroups[j] = tempMiddleIndexGroups.slice(j, tempMiddleIndexGroups.length);
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

    if (wordCharsWithoutDuplicateLength < cutDirection.length) {

        indexGroups = indexGroups2;
        let cutNumber = wordCharsWithoutDuplicateLength - indexGroups.length;

        cutDirection = cutDirection2;

        if (cutNumber > 0 && cutNumber <= indexGroups.length) {
            let tempCutIndexGroups = getAnimationIndexGroupWhenWordCharsNumberWithoutDuplicateIsLowerThanBaseCutDirectionNumber(cutNumber);
            indexGroups = getNewIndexGroups(tempCutIndexGroups);
        }

    } else if (wordCharsWithoutDuplicateLength > cutDirection.length) {

        indexGroups = indexGroups1;
        let tempCutIndexGroups = getAnimationIndexGroupWhenWordCharsNumberWithoutDuplicateIsBiggerThanBaseCutDirectionNumber();

        indexGroups = getNewIndexGroups(tempCutIndexGroups);
    } else {
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
            changeKeyboardButtonsGameSnowmanDestroyGameOver();
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
            countedWrongShots += 20260306;
        }
    }
}

function playGameSnowmanDestroy(clickedId) {

    let keyValue = getKeyboardChar(clickedId);
    let isCharExist = checkCharacter(keyValue);

    if (isCharExist) {
        countedCorrectShots += 1;

        if (countedCorrectShots >= wordCharsWithoutDuplicate.length) {
            setGameOverTextWinner();
            changeKeyboardButtonsGameSnowmanDestroyGameOver();
            disableKeyboardButton(clickedId);
            setDiscoveredChar(keyValue);
            setColorForSnowman();
            console.log("YOU WIN !!!");

        } else {
            setDiscoveredChar(keyValue);
            disableKeyboardButton(clickedId);
        }
    } else {
        changeLivesNumberVisible();
        removeShapeGameSnowmanDestroyFigureElements();
        countedWrongShots += 1;

        if (countedWrongShots < maxWrongShots) {
            // console.log("Oops! Well... something went wrong xD");

        } else {
            createContainersForGameSnowmanFigureMessageGameOver();
            setGameOverTextLoser();
            changeKeyboardButtonsGameSnowmanDestroyGameOver();
            console.log("GAME OVER");
            countedWrongShots += 20260306;
        }
    }
}

function setShapeSnowmanFigureElements(indexGroup) {

    for (let i = 0; i < indexGroup.length; i++) {

        let index = indexGroup[i];
        let elementId = snowmanFigureElementAction + valueToString(index);
        let element = getElementById(elementId);

        if (index < 4) {
            setElementClassNameByElement(element, snowmanFigureElementAction + index + hatElementInitialPositionForShape);
            setElementClassNameByElement(element, snowmanFigureElementActionAddShapeColor);
        }

        if (index === 4) {
            for (let j = 0; j < 2; j++) {
                let newDivEyeId = snowmanFigureElementEyes + valueToString(j)
                createElementDiv(elementId, newDivEyeId);
                setElementClassNameByElementId(newDivEyeId, snowmanFigureElementEyes);
                setElementClassNameByElementId(newDivEyeId, snowmanFigureElementActionAddShapeColor);
            }
        }

        if (index === 5) {
            createElementDiv(elementId, snowmanFigureElementSmile);
            setElementClassNameByElementId(snowmanFigureElementSmile, snowmanFigureElementActionAddShapeColor)
        }

        if (index > 5 && index <= 12) {
            let buttonIdMain = containerSnowmanFigureElementButtonNo + valueToString(index);
            createElementDiv(elementId, buttonIdMain);

            let buttonIdInner = snowmanFigureElementButtonNo + valueToString(index);
            createElementDiv(buttonIdMain, buttonIdInner);
            setElementClassNameByElementId(buttonIdInner, snowmanFigureElementButton);
            setElementClassNameByElementId(buttonIdInner, snowmanFigureElementActionAddShapeButton);
            setElementClassNameByElementId(buttonIdInner, snowmanFigureElementActionAddShapeColor);

        }

        if (index > 12 && index <= 16) {
            setElementClassNameByElement(element, elementId + handInitialPositionForShape);
            setElementClassNameByElement(element, snowmanFigureElementActionAddShapeColor);
            setElementClassNameByElement(element, snowmanFigureElementActionAddShapeHands);
        }
        setElementClassNameByElement(element, snowmanFigureElementActionAddShapeColor);
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

        if (index === 4) {
            for (let j = 0; j < 2; j++) {
                setElementClassNameByElementId(snowmanFigureElementEyes + valueToString(j), snowmanFigureElementActionShapeRemoveColor);
            }
        }

        if (index === 5)
            setElementClassNameByElementId(snowmanFigureElementSmile, snowmanFigureElementActionShapeRemoveColor);

        if (index > 5 && index <= 12)
            setElementClassNameByElementId(snowmanFigureElementButtonNo + valueToString(index), snowmanFigureElementActionShapeRemoveColor);

        setElementClassNameByElementId(snowmanFigureElementAction + valueToString(index), snowmanFigureElementActionShapeRemoveColor);
    }
    countedAnimationElements -= 1;
}

function removeShapeGameSnowmanDestroyFigureElements() {
    let tempCountedAnimationElements = cutDirection.length - countedAnimationElements;
    let indexGroup = indexGroups[tempCountedAnimationElements];
    removeShapeSnowmanFigureElements(indexGroup);
}

function changeLivesNumberVisible() {
    let tempChangeColor = "#1c7293";
    let elementId = gameSnowmanLives + "-";
    setElementStyleBackgroundColorById(elementId + countedWrongShots, tempChangeColor);
    setElementTextById(elementId + (gameLives.length - 1), valueToString((gameLives.length - 1) - countedWrongShots));
}

function createContainersForWordToDiscover() {

    createElementDiv(containerMainSectionGameSnowman, containerGameSnowmanWordToDiscoverMain);
    createElementDiv(containerGameSnowmanWordToDiscoverMain, containerGameSnowmanWordToDiscoverMainParts);
    setElementClassNameByElementId(containerGameSnowmanWordToDiscoverMainParts, containerGameSnowmanWordToDiscoverMainParts);

    createElementDiv(containerGameSnowmanWordToDiscoverMainParts, containerGameSnowmanWordToDiscover);
    setElementClassNameByElementId(containerGameSnowmanWordToDiscover, containerGameSnowmanWordToDiscover);

    setElementStyleGridTemplateRows(containerGameSnowmanWordToDiscover, "repeat(1,  25fr 70fr 5f)");
    setElementStyleGridTemplateColumns(containerGameSnowmanWordToDiscover, " repeat(" + word.length + ", 5fr 100fr 5fr)");

    let rowChildStart = 1;
    let columnChildStart = 2;
    let rowChildEnd = 2;
    let columnChildEnd = 3;

    for (let i = 0; i < word.length; i++) {

        let newDivId = gameSnowmanElementWordToDiscover + "-" + valueToString(i);
        createElementDiv(containerGameSnowmanWordToDiscover, newDivId);
        setElementAsGrid(newDivId, rowChildStart, columnChildStart, rowChildEnd, columnChildEnd, "1fr", "1fr");

        if (wordChar[i] === " ") {
            setElementStyleBackgroundColorById(newDivId, "#00000");

        } else {
            setElementClassNameByElementId(newDivId, gameSnowmanElementWordToDiscover);
            let newPId = wordChar + valueToString(i);
            createElementP(newDivId, newPId);
            setElementClassNameByElementId(newPId, gameSnowmanElementWordToDiscoverBase);

        }
        columnChildStart += 3;
        columnChildEnd += 3;
    }
}

gameLives = "" + "" + maxWrongShots;

function createContainersForLives() {
    createElementDiv(containerMainSectionGameSnowman, containerGameSnowmanLivesMain);
    createElementDiv(containerGameSnowmanLivesMain, containerGameSnowmanLivesMainParts);
    setElementClassNameByElementId(containerGameSnowmanLivesMainParts, containerGameSnowmanLivesMainParts);

    createElementDiv(containerGameSnowmanLivesMainParts, containerGameSnowmanLives);
    setElementClassNameByElementId(containerGameSnowmanLives, containerGameSnowmanLives);

    setElementStyleGridTemplateRows(containerGameSnowmanLives, "repeat(1, 20fr 70fr 20fr)");
    setElementStyleGridTemplateColumns(containerGameSnowmanLives, "repeat(" + maxWrongShots + ", 5fr 100fr 5fr)");

    let rowChildStart = 2;
    let columnChildStart = 2;
    let rowChildEnd = 3;
    let columnChildEnd = 3;

    for (let i = 0; i < maxWrongShots; i++) {

        let newDivId = gameSnowmanLivesMinus + i;
        createElementDiv(containerGameSnowmanLives, newDivId);
        setElementClassNameByElementId(newDivId, gameSnowmanLives);

        if (i === maxWrongShots - 1)
            setElementClassNameByElementId(newDivId, gameSnowmanLivesNumber);

        setElementAsGrid(newDivId, rowChildStart, columnChildStart, rowChildEnd, columnChildEnd, "1fr", "1fr");

        let newPId = gameLive + i;
        createElementP(newDivId, newPId);
        setElementClassNameByElementId(newPId, gameSnowmanLivesBase);
        setElementTextById(newPId, gameLivesChars[i]);

        columnChildStart += 3;
        columnChildEnd += 3;
    }
}

function createContainersForGameDescription(gameName, gameSnowmanDescriptionText) {
    createElementDiv(containerMainSectionGameSnowman, containerGameSnowmanDescription);
    createElementDiv(containerGameSnowmanDescription, containerGameSnowmanDescriptionElements);

    for (let i = 0; i < gameSnowmanDescriptionText.length; i++) {
        let elementId = containerGameSnowmanDescriptionElementText + "-" + i;
        createElementDiv(containerGameSnowmanDescriptionElements, elementId);
        setElementClassNameByElementId(elementId, elementId);

        let newPId = gameSnowmanDescriptionElementTextLine + "-" + i;
        createElementP(elementId, newPId);
        setElementClassNameByElementId(newPId, newPId);
        setElementClassNameByElementId(newPId, gameSnowmanDescriptionElementText);
        setElementTextById(newPId, gameSnowmanDescriptionText[i]);
    }
}

function createContainerGameSnowmanWordElements111(gameNameSnowmanBuild, gameSnowmanDescriptionTextBuild) {
    createContainersForGameDescription(gameNameSnowmanBuild, gameSnowmanDescriptionTextBuild);
    createContainersForWordToDiscover();
    createContainersForLives();
}

function createContainerGameSnowmanBuildWordElements() {
    createContainerGameSnowmanWordElements111(gameNameSnowmanBuild, gameSnowmanDescriptionTextBuild);
}

function createContainerGameSnowmanDestroyWordElements() {
    createContainerGameSnowmanWordElements111(gameNameSnowmanDestroy, gameSnowmanDescriptionTextDestroy);
}

function setGameOverTextColorName() {
    let text = "color: " + winColorSnowman;
    let cn = gameSnowmanDescriptionElementTextLine + "-1";
    setElementTextByClassName(cn, text);
}

function setGameOverEndText(textEnd) {
    setElementTextByClassName(gameSnowmanDescriptionElementTextLine + "-4", textEnd);
}

function setGameOverTextGameResult(textIsWin) {
    setElementTextByClassName(gameSnowmanDescriptionElementTextLine + "-2", textIsWin);
}

function setGameOverTextLoser() {
    setGameOverTextColorName();
    setGameOverTextGameResult(gameSnowmanDescriptionTextGameOverLoser);
    setGameOverEndText(gameSnowmanDescriptionTextGameOverLoserGiveHope);
}

function setGameOverTextWinner() {
    setGameOverTextColorName();
    setGameOverTextGameResult(gameSnowmanDescriptionTextGameOverWinner);
    setGameOverEndText(gameSnowmanDescriptionTextGameOverWinnerCongratulations);
}

function setAnimationAfterWinSnowmanFigureElementsSnowballs() {
    setElementStyleProperty(cssSnowmanFigureColor, winColorSnowman);

    for (let i = 0; i <= 16; i++) {
        let element = getElementById(snowmanFigureElementAction + valueToString(i));

        if (i >= 4)
            setElementClassNameByElement(element, snowmanFigureElementActionFinalSnowballs);

        if (i < 4)
            setElementClassNameByElement(element, snowmanFigureElementAction + i + setAnimationHatFinalColor);

        if (i === 4) {
            let eyes = getElementsByClassName(snowmanFigureElementEyes);
            for (let e = 0; e < eyes.length; e++) {
                removeElementClassNameByElement(eyes[e], snowmanFigureElementActionAddShapeColor);
                setElementClassNameByElement(eyes[e], snowmanFigureElementActionFinalEyes);
            }
        }

        if (i === 5) {
            let smile = getElementById(snowmanFigureElementSmile);
            removeElementClassNameByElement(smile, snowmanFigureElementActionAddShapeSmile);
            removeElementClassNameByElement(smile, snowmanFigureElementActionAddShapeColor);
            setElementClassNameByElement(smile, snowmanFigureElementActionFinalSmile);
        }

        if (i > 5 && i < 12) {
            let button = getElementById(snowmanFigureElementButtonNo + valueToString(i));
            removeElementClassNameByElement(button, snowmanFigureElementActionAddShapeButton);
            removeElementClassNameByElement(button, snowmanFigureElementActionAddShapeColor);
            setElementClassNameByElement(button, snowmanFigureElementButtonFinal);
        }

        if (i > 12 && i <= 16)
            removeElementClassNameByElement(element, snowmanFigureElementActionAddShapeHands);
    }
}

function setAnimationSnowmanFigureElementsShapeRemoveColor() {
    setElementStyleProperty("--snowmanFigureColor", winColorSnowman);

    for (let i = 0; i <= 16; i++) {
        let element = getElementById(snowmanFigureElementAction + valueToString(i));

        if (element != null) {
            if (i >= 0 || (i > 12 && i <= 16))
                setElementClassNameByElement(element, snowmanFigureElementActionShapeRemoveColor);

            if (i === 4) {
                let eyes = getElementsByClassName(snowmanFigureElementEyes);
                if (eyes != null) {
                    for (let e = 0; e < eyes.length; e++) {
                        setElementClassNameByElement(eyes[e], snowmanFigureElementActionShapeRemoveColor);
                    }
                }
            }

            if (i === 5) {
                let smile = getElementById(snowmanFigureElementSmile);
                if (smile != null) {
                    setElementClassNameByElement(smile, snowmanFigureElementActionShapeRemoveColor);
                }
            }

            if (i > 5 && i < 12) {
                let button = getElementById(snowmanFigureElementButtonNo + valueToString(i));
                if (button != null) {
                    setElementClassNameByElement(button, snowmanFigureElementActionShapeRemoveColor);
                }
            }
        }
    }
}

function setAnimationInitialPositionsOfElementsAfterWinSnowmanFigureElementsHandsAndHat() {
    // hands
    for (let i = 12; i <= 16; i++) {
        let element = getElementById(snowmanFigureElementAction + valueToString(i));
        if (element != null) {
            removeElementClassNameByElement(element, snowmanFigureElementActionAddShapeColor);
            removeElementClassNameByElement(element, snowmanFigureElementActionShapeRemoveColor);
            setElementClassNameByElement(element, snowmanFigureElementAction + i + handInitialPositionForAnimation);
        }
    }
    // hat
    for (let i = 0; i <= 3; i++) {
        let element = getElementById(snowmanFigureElementAction + valueToString(i));
        if (element != null) {
            removeElementClassNameByElement(element, snowmanFigureElementActionAddShapeColor);
            removeElementClassNameByElement(element, snowmanFigureElementActionShapeRemoveColor);
        }
    }

    // hat
    setElementClassNameByElementId("snowmanFigureElementAction-1", "snowmanFigureElementAction-1-hatElementInitialPositionForAnimation");
}

function setAnimationsAfterWinSnowmanFigureElementsHandsAndHat() {
    for (let i = 13; i <= 16; i++) {
        let element = getElementById(snowmanFigureElementAction + valueToString(i));
        if (element != null) {
            removeElementClassNameByElement(element, snowmanFigureElementActionFinalSnowballs);
            setElementClassNameByElement(element, snowmanFigureElementActionFinalSnowballsColor);
            setElementClassNameByElement(element, snowmanFigureElementAction + i + "");
        }
    }

    for (let i = 0; i <= 3; i++) {
        let element = getElementById(snowmanFigureElementAction + valueToString(i));
        if (element != null) {
            removeElementClassNameByElement(element, snowmanFigureElementAction + i + setAnimationHatFinalColor);
            setElementClassNameByElement(element, snowmanFigureElementAction + i + setHatFinalColor);
        }
    }

    setElementClassNameByElementId(containerSnowmanFigureElementHatMain, snowmanFigureElementActionHat);
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
    createElementP(containerSnowmanFigureMessage1welcomeText, snowmanFigureStartGameElement1welcomeText);
    setElementTextById(snowmanFigureStartGameElement1welcomeText, welcomeText);
    setElementClassNameByElementId(snowmanFigureStartGameElement1welcomeText, snowmanFigureStartGameElementSetAnimationToShowColor);
}

function createContainersForGameSnowmanFigureMessageGoodbyeText() {
    createElementDiv(containerGameSnowmanAnimationElements, containerSnowmanFigureMessage1goodbyeText);
    createElementP(containerSnowmanFigureMessage1goodbyeText, snowmanFigureStartGameElement1goodbyeText);
    setElementTextById(snowmanFigureStartGameElement1goodbyeText, goodbyeText);
    setElementClassNameByElementId(snowmanFigureStartGameElement1goodbyeText, snowmanFigureStartGameElementSetAnimationToShowColor);
}

function createStartContainersForGameSnowmanKeyboard() {
    createElementDiv(containerMainSectionGameSnowman, containerGameSnowmanKeyboard);
    createElementDiv(containerGameSnowmanKeyboard, containerGameSnowmanKeyboardElements);
}

function createStartContainersGameSnowmanMain() {
    createMainContainerForGameSnowman();
    createStartContainersForGameSnowmanAnimation();
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
    let element = getElementById(snowmanFigureStartGameElement1welcomeText);
    if (element != null) {
        removeElementClassNameByElement(element, snowmanFigureStartGameElementSetAnimationToShowColor);
        setElementClassNameByElement(element, snowmanFigureStartGameElementSetAnimationToRemoveColor);
    }
}

function removeContainerSnowmanFigureMessageActionsWelcomeText() {
    setAnimationGameSnowmanFigureMessageToRemoveText();
    removeContainerSnowmanFigureMessageWelcomeText();
}

function createContainersForGameSnowmanFigureMessageGameOver() {
    removeContainerSnowmanFigureMessageActionsWelcomeText();

    if (getElementById(containerSnowmanFigureElements) != null)
        setAnimationSnowmanFigureElementsShapeRemoveColor();

    setTimeout(function () {
        createContainersForGameSnowmanFigureMessageGoodbyeText();
    }, 3000);
}

function createContainersSnowmanFigureMainElements() {
    createElementDiv(containerGameSnowmanAnimationElements, containerSnowmanFigureAction);
    createElementDiv(containerSnowmanFigureAction, containerSnowmanFigureElements);

    for (let i = 0; i <= 16; i++) {
        let elementId = containerSnowmanFigureElement + valueToString(i);

        if (i < 4) {
            // container for hat elements
            if (i === 0) {
                createElementDiv(containerSnowmanFigureElements, containerSnowmanFigureElementHatMain);
                createElementDiv(containerSnowmanFigureElementHatMain, containerSnowmanFigureElementHatMainParts);
            }
            createElementDiv(containerSnowmanFigureElementHatMainParts, elementId);

        } else {
            createElementDiv(containerSnowmanFigureElements, elementId);
        }
        createElementDiv(elementId, snowmanFigureElementAction + valueToString(i));
    }
}