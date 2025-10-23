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
    createElementDiv(containerMenuTitleMain, menuTitle);
    setElementClassName(menuTitle, menuTitle)
    createElementP(menuTitle, menuTitleText);
    setElementClassName(menuTitleText, menuTitleText)
    setElementTextById(menuTitleText, menuTitleTextDisplay);
}

function createContainerMenuButtons() {
    createElementDivWithTheSameValueForIdAndClassName(containerMenuMainParts, containerMenuButtonsMain);
    createElementDivWithTheSameValueForIdAndClassName(containerMenuButtonsMain, containerMenuButtonsMainParts);
    createContainerMenuButtonHome();
    createContainerMenuButtonGameSnowmanBuild();
    createContainerMenuButtonGameSnowmanDestroy();
}

function createContainerMenuButtonHome1() {
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

function createContainerMenuButtonHome() {
    createElementDiv(containerMenuButtonsMainParts, containerMenuButtonHomeMain);

    createElementButton(containerMenuButtonHomeMain, menuButtonHomeClick);
    setElementClassName(menuButtonHomeClick, containerMenuButtonHome)
    setElementClassName(menuButtonHomeClick, menuButtonClick)
    setFunctionOnclick(menuButtonHomeClick, functionNameOnclickCreateSubpageHome);

    createElementP(menuButtonHomeClick, menuButtonHomeText);
    setElementClassName(menuButtonHomeText, menuButtonText)
    setElementTextById(menuButtonHomeText, menuButtonHomeTextDisplay);
}

function createContainerMenuButtonGameSnowmanBuild() {
    createElementDiv(containerMenuButtonsMainParts, containerMenuButtonGameSnowmanBuildMain);

    createElementButton(containerMenuButtonGameSnowmanBuildMain, menuButtonGameSnowmanBuildClick);
    setElementClassName(menuButtonGameSnowmanBuildClick, containerMenuButtonGameSnowmanBuild);
    setElementClassName(menuButtonGameSnowmanBuildClick, menuButtonClick);
    setFunctionOnclick(menuButtonGameSnowmanBuildClick, functionNameOnclickSetConfigurationForGameSnowmanBuild);

    createElementP(menuButtonGameSnowmanBuildClick, menuButtonGameSnowmanBuildText);
    setElementClassName(menuButtonGameSnowmanBuildText, menuButtonText);
    setElementTextById(menuButtonGameSnowmanBuildText, menuButtonGameSnowmanBuildTextDisplay);
}

function createContainerMenuButtonGameSnowmanDestroy() {
    createElementDiv(containerMenuButtonsMainParts, containerMenuButtonGameSnowmanDestroyMain);

    createElementButton(containerMenuButtonGameSnowmanDestroyMain, menuButtonGameSnowmanDestroyClick);
    setElementClassName(menuButtonGameSnowmanDestroyClick, containerMenuButtonGameSnowmanDestroy);
    setElementClassName(menuButtonGameSnowmanDestroyClick, menuButtonClick);
    setFunctionOnclick(menuButtonGameSnowmanDestroyClick, functionNameOnclickSetConfigurationForGameSnowmanDestroy);

    createElementP(menuButtonGameSnowmanDestroyClick, menuButtonGameSnowmanDestroyText);
    setElementClassName(menuButtonGameSnowmanDestroyText, menuButtonText);
    setElementTextById(menuButtonGameSnowmanDestroyText, menuButtonGameSnowmanDestroyTextDisplay);
}

document.addEventListener('click', e => {
    const btn = e.target.closest('.menuButtonClick');
    if (btn) {
        btn.classList.remove('hoverable');
    }
})







