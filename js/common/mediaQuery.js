function updateMenuTitleDescriptionTextAfterMediaQueryChange() {

    if (mediaQueryMaxWidth1200.matches) {
        // console.log("1200");
        setElementTextById(menuTitleDescriptionText, menuTitleDescriptionTextDisplayMediaQueryMaxWidth1200);

    } else {
        // console.log("1600");
        setElementTextById(menuTitleDescriptionText, menuTitleDescriptionTextDisplayMediaQueryMaxWidthDefault);
    }
}

updateMenuTitleDescriptionTextAfterMediaQueryChange();
mediaQueryMaxWidth1200.addEventListener("change", updateMenuTitleDescriptionTextAfterMediaQueryChange);