function valueToString(value) {
    return value.toString();
}

function getElementById(elementId) {
    return document.getElementById(elementId);
}

function getElementsByClassName(className) {
    return document.getElementsByClassName(className);
}

function setFunctionOnclickByElement(element, functionNameOnclick) {
    element.setAttribute("onclick", functionNameOnclick + "(this.id)");
}

function setFunctionOnclickByElementId(elementId, functionNameOnclick) {
    getElementById(elementId).setAttribute("onclick", functionNameOnclick + "(this.id)");
}

function createContainerMainElements(containerMainSectionName, sectionName, containerSectionName, containerSectionMainName) {
    createElementDiv(containerMainSectionName, containerSectionName);
    let newDiv2 = document.createElement("div");
    getElementById(containerSectionName).append(newDiv2);
    newDiv2.setAttribute("id", containerSectionMainName);
    newDiv2.classList.add((containerSectionMainName));
}

function createElement(parentId, childId, elementKind) {
    let newElement = document.createElement(elementKind);
    getElementById(parentId).append(newElement);
    newElement.setAttribute("id", childId);
}

function createElementButton(parentId, childId) {
    createElement(parentId, childId, "button");
}

function createElementDiv(parentId, childId) {
    createElement(parentId, childId, "div");
}

function createElementI(parentId, childId, iconStyle, iconClass) {
    createElement(parentId, childId, "i");
    getElementById(childId).classList.add(iconStyle, iconClass);
}

function createElementP(parentId, childId) {
    createElement(parentId, childId, "p");
}

function addElementClassNameByElement(element, className) {
    element.classList.add(className);
}

function addElementClassNameByElementId(elementId, className) {
    getElementById(elementId).classList.add(className);
}

function removeElementClassNameByElement(element, className) {
    element.classList.remove(className);
}

function createElementDivWithTheSameValueForIdAndClassName(parentId, elementIdAndClassName) {
    createElementDiv(parentId, elementIdAndClassName);
    addElementClassNameByElementId(elementIdAndClassName, elementIdAndClassName);
}

function removeElementsById(elementId) {
    let element = getElementById(elementId);
    if (element != null) {
        element.remove();
    }
}

function setElementTextByClassName(className, text) {
    document.getElementsByClassName(className)[0].innerHTML = valueToString(text);;
}

function setElementTextById(elementId, text) {
    getElementById(elementId).innerHTML = valueToString(text);
}

function splitTextToArray(text, separator) {
    return text.split(separator);
}

function removeContainerMainSection() {
    removeContainerSectionHome();
    removeMainContainerForGameSnowman();
    removeMainContainerGameSnowmanDestroy();
    removeContainerSectionContactForm();
}

function setElementStyletAsGrid(elementId, gridRowStartNumber, gridColumnStartNumber, gridRowEndNumber, gridColumnEndNumber, gridTemplateRows, gridTemplateColumns) {
    let element = getElementById(elementId);
    element.style.display = "grid";

    element.style.gridRow = valueToString(gridRowStartNumber);
    element.style.gridColumn = valueToString(gridColumnStartNumber);

    element.style.gridRowEnd = valueToString(gridRowEndNumber);
    element.style.gridColumnEnd = valueToString(gridColumnEndNumber);

    setElementStyleGridTemplateRows(elementId, gridTemplateRows);
    setElementStyleGridTemplateColumns(elementId, gridTemplateColumns);
}

function setElementStyleGridTemplateRows(elementId, gridTemplateRowsPattern) {
    getElementById(elementId).style.gridTemplateRows = gridTemplateRowsPattern;
}

function setElementStyleGridTemplateColumns(elementId, gridTemplateColumnsPattern) {
    getElementById(elementId).style.gridTemplateColumns = gridTemplateColumnsPattern;
}

function setElementStyleBackgroundColorById(elementId, color) {
    getElementById(elementId).style.backgroundColor = color;
}

function setElementStyleProperty(cssVariableName, value) {
    rootVariables.style.setProperty(cssVariableName, value);
}

function randomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}

function setElementValueById(elementId, value) {
    getElementById(elementId).value = value;
}

function getElementAttributeValueById(clickedId) {
    return getElementById(clickedId).getAttribute("value");
}

function removeElementAttributeOnclick(element) {
    element.removeAttribute("onclick");
}

function removeElementAttributeOnclickById(clickedId) {
    getElementById(clickedId).removeAttribute("onclick");
}