function getWord() {
    // word max length 17 -> animation has 17 pieces
    const fileWithWords = "JAVA, TEST, ZESTHMM, TESTLONGXD, QWERTYUIOPASD, TESTTEST, QWERTYUI";
    const words = fileWithWords.split(", ")
    // add random index
    return words[5];

}

const word = getWord();
// const wordChar = ["J", "A", "V", "A"];
const wordChar = word.split("");


function checkCharacter(keyValue) {

    // let wordChar = ["J", "A", "V", "A"];
    // let char = "J";

    // console.log("CC keyValue = " +keyValue );
    // console.log("CC wordChar.length = " +wordChar.length );

    for (let i = 0; i < wordChar.length; i++) {

        if (keyValue === wordChar[i]) {

            return true;
        }

    }
    return false;

}

function getKeyboardChar(clickedId) {

    // let keyIdPressedByUSer =(this.id);
    let keyIdPressedByUSer = (clickedId);
    let getKeyElementPressedByUSer = document.getElementById(keyIdPressedByUSer);
    let getKeyValuePressedByUSer = getKeyElementPressedByUSer.getAttribute("value");
    // console.log("getKeyValuePressedByUSer: " + getKeyValuePressedByUSer);
    // return getKeyValuePressedByUSer;
    return getKeyElementPressedByUSer.getAttribute("value");
}

function setDiscoveredCharVisibleForUser(charToShow) {
    for (let i = 0; i < wordChar.length; i++) {
        if (charToShow === wordChar[i]) {
            document.getElementById("wordChar-" + i).innerHTML = charToShow;
        }
    }
}

let maxAnimationNumber = 7;
let indexGroups = [
    [13, 12], // cut 6 -> 2
    [11, 10], // cut 4 -> 2
    [9, 8, 7], // cut 1 -> 3 ---------------- 1
    [6, 5], // cut 7 -> 9
    [14, 15], // cut 3 -> 2 -----------------4
    // [1, 2, 3, 4], // cut 5 -> 4
    [4, 3, 2, 1], // cut 5 -> 4
    [16, 17] // cut 2 -> 2 -------------  6
];


// let animationMaxNumber = indexGroups.length - 1;
let animationMaxNumber =  wordChar.length - 1;
let animationPartToDisplay = animationMaxNumber;
// let countedCorrectShots = word.length - 1;
let countedCorrectShots =0;
let countedWrongShots = 0;
let maxContainerDivNumberToDisplay = 17;

function getAnimationMaxNumberToDisplay() {
    if (animationMaxNumber > wordChar.length - 1) {
        return animationMaxNumber
    }
    return wordChar.length - 1;
}

let indexGroups2 = [
    [13, 12, 11, 10],
    [9, 8, 7],
    [6, 5],
    [14, 15, 16, 17],
    [4, 3, 2, 1],
    [16, 17]
];


function getCharsNumberWithoutDuplicate(){

    let charsNumberWithoutDuplicate = wordChar;

   // to do


    console.log("charsNumberWithoutDuplicate = " + charsNumberWithoutDuplicate);
    return charsNumberWithoutDuplicate;
}


function getAnimationIndexGroups() {

    // let indexGroups;
    let animationMaxNumberToDisplay = getAnimationMaxNumberToDisplay()

    // 1/2/3/4 - hat
    // 5/6 - head
    // 14/15 - left - hand
    // 16/17 - right - hand

    let cutDirection = [2, 6, 4, 1, 5, 0, 3] // number index = indexGroups

    // let wordLength = 13;  // can not be lower than 7 -> start animation length (let cutNumber)
    // let charsNumber = wordChar.length;  // can not be lower than 7 -> start animation length (let cutNumber)
    let charsNumber = getCharsNumberWithoutDuplicate();  // can not be lower than 7 -> start animation length (let cutNumber)

    if(charsNumber < cutDirection.length){
        console.log("test");

    }

    if(charsNumber > cutDirection.length){
        let maxIndexToCut = 0;

        // let count = 0;
        let cutNumber = charsNumber - 7;
        let count = 1;
        // let tempCutIndexGroups = indexGroups;
        let tempCutMiddleIndexGroups = [];
        let tempStart = [];
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

        // console - only
        for (let j = 0; j < tempCutIndexGroups.length; j++) {

            console.log("j");

            for (let i = 0; i < tempCutIndexGroups[j].length; i++) {
                console.log(tempCutIndexGroups[j][i]);
            }
        }

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

                        if(j === tempCutIndexGroups.length-1){
                            newIndexGroups.push(indexGroups[i]);
                        }
                    }

                }
            }
        }

        indexGroups = newIndexGroups;

        // console.log("");
        // console.log("ALL indexGroups:      " + indexGroups);
        // console.log("ALL indexGroups.length:      " + indexGroups.length);
        //
        for (let i = 0; i < indexGroups.length; i++) {

            console.log("indexGroups["+i+"]: " + indexGroups[i]);
        }
        console.log("")

    }


    // XXX

    // console.log("indexGroups: " + indexGroups);
    //
    // let tempStartIndexGroups = indexGroups.slice(0, 2);
    // console.log("tempStartIndexGroups: " + tempStartIndexGroups);
    //
    // let tempEndIndexGroups = indexGroups.slice(3, 6);
    // console.log("tempEndIndexGroups: " + tempEndIndexGroups);

    // let cutIndexGroup = indexGroups.slice(2, 3);
    // console.log("cutIndexGroup: " + cutIndexGroup);
    //
    // let index1 = indexGroups[2].slice(0, 1);
    // console.log("index1: " + index1);
    //
    // let index2 = indexGroups[2].slice(1, 2);
    // console.log("index2: " + index2);
    //
    // let index3 = indexGroups[2].slice(2, 3);
    // console.log("index3: " + index3);

    // let allIndex = [index1, index2, index3];
    //
    // tempStartIndexGroups.push(index1, index2, index3);
    //
    // let finalIndexGroups = tempStartIndexGroups.push.apply(tempStartIndexGroups, tempEndIndexGroups);
    // console.log("finalIndexGroups: " + finalIndexGroups);
    // console.log("tempStartIndexGroups: " + tempStartIndexGroups);
    // indexGroups = tempStartIndexGroups;
    // console.log("indexGroups: " + indexGroups);
    // console.log("indexGroups: " + indexGroups[2]);
    // console.log("indexGroups: " + indexGroups[3]);
    // console.log("indexGroups: " + indexGroups[4]);


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
        console.log("countedCorrectShots = " + countedCorrectShots);
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