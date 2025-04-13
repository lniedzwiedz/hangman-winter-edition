function setFunctionOnclick(elementId, functionNameOnclick) {
    document.getElementById(elementId).setAttribute("onclick", functionNameOnclick + "(this.id)");
}

function createContainerMainElements(sectionName, containerSectionName, containerSectionMainName){
    let mainElement = document.getElementsByClassName(containerMain)[0];
    let newDiv = document.createElement("div");
    mainElement.append(newDiv);
    newDiv.setAttribute("id", sectionName);
    newDiv.classList.add(containerSectionName);

    let newDiv2 = document.createElement("div");
    let mainElem = document.getElementById(sectionName);
    mainElem.append(newDiv2);
    newDiv2.setAttribute("id", containerSectionMainName);
    newDiv2.classList.add((containerSectionMainName));
}

function createElement(parentId, childId, elementKind) {
    let newElement = document.createElement(elementKind);
    let mainElement = document.getElementById(parentId);
    mainElement.append(newElement);
    newElement.setAttribute("id", childId);
}

function createElementDiv(parentId, childId) {
    createElement(parentId, childId, "div")
}

function createElementButton(parentId, childId) {
    createElement(parentId, childId, "button")
}

function createElementP(parentId, childId) {
    createElement(parentId, childId, "p")
}

function setClassName(elementId, className) {
    document.getElementById(elementId).classList.add(className);
}

function createElementDivWithTheSameValueForIdAndClassName(parentId, elementIdAndClassName){
    createElementDiv(parentId, elementIdAndClassName);
    setClassName(elementIdAndClassName, elementIdAndClassName)
}

function removeElementsById(elementId) {
    let element = document.getElementById(elementId);
    if (element != null) {
        element.remove();
    }
}

function setElementTextByClassName(className, text){
    document.getElementsByClassName(className)[0].innerHTML = text;
}

function setElementTextById(elementId, text){
    document.getElementById(elementId).innerHTML = text;
}

function removeMainContainers(){
    removeContainerSectionHome();
    removeMainContainerForGameSnowman();
    removeMainContainerGameSnowmanDestroy();

}