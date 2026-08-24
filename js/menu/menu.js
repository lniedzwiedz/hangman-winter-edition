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
    setElementClassName(containerMenuTitleMainPairs, containerMenuTitleMainPairs)

    // game menu title
    createElementDiv(containerMenuTitleMainPairs, containerMenuTitleText);
    setElementClassName(containerMenuTitleText, containerMenuTitleText)
    createElementP(containerMenuTitleText, menuTitleText);
    setElementClassName(menuTitleText, menuTitleText)
    setElementTextById(menuTitleText, menuTitleTextDisplay);

    // game menu title description
    createElementDiv(containerMenuTitleMainPairs, containerMenuTitleDescription);
    setElementClassName(containerMenuTitleMainPairs, containerMenuTitleMainPairs)
    setElementClassName(containerMenuTitleDescription, containerMenuTitleDescription)
    createElementP(containerMenuTitleDescription, menuTitleDescriptionText);
    setElementClassName(menuTitleDescriptionText, menuTitleDescriptionText)
    setElementTextById(menuTitleDescriptionText, menuTitleDescriptionTextDisplay);
}

function createContainerMenuButtons() {
    createElementDivWithTheSameValueForIdAndClassName(containerMenuMainParts, containerMenuButtonsMain);
    createElementDivWithTheSameValueForIdAndClassName(containerMenuButtonsMain, containerMenuButtonsMainParts);
    createContainerMenuButtonHome();
    createContainerMenuButtonGameSnowmanBuild();
    createContainerMenuButtonGameSnowmanDestroy();
}

// function createContainerMenuButtonHome1() {
//     createElementDiv(containerMenuButtonsMainParts, containerMenuButtonHomeMain);
//     createElementDiv(containerMenuButtonHomeMain, containerMenuButtonHomeText);
//     setElementClassName(containerMenuButtonHomeMain, containerMenuButtonHome)
//     setElementClassName(containerMenuButtonHomeText, containerMenuButtonHome)
//     setElementClassName(containerMenuButtonHomeText, containerMenuButtonText)
//
//     createElementP(containerMenuButtonHomeText, menuButtonHomeText);
//     setElementClassName(menuButtonHomeText, menuButtonText)
//     setElementTextById(menuButtonHomeText, menuButtonHomeTextDisplay);
//
//     createElementDiv(containerMenuButtonHomeMain, containerMenuButtonHomeClick);
//     setElementClassName(containerMenuButtonHomeClick, containerMenuButtonHome)
//
//     createElementButton(containerMenuButtonHomeClick, menuButtonHomeClick);
//     setElementClassName(menuButtonHomeClick, containerMenuButtonHome)
//     setElementClassName(menuButtonHomeClick, menuButtonClick)
//     setFunctionOnclick(menuButtonHomeClick, functionNameOnclickCreateSubpageHome);
// }

function createContainerMenuButtonHome() {
    createElementDiv(containerMenuButtonsMainParts, containerMenuButtonHomeMain);

    // button
    createElementButton(containerMenuButtonHomeMain, containerMenuButtonHomeMainParts);
    setElementClassName(containerMenuButtonHomeMainParts, containerMenuButtonHome)
    setElementClassName(containerMenuButtonHomeMainParts, menuButtonClick)
    setFunctionOnclick(containerMenuButtonHomeMainParts, functionNameOnclickCreateSubpageHome);

    // text
    createElementDiv(containerMenuButtonHomeMainParts, containerMenuButtonHomeTextDisplay);
    setElementClassName(containerMenuButtonHomeTextDisplay, containerMenuButtonHomeTextDisplay)
    createElementP(containerMenuButtonHomeTextDisplay, menuButtonHomeText);
    setElementClassName(menuButtonHomeText, menuButtonText)
    setElementTextById(menuButtonHomeText, menuButtonHomeTextDisplay);

    // icon
    createElementDiv(containerMenuButtonHomeMainParts, containerMenuButtonHomeIconDisplay);
    setElementClassName(containerMenuButtonHomeIconDisplay, containerMenuButtonHomeIconDisplay)
    createElementI(containerMenuButtonHomeIconDisplay, menuButtonHomeIcon, menuButtonHomeIconStyle, menuButtonHomeIconName);
}

