function createSnowmanFigure(parentId, subpageName) {

    let IdChild = "containerSnowmanFigureElements-" + subpageName;
    let ClassGrandchild = "containerSnowmanFigureElement-";
    let ClassGreatGrandchild = "snowmanFigureElementAction-";

    let parrentDiv = document.createElement('div');
    parrentDiv.setAttribute('id', IdChild);
    document.getElementById(parentId).append(parrentDiv);

    // 17 - snowman containers + div
    for (let i = 1; i <= 17; i++) {

        // container
        let innerDivContainer = document.createElement('div');
        innerDivContainer.setAttribute('class', ClassGrandchild + i.toString());
        document.getElementById(IdChild).append(innerDivContainer);

        // action
        let innerDiv = document.createElement("div");
        innerDiv.setAttribute("class", ClassGreatGrandchild + i.toString());
        // innerDiv.className += " snowmanFigureElements";

        if (i === 5)
            innerDiv.innerHTML = "O,O";

        if (i === 6)
            innerDiv.innerHTML = "U";

        if (i > 6 && i < 13)
            innerDiv.innerHTML = "*";

        let div0 = document.getElementById(IdChild);
        let div1 = div0.getElementsByClassName(ClassGrandchild + i.toString())[0];
        div1.append(innerDiv);
    }
}

