function playGameSnowmanDestroy(clickedId) {

    let keyValue = getKeyboardChar(clickedId);
    let isCharExist = checkCharacter(keyValue);

    if (isCharExist) {
        countedCorrectShots += 1;

        if (countedCorrectShots >= wordCharsWithoutDuplicate.length) {
            setGameOverTextWinner();
            changeKeyboardButtonsGameSnowmanDestroyGameOver();
            disableKeyboardButton(clickedId);
            setDiscoveredChar(keyValue);
            setColorForSnowman();
            console.log("YOU WIN !!!");

        } else {
            setDiscoveredChar(keyValue);
            disableKeyboardButton(clickedId);
        }
    } else {
        changeLivesNumberVisible();
        removeShapeGameSnowmanDestroyFigureElements();
        countedWrongShots += 1;

        if (countedWrongShots < maxWrongShots) {
            // console.log("Oops! Well... something went wrong xD");

        } else {
            createContainersForGameSnowmanFigureMessageGameOver();
            setGameOverTextLoser();
            changeKeyboardButtonsGameSnowmanDestroyGameOver();
            console.log("GAME OVER");
            countedWrongShots += 20260306;
        }
    }
}