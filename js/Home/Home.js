
const containerGameSnowmanDescription = "containerGameSnowmanDescription";
const gameSnowmanWordElementTextBuild = "gameSnowmanWordElementTextBuild";
const gameSnowmanDescriptionTextBuild = ["BUILD SNOWMAN2", "discover colour name", "WIN GAME", "&", "snowman will change colour"];

const gameSnowmanDescription = "gameSnowmanDescription";

function createNewDiv(parentId, newChildId) {
    let newDiv = document.createElement("div");
    let mainElem = document.getElementById(parentId);
    mainElem.append(newDiv);
    newDiv.setAttribute("id", newChildId);
}

function createContainersForGameDescription() {

    createNewDiv("containerHomeButtonGameSnowmanBuild", containerGameSnowmanDescription);
    let parentElement = document.getElementById(containerGameSnowmanDescription);

    // let gameKind = "build";
    //
    let rowStart = 1;
    let columnStart = 1;
    let rowEnd = 2;
    let columnEnd = 3;

    parentElement.style.display = "grid";
    // parentElement.style.backgroundColor = "cadetblue";
    parentElement.style.gridRow = rowStart;
    parentElement.style.gridColumn = columnStart;
    parentElement.style.gridRowEnd = rowEnd;
    parentElement.style.gridColumnEnd = columnEnd;

    // parentElement.style.gridTemplateRows = " repeat(1, 0.00001fr 100fr  0.00001fr) ";
    // parentElement.style.gridTemplateColumns = "0.00001fr 100fr 0.00001fr";
    // parentElement.style.gridTemplateRows = " repeat(1, 27fr 46fr 27fr) ";
    parentElement.style.gridTemplateRows = " repeat(1, 7fr 46fr 47fr) ";
    parentElement.style.gridTemplateColumns = "30fr 40fr 30fr";


    let rowChildStart = 2;
    let columnChildStart = 2;
    let rowChildEnd = 2;
    let columnChildEnd = 3;


    let newDiv = document.createElement("div");
    // document.getElementById(containerGameSnowmanDescription).append(newDiv);
    parentElement.append(newDiv);
    newDiv.style.display = "grid";

    // newDiv.style.backgroundColor = "darkslategrey";


    newDiv.style.gridRow = rowChildStart;
    newDiv.style.gridColumn = columnChildStart;
    newDiv.style.gridRowEnd = rowChildEnd;
    newDiv.style.gridColumnEnd = columnChildEnd;
    newDiv.style.gridTemplateRows = "repeat(1, 1fr) ";
    newDiv.style.gridTemplateColumns = "1fr";
    // newDiv.innerHTML = gameSnowmanDescriptionTextBuild;



    // newDiv.setAttribute("id", "gameSnowmanDescription-" + gameKind);
    newDiv.setAttribute("id", gameSnowmanDescription);

    for (let i = 0; i < gameSnowmanDescriptionTextBuild.length; i++) {

        let newP = document.createElement("p");
        // document.getElementById(containerGameSnowmanDescription).append(newDiv);
        newDiv.append(newP);
        newP.innerHTML = gameSnowmanDescriptionTextBuild[i];

        // newP.classList.add(gameSnowmanWordElementTextBuild+"-p"+i)
        newP.setAttribute("id", gameSnowmanWordElementTextBuild + "-p" + i)
        newP.classList.add(gameSnowmanWordElementTextBuild)
    }

}

createContainersForGameDescription();