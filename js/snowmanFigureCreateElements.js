function createSnowmanFigure(elementId) {

    //console.log("test 1");

    let childId = "containerSnowmanFigure";
    let grandchildId = "containerSnowmanFigure-";
    let greatGrandchildId = "snowmanFigureElementAction-";

    var parrentDiv = document.createElement('div');
    parrentDiv.setAttribute('id', childId);
    document.getElementById(elementId).append(parrentDiv);

    for (let i = 1; i < 13; i++) {

        var innerDivContainer = document.createElement('div');
        innerDivContainer.setAttribute('id', grandchildId + i.toString());
        document.getElementById(childId).append(innerDivContainer);

        var innerDiv = document.createElement("div");
        innerDiv.setAttribute("id", greatGrandchildId + i.toString());
        innerDiv.setAttribute("class", "snowmanFigure");
        document.getElementById(grandchildId + i).append(innerDiv);

    }

}

// create snowman at home page
// createSnowmanFigure("containerButtonGameSnowmanElements");

// create snowman for destroy game
// createSnowmanFigure("containerGameSnowmanElementActions");

//module.exports = {createSnowmanFigure};