function createContainerMenuButtonGameSnowmanBuild() {
    createElementDiv(containerMenuButtonsMainParts, containerMenuButtonGameSnowmanBuildMain);

    // button
    createElementButton(containerMenuButtonGameSnowmanBuildMain, menuButtonGameSnowmanBuildClick);
    setElementClassName(menuButtonGameSnowmanBuildClick, containerMenuButtonGameSnowmanBuild);
    setElementClassName(menuButtonGameSnowmanBuildClick, menuButtonClick);
    setFunctionOnclick(menuButtonGameSnowmanBuildClick, functionNameOnclickSetConfigurationForGameSnowmanBuild);

    // text
    createElementDiv(menuButtonGameSnowmanBuildClick, containerMenuButtonGameSnowmanBuildTextDisplay);
    setElementClassName(containerMenuButtonGameSnowmanBuildTextDisplay, containerMenuButtonGameSnowmanBuildTextDisplay)
    createElementP(containerMenuButtonGameSnowmanBuildTextDisplay, menuButtonGameSnowmanBuildText);
    setElementClassName(menuButtonGameSnowmanBuildText, menuButtonText);
    setElementTextById(menuButtonGameSnowmanBuildText, menuButtonGameSnowmanBuildTextDisplay);

    createElementDiv(menuButtonGameSnowmanBuildClick, containerMenuButtonGameSnowmanBuildIconDisplay);
    setElementClassName(containerMenuButtonGameSnowmanBuildIconDisplay, containerMenuButtonGameSnowmanBuildIconDisplay)
    createElementI(containerMenuButtonGameSnowmanBuildIconDisplay, menuButtonGameSnowmanBuildIcon, menuButtonGameSnowmanBuildIconStyle, menuButtonGameSnowmanBuildIconName);
}

function createContainerMenuButtonGameSnowmanDestroy() {
    createElementDiv(containerMenuButtonsMainParts, containerMenuButtonGameSnowmanDestroyMain);

    // button
    createElementButton(containerMenuButtonGameSnowmanDestroyMain, menuButtonGameSnowmanDestroyClick);
    setElementClassName(menuButtonGameSnowmanDestroyClick, containerMenuButtonGameSnowmanDestroy);
    setElementClassName(menuButtonGameSnowmanDestroyClick, menuButtonClick);
    setFunctionOnclick(menuButtonGameSnowmanDestroyClick, functionNameOnclickSetConfigurationForGameSnowmanDestroy);

    // text
    createElementDiv(menuButtonGameSnowmanDestroyClick, containerMenuButtonGameSnowmanDestroyTextDisplay);
    setElementClassName(containerMenuButtonGameSnowmanDestroyTextDisplay, containerMenuButtonGameSnowmanDestroyTextDisplay)
    createElementP(containerMenuButtonGameSnowmanDestroyTextDisplay, menuButtonGameSnowmanDestroyText);
    setElementClassName(menuButtonGameSnowmanDestroyText, menuButtonText);
    setElementTextById(menuButtonGameSnowmanDestroyText, menuButtonGameSnowmanDestroyTextDisplay);

    // icon
    createElementDiv(menuButtonGameSnowmanDestroyClick, containerMenuButtonGameSnowmanDestroyIconDisplay);
    setElementClassName(containerMenuButtonGameSnowmanDestroyIconDisplay, containerMenuButtonGameSnowmanDestroyIconDisplay)
    createElementI(containerMenuButtonGameSnowmanDestroyIconDisplay, menuButtonGameSnowmanDestroyIcon, menuButtonGameSnowmanDestroyIconStyle, menuButtonGameSnowmanDestroyIconName);
}