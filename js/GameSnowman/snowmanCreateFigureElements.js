function createSnowmanFigure(parentId, subpageName) {

    let IdChild = "containerSnowmanFigureElements-" + subpageName;
    let ClassGrandchild = "containerSnowmanFigureElement-";
    let ClassGreatGrandchild = "snowmanFigureElementAction-";

    let parrentDiv = document.createElement('div');
    parrentDiv.setAttribute('id', IdChild);
    document.getElementById(parentId).append(parrentDiv);

    // 16 - snowman containers + div
    for (let i = 0; i <= 16; i++) {

        // container
        let innerDivContainer = document.createElement('div');
        // innerDivContainer.setAttribute('class', ClassGrandchild + i.toString());
        innerDivContainer.setAttribute('id', ClassGrandchild + i.toString());
        document.getElementById(IdChild).append(innerDivContainer);

        // action
        let innerDiv = document.createElement("div");
        // innerDiv.setAttribute("class", ClassGreatGrandchild + i.toString());
        innerDiv.setAttribute("id", ClassGreatGrandchild + i.toString());
        // innerDiv.setAttribute("class", "");
        // innerDiv.className += " snowmanFigureElementActionAddShape";


        // XXXXXXXXXXXXXXXXXXXX only for test ->

        innerDiv.className += " snowmanFigureElementActionAddShape ";

        if (i === 0) innerDiv.className += " snowmanFigureElementAction-0";

        if (i === 1) innerDiv.className += " snowmanFigureElementAction-1";

        if (i === 2) innerDiv.className += " snowmanFigureElementAction-2";

        if (i === 3) innerDiv.className += " snowmanFigureElementAction-3";

        innerDiv.className += " snowmanFigureElementsFinal ";

        // XXXXXXXXXXXXXXXXXXXX only for test <-


        // let div0 = document.getElementById(IdChild);
        // let div1 = div0.getElementsByClassName(ClassGrandchild + i.toString())[0];
        // div1.append(innerDiv);

        let div1 = document.getElementById(ClassGrandchild + i.toString());

        div1.append(innerDiv);


        if (i === 4)
            // innerDiv.innerHTML = "O,O";
            let divEye = document.createElement('div');
        divEye.setAttribute('id', "snowmanFigureElementEye");
        document.getElementById(ClassGreatGrandchild + i.toString()).append(divEye);

        if (i === 5) {
            // innerDiv.innerHTML = "U";
            let divSmile = document.createElement('div');
            divSmile.setAttribute('id', "snowmanFigureElementSmile");
            document.getElementById(ClassGreatGrandchild + i.toString()).append(divSmile);
        }


        if (i > 5 && i < 12) innerDiv.innerHTML = "*";
    }
}

