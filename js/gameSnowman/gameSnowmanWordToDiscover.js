function createContainersForWordToDiscover() {

    createElementDiv(containerMainSectionGameSnowman, containerGameSnowmanWordToDiscoverMain);
    createElementDiv(containerGameSnowmanWordToDiscoverMain, containerGameSnowmanWordToDiscoverMainParts);
    addElementClassNameByElementId(containerGameSnowmanWordToDiscoverMainParts, containerGameSnowmanWordToDiscoverMainParts);

    createElementDiv(containerGameSnowmanWordToDiscoverMainParts, containerGameSnowmanWordToDiscover);
    addElementClassNameByElementId(containerGameSnowmanWordToDiscover, containerGameSnowmanWordToDiscover);

    setElementStyleGridTemplateRows(containerGameSnowmanWordToDiscover, "repeat(1,  25fr 70fr 5f)");
    setElementStyleGridTemplateColumns(containerGameSnowmanWordToDiscover, " repeat(" + word.length + ", 5fr 100fr 5fr)");

    let rowChildStart = 1;
    let columnChildStart = 2;
    let rowChildEnd = 2;
    let columnChildEnd = 3;

    for (let i = 0; i < word.length; i++) {

        let newDivId = gameSnowmanElementWordToDiscover + "-" + valueToString(i);
        createElementDiv(containerGameSnowmanWordToDiscover, newDivId);
        setElementStyletAsGrid(newDivId, rowChildStart, columnChildStart, rowChildEnd, columnChildEnd, "1fr", "1fr");

        if (wordChar[i] === " ") {
            setElementStyleBackgroundColorById(newDivId, "#00000");

        } else {
            addElementClassNameByElementId(newDivId, gameSnowmanElementWordToDiscover);
            let newPId = wordChar + valueToString(i);
            createElementP(newDivId, newPId);
            addElementClassNameByElementId(newPId, gameSnowmanElementWordToDiscoverBase);

        }
        columnChildStart += 3;
        columnChildEnd += 3;
    }
}