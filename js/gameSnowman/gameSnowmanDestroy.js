function setConfigurationForGameSnowmanDestroy(){

    removeContainerMainSection();
    // createElementDiv(containerMainSectionActions, containerMainSectionGameSnowman);
    // temp -> to remove
    let temContainer = "tempContainerGameSnowmanDestroy"
    let tempIdClass = "tempGameSnowmanDestroyText"
    createMainContainerForGameSnowman()
    createElementDiv(containerMainSectionGameSnowman, temContainer);
    createElementDiv(temContainer, containerGameSnowmanAnimationElements);
    createElementDiv(containerGameSnowmanAnimationElements, containerSnowmanFigureMessage1welcomeText);
    createNewP(containerSnowmanFigureMessage1welcomeText, tempIdClass);
    document.getElementById(tempIdClass).innerHTML= "game\nunder construction";
    document.getElementById(tempIdClass).classList.add(snowmanFigureStartGameElementSetAnimationToShowColor);
}

function removeMainContainerGameSnowmanDestroy() {
    removeElementsById(containerMainSectionGameSnowman);
}



