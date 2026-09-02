function createStartContainersForGameSnowmanAnimation() {
    createElementDiv(containerMainSectionGameSnowman, containerGameSnowmanAnimation);
    createElementDiv(containerGameSnowmanAnimation, containerGameSnowmanAnimationElements);
}

function createContainersForGameDescription(gameName, gameSnowmanDescriptionText) {
    createElementDiv(containerMainSectionGameSnowman, containerGameSnowmanDescription);
    createElementDiv(containerGameSnowmanDescription, containerGameSnowmanDescriptionElements);

    for (let i = 0; i < gameSnowmanDescriptionText.length; i++) {
        let elementId = containerGameSnowmanDescriptionElementText + "-" + i;
        createElementDiv(containerGameSnowmanDescriptionElements, elementId);
        addElementClassNameByElementId(elementId, elementId);

        let newPId = gameSnowmanDescriptionElementTextLine + "-" + i;
        createElementP(elementId, newPId);
        addElementClassNameByElementId(newPId, newPId);
        addElementClassNameByElementId(newPId, gameSnowmanDescriptionElementText);
        setElementTextById(newPId, gameSnowmanDescriptionText[i]);
    }
}

function setGameOverTextColorName() {
    let text = "color: " + winColorSnowman;
    let cn = gameSnowmanDescriptionElementTextLine + "-1";
    setElementTextByClassName(cn, text);
}

function setGameOverEndText(textEnd) {
    setElementTextByClassName(gameSnowmanDescriptionElementTextLine + "-4", textEnd);
}

function setGameOverTextGameResult(textIsWin) {
    setElementTextByClassName(gameSnowmanDescriptionElementTextLine + "-2", textIsWin);
}

function setGameOverTextLoser() {
    setGameOverTextColorName();
    setGameOverTextGameResult(gameSnowmanDescriptionTextGameOverLoser);
    setGameOverEndText(gameSnowmanDescriptionTextGameOverLoserGiveHope);
}

function setGameOverTextWinner() {
    setGameOverTextColorName();
    setGameOverTextGameResult(gameSnowmanDescriptionTextGameOverWinner);
    setGameOverEndText(gameSnowmanDescriptionTextGameOverWinnerCongratulations);
}