function playGameSnowmanBuild(clickedId) {
    let keyValue = getKeyboardChar(clickedId);
    let isCharExist = checkCharacter(keyValue);

    if (isCharExist) {
        countedCorrectShots += 1;

        if (countedCorrectShots >= wordCharsWithoutDuplicate.length) {
            setGameOverTextWinner();
            changeKeyboardButtonsGameSnowmanDestroyGameOver();
            disableKeyboardButton(clickedId);
            setDiscoveredChar(keyValue);
            setShapeGameSnowmanBuildFigureElements();
            setColorForSnowman();
            console.log("YOU WIN !!!");

        } else {

            if (countedCorrectShots === 1) {
                removeContainerSnowmanFigureMessageActionsWelcomeText();
                createContainersSnowmanFigureMainElements();
                setTimeout(function () {
                    setShapeGameSnowmanBuildFigureElements();
                }, 1000);

                setDiscoveredChar(keyValue);
                disableKeyboardButton(clickedId);

            } else {
                setShapeGameSnowmanBuildFigureElements();
                setDiscoveredChar(keyValue);
                disableKeyboardButton(clickedId);
            }
        }
    } else {
        changeLivesNumberVisible();

        if (countedWrongShots < maxWrongShots - 1) {
            countedWrongShots += 1;

        } else {
            createContainersForGameSnowmanFigureMessageGameOver();
            setGameOverTextLoser();
            changeKeyboardButtonsGameSnowmanBuildGameOver();
            console.log("GAME OVER");
            countedWrongShots += 20260306;
        }
    }
}