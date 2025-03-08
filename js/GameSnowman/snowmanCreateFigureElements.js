function createSnowmanFigure(parentId, subpageName) {

    let childId = "containerSnowmanFigureElements-" + subpageName;
    let grandchildId = "containerSnowmanFigureElement-";
    let greatGrandchildId = "snowmanFigureElementAction-";

    var parrentDiv = document.createElement('div');
    parrentDiv.setAttribute('id', childId);
    document.getElementById(parentId).append(parrentDiv);

    for (let i = 1; i < 13; i++) {

        var innerDivContainer = document.createElement('div');
        innerDivContainer.setAttribute('class', grandchildId + i.toString());
        document.getElementById(childId).append(innerDivContainer);

        var innerDiv = document.createElement("div");
        innerDiv.setAttribute("class", greatGrandchildId + i.toString());
        innerDiv.setAttribute("class", "snowmanFigure");

        let childElem = document.getElementById(childId);
        childElem.getElementsByClassName(grandchildId)[1];

    }

}

