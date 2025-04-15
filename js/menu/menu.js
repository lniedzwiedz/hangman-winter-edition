function createMenu(){
    createContainerMainMenu();
    createContainerMainMenuParts();
    createContainerManuTitle();
    createContainerMenuButtons();
}

function createContainerMainMenu(){
    createContainerMainElements(containerMainSectionMenu, sectionMenu, containerSectionMenu, containerMenuMain);
}

function createContainerMainMenuParts(){
    createElementDivWithTheSameValueForIdAndClassName(containerMenuMain, containerMenuMainParts);
}

function createContainerManuTitle(){
    createElementDivWithTheSameValueForIdAndClassName(containerMenuMainParts, containerMenuTitleMain);
    createElementDiv(containerMenuTitleMain, menuTitle);
    createElementP(menuTitle, menuTitleText);
    setClassName(menuTitleText, menuTitleText)
    setElementTextById(menuTitleText, menuTitleTextDisplay);
}

function createContainerMenuButtons(){
    createElementDivWithTheSameValueForIdAndClassName(containerMenuMainParts, containerMenuButtonsMain);
    createElementDivWithTheSameValueForIdAndClassName(containerMenuButtonsMain, containerMenuButtonsMainParts);
    createContainerMenuButtonHome();
    createContainerMenuButtonGameSnowmanBuild();
    createContainerMenuButtonGameSnowmanDestroy();
}

function createContainerMenuButtonHome(){
    createElementDiv(containerMenuButtonsMainParts, containerMenuButtonHomeMain);
    createElementDiv(containerMenuButtonHomeMain, containerMenuButtonHomeText);
    setClassName(containerMenuButtonHomeMain, containerMenuButtonHome)
    setClassName(containerMenuButtonHomeText, containerMenuButtonHome)
    setClassName(containerMenuButtonHomeText, containerMenuButtonText)

    createElementP(containerMenuButtonHomeText, menuButtonHomeText);
    setClassName(menuButtonHomeText, menuButtonText)
    setElementTextById(menuButtonHomeText, menuButtonHomeTextDisplay);

    createElementDiv(containerMenuButtonHomeMain, containerMenuButtonHomeClick);
    setClassName(containerMenuButtonHomeClick, containerMenuButtonHome)

    createElementButton(containerMenuButtonHomeClick, menuButtonHomeClick);
    setClassName(menuButtonHomeClick, containerMenuButtonHome)
    setClassName(menuButtonHomeClick, menuButtonClick)
    setFunctionOnclick(menuButtonHomeClick, functionNameOnclickCreateSubpageHome);
}

function createContainerMenuButtonGameSnowmanBuild(){
    createElementDiv(containerMenuButtonsMainParts, containerMenuButtonGameSnowmanBuildMain);
    createElementDiv(containerMenuButtonGameSnowmanBuildMain, containerMenuButtonGameSnowmanBuildText);
    setClassName(containerMenuButtonGameSnowmanBuildMain, containerMenuButtonGameSnowmanBuild)
    setClassName(containerMenuButtonGameSnowmanBuildText, containerMenuButtonGameSnowmanBuild)
    setClassName(containerMenuButtonGameSnowmanBuildText, containerMenuButtonText)

    createElementP(containerMenuButtonGameSnowmanBuildText, menuButtonGameSnowmanBuildText);
    setClassName(menuButtonGameSnowmanBuildText, menuButtonText);
    setElementTextById(menuButtonGameSnowmanBuildText, menuButtonGameSnowmanBuildTextDisplay);

    createElementDiv(containerMenuButtonGameSnowmanBuildMain, containerMenuButtonGameSnowmanBuildClick);
    setClassName(containerMenuButtonGameSnowmanBuildClick, containerMenuButtonGameSnowmanBuild);

    createElementButton(containerMenuButtonGameSnowmanBuildClick, menuButtonGameSnowmanBuildClick);
    setClassName(menuButtonGameSnowmanBuildClick, containerMenuButtonGameSnowmanBuild);
    setClassName(menuButtonGameSnowmanBuildClick, menuButtonClick);
    setFunctionOnclick(menuButtonGameSnowmanBuildClick, functionNameOnclickSetConfigurationForGameSnowmanBuild);
}

function createContainerMenuButtonGameSnowmanDestroy(){
    createElementDiv(containerMenuButtonsMainParts, containerMenuButtonGameSnowmanDestroyMain);
    createElementDiv(containerMenuButtonGameSnowmanDestroyMain, containerMenuButtonGameSnowmanDestroyText);
    setClassName(containerMenuButtonGameSnowmanDestroyMain, containerMenuButtonGameSnowmanDestroy);
    setClassName(containerMenuButtonGameSnowmanDestroyText, containerMenuButtonGameSnowmanDestroy);
    setClassName(containerMenuButtonGameSnowmanDestroyText, containerMenuButtonText);

    createElementP(containerMenuButtonGameSnowmanDestroyText, menuButtonGameSnowmanDestroyText);
    setClassName(menuButtonGameSnowmanDestroyText, menuButtonText);
    setElementTextById(menuButtonGameSnowmanDestroyText, menuButtonGameSnowmanDestroyTextDisplay);

    createElementDiv(containerMenuButtonGameSnowmanDestroyMain, containerMenuButtonGameSnowmanDestroyClick);
    setClassName(containerMenuButtonGameSnowmanDestroyClick, containerMenuButtonGameSnowmanDestroy);

    createElementButton(containerMenuButtonGameSnowmanDestroyClick, menuButtonGameSnowmanDestroyClick);
    setClassName(menuButtonGameSnowmanDestroyClick, containerMenuButtonGameSnowmanDestroy);
    setClassName(menuButtonGameSnowmanDestroyClick, menuButtonClick);
    setFunctionOnclick(menuButtonGameSnowmanDestroyClick, functionNameOnclickSetConfigurationForGameSnowmanDestroy);

}





