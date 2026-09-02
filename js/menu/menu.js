function createMenu() {
    createContainerMainMenu();
    createContainerMainMenuParts();
    createContainerManuTitle();
    createContainerMenuButtons();
}

function createContainerMainMenu() {
    createContainerMainElements(containerMainSectionMenu, sectionMenu, containerSectionMenu, containerMenuMain);
}

function createContainerMainMenuParts() {
    createElementDivWithTheSameValueForIdAndClassName(containerMenuMain, containerMenuMainParts);
}

function createContainerManuTitle() {
    createElementDivWithTheSameValueForIdAndClassName(containerMenuMainParts, containerMenuTitleMain);
    createElementDiv(containerMenuTitleMain, containerMenuTitleMainPairs);
    addElementClassNameByElementId(containerMenuTitleMainPairs, containerMenuTitleMainPairs);

    // game menu title
    createElementDiv(containerMenuTitleMainPairs, containerMenuTitleText);
    addElementClassNameByElementId(containerMenuTitleText, containerMenuTitleText);
    createElementP(containerMenuTitleText, menuTitleText);
    addElementClassNameByElementId(menuTitleText, menuTitleText);
    setElementTextById(menuTitleText, menuTitleTextDisplay);

    // game menu title description
    createElementDiv(containerMenuTitleMainPairs, containerMenuTitleDescription);
    addElementClassNameByElementId(containerMenuTitleMainPairs, containerMenuTitleMainPairs);
    addElementClassNameByElementId(containerMenuTitleDescription, containerMenuTitleDescription);
    createElementP(containerMenuTitleDescription, menuTitleDescriptionText);
    addElementClassNameByElementId(menuTitleDescriptionText, menuTitleDescriptionText);
    setElementTextById(menuTitleDescriptionText, menuTitleDescriptionTextDisplayMediaQueryMaxWidthDefault);
}

function createContainerMenuButtons() {
    createElementDivWithTheSameValueForIdAndClassName(containerMenuMainParts, containerMenuButtonsMain);
    createElementDivWithTheSameValueForIdAndClassName(containerMenuButtonsMain, containerMenuButtonsMainParts);
    createContainerMenuButtonHome();
    createContainerMenuButtonGameSnowmanBuild();
    createContainerMenuButtonGameSnowmanDestroy();
}

function createContainerMenuButtonHome() {
    createElementDiv(containerMenuButtonsMainParts, containerMenuButtonHomeMain);

    // button
    createElementButton(containerMenuButtonHomeMain, containerMenuButtonHomeMainParts);
    addElementClassNameByElementId(containerMenuButtonHomeMainParts, containerMenuButtonHome);
    addElementClassNameByElementId(containerMenuButtonHomeMainParts, menuButtonClick);
    setFunctionOnclickByElementId(containerMenuButtonHomeMainParts, functionNameOnclickCreateSubpageHome);

    // text
    createElementDiv(containerMenuButtonHomeMainParts, containerMenuButtonHomeTextDisplay);
    addElementClassNameByElementId(containerMenuButtonHomeTextDisplay, containerMenuButtonHomeTextDisplay);
    createElementP(containerMenuButtonHomeTextDisplay, menuButtonHomeText);
    addElementClassNameByElementId(menuButtonHomeText, menuButtonText);
    setElementTextById(menuButtonHomeText, menuButtonHomeTextDisplay);

    // icon
    createElementDiv(containerMenuButtonHomeMainParts, containerMenuButtonHomeIconDisplay);
    addElementClassNameByElementId(containerMenuButtonHomeIconDisplay, containerMenuButtonHomeIconDisplay);
    createElementI(containerMenuButtonHomeIconDisplay, menuButtonHomeIcon, menuButtonHomeIconStyle, menuButtonHomeIconName);
}

function createContainerMenuButtonGameSnowmanBuild() {
    createElementDiv(containerMenuButtonsMainParts, containerMenuButtonGameSnowmanBuildMain);

    // button
    createElementButton(containerMenuButtonGameSnowmanBuildMain, menuButtonGameSnowmanBuildClick);
    addElementClassNameByElementId(menuButtonGameSnowmanBuildClick, containerMenuButtonGameSnowmanBuild);
    addElementClassNameByElementId(menuButtonGameSnowmanBuildClick, menuButtonClick);
    setFunctionOnclickByElementId(menuButtonGameSnowmanBuildClick, functionNameOnclickSetConfigurationForGameSnowmanBuild);

    // text
    createElementDiv(menuButtonGameSnowmanBuildClick, containerMenuButtonGameSnowmanBuildTextDisplay);
    addElementClassNameByElementId(containerMenuButtonGameSnowmanBuildTextDisplay, containerMenuButtonGameSnowmanBuildTextDisplay);
    createElementP(containerMenuButtonGameSnowmanBuildTextDisplay, menuButtonGameSnowmanBuildText);
    addElementClassNameByElementId(menuButtonGameSnowmanBuildText, menuButtonText);
    setElementTextById(menuButtonGameSnowmanBuildText, menuButtonGameSnowmanBuildTextDisplay);

    createElementDiv(menuButtonGameSnowmanBuildClick, containerMenuButtonGameSnowmanBuildIconDisplay);
    addElementClassNameByElementId(containerMenuButtonGameSnowmanBuildIconDisplay, containerMenuButtonGameSnowmanBuildIconDisplay);
    createElementI(containerMenuButtonGameSnowmanBuildIconDisplay, menuButtonGameSnowmanBuildIcon, menuButtonGameSnowmanBuildIconStyle, menuButtonGameSnowmanBuildIconName);
}

function createContainerMenuButtonGameSnowmanDestroy() {
    createElementDiv(containerMenuButtonsMainParts, containerMenuButtonGameSnowmanDestroyMain);

    // button
    createElementButton(containerMenuButtonGameSnowmanDestroyMain, menuButtonGameSnowmanDestroyClick);
    addElementClassNameByElementId(menuButtonGameSnowmanDestroyClick, containerMenuButtonGameSnowmanDestroy);
    addElementClassNameByElementId(menuButtonGameSnowmanDestroyClick, menuButtonClick);
    setFunctionOnclickByElementId(menuButtonGameSnowmanDestroyClick, functionNameOnclickSetConfigurationForGameSnowmanDestroy);

    // text
    createElementDiv(menuButtonGameSnowmanDestroyClick, containerMenuButtonGameSnowmanDestroyTextDisplay);
    addElementClassNameByElementId(containerMenuButtonGameSnowmanDestroyTextDisplay, containerMenuButtonGameSnowmanDestroyTextDisplay)
    createElementP(containerMenuButtonGameSnowmanDestroyTextDisplay, menuButtonGameSnowmanDestroyText);
    addElementClassNameByElementId(menuButtonGameSnowmanDestroyText, menuButtonText);
    setElementTextById(menuButtonGameSnowmanDestroyText, menuButtonGameSnowmanDestroyTextDisplay);

    // icon
    createElementDiv(menuButtonGameSnowmanDestroyClick, containerMenuButtonGameSnowmanDestroyIconDisplay);
    addElementClassNameByElementId(containerMenuButtonGameSnowmanDestroyIconDisplay, containerMenuButtonGameSnowmanDestroyIconDisplay);
    createElementI(containerMenuButtonGameSnowmanDestroyIconDisplay, menuButtonGameSnowmanDestroyIcon, menuButtonGameSnowmanDestroyIconStyle, menuButtonGameSnowmanDestroyIconName);
}