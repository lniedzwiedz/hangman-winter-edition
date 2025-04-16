function createMainContainerHome() {
    createContainerMainElements(containerMainSectionActions, sectionHome, containerMainSectionHome, containerMainHome);
}

function createContainerButtonGameBuildSnowman() {
    createElementDiv(containerMainHome, containerHomeGamesButtons);
}

function setClassNameHomeButtonGameSnowman(elementId, suffixText) {
    let name = containerGameSnowmanDescription + "-" + suffixText;
    document.getElementById(elementId).classList.add(name);
}

function createContainersHomeButtonGameSnowman(gameName, gameSnowmanDescriptionText, functionNameOnclickSetConfigurationForGameSnowman) {

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
    setFunctionOnclick(buttonId, functionNameOnclickSetConfigurationForGameSnowman);
    setElementClassName(buttonId, homeButtonGameSnowman);

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

function createSubpageHome() {
    removeContainerMainSection();
    createMainContainerHome();
    createContainerButtonGameBuildSnowman();
    createContainersHomeButtonGameSnowman(gameNameSnowmanBuild, gameSnowmanDescriptionTextBuild, functionNameOnclickSetConfigurationForGameSnowmanBuild);
    createContainersHomeButtonGameSnowman(gameNameSnowmanDestroy, gameSnowmanDescriptionTextDestroy, functionNameOnclickSetConfigurationForGameSnowmanDestroy);
}

function removeContainerSectionHome() {
    removeElementsById(containerMainSectionHome);
}




