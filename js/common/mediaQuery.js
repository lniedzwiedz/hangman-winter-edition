function updateMenuTitleDescriptionTextAfterMediaQueryChange() {

    if (mediaQueryMaxWidth1200.matches)
        setElementTextById(menuTitleDescriptionText, menuTitleDescriptionTextDisplayMediaQueryMaxWidth1200);
    else
        setElementTextById(menuTitleDescriptionText, menuTitleDescriptionTextDisplayMediaQueryMaxWidthDefault);
}

updateMenuTitleDescriptionTextAfterMediaQueryChange();
mediaQueryMaxWidth1200.addEventListener("change", updateMenuTitleDescriptionTextAfterMediaQueryChange);