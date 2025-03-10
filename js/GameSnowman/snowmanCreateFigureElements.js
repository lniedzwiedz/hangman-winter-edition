function createSnowmanFigure(parentId, subpageName) {

    let IdChild = "containerSnowmanFigureElements-" + subpageName;
    let ClassGrandchild = "containerSnowmanFigureElement-";
    let ClassGreatGrandchild = "snowmanFigureElementAction-";

    var parrentDiv = document.createElement('div');
    parrentDiv.setAttribute('id', IdChild);
    document.getElementById(parentId).append(parrentDiv);

    // 17 - snowman containers + div
    for (let i = 1; i < 18; i++) {

        // container
        var innerDivContainer = document.createElement('div');
        innerDivContainer.setAttribute('class', ClassGrandchild + i.toString());
        document.getElementById(IdChild).append(innerDivContainer);

        // action
        var innerDiv = document.createElement("div");
        innerDiv.setAttribute("class", ClassGreatGrandchild + i.toString());
        innerDiv.setAttribute("class", ClassGreatGrandchild + i.toString());

        let div0 = document.getElementById(IdChild);
        let div1 = div0.getElementsByClassName(ClassGrandchild + i.toString())[0];
        div1.append(innerDiv);

    }

}

