function createMainContainerHome() {
    createContainerMainElements(containerMainSectionActions, sectionHome, containerMainSectionHome, containerHomeMain);
}

function createContainerButtonGameBuildSnowman() {
    createElementDiv(containerHomeMain, containerHomeMainParts);
}

function setClassNameHomeButtonGameSnowman(elementId, suffixText) {
    let name = containerHomeGameSnowmanDescription + "-" + suffixText;
    setElementClassNameByElementId(elementId, name);
}

function createContainersHomeButtonGameSnowman(gameName, gameSnowmanDescriptionText, functionNameOnclickSetConfigurationForGameSnowman) {

    let containerGameSnowmanDescriptionSpecified = containerHomeGameSnowmanDescription + gameName + "Main";
    createElementDiv(containerHomeMainParts, containerGameSnowmanDescriptionSpecified);

    let containerButton = containerGameSnowmanDescriptionSpecified + "Parts";
    createElementDiv(containerGameSnowmanDescriptionSpecified, containerButton);
    setElementClassNameByElementId(containerButton, containerHomeButtonParts);

    let containerClick = containerGameSnowmanDescriptionSpecified + "-gameButtonClick";
    createElementDiv(containerButton, containerClick);
    setClassNameHomeButtonGameSnowman(containerClick, "gameButtonClick");

    let buttonId = "homeButtonGame" + gameName;
    createElementButton(containerClick, buttonId);
    setFunctionOnclickByElementId(buttonId, functionNameOnclickSetConfigurationForGameSnowman);
    setElementClassNameByElementId(buttonId, homeButtonGameSnowman);
    setElementClassNameByElementId(buttonId, containerHomeButtonDescriptionGameSnowman);

    for (let i = 0; i < gameSnowmanDescriptionText.length; i++) {

        let elementId = homeButtonDescriptionElementTextLine + gameName + "-" + i;
        createElementDiv(buttonId, elementId);

        let elementClass = containerHomeButtonDescriptionElementText + "-" + i;
        setElementClassNameByElementId(elementId, elementClass);

        let pId = "homeButtonText" + gameName + "-" + i;
        createElementP(elementId, pId);
        setElementClassNameByElementId( pId, homeButtonDescriptionElementTextLine);
        setElementClassNameByElementId( pId, homeButtonDescriptionElementTextLine + "-" + i);
        setElementTextById(pId,  gameSnowmanDescriptionText[i]);
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