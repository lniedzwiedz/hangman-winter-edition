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
    setElementClassNameByElementId(containerMenuTitleMainPairs, containerMenuTitleMainPairs);

    // game menu title
    createElementDiv(containerMenuTitleMainPairs, containerMenuTitleText);
    setElementClassNameByElementId(containerMenuTitleText, containerMenuTitleText);
    createElementP(containerMenuTitleText, menuTitleText);
    setElementClassNameByElementId(menuTitleText, menuTitleText);
    setElementTextById(menuTitleText, menuTitleTextDisplay);

    // game menu title description
    createElementDiv(containerMenuTitleMainPairs, containerMenuTitleDescription);
    setElementClassNameByElementId(containerMenuTitleMainPairs, containerMenuTitleMainPairs);
    setElementClassNameByElementId(containerMenuTitleDescription, containerMenuTitleDescription);
    createElementP(containerMenuTitleDescription, menuTitleDescriptionText);
    setElementClassNameByElementId(menuTitleDescriptionText, menuTitleDescriptionText);
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
    setElementClassNameByElementId(containerMenuButtonHomeMainParts, containerMenuButtonHome);
    setElementClassNameByElementId(containerMenuButtonHomeMainParts, menuButtonClick);
    setFunctionOnclickByElementId(containerMenuButtonHomeMainParts, functionNameOnclickCreateSubpageHome);

    // text
    createElementDiv(containerMenuButtonHomeMainParts, containerMenuButtonHomeTextDisplay);
    setElementClassNameByElementId(containerMenuButtonHomeTextDisplay, containerMenuButtonHomeTextDisplay);
    createElementP(containerMenuButtonHomeTextDisplay, menuButtonHomeText);
    setElementClassNameByElementId(menuButtonHomeText, menuButtonText);
    setElementTextById(menuButtonHomeText, menuButtonHomeTextDisplay);

    // icon
    createElementDiv(containerMenuButtonHomeMainParts, containerMenuButtonHomeIconDisplay);
    setElementClassNameByElementId(containerMenuButtonHomeIconDisplay, containerMenuButtonHomeIconDisplay);
    createElementI(containerMenuButtonHomeIconDisplay, menuButtonHomeIcon, menuButtonHomeIconStyle, menuButtonHomeIconName);
}

function createContainerMenuButtonGameSnowmanBuild() {
    createElementDiv(containerMenuButtonsMainParts, containerMenuButtonGameSnowmanBuildMain);

    // button
    createElementButton(containerMenuButtonGameSnowmanBuildMain, menuButtonGameSnowmanBuildClick);
    setElementClassNameByElementId(menuButtonGameSnowmanBuildClick, containerMenuButtonGameSnowmanBuild);
    setElementClassNameByElementId(menuButtonGameSnowmanBuildClick, menuButtonClick);
    setFunctionOnclickByElementId(menuButtonGameSnowmanBuildClick, functionNameOnclickSetConfigurationForGameSnowmanBuild);

    // text
    createElementDiv(menuButtonGameSnowmanBuildClick, containerMenuButtonGameSnowmanBuildTextDisplay);
    setElementClassNameByElementId(containerMenuButtonGameSnowmanBuildTextDisplay, containerMenuButtonGameSnowmanBuildTextDisplay);
    createElementP(containerMenuButtonGameSnowmanBuildTextDisplay, menuButtonGameSnowmanBuildText);
    setElementClassNameByElementId(menuButtonGameSnowmanBuildText, menuButtonText);
    setElementTextById(menuButtonGameSnowmanBuildText, menuButtonGameSnowmanBuildTextDisplay);

    createElementDiv(menuButtonGameSnowmanBuildClick, containerMenuButtonGameSnowmanBuildIconDisplay);
    setElementClassNameByElementId(containerMenuButtonGameSnowmanBuildIconDisplay, containerMenuButtonGameSnowmanBuildIconDisplay);
    createElementI(containerMenuButtonGameSnowmanBuildIconDisplay, menuButtonGameSnowmanBuildIcon, menuButtonGameSnowmanBuildIconStyle, menuButtonGameSnowmanBuildIconName);
}

function createContainerMenuButtonGameSnowmanDestroy() {
    createElementDiv(containerMenuButtonsMainParts, containerMenuButtonGameSnowmanDestroyMain);

    // button
    createElementButton(containerMenuButtonGameSnowmanDestroyMain, menuButtonGameSnowmanDestroyClick);
    setElementClassNameByElementId(menuButtonGameSnowmanDestroyClick, containerMenuButtonGameSnowmanDestroy);
    setElementClassNameByElementId(menuButtonGameSnowmanDestroyClick, menuButtonClick);
    setFunctionOnclickByElementId(menuButtonGameSnowmanDestroyClick, functionNameOnclickSetConfigurationForGameSnowmanDestroy);

    // text
    createElementDiv(menuButtonGameSnowmanDestroyClick, containerMenuButtonGameSnowmanDestroyTextDisplay);
    setElementClassNameByElementId(containerMenuButtonGameSnowmanDestroyTextDisplay, containerMenuButtonGameSnowmanDestroyTextDisplay)
    createElementP(containerMenuButtonGameSnowmanDestroyTextDisplay, menuButtonGameSnowmanDestroyText);
    setElementClassNameByElementId(menuButtonGameSnowmanDestroyText, menuButtonText);
    setElementTextById(menuButtonGameSnowmanDestroyText, menuButtonGameSnowmanDestroyTextDisplay);

    // icon
    createElementDiv(menuButtonGameSnowmanDestroyClick, containerMenuButtonGameSnowmanDestroyIconDisplay);
    setElementClassNameByElementId(containerMenuButtonGameSnowmanDestroyIconDisplay, containerMenuButtonGameSnowmanDestroyIconDisplay);
    createElementI(containerMenuButtonGameSnowmanDestroyIconDisplay, menuButtonGameSnowmanDestroyIcon, menuButtonGameSnowmanDestroyIconStyle, menuButtonGameSnowmanDestroyIconName);
}