function createStartContainersGameSnowmanMain() {
    createMainContainerForGameSnowman();
    createStartContainersForGameSnowmanAnimation();
    createStartContainersForGameSnowmanKeyboard();
}

function createStartContainersGameSnowman() {
    createStartContainersGameSnowmanMain();
    createContainersForGameSnowmanFigureMessageWelcomeText();
    createContainersForGameDescription(gameNameSnowmanBuild, gameSnowmanDescriptionTextBuild);
    createContainersForWordToDiscover();
    createContainersForLives();
    createKeyboardButtonsGameSnowmanBuild();
}

function createStartContainersGameSnowmanDestroy() {
    createStartContainersGameSnowmanMain();
    createContainersSnowmanFigureMainElements();
    setShapeGameSnowmanDestroyFigureElements();
    createContainersForGameDescription(gameNameSnowmanDestroy, gameSnowmanDescriptionTextDestroy);
    createContainersForWordToDiscover();
    createContainersForLives();
    createKeyboardButtonsGameSnowmanDestroy();
}

function createMainContainerForGameSnowman() {
    createElementDiv(containerMainSectionActions, containerMainSectionGameSnowman);
}

function removeMainContainerForGameSnowman() {
    removeElementsById(containerMainSectionGameSnowman);
}