function setContainerMainSection() {
    createElementDiv(containerMain, containerMainSectionMenu);
    createElementDiv(containerMain, containerMainSectionActions);
    createElementDiv(containerMain, containerMainSectionFooter);
}

setContainerMainSection();
createMenu();
createSubpageHome();
// setConfigurationForGameSnowmanBuild();
createFooter();