function setShapeSnowmanFigureElements(indexGroup) {

    for (let i = 0; i < indexGroup.length; i++) {

        let index = indexGroup[i];
        let elementId = snowmanFigureElementActionPrefix + valueToString(index);
        let element = getElementById(elementId);

        if (index < 4) {
            addElementClassNameByElement(element, snowmanFigureElementActionPrefix + index + hatElementInitialPositionForShape);
            addElementClassNameByElement(element, snowmanFigureElementActionAddShapeColor);
        }

        if (index === 4) {
            for (let j = 0; j < 2; j++) {
                let newDivEyeId = snowmanFigureElementEyes + valueToString(j)
                createElementDiv(elementId, newDivEyeId);
                addElementClassNameByElementId(newDivEyeId, snowmanFigureElementEyes);
                addElementClassNameByElementId(newDivEyeId, snowmanFigureElementActionAddShapeColor);
            }
        }

        if (index === 5) {
            createElementDiv(elementId, snowmanFigureElementSmile);
            addElementClassNameByElementId(snowmanFigureElementSmile, snowmanFigureElementActionAddShapeColor);
        }

        if (index > 5 && index <= 12) {
            let buttonIdMain = containerSnowmanFigureElementButtonNoPrefix + valueToString(index);
            createElementDiv(elementId, buttonIdMain);

            let buttonIdInner = snowmanFigureElementButtonNoPrefix + valueToString(index);
            createElementDiv(buttonIdMain, buttonIdInner);
            addElementClassNameByElementId(buttonIdInner, snowmanFigureElementButton);
            addElementClassNameByElementId(buttonIdInner, snowmanFigureElementActionAddShapeButton);
            addElementClassNameByElementId(buttonIdInner, snowmanFigureElementActionAddShapeColor);
        }

        if (index > 12 && index <= 16) {
            addElementClassNameByElement(element, elementId + handInitialPositionForShape);
            addElementClassNameByElement(element, snowmanFigureElementActionAddShapeColor);
            addElementClassNameByElement(element, snowmanFigureElementActionAddShapeHands);
        }
        addElementClassNameByElement(element, snowmanFigureElementActionAddShapeColor);
    }
    countedAnimationElements += 1;
}

function setShapeGameSnowmanBuildFigureElements() {
    let indexGroup = indexGroups[countedAnimationElements];
    setShapeSnowmanFigureElements(indexGroup);
}

function setShapeGameSnowmanDestroyFigureElements() {
    for (let i = 0; i < indexGroups.length; i++) {
        let indexGroup = indexGroups[i];
        setShapeSnowmanFigureElements(indexGroup);
    }
}

function removeShapeSnowmanFigureElements(indexGroup) {

    for (let i = 0; i < indexGroup.length; i++) {

        let index = indexGroup[i];

        if (index === 4) {
            for (let j = 0; j < 2; j++) {
                addElementClassNameByElementId(snowmanFigureElementEyes + valueToString(j), snowmanFigureElementActionShapeRemoveColor);
            }
        }

        if (index === 5)
            addElementClassNameByElementId(snowmanFigureElementSmile, snowmanFigureElementActionShapeRemoveColor);

        if (index > 5 && index <= 12)
            addElementClassNameByElementId(snowmanFigureElementButtonNoPrefix + valueToString(index), snowmanFigureElementActionShapeRemoveColor);

        addElementClassNameByElementId(snowmanFigureElementActionPrefix + valueToString(index), snowmanFigureElementActionShapeRemoveColor);
    }
    countedAnimationElements -= 1;
}

function removeShapeGameSnowmanDestroyFigureElements() {
    let tempCountedAnimationElements = cutDirection.length - countedAnimationElements;
    let indexGroup = indexGroups[tempCountedAnimationElements];
    removeShapeSnowmanFigureElements(indexGroup);
}

