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

function createContainerGameMenuTitleMain(){
    createElementDivWithTheSameValueForIdAndClassName(containerMenuMainParts, containerMenuTitleMain);
    createElementDiv(containerMenuTitleMain, containerMenuTitleMainPairs);
    addElementClassNameByElementId(containerMenuTitleMainPairs, containerMenuTitleMainPairs);
}

function createContainerGameMenuTitle(){
    createElementDiv(containerMenuTitleMainPairs, containerMenuTitleText);
    addElementClassNameByElementId(containerMenuTitleText, containerMenuTitleText);
    createElementP(containerMenuTitleText, menuTitleText);
    addElementClassNameByElementId(menuTitleText, menuTitleText);
    setElementTextById(menuTitleText, menuTitleTextDisplay);
}

function createContainerGameMenuTitleDescription(){
    createElementDiv(containerMenuTitleMainPairs, containerMenuTitleDescription);
    addElementClassNameByElementId(containerMenuTitleMainPairs, containerMenuTitleMainPairs);
    addElementClassNameByElementId(containerMenuTitleDescription, containerMenuTitleDescription);
    createElementP(containerMenuTitleDescription, menuTitleDescriptionText);
    addElementClassNameByElementId(menuTitleDescriptionText, menuTitleDescriptionText);
    setElementTextById(menuTitleDescriptionText, menuTitleDescriptionTextDisplayMediaQueryMaxWidthDefault);
}

function createContainerManuTitle() {
    createContainerGameMenuTitleMain();
    createContainerGameMenuTitle();
    createContainerGameMenuTitleDescription();
}

function createContainerMenuButtons() {
    createElementDivWithTheSameValueForIdAndClassName(containerMenuMainParts, containerMenuButtonsMain);
    createElementDivWithTheSameValueForIdAndClassName(containerMenuButtonsMain, containerMenuButtonsMainParts);
    createContainerMenuButtonHome();
    createContainerMenuButtonGameSnowmanBuild();
    createContainerMenuButtonGameSnowmanDestroy();
}

function createMenuButton(containerMenuButtonMain, containerMenuButtonMainParts, containerMenuButton, menuButtonClick, functionNameOnclick){
    createElementButton(containerMenuButtonMain, containerMenuButtonMainParts);
    addElementClassNameByElementId(containerMenuButtonMainParts, containerMenuButton);
    addElementClassNameByElementId(containerMenuButtonMainParts, menuButtonClick);
    setFunctionOnclickByElementId(containerMenuButtonMainParts, functionNameOnclick);
}

function createMenuButtonText(containerMenuButtonMainParts, containerMenuButtonTextDisplay,menuButtonHomeText, menuButtonText, menuButtonTextDisplay){
    createElementDiv(containerMenuButtonMainParts, containerMenuButtonTextDisplay);
    addElementClassNameByElementId(containerMenuButtonTextDisplay, containerMenuButtonTextDisplay);
    createElementP(containerMenuButtonTextDisplay, menuButtonHomeText);
    addElementClassNameByElementId(menuButtonHomeText, menuButtonText);
    setElementTextById(menuButtonHomeText, menuButtonTextDisplay);
}

function createMenuButtonIcon(containerMenuButtonMainParts, containerMenuButtonIconDisplay, menuButtonIcon, menuButtonIconStyle, menuButtonIconName){
    createElementDiv(containerMenuButtonMainParts, containerMenuButtonIconDisplay);
    addElementClassNameByElementId(containerMenuButtonIconDisplay, containerMenuButtonIconDisplay);
    createElementI(containerMenuButtonIconDisplay, menuButtonIcon, menuButtonIconStyle, menuButtonIconName);
}


function createContainerMenuButtonHome() {
    createElementDiv(containerMenuButtonsMainParts, containerMenuButtonHomeMain);
    createMenuButton(containerMenuButtonHomeMain, containerMenuButtonHomeMainParts, containerMenuButtonHome, menuButtonClick, functionNameOnclickCreateSubpageHome);
    createMenuButtonText(containerMenuButtonHomeMainParts, containerMenuButtonHomeTextDisplay, menuButtonHomeText, menuButtonText, menuButtonHomeTextDisplay);
    createMenuButtonIcon(containerMenuButtonHomeMainParts, containerMenuButtonHomeIconDisplay, menuButtonHomeIcon, menuButtonHomeIconStyle, menuButtonHomeIconName);
}

function createContainerMenuButtonGameSnowmanBuild() {
    createElementDiv(containerMenuButtonsMainParts, containerMenuButtonGameSnowmanBuildMain);
    createMenuButton(containerMenuButtonGameSnowmanBuildMain, menuButtonGameSnowmanBuildClick, containerMenuButtonGameSnowmanBuild, menuButtonClick, functionNameOnclickSetConfigurationForGameSnowmanBuild);
    createMenuButtonText(menuButtonGameSnowmanBuildClick, containerMenuButtonGameSnowmanBuildTextDisplay, menuButtonGameSnowmanBuildText, menuButtonText, menuButtonGameSnowmanBuildTextDisplay);
    createMenuButtonIcon(menuButtonGameSnowmanBuildClick, containerMenuButtonGameSnowmanBuildIconDisplay, menuButtonGameSnowmanBuildIcon, menuButtonGameSnowmanBuildIconStyle, menuButtonGameSnowmanBuildIconName);
}

function createContainerMenuButtonGameSnowmanDestroy() {
    createElementDiv(containerMenuButtonsMainParts, containerMenuButtonGameSnowmanDestroyMain);
    createMenuButton(containerMenuButtonGameSnowmanDestroyMain, menuButtonGameSnowmanDestroyClick, containerMenuButtonGameSnowmanDestroy, menuButtonClick, functionNameOnclickSetConfigurationForGameSnowmanDestroy);
    createMenuButtonText(menuButtonGameSnowmanDestroyClick, containerMenuButtonGameSnowmanDestroyTextDisplay, menuButtonGameSnowmanDestroyText, menuButtonText, menuButtonGameSnowmanDestroyTextDisplay);
    createMenuButtonIcon(menuButtonGameSnowmanDestroyClick, containerMenuButtonGameSnowmanDestroyIconDisplay, menuButtonGameSnowmanDestroyIcon, menuButtonGameSnowmanDestroyIconStyle, menuButtonGameSnowmanDestroyIconName);
}