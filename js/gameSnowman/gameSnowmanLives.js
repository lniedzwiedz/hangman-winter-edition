function createContainersForLives() {
    createElementDiv(containerMainSectionGameSnowman, containerGameSnowmanLivesMain);
    createElementDiv(containerGameSnowmanLivesMain, containerGameSnowmanLivesMainParts);
    addElementClassNameByElementId(containerGameSnowmanLivesMainParts, containerGameSnowmanLivesMainParts);

    createElementDiv(containerGameSnowmanLivesMainParts, containerGameSnowmanLives);
    addElementClassNameByElementId(containerGameSnowmanLives, containerGameSnowmanLives);

    setElementStyleGridTemplateRows(containerGameSnowmanLives, "repeat(1, 20fr 70fr 20fr)");
    setElementStyleGridTemplateColumns(containerGameSnowmanLives, "repeat(" + maxWrongShots + ", 5fr 100fr 5fr)");

    let rowChildStart = 2;
    let columnChildStart = 2;
    let rowChildEnd = 3;
    let columnChildEnd = 3;

    for (let i = 0; i < maxWrongShots; i++) {

        let newDivId = gameSnowmanLivesMinusPrefix + i;
        createElementDiv(containerGameSnowmanLives, newDivId);
        addElementClassNameByElementId(newDivId, gameSnowmanLives);

        if (i === maxWrongShots - 1)
            addElementClassNameByElementId(newDivId, gameSnowmanLivesNumber);

        setElementStyletAsGrid(newDivId, rowChildStart, columnChildStart, rowChildEnd, columnChildEnd, "1fr", "1fr");

        let newPId = gameLivePrefix + i;
        createElementP(newDivId, newPId);
        addElementClassNameByElementId(newPId, gameSnowmanLivesBase);
        setElementTextById(newPId, gameLivesChars[i]);

        columnChildStart += 3;
        columnChildEnd += 3;
    }
}

function changeLivesNumberVisible() {
    let tempChangeColor = "#1c7293";
    let elementId = gameSnowmanLives + "-";
    setElementStyleBackgroundColorById(elementId + countedWrongShots, tempChangeColor);
    setElementTextById(elementId + (gameLives.length - 1), valueToString((gameLives.length - 1) - countedWrongShots));
}