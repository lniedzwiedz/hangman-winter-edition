function getWord() {
    // word max length 17 -> animation has 17 pieces
    const fileWithWords = "JAVA, TEST, QWERTYU, TESTLONGXD, QWERTYUIOPASD, " +
        "TESTTEST, TESTTESZ, TESTTEQZ, TESTTQAZ";
    const words = fileWithWords.split(", ")
    // add random index
    return words[4];

}

const word = getWord();


function getCharsNumber() {
    return word.split("");
}

function getCharsNumberWithoutDuplicate() {

    // console.log("wordChar = " + wordChar);

    let temWord = word;
    let finalChar = temWord.substring(0, 1);

    for (let i = 1; i < word.length; i++) {

        let char = temWord.substring(i, i + 1);
        // console.log("char = " + char)

        // for (let j = 0; j < finalChar.length; j++) {
        //
        // let char2 = finalChar[j];
        // let result = char.localeCompare(char2);
        // console.log("result = " + j + " " + result);
        //
        // if(result < 0){
        //     console.log("result = " + j + " " + result);
        //     finalChar = finalChar + char;
        // }

        // console.log("finalChar.includes(char) = " + finalChar.includes(char));

        if (!finalChar.includes(char)) {
            finalChar = finalChar + char;
        }
        // else{
        // finalChar = finalChar + char;
        // }
        // }

    }

    console.log("finalChar = " + finalChar);
    return finalChar.split("");

}

const wordChar = getCharsNumber();
const wordCharsWithoutDuplicate = getCharsNumberWithoutDuplicate();


function checkCharacter(keyValue) {
    for (let i = 0; i < wordChar.length; i++) {
        if (keyValue === wordChar[i])
            return true;
    }
    return false;
}

function getKeyboardChar(clickedId) {
    let keyIdPressedByUSer = (clickedId);
    let getKeyElementPressedByUSer = document.getElementById(keyIdPressedByUSer);
    // let getKeyValuePressedByUSer = getKeyElementPressedByUSer.getAttribute("value");
    return getKeyElementPressedByUSer.getAttribute("value");

    // remove from button onclick="playGameSnowmanBuild(this.id) after clicked, change color, disable -> button
}

