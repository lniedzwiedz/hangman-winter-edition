const containerMainHome = "containerMainHome";
const containerHomeGamesButtons = "containerHomeGamesButtons";

const containerGameSnowmanDescription = "containerGameSnowmanDescription";
const gameSnowmanWordElementTextBuild = "gameSnowmanWordElementTextBuild";
const gameSnowmanDescriptionTextBuild = ["BUILD SNOWMAN2", "discover colour name", "WIN GAME", "&", "snowman will change colour"];

const gameSnowmanDescription = "gameSnowmanDescription";

function createSubpageHome(){
    createMainContainerHome();
    createContainerButtonGameBuildSnowman()
    createContainersForGameDescription("SnowmanBuild");

}

createSubpageHome();




function createMainContainerHome(){

    let elementId1 = "sectionHome"
    let elementIdAndClass = containerMainHome;

    let mainElement = document.getElementsByClassName("containerMain")[0];
    let newDiv = document.createElement("div");
    mainElement.append(newDiv);
    newDiv.setAttribute("id", elementId1);
    newDiv.classList.add("item-2")
    newDiv.classList.add("containerSectionHome")

    let newDiv2 = document.createElement("div");
    let mainElem = document.getElementById(elementId1);
    mainElem.append(newDiv2);
    newDiv2.setAttribute("id", elementIdAndClass);
    newDiv2.classList.add((elementIdAndClass));

}



function createContainerButtonGameBuildSnowman(){
    // let elementId2 = containerMainHome;
    // let elementId3 = containerHomeGamesButtons;
    createNewDiv(containerMainHome, containerHomeGamesButtons);
}


function createNewDiv(parentId, newChildId) {
    let newDiv = document.createElement("div");
    let mainElem = document.getElementById(parentId);
    mainElem.append(newDiv);
    newDiv.setAttribute("id", newChildId);
}

function createContainersForGameDescription(descriptionName) {

    let containerGameSnowmanDescriptionSpecified = containerGameSnowmanDescription + descriptionName;
    createNewDiv(containerHomeGamesButtons, containerGameSnowmanDescriptionSpecified);
    let element1 = document.getElementById(containerGameSnowmanDescriptionSpecified);
    element1.classList.add(containerGameSnowmanDescriptionSpecified);

   let containerButton = containerGameSnowmanDescriptionSpecified +"-gameButton";
    createNewDiv(containerGameSnowmanDescriptionSpecified, containerButton);
    let element2 = document.getElementById(containerButton);
    // element2.classList.add(containerButton);

    let containerDescription = containerGameSnowmanDescriptionSpecified +"-text";
    createNewDiv(containerButton, containerDescription);
    let element3 = document.getElementById(containerDescription);

    for (let i = 0; i < gameSnowmanDescriptionTextBuild.length; i++) {

        let elementId = gameSnowmanWordElementTextBuild + "-" + i
        createNewDiv(containerDescription, elementId);
        let element4 = document.getElementById(elementId);

        let newP = document.createElement("p");
        // document.getElementById(containerGameSnowmanDescription).append(newDiv);
        element4.append(newP);
        newP.innerHTML = gameSnowmanDescriptionTextBuild[i];

        // newP.setAttribute("id", gameSnowmanWordElementTextBuild + "-" + i)
        newP.classList.add(gameSnowmanWordElementTextBuild)
        newP.classList.add(gameSnowmanWordElementTextBuild+"-"+i)

    }

}

;