function createMenu(){
    createContainerMainMenu();
    createContainerMainMenuParts();
    createContainerManuTitle();
    createContainerMenuButtons();

}

function createContainerMainMenu(){
    // let mainElement = document.getElementsByClassName(containerMain)[0];
    // let newDiv = document.createElement("div");
    // mainElement.append(newDiv);
    // newDiv.setAttribute("id", sectionMenu);
    // newDiv.classList.add("item-1")
    // newDiv.classList.add(containerSectionMenu);
    //
    // let newDiv2 = document.createElement("div");
    // let mainElem = document.getElementById(sectionMenu);
    // mainElem.append(newDiv2);
    // newDiv2.setAttribute("id", containerSectionMainMenu);
    // newDiv2.classList.add((containerSectionMainMenu));

    createContainerMainElements(sectionMenu, containerSectionMenu, containerMenuMain);
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

}

function createContainerMenuButtonHome(){
    createElementDiv(containerMenuButtonsMainParts, containerMenuButtonHomeMain);
    createElementDiv(containerMenuButtonHomeMain, containerMenuButtonHomeText);
    setClassName(containerMenuButtonHomeMain, containerMenuButtonHome)
    setClassName(containerMenuButtonHomeText, containerMenuButtonHome)
    createElementP(containerMenuButtonHomeText, menuButtonHomeText);
    setClassName(menuButtonHomeText, menuButtonHomeText)
    setElementTextById(menuButtonHomeText, menuButtonHomeTextDisplay);

    // createElementDiv(containerMenuButtonHomeMain, containerFooterButtonEnvelope);
    // setClassName(containerFooterButtonEnvelope, containerFooterEnvelope);
    // setClassName(containerFooterButtonEnvelope, containerFooterButtonEnvelope);
    //
    // createElementButton(containerFooterButtonEnvelope, footerButtonEnvelope);
    // setFunctionOnclick(footerButtonEnvelope, functionNameOnclickCreateSubpageFormContact);
    // setClassName(footerButtonEnvelope, footerButtonEnvelope);

}



