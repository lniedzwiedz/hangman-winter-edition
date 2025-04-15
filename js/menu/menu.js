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
    setElementClassName(menuTitle, menuTitle)
    createElementP(menuTitle, menuTitleText);
    setElementClassName(menuTitleText, menuTitleText)
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
    setElementClassName(containerMenuButtonHomeMain, containerMenuButtonHome)
    setElementClassName(containerMenuButtonHomeText, containerMenuButtonHome)
    setElementClassName(containerMenuButtonHomeText, containerMenuButtonText)

    createElementP(containerMenuButtonHomeText, menuButtonHomeText);
    setElementClassName(menuButtonHomeText, menuButtonText)
    setElementTextById(menuButtonHomeText, menuButtonHomeTextDisplay);

    createElementDiv(containerMenuButtonHomeMain, containerMenuButtonHomeClick);
    setElementClassName(containerMenuButtonHomeClick, containerMenuButtonHome)

    createElementButton(containerMenuButtonHomeClick, menuButtonHomeClick);
    setElementClassName(menuButtonHomeClick, containerMenuButtonHome)
    setElementClassName(menuButtonHomeClick, menuButtonClick)
    setFunctionOnclick(menuButtonHomeClick, functionNameOnclickCreateSubpageHome);
}

function createContainerMenuButtonGameSnowmanBuild(){
    createElementDiv(containerMenuButtonsMainParts, containerMenuButtonGameSnowmanBuildMain);
    createElementDiv(containerMenuButtonGameSnowmanBuildMain, containerMenuButtonGameSnowmanBuildText);
    setElementClassName(containerMenuButtonGameSnowmanBuildMain, containerMenuButtonGameSnowmanBuild)
    setElementClassName(containerMenuButtonGameSnowmanBuildText, containerMenuButtonGameSnowmanBuild)
    setElementClassName(containerMenuButtonGameSnowmanBuildText, containerMenuButtonText)

    createElementP(containerMenuButtonGameSnowmanBuildText, menuButtonGameSnowmanBuildText);
    setElementClassName(menuButtonGameSnowmanBuildText, menuButtonText);
    setElementTextById(menuButtonGameSnowmanBuildText, menuButtonGameSnowmanBuildTextDisplay);

    createElementDiv(containerMenuButtonGameSnowmanBuildMain, containerMenuButtonGameSnowmanBuildClick);
    setElementClassName(containerMenuButtonGameSnowmanBuildClick, containerMenuButtonGameSnowmanBuild);

    createElementButton(containerMenuButtonGameSnowmanBuildClick, menuButtonGameSnowmanBuildClick);
    setElementClassName(menuButtonGameSnowmanBuildClick, containerMenuButtonGameSnowmanBuild);
    setElementClassName(menuButtonGameSnowmanBuildClick, menuButtonClick);
    setFunctionOnclick(menuButtonGameSnowmanBuildClick, functionNameOnclickSetConfigurationForGameSnowmanBuild);
}

function createContainerMenuButtonGameSnowmanDestroy(){
    createElementDiv(containerMenuButtonsMainParts, containerMenuButtonGameSnowmanDestroyMain);
    createElementDiv(containerMenuButtonGameSnowmanDestroyMain, containerMenuButtonGameSnowmanDestroyText);
    setElementClassName(containerMenuButtonGameSnowmanDestroyMain, containerMenuButtonGameSnowmanDestroy);
    setElementClassName(containerMenuButtonGameSnowmanDestroyText, containerMenuButtonGameSnowmanDestroy);
    setElementClassName(containerMenuButtonGameSnowmanDestroyText, containerMenuButtonText);

    createElementP(containerMenuButtonGameSnowmanDestroyText, menuButtonGameSnowmanDestroyText);
    setElementClassName(menuButtonGameSnowmanDestroyText, menuButtonText);
    setElementTextById(menuButtonGameSnowmanDestroyText, menuButtonGameSnowmanDestroyTextDisplay);

    createElementDiv(containerMenuButtonGameSnowmanDestroyMain, containerMenuButtonGameSnowmanDestroyClick);
    setElementClassName(containerMenuButtonGameSnowmanDestroyClick, containerMenuButtonGameSnowmanDestroy);

    createElementButton(containerMenuButtonGameSnowmanDestroyClick, menuButtonGameSnowmanDestroyClick);
    setElementClassName(menuButtonGameSnowmanDestroyClick, containerMenuButtonGameSnowmanDestroy);
    setElementClassName(menuButtonGameSnowmanDestroyClick, menuButtonClick);
    setFunctionOnclick(menuButtonGameSnowmanDestroyClick, functionNameOnclickSetConfigurationForGameSnowmanDestroy);

}