function setAnimationAfterWinSnowmanFigureElementsSnowballs() {
    setElementStyleProperty(cssSnowmanFigureColor, winColorSnowman);

    for (let i = 0; i <= 16; i++) {
        let element = getElementById(snowmanFigureElementActionPrefix + valueToString(i));

        if (i >= 4)
            addElementClassNameByElement(element, snowmanFigureElementActionFinalSnowballs);

        if (i < 4)
            addElementClassNameByElement(element, snowmanFigureElementActionPrefix + i + setAnimationHatFinalColor);

        if (i === 4) {
            let eyes = getElementsByClassName(snowmanFigureElementEyes);
            for (let e = 0; e < eyes.length; e++) {
                removeElementClassNameByElement(eyes[e], snowmanFigureElementActionAddShapeColor);
                addElementClassNameByElement(eyes[e], snowmanFigureElementActionFinalEyes);
            }
        }

        if (i === 5) {
            let smile = getElementById(snowmanFigureElementSmile);
            removeElementClassNameByElement(smile, snowmanFigureElementActionAddShapeSmile);
            removeElementClassNameByElement(smile, snowmanFigureElementActionAddShapeColor);
            addElementClassNameByElement(smile, snowmanFigureElementActionFinalSmile);
        }

        if (i > 5 && i < 12) {
            let button = getElementById(snowmanFigureElementButtonNoPrefix + valueToString(i));
            removeElementClassNameByElement(button, snowmanFigureElementActionAddShapeButton);
            removeElementClassNameByElement(button, snowmanFigureElementActionAddShapeColor);
            addElementClassNameByElement(button, snowmanFigureElementButtonFinal);
        }

        if (i > 12 && i <= 16)
            removeElementClassNameByElement(element, snowmanFigureElementActionAddShapeHands);
    }
}

function setAnimationSnowmanFigureElementsShapeRemoveColor() {
    setElementStyleProperty("--snowmanFigureColor", winColorSnowman);

    for (let i = 0; i <= 16; i++) {
        let element = getElementById(snowmanFigureElementActionPrefix + valueToString(i));

        if (element != null) {
            if (i >= 0 || (i > 12 && i <= 16))
                addElementClassNameByElement(element, snowmanFigureElementActionShapeRemoveColor);

            if (i === 4) {
                let eyes = getElementsByClassName(snowmanFigureElementEyes);
                if (eyes != null) {
                    for (let e = 0; e < eyes.length; e++) {
                        addElementClassNameByElement(eyes[e], snowmanFigureElementActionShapeRemoveColor);
                    }
                }
            }

            if (i === 5) {
                let smile = getElementById(snowmanFigureElementSmile);
                if (smile != null) {
                    addElementClassNameByElement(smile, snowmanFigureElementActionShapeRemoveColor);
                }
            }

            if (i > 5 && i < 12) {
                let button = getElementById(snowmanFigureElementButtonNoPrefix + valueToString(i));
                if (button != null) {
                    addElementClassNameByElement(button, snowmanFigureElementActionShapeRemoveColor);
                }
            }
        }
    }
}

function setAnimationInitialPositionsOfElementsAfterWinSnowmanFigureElementsHandsAndHat() {
    // hands
    for (let i = 12; i <= 16; i++) {
        let element = getElementById(snowmanFigureElementActionPrefix + valueToString(i));
        if (element != null) {
            removeElementClassNameByElement(element, snowmanFigureElementActionAddShapeColor);
            removeElementClassNameByElement(element, snowmanFigureElementActionShapeRemoveColor);
            addElementClassNameByElement(element, snowmanFigureElementActionPrefix + i + handInitialPositionForAnimation);
        }
    }
    // hat
    for (let i = 0; i <= 3; i++) {
        let element = getElementById(snowmanFigureElementActionPrefix + valueToString(i));
        if (element != null) {
            removeElementClassNameByElement(element, snowmanFigureElementActionAddShapeColor);
            removeElementClassNameByElement(element, snowmanFigureElementActionShapeRemoveColor);
        }
    }
    // hat
    addElementClassNameByElementId("snowmanFigureElementAction-1", "snowmanFigureElementAction-1-hatElementInitialPositionForAnimation");
    addElementClassNameByElementId(containerSnowmanFigureElementHatMain, snowmanFigureElementActionInitialPositionHatMainShape);
}

function setAnimationsAfterWinSnowmanFigureElementsHandsAndHat() {
    for (let i = 13; i <= 16; i++) {
        let element = getElementById(snowmanFigureElementActionPrefix + valueToString(i));
        if (element != null) {
            removeElementClassNameByElement(element, snowmanFigureElementActionFinalSnowballs);
            addElementClassNameByElement(element, snowmanFigureElementActionFinalSnowballsColor);
            addElementClassNameByElement(element, snowmanFigureElementActionPrefix + i + "");
        }
    }

    for (let i = 0; i <= 3; i++) {
        let element = getElementById(snowmanFigureElementActionPrefix + valueToString(i));
        if (element != null) {
            removeElementClassNameByElement(element, snowmanFigureElementActionPrefix + i + setAnimationHatFinalColor);
            addElementClassNameByElement(element, snowmanFigureElementActionPrefix + i + setHatFinalColor);
        }
    }

    addElementClassNameByElementId(containerSnowmanFigureElementHatMain, snowmanFigureElementActionHat);
}

