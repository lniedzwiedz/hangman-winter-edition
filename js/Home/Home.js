const containerMainHome = "containerMainHome";
const containerHomeGamesButtons = "containerHomeGamesButtons";

const containerGameSnowmanDescription = "containerGameSnowmanDescription";
const containerGameSnowmanWordElementText = "containerGameSnowmanWordElementText";
const gameSnowmanWordElementText = "gameSnowmanWordElementText";
const gameSnowmanDescriptionTextBuild = ["SAVE SNOWMAN", "discover colour name", "WIN GAME", "&", "snowman will change colour"];
const gameSnowmanDescriptionTextDestroy = ["DESTROY SNOWMAN", "discover colour name", "WIN GAME", "&", "snowman will change colour"];

const gameSnowmanDescription = "gameSnowmanDescription";
const gameNameSnowmanBuild = "SnowmanBuild"
const gameNameSnowmanDestroy = "SnowmanDestroy"
const sectionHome = "sectionHome"


function createSubpageHome() {
    createMainContainerHome();
    createContainerButtonGameBuildSnowman()
    createContainersHomeButtonGameSnowman(gameNameSnowmanBuild, gameSnowmanDescriptionTextBuild);
    createContainersHomeButtonGameSnowman(gameNameSnowmanDestroy, gameSnowmanDescriptionTextDestroy);
}

createSubpageHome();


function createMainContainerHome() {

    let mainElement = document.getElementsByClassName("containerMain")[0];
    let newDiv = document.createElement("div");
    mainElement.append(newDiv);
    newDiv.setAttribute("id", sectionHome);
    newDiv.classList.add("item-2")
    newDiv.classList.add("containerSectionHome")

    let newDiv2 = document.createElement("div");
    let mainElem = document.getElementById(sectionHome);
    mainElem.append(newDiv2);
    newDiv2.setAttribute("id", containerMainHome);
    newDiv2.classList.add((containerMainHome));
}

function createContainerButtonGameBuildSnowman() {
    createDiv(containerMainHome, containerHomeGamesButtons);
}

function setFunctionOnclick(elementId, functionNameOnclick) {
    document.getElementById(elementId).setAttribute("onclick", functionNameOnclick + "(this.id)");
}

function createElement(parentId, childId, elementKind) {
    let newElement = document.createElement(elementKind);
    let mainElement = document.getElementById(parentId);
    mainElement.append(newElement);
    newElement.setAttribute("id", childId);
}

function createDiv(parentId, childId) {
    createElement(parentId, childId, "div")
}

function createButton(parentId, childId) {
    createElement(parentId, childId, "button")
}

function setClassName(elementId, classname) {
    document.getElementById(elementId).classList.add(classname);
}

function removeElementsById(elementId) {
    let element = document.getElementById(elementId);
    if (element != null) {
        element.remove();
    }
}

function setClassNameHomeButtonGameSnowman(elementId, suffixText) {
    let name = containerGameSnowmanDescription + "-" + suffixText;
    document.getElementById(elementId).classList.add(name);
}

function removeContainerSectionHome() {
    removeElementsById(sectionHome);
}

function setGameSnowmanBuild() {
    console.log("clicked -> setGameSnowmanBuild")
    removeContainerSectionHome();

}

function setGameSnowmanDestroy() {
    console.log("clicked -> gameNameSnowmanDestroy")
    removeContainerSectionHome();
}

function createContainersHomeButtonGameSnowman(gameName, gameSnowmanDescriptionText) {

    let containerGameSnowmanDescriptionSpecified = containerGameSnowmanDescription + gameName;
    createDiv(containerHomeGamesButtons, containerGameSnowmanDescriptionSpecified);

    let containerButton = containerGameSnowmanDescriptionSpecified + "-gameButton";
    createDiv(containerGameSnowmanDescriptionSpecified, containerButton);
    setClassNameHomeButtonGameSnowman(containerButton, "gameButton");

    let containerButtonFiled = containerGameSnowmanDescriptionSpecified + "-gameButtonField";
    createDiv(containerButton, containerButtonFiled);
    setClassNameHomeButtonGameSnowman(containerButtonFiled, "gameButtonField");

    let containerDescription = containerGameSnowmanDescriptionSpecified + "-gameButtonText";
    createDiv(containerButtonFiled, containerDescription);
    setClassNameHomeButtonGameSnowman(containerDescription, "gameButtonText")

    let containerClick = containerGameSnowmanDescriptionSpecified + "-gameButtonClick";
    createDiv(containerButtonFiled, containerClick);
    setClassNameHomeButtonGameSnowman(containerClick, "gameButtonClick");

    let buttonId = "homeButtonGame" + gameName;
    createButton(containerClick, buttonId);
    setFunctionOnclick(buttonId, "setGame" + gameName);
    let buttonClass = "homeButtonGameSnowman";
    setClassName(buttonId, buttonClass);

    for (let i = 0; i < gameSnowmanDescriptionText.length; i++) {

        let elementId = gameSnowmanWordElementText + gameName + "-" + i;
        createDiv(containerDescription, elementId);

        let elementClass = containerGameSnowmanWordElementText + "-" + i;
        setClassName(elementId, elementClass);

        let newP = document.createElement("p");
        document.getElementById(elementId).append(newP);
        newP.innerHTML = gameSnowmanDescriptionText[i];
        newP.classList.add(gameSnowmanWordElementText);
        newP.classList.add(gameSnowmanWordElementText + "-" + i);

    }

}

