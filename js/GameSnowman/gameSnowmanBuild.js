function getWord() {
    // word max length 17 -> animation has 17 pieces
    const fileWithWords = "JAVA, TEST, ZESTHMM, TESTLONGXD";
    const words = fileWithWords.split(", ")
    // add random index
    return words[3];

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
    [1, 2, 3],
    [4, 5],
    [6],
    [7, 8],
    [9],
    [10],
    [11, 12]

];
let animationMaxNumber = indexGroups.length - 1;
let animationPartToDisplay = animationMaxNumber;
let wordLength = word.length;
let countedCorrectShots = word.length;
let countedWrongShots = 0;
let maxContainerDivNumberToDisplay = 17;

function getAnimationMaxNumberToDisplay() {
    if (animationMaxNumber > wordLength) {
        return animationMaxNumber
    }
    return wordLength;
}


function getAnimationIndexGroups() {

    let indexGroups;
    let animationMaxNumberToDisplay = getAnimationMaxNumberToDisplay()

    // 1/2/3/4 - hat
    // 5/6 - head
    // 14/15 - left - hand
    // 16/17 - right - hand

    indexGroups = [
        [13, 12], // cut 6 -> 2
        [10, 11], // cut 4 -> 2
        [7, 8, 9], // cut 1 -> 3
        [5, 6], // cut 7 -> 9
        [14, 15], // cut 3 -> 2
        [1, 2, 3, 4], // cut 5 -> 4
        [16, 17] // cut 2 -> 2
    ];

    if(animationMaxNumber <= animationMaxNumberToDisplay){

        // indexGroups = indexGroups - line 99
    }
    else{

         let differenc = animationMaxNumberToDisplay - animationMaxNumber;


         // new array after cut

    }


}

function playGameSnowmanBuild(clickedId) {

    // let keyIdPressedByUSer = "J"
    // let wordChar = ["A", "A", "V", "A"];

    let keyValue = getKeyboardChar(clickedId);
    // console.log("clickedId = " + clickedId );

    let isCharExist = checkCharacter(keyValue);

    if (isCharExist) {

        // console.log(" char === word" );
        setDiscoveredCharVisibleForUser(keyValue);

        console.log("animationPartToDisplay = " + animationPartToDisplay);
        setSnowmanPartVisible(animationPartToDisplay);
        countedCorrectShots += 1;
        animationPartToDisplay -= 1;
    } else {
        countedWrongShots += 1;
    }
}

function setSnowmanPartVisible(maxAnimationNumber) {

    let tempChangeColor = "orange";

    let indexGropup = indexGroups[animationPartToDisplay];

    for (let i = 0; i < indexGropup.length; i++) {
        let index = indexGropup[i];

        console.log("index = " + index);

        let parent = document.getElementById("containerSnowmanFigureElements-gameSnowman");
        let child = parent.getElementsByClassName("containerSnowmanFigureElement-" + index);
        let grandChild = child[0].getElementsByClassName("snowmanFigureElementAction-" + index);
        grandChild[0].setAttribute("style", "background-color:#A05880");

    }


}

// playGameSnowmanBuild();

// create buttons for word

function createContainersForWord(elementId) {

    // const word = "JAVA";
    // let wordLength

    let parentElement = document.getElementById(elementId)

    let rowStart = 3;
    let columntStart = 2;
    let rowEnd = 4;
    let columntEnd = 3;

    parentElement.style.display = "grid";
    parentElement.style.backgroundColor = "black";
    parentElement.style.gridRow = rowStart;
    parentElement.style.gridColumn = columntStart;
    parentElement.style.gridRowEnd = rowEnd;
    parentElement.style.gridColumnEnd = columntEnd;
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
    let columntChildStart = 2;
    let rowChildEnd = 2;
    let columntChildEnd = 3;


    for (let i = 0; i < word.length; i++) {

        var newDiv = document.createElement("div");
        document.getElementById(elementId).append(newDiv);
        parentElement.append(newDiv);
        newDiv.style.display = "grid";
        newDiv.style.backgroundColor = "orange";
        newDiv.style.gridRow = rowChildStart;
        newDiv.style.gridColumn = columntChildStart;
        newDiv.style.gridRowEnd = rowChildEnd;
        newDiv.style.gridColumnEnd = columntChildEnd;
        newDiv.style.gridTemplateRows = "1fr";
        newDiv.style.gridTemplateColumns = "1fr";
        //
        // newDiv.value = keysLine[i];
        // newDiv.innerHTML += keysLine[i];
        // newDiv.classList.add("snowmanKeyboard")

        newDiv.setAttribute("id", "wordChar-" + i);

        columntChildStart += 3;
        columntChildEnd += 3;

    }


}

// createContainersForDescription("containerGameSnowmanWordToDiscover");
createContainersForWord("containerGameSnowmanWordToDiscover");