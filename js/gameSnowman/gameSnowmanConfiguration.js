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
            addElementClassNameByElementId(wordCharId, gameSnowmanElementWordToDiscoverVisibleColor);
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

gameLives = "" + "" + maxWrongShots;