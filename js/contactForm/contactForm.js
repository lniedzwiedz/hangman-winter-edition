function createSubpageFormContact (){
    console.log("> createSubpageFormContact");
    // removeContainerSectionContactForm();
    // removeContainerSectionHome();
    removeContainerMainSection();
    createContainerMainFormContact();
}

function createContainerMainFormContact(){
    let mainElement = document.getElementsByClassName(containerMain)[0];
    let newDiv = document.createElement("div");
    mainElement.append(newDiv);
    newDiv.setAttribute("id", sectionContactForm);
    newDiv.classList.add("item-2")
    newDiv.classList.add(containerSectionContactForm)

    let newDiv2 = document.createElement("div");
    let mainElem = document.getElementById(sectionContactForm);
    mainElem.append(newDiv2);
    newDiv2.setAttribute("id", containerMainContactForm);
    newDiv2.classList.add((containerMainContactForm));

}

function removeContainerSectionContactForm() {
    removeElementsById(sectionContactForm);
}