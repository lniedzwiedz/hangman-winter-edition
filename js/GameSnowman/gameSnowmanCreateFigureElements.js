function createSnowmanFigure() {

    // let IdChild = "containerSnowmanFigureElements";
    let parentId = "containerGameSnowmanAnimation";
    let IdChild = "containerSnowmanFigureElements";
    let ClassGrandchild = "containerSnowmanFigureElement-";
    let ClassGreatGrandchild = "snowmanFigureElementAction-";

    let parentDiv = document.createElement('div');
    parentDiv.setAttribute('id', IdChild);
    document.getElementById(parentId).append(parentDiv);

    // 16 - snowman containers + div
    for (let i = 0; i <= 16; i++) {

        // container
        let innerDivContainer = document.createElement('div');
        innerDivContainer.setAttribute('id', ClassGrandchild + i.toString());
        document.getElementById(IdChild).append(innerDivContainer);

        // action
        let innerDiv = document.createElement("div");
        innerDiv.setAttribute("id", ClassGreatGrandchild + i.toString());
        let div1 = document.getElementById(ClassGrandchild + i.toString());
        div1.append(innerDiv);

        if (i === 4){
            // innerDiv.innerHTML = "O,O" eyes;

            for (let j = 0; j < 2; j++) {
                let divEye = document.createElement('div');
                document.getElementById(ClassGreatGrandchild + i.toString()).append(divEye);
                divEye.classList.add("snowmanFigureElementEyes");
            }
        }

        if (i === 5) {
            // innerDiv.innerHTML = "U" mouth;
            let divSmile = document.createElement('div');
            divSmile.setAttribute('id', "snowmanFigureElementSmile");
            document.getElementById(ClassGreatGrandchild + i.toString()).append(divSmile);
        }

        if (i > 5 && i < 12) {
            let divButtonBox = document.createElement('div');
            document.getElementById(ClassGreatGrandchild + i.toString()).append(divButtonBox);
            divButtonBox.setAttribute("id", "containerSnowmanFigureElementButtonNo-" + i.toString())

            let divButton = document.createElement('div');
            document.getElementById("containerSnowmanFigureElementButtonNo-" + i.toString()).append(divButton);
            divButton.setAttribute("id", "snowmanFigureElementButtonNo-" + i.toString())
            divButton.classList.add("snowmanFigureElementButton");
        }

        // XXXXXXXXXXXXXXXXXXXX only for test ->

        // innerDiv.className += " snowmanFigureElementActionAddShape ";
        //
        // if (i > 12 && i < 17) {
        //     innerDiv.className += " snowmanFigureElementActionAddShapeHands ";
        // }
        // if (i === 0) innerDiv.className += " snowmanFigureElementAction-0";
        //
        // if (i === 1) innerDiv.className += " snowmanFigureElementAction-1";

        // if (i === 2) innerDiv.className += " snowmanFigureElementAction-2";
        //
        // if (i === 3) innerDiv.className += " snowmanFigureElementAction-3";

        // innerDiv.className += " snowmanFigureElementsFinal ";


    }


    // let buttons = document.getElementsByClassName("snowmanFigureElementButton");
    //
    // for (let a = 0; a < buttons.length; a++) {
    //
    //     buttons[a].className += " snowmanFigureElementActionAddShape snowmanFigureElementActionAddShapeButton ";
    //
    // }

    // let button = document.getElementById("snowmanFigureElementButtonNo-11");
    // button.className += "snowmanFigureElementButton snowmanFigureElementActionAddShape";

    // let eyes = document.getElementsByClassName("snowmanFigureElementEyes ");
    //
    // for (let e = 0; e < eyes.length; e++) {
    //
    //     eyes[e].className += " snowmanFigureElementActionAddShape ";
    //
    // }


    // let smile = document.getElementById("snowmanFigureElementSmile");
    // smile.classList.add("snowmanFigureElementActionAddShapeSmile");

    // XXXXXXXXXXXXXXXXXXXX only for test <-

}

