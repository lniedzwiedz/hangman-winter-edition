function createFooter() {
    createContainerMainFooter();
    createContainerFooterAuthor();
    // do not remove this comment / function !!!
    // createContainerFooterEnvelope();
}

function createContainerMainFooter() {
    createContainerMainElements(containerMainSectionFooter, sectionFooter, containerSectionFooter, containerMainFooter);
    setElementClassName(containerSectionFooter, containerSectionFooter);
}

function createContainerFooterAuthor() {
    createElementDiv(containerMainFooter, containerFooterAuthor);
    setElementClassName(containerFooterAuthor, containerFooterAuthor);
    createElementP(containerFooterAuthor, footerAuthor);
    setElementClassName(footerAuthor, footerAuthor);
    setElementTextById(footerAuthor, footerAuthorData);
}

// do not remove this comment / function !!!
// function createContainerFooterEnvelope() {
//
//     createElementDiv(containerMainFooter, containerFooterEnvelope);
//     setElementClassName(containerFooterEnvelope, containerFooterEnvelope);
//
//     createElementButton(containerFooterEnvelope, footerButtonEnvelope);
//     setElementTextById(footerButtonEnvelope, footerIconEnvelope);
//     setElementClassName(footerButtonEnvelope, footerButtonEnvelope);
//     // setFunctionOnclick(footerButtonEnvelope, functionNameOnclickCreateSubpageFormContact);
// }