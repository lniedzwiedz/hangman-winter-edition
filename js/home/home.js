function createMainContainerHome() {
    createContainerMainElements(containerMainSectionActions, sectionHome, containerMainSectionHome, containerHomeMain);
}

function createContainerButtonGameBuildSnowman() {
    createElementDiv(containerHomeMain, containerHomeMainParts);
}

function setClassNameHomeButtonGameSnowman(elementId, suffixText) {
    let name = containerHomeGameSnowmanDescription + "-" + suffixText;
    document.getElementById(elementId).classList.add(name);
}

function createContainersHomeButtonGameSnowman(gameName, gameSnowmanDescriptionText, functionNameOnclickSetConfigurationForGameSnowman) {

    let containerGameSnowmanDescriptionSpecified = containerHomeGameSnowmanDescription + gameName + "Main";
    createElementDiv(containerHomeMainParts, containerGameSnowmanDescriptionSpecified);

    let containerButton = containerGameSnowmanDescriptionSpecified + "Parts";
    createElementDiv(containerGameSnowmanDescriptionSpecified, containerButton);
    setElementClassName(containerButton, containerHomeButtonParts);

    let containerClick = containerGameSnowmanDescriptionSpecified + "-gameButtonClick";
    createElementDiv(containerButton, containerClick);
    setClassNameHomeButtonGameSnowman(containerClick, "gameButtonClick");

    let buttonId = "homeButtonGame" + gameName;
    createElementButton(containerClick, buttonId);
    setFunctionOnclick(buttonId, functionNameOnclickSetConfigurationForGameSnowman);
    setElementClassName(buttonId, homeButtonGameSnowman);
    setElementClassName(buttonId, containerHomeButtonDescriptionGameSnowman);

    for (let i = 0; i < gameSnowmanDescriptionText.length; i++) {

        let elementId = homeButtonDescriptionElementTextLine + gameName + "-" + i;
        createElementDiv(buttonId, elementId);

        let elementClass = containerHomeButtonDescriptionElementText + "-" + i;
        setElementClassName(elementId, elementClass);

        let newP = document.createElement("p");
        document.getElementById(elementId).append(newP);
        newP.innerHTML = gameSnowmanDescriptionText[i];
        newP.classList.add(homeButtonDescriptionElementTextLine);
        newP.classList.add(homeButtonDescriptionElementTextLine + "-" + i);
    }
}

function createSubpageHome() {
    removeContainerMainSection();
    createMainContainerHome();
    createContainerButtonGameBuildSnowman();
    createContainersHomeButtonGameSnowman(homeGameNameSnowmanBuild, homeDescriptionTextSnowmanBuild, functionNameOnclickSetConfigurationForGameSnowmanBuild);
    createContainersHomeButtonGameSnowman(homeGameNameSnowmanDestroy, homeDescriptionTextSnowmanDestroy, functionNameOnclickSetConfigurationForGameSnowmanDestroy);
}

function removeContainerSectionHome() {
    removeElementsById(containerMainSectionHome);
}