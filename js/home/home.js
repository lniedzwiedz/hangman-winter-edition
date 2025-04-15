function createMainContainerHome() {
    // createElementDiv(containerMainSectionActions, sectionHome);
    createContainerMainElements(containerMainSectionActions, sectionHome, containerMainSectionHome, containerMainHome);
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
    removeContainerMainSection();
    createMainContainerHome();
    createContainerButtonGameBuildSnowman();
    createContainersHomeButtonGameSnowman(gameNameSnowmanBuild, gameSnowmanDescriptionTextBuild);
    createContainersHomeButtonGameSnowman(gameNameSnowmanDestroy, gameSnowmanDescriptionTextDestroy);
}

function removeContainerSectionHome() {
    console.log("clicked -> removeContainerSectionHome")
    // removeElementsById(sectionHome);
    removeElementsById(containerMainSectionHome);
    // removeMainContainers();
}

function setGameSnowmanBuild() {
    console.log("clicked -> setGameSnowmanBuild")
    removeContainerMainSection();
    // removeContainerSectionHome();
    setConfigurationForGameSnowmanBuild();
}

function setGameSnowmanDestroy() {
    console.log("clicked -> gameNameSnowmanDestroy")
    removeContainerMainSection();
    // removeContainerSectionHome();
    setConfigurationForGameSnowmanDestroy();
}



