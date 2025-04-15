function createFooter() {
    createContainerMainFooter();
    createContainerFooterAuthor();
    createContainerFooterEnvelope();
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

function createContainerFooterEnvelope() {

    createElementDiv(containerMainFooter, containerMainFooterEnvelope);
    setElementClassName(containerMainFooterEnvelope, containerMainFooterEnvelope);

    createElementDiv(containerMainFooterEnvelope, containerFooterEnvelopeText);
    setElementClassName(containerFooterEnvelopeText, containerFooterEnvelope);
    setElementClassName(containerFooterEnvelopeText, containerFooterEnvelopeText);
    setElementTextById(containerFooterEnvelopeText, footerIconEnvelope);

    createElementDiv(containerMainFooterEnvelope, containerFooterButtonEnvelope);
    setElementClassName(containerFooterButtonEnvelope, containerFooterEnvelope);
    setElementClassName(containerFooterButtonEnvelope, containerFooterButtonEnvelope);

    createElementButton(containerFooterButtonEnvelope, footerButtonEnvelope);
    // setFunctionOnclick(footerButtonEnvelope, functionNameOnclickCreateSubpageFormContact);
    setElementClassName(footerButtonEnvelope, footerButtonEnvelope);
}

