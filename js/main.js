function setContainerMainSection() {
    createElementDiv(containerMain, containerMainSectionMenu);
    createElementDiv(containerMain, containerMainSectionActions);
    createElementDiv(containerMain, containerMainSectionFooter);
}

setContainerMainSection();
createMenu();
createSubpageHome();
createFooter();

console.log("Hangman - Winter Edition: version 20260830v121");