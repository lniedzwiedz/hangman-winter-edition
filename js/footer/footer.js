function createFooter(){
    createContainerMainFooter();
    createContainerFooterAuthor();
    createContainerFooterEnvelope();
}

function createContainerMainFooter(){
    // let mainElement = document.getElementsByClassName(containerMain)[0];
    // let newDiv = document.createElement("div");
    // mainElement.append(newDiv);
    // newDiv.setAttribute("id", sectionFooter);
    // // newDiv.classList.add("item-3")
    // newDiv.classList.add(containerMainFooter)
    //
    // createElementDiv(sectionFooter, containerMainFooter);
    // setClassName(containerMainFooter, containerMainFooter);
    // createElementDiv(containerMainSectionFooter, sectionFooter);
    createContainerMainElements(containerMainSectionFooter, sectionFooter, containerSectionFooter, containerMainFooter);
}

function createContainerFooterAuthor(){
    createElementDiv(containerMainFooter, containerFooterAuthor);
    setClassName(containerFooterAuthor, containerFooterAuthor);
    createElementP(containerFooterAuthor, footerAuthor);
    setClassName(footerAuthor, footerAuthor);
    setElementTextById(footerAuthor, footerAuthorData);
}

function createContainerFooterEnvelope(){

    createElementDiv(containerMainFooter, containerMainFooterEnvelope);
    setClassName(containerMainFooterEnvelope, containerMainFooterEnvelope);

    createElementDiv(containerMainFooterEnvelope, containerFooterEnvelopeText);
    setClassName(containerFooterEnvelopeText, containerFooterEnvelope);
    setClassName(containerFooterEnvelopeText, containerFooterEnvelopeText);
    setElementTextById(containerFooterEnvelopeText, footerIconEnvelope);

    createElementDiv(containerMainFooterEnvelope, containerFooterButtonEnvelope);
    setClassName(containerFooterButtonEnvelope, containerFooterEnvelope);
    setClassName(containerFooterButtonEnvelope, containerFooterButtonEnvelope);

    createElementButton(containerFooterButtonEnvelope, footerButtonEnvelope);
    // setFunctionOnclick(footerButtonEnvelope, functionNameOnclickCreateSubpageFormContact);
    setClassName(footerButtonEnvelope, footerButtonEnvelope);
}