//// time === changeKeyboardButtonsGameOver(), gameSnowmanBuildKeyboard.js
function setColorForSnowman() {

    setTimeout(function () {
        setAnimationSnowmanFigureElementsShapeRemoveColor()
    }, 2000)

    setTimeout(function () {
        setAnimationInitialPositionsOfElementsAfterWinSnowmanFigureElementsHandsAndHat()
    }, 6000)

    setTimeout(function () {
        setAnimationAfterWinSnowmanFigureElementsSnowballs()
    }, 6000)

    setTimeout(function () {
        setAnimationsAfterWinSnowmanFigureElementsHandsAndHat()
    }, 9000)
}

function createContainersForGameSnowmanFigureMessageWelcomeText() {
    createElementDiv(containerGameSnowmanAnimationElements, containerSnowmanFigureMessage1welcomeText);
    createElementP(containerSnowmanFigureMessage1welcomeText, snowmanFigureStartGameElement1welcomeText);
    setElementTextById(snowmanFigureStartGameElement1welcomeText, welcomeText);
    addElementClassNameByElementId(snowmanFigureStartGameElement1welcomeText, snowmanFigureStartGameElementSetAnimationToShowColor);
}

function createContainersForGameSnowmanFigureMessageGoodbyeText() {
    createElementDiv(containerGameSnowmanAnimationElements, containerSnowmanFigureMessage1goodbyeText);
    createElementP(containerSnowmanFigureMessage1goodbyeText, snowmanFigureStartGameElement1goodbyeText);
    setElementTextById(snowmanFigureStartGameElement1goodbyeText, goodbyeText);
    addElementClassNameByElementId(snowmanFigureStartGameElement1goodbyeText, snowmanFigureStartGameElementSetAnimationToShowColor);
}

function removeContainerSnowmanFigureMessageWelcomeText() {
    setTimeout(function () {
        removeElementsById(containerSnowmanFigureMessage1welcomeText)
    }, 3000);
}

function setAnimationGameSnowmanFigureMessageToRemoveText() {
    let element = getElementById(snowmanFigureStartGameElement1welcomeText);
    if (element != null) {
        removeElementClassNameByElement(element, snowmanFigureStartGameElementSetAnimationToShowColor);
        addElementClassNameByElement(element, snowmanFigureStartGameElementSetAnimationToRemoveColor);
    }
}

function removeContainerSnowmanFigureMessageActionsWelcomeText() {
    setAnimationGameSnowmanFigureMessageToRemoveText();
    removeContainerSnowmanFigureMessageWelcomeText();
}

function createContainersForGameSnowmanFigureMessageGameOver() {
    removeContainerSnowmanFigureMessageActionsWelcomeText();

    if (getElementById(containerSnowmanFigureElements) != null)
        setAnimationSnowmanFigureElementsShapeRemoveColor();

    setTimeout(function () {
        createContainersForGameSnowmanFigureMessageGoodbyeText();
    }, 3000);
}

function createContainersSnowmanFigureMainElements() {
    createElementDiv(containerGameSnowmanAnimationElements, containerSnowmanFigureAction);
    createElementDiv(containerSnowmanFigureAction, containerSnowmanFigureElements);

    for (let i = 0; i <= 16; i++) {
        let elementId = containerSnowmanFigureElementPrefix + valueToString(i);

        if (i < 4) {
            // container for hat elements
            if (i === 0) {
                createElementDiv(containerSnowmanFigureElements, containerSnowmanFigureElementHatMain);
                createElementDiv(containerSnowmanFigureElementHatMain, containerSnowmanFigureElementHatMainParts);
            }
            createElementDiv(containerSnowmanFigureElementHatMainParts, elementId);

        } else {
            createElementDiv(containerSnowmanFigureElements, elementId);
        }
        createElementDiv(elementId, snowmanFigureElementActionPrefix + valueToString(i));
    }
}