function setFunctionOnclick(elementId, functionNameOnclick) {
    document.getElementById(elementId).setAttribute("onclick", functionNameOnclick + "(this.id)");
}

function createElement(parentId, childId, elementKind) {
    let newElement = document.createElement(elementKind);
    let mainElement = document.getElementById(parentId);
    mainElement.append(newElement);
    newElement.setAttribute("id", childId);
}

function createDiv(parentId, childId) {
    createElement(parentId, childId, "div")
}

function createButton(parentId, childId) {
    createElement(parentId, childId, "button")
}

function setClassName(elementId, className) {
    document.getElementById(elementId).classList.add(className);
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