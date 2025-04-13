function createMainContainerHome() {

    // let mainElement = document.getElementsByClassName(containerMain)[0];
    // let newDiv = document.createElement("div");
    // mainElement.append(newDiv);
    // newDiv.setAttribute("id", sectionHome);
    // newDiv.classList.add("item-2")
    // newDiv.classList.add(containerSectionHome)
    //
    // let newDiv2 = document.createElement("div");
    // let mainElem = document.getElementById(sectionHome);
    // mainElem.append(newDiv2);
    // newDiv2.setAttribute("id", containerMainHome);
    // newDiv2.classList.add((containerMainHome));

    createContainerMainElements(sectionHome, containerSectionHome, containerMainHome);
}

function createContainerButtonGameBuildSnowman() {
    createElementDiv(containerMainHome, containerHomeGamesButtons);
}

function setClassNameHomeButtonGameSnowman(elementId, suffixText) {
    let name = containerGameSnowmanDescription + "-" + suffixText;
    document.getElementById(elementId).classList.add(name);
}

function createContainersHomeButtonGameSnowman(gameName, gameSnowmanDescriptionText) {

    let containerGameSnowmanDescriptionSpecified = containerGameSnowmanDescription + gameName;
    createElementDiv(containerHomeGamesButtons, containerGameSnowmanDescriptionSpecified);

    let containerButton = containerGameSnowmanDescriptionSpecified + "-gameButton";
    createElementDiv(containerGameSnowmanDescriptionSpecified, containerButton);
    setClassNameHomeButtonGameSnowman(containerButton, "gameButton");

    let containerButtonFiled = containerGameSnowmanDescriptionSpecified + "-gameButtonField";
    createElementDiv(containerButton, containerButtonFiled);
    setClassNameHomeButtonGameSnowman(containerButtonFiled, "gameButtonField");

    let containerDescription = containerGameSnowmanDescriptionSpecified + "-gameButtonText";
    createElementDiv(containerButtonFiled, containerDescription);
    setClassNameHomeButtonGameSnowman(containerDescription, "gameButtonText")

    let containerClick = containerGameSnowmanDescriptionSpecified + "-gameButtonClick";
    createElementDiv(containerButtonFiled, containerClick);
    setClassNameHomeButtonGameSnowman(containerClick, "gameButtonClick");

    let buttonId = "homeButtonGame" + gameName;
    createElementButton(containerClick, buttonId);
    setFunctionOnclick(buttonId, "setGame" + gameName);
    setClassName(buttonId, homeButtonGameSnowman);

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

function createSubpageHome() {
    createMainContainerHome();
    createContainerButtonGameBuildSnowman();
    createContainersHomeButtonGameSnowman(gameNameSnowmanBuild, gameSnowmanDescriptionTextBuild);
    createContainersHomeButtonGameSnowman(gameNameSnowmanDestroy, gameSnowmanDescriptionTextDestroy);
}

function removeContainerSectionHome() {
    removeElementsById(sectionHome);
}

function setGameSnowmanBuild() {
    console.log("clicked -> setGameSnowmanBuild")
    removeMainContainers();
    // removeContainerSectionHome();
    setConfigurationForGameSnowmanBuild();
}

function setGameSnowmanDestroy() {
    console.log("clicked -> gameNameSnowmanDestroy")
    removeMainContainers();
    // removeContainerSectionHome();
    setConfigurationForGameSnowmanDestroy();
}