function setDiscoveredCharVisibleForUser(charToShow) {
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

// rename
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


        // let count = 0;
        // let tempCutIndexGroups = [[]];
        // let cutDirectionNew = [0, 2];
        cutDirection = cutDirection2;

        // console.log("cutNumber = " + cutNumber);
        // console.log("indexGroups.length = " + indexGroups.length);

        // let indnexCut = 0;

        // if(cutNumber === 0) {
        //     // indexGroups = indexGroups2;
        // }
        //
        // else
        if (cutNumber > 0 && cutNumber <= indexGroups.length) {
            //  if((cutNumber !== 0) && (cutNumber <=  indexGroups.length)){

            let tempCutIndexGroups = getAnimationIndexGroupWhenWordCharsNumberWithoutDuplicateIsLowerThanBaseCutDirectionNumber(cutNumber);


            // console.log(" ??? ");
            // let indnexCut = 0;
            //
            // for (let i = 0; i < cutDirection.length; i++) {
            //
            //     let tempMiddleIndexGroups = indexGroups[cutDirection[i]];
            //     let tempCutMiddleIndexGroups = [[]];
            //
            //
            //     if (count < cutNumber) {
            //
            //         for (let j = 0; j < tempMiddleIndexGroups.length; j++) {
            //
            //
            //                 if (count < cutNumber) {
            //                     // console.log("A indnexCut = " + indnexCut + " indnexCut + 2 = " + (indnexCut + 2))
            //                     // let index = tempMiddleIndexGroups.slice(indnexCut, indnexCut + 2);
            //                     let index = tempMiddleIndexGroups.slice(indnexCut, indnexCut + 2);
            //                     indnexCut+= 2;
            //                     // console.log("A indnexCut = " + indnexCut);
            //                     tempCutMiddleIndexGroups[j] = index;
            //                     // console.log("A tempCutMiddleIndexGroups[j] = " + tempCutMiddleIndexGroups[j]);
            //
            //
            //
            //                     count = count + 1;
            //                 } else {
            //
            //                     let index = tempMiddleIndexGroups.slice(j, tempMiddleIndexGroups.length);
            //
            //                     tempCutMiddleIndexGroups[j] = index;
            //                     count = count + 100;
            //                     break;
            //
            //                 }
            //
            //             console.log(tempCutIndexGroups[j]);
            //         }
            //
            //         tempCutIndexGroups[i] = tempCutMiddleIndexGroups;
            //     }
            //
            // }


            indexGroups = getNewIndexGroups(tempCutIndexGroups);

            // let newIndexGroups = [];
            //
            // for (let i = 0; i < indexGroups.length; i++) {
            //
            //     let finishCut = 0;
            //
            //     for (let j = 0; j < tempCutIndexGroups.length; j++) {
            //
            //         if (finishCut === 0) {
            //
            //             if (cutDirection[j] === i) {
            //                 cutDirection[j] = 77;
            //
            //                 for (let i = 0; i < tempCutIndexGroups[j].length; i++) {
            //                     newIndexGroups.push(tempCutIndexGroups[j][i])
            //                 }
            //
            //                 finishCut += 100;
            //             } else {
            //
            //                 if (j === tempCutIndexGroups.length - 1) {
            //                     newIndexGroups.push(indexGroups[i]);
            //                 }
            //             }
            //
            //         }
            //     }
            // }
            //
            // indexGroups = newIndexGroups;

            // for (let i = 0; i < indexGroups.length; i++) {
            //
            //     console.log("indexGroups[" + i + "]: " + indexGroups[i]);
            // }
            // console.log("")

        }


    } else if (wordCharsWithoutDuplicate.length > cutDirection.length) {

        indexGroups = indexGroups1;

        // let maxIndexToCut = 0;

        let tempCutIndexGroups = getAnimationIndexGroupWhenWordCharsNumberWithoutDuplicateIsBiggerThanBaseCutDirectionNumber();
        // let cutNumber = wordCharsWithoutDuplicate.length - 7;
        // let cutNumber = wordCharsWithoutDuplicate.length - cutDirection.length;
        // let count = 1;
        // // let tempCutMiddleIndexGroups = [];
        // // let tempStart = [];
        // // let tempCutIndexGroups = [[]];
        //
        // for (let i = 0; i < cutDirection.length; i++) {
        //
        //     let tempMiddleIndexGroups = indexGroups[cutDirection[i]];
        //     let tempCutMiddleIndexGroups = [[]];
        //
        //     if (tempMiddleIndexGroups.length >= 2) {
        //         cutNumber = cutNumber + 1;
        //     } else {
        //
        //     }
        //
        //     if (count < cutNumber) {
        //
        //         for (let j = 0; j < tempMiddleIndexGroups.length; j++) {
        //
        //             if (count < cutNumber) {
        //                 let index = tempMiddleIndexGroups.slice(j, j + 1);
        //
        //                 tempCutMiddleIndexGroups[j] = index;
        //                 count = count + 1;
        //             } else {
        //
        //                 let index = tempMiddleIndexGroups.slice(j, tempMiddleIndexGroups.length);
        //
        //                 tempCutMiddleIndexGroups[j] = index;
        //                 count = count + 100;
        //                 break;
        //
        //             }
        //         }
        //
        //         tempCutIndexGroups[i] = tempCutMiddleIndexGroups;
        //     }
        // }

        // console - only
        // for (let j = 0; j < tempCutIndexGroups.length; j++) {
        //
        //     console.log("j");
        //
        //     for (let i = 0; i < tempCutIndexGroups[j].length; i++) {
        //         console.log(tempCutIndexGroups[j][i]);
        //     }
        // }

        indexGroups = getNewIndexGroups(tempCutIndexGroups);

        // let newIndexGroups = [];
        //
        // for (let i = 0; i < indexGroups.length; i++) {
        //
        //     let finishCut = 0;
        //
        //     for (let j = 0; j < tempCutIndexGroups.length; j++) {
        //
        //         if (finishCut === 0) {
        //
        //             if (cutDirection[j] === i) {
        //                 cutDirection[j] = 77;
        //
        //                 for (let i = 0; i < tempCutIndexGroups[j].length; i++) {
        //                     newIndexGroups.push(tempCutIndexGroups[j][i])
        //                 }
        //
        //                 finishCut += 100;
        //             } else {
        //
        //                 if (j === tempCutIndexGroups.length - 1) {
        //                     newIndexGroups.push(indexGroups[i]);
        //                 }
        //             }
        //
        //         }
        //     }
        // }
        //
        // indexGroups = newIndexGroups;

        // console.log("");
        // console.log("ALL indexGroups:      " + indexGroups);
        // console.log("ALL indexGroups.length:      " + indexGroups.length);
        //
        // for (let i = 0; i < indexGroups.length; i++) {
        //
        //     console.log("indexGroups[" + i + "]: " + indexGroups[i]);
        // }
        // console.log("")
    }

}

getAnimationIndexGroups(); // remove

function playGameSnowmanBuild(clickedId) {


    let keyValue = getKeyboardChar(clickedId);
    // console.log("clickedId = " + clickedId );

    let isCharExist = checkCharacter(keyValue);

    if (isCharExist) {

        // console.log(" char === word" );
        setDiscoveredCharVisibleForUser(keyValue);

        // console.log("animationPartToDisplay = " + animationPartToDisplay);
        // console.log("countedCorrectShots = " + countedCorrectShots);
        setSnowmanPartVisible();
        countedCorrectShots += 1;
        // animationPartToDisplay -= 1;
    } else {
        countedWrongShots += 1;
    }
}

let countedAnimationElements = 0;

function setSnowmanPartVisible() {

    let tempChangeColor = "orange";

    console.log("countedAnimationElements = " + countedAnimationElements);
    let indexGroup = indexGroups[countedAnimationElements];
    console.log("indexGroups[countedAnimationElements] = " + indexGroups[countedAnimationElements]);

    for (let i = 0; i < indexGroup.length; i++) {
        let index = indexGroup[i];

        console.log("index = " + index);

        let parent = document.getElementById("containerSnowmanFigureElements-gameSnowman");
        let child = parent.getElementsByClassName("containerSnowmanFigureElement-" + index);
        let grandChild = child[0].getElementsByClassName("snowmanFigureElementAction-" + index);
        grandChild[0].setAttribute("style", "background-color:#A05880");


    }
    countedAnimationElements += 1;

}

// playGameSnowmanBuild();

// create buttons for word

function createContainersForWord(elementId) {

    // const word = "JAVA";
    // let wordLength

    let parentElement = document.getElementById(elementId)

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

        var newDiv = document.createElement("div");
        document.getElementById(elementId).append(newDiv);
        parentElement.append(newDiv);
        newDiv.style.display = "grid";
        newDiv.style.backgroundColor = "orange";
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

// createContainersForDescription("containerGameSnowmanWordToDiscover");
createContainersForWord("containerGameSnowmanWordToDiscover");