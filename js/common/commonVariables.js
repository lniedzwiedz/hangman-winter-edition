let rootVariables = document.querySelector(":root");

// container main
const containerMain = "containerMain";
const containerMainSectionMenu = "containerMainSectionMenu";
const containerMainSectionActions = "containerMainSectionActions";
const containerMainSectionFooter = "containerMainSectionFooter";

// subpage HOME
const sectionHome = "sectionHome";
const containerMainSectionHome = "containerMainSectionHome";
const containerMainHome = "containerMainHome";
const containerHomeGamesButtons = "containerHomeGamesButtons";

const containerGameSnowmanDescription = "containerGameSnowmanDescription";
const containerGameSnowmanWordElementText = "containerGameSnowmanWordElementText";
const gameSnowmanWordElementText = "gameSnowmanWordElementText";
const gameSnowmanDescriptionTextBuild = ["SAVE SNOWMAN", "discover colour name", "WIN GAME", "&", "snowman will change colour"];
const gameSnowmanDescriptionTextDestroy = ["DESTROY SNOWMAN", "discover colour name", "WIN GAME", "&", "snowman will rise again"];

const gameNameSnowmanBuild = "SnowmanBuild";
const gameNameSnowmanDestroy = "SnowmanDestroy";
const homeButtonGameSnowman = "homeButtonGameSnowman";




// game
const functionNameOnclickPlayGameSnowmanBuild = "playGameSnowmanBuild";
const functionNameOnclickSetConfigurationForGameSnowmanBuild = "setConfigurationForGameSnowmanBuild";

const functionNameOnclickPlayGameSnowmanDestroy = "playGameSnowmanDestroy";
const functionNameOnclickSetConfigurationForGameSnowmanDestroy = "setConfigurationForGameSnowmanDestroy";

const sectionGameSnowman = "sectionGameSnowman-";
const sectionGameSnowmanDestroy = "sectionGameSnowmanDestroy-";
const snowmanFigureElementAction = "snowmanFigureElementAction-";


const containerSnowmanFigureElements = "containerSnowmanFigureElements";
const containerSnowmanFigureElement = "containerSnowmanFigureElement-";
const snowmanFigureElementActionAddShapeColor = "snowmanFigureElementActionAddShapeColor";
const snowmanFigureElementActionShapeRemoveColor = "snowmanFigureElementActionShapeRemoveColor";
const containerSnowmanFigureAction = "containerSnowmanFigureAction";
const containerGameSnowmanAnimation = "containerGameSnowmanAnimation";
const containerGameSnowmanAnimationElements = "containerGameSnowmanAnimationElements";
const containerMainSectionGameSnowman = "containerMainSectionGameSnowman";

// figure field
const welcomeText = "?";
const containerSnowmanFigureMessage1welcomeText = "containerSnowmanFigureMessage-1-welcomeText";
const snowmanFigureStartGameElement1welcomeText = "snowmanFigureStartGameElement-1-welcomeText";

const goodbyeText = "GAME\nOVER";
const containerSnowmanFigureMessage1goodbyeText = "containerSnowmanFigureMessage-1-goodbyeText";
const snowmanFigureStartGameElement1goodbyeText = "snowmanFigureStartGameElement-1-goodbyeText";

const snowmanFigureStartGameElementSetAnimationToShowColor = "snowmanFigureStartGameElement-setAnimationToShowColor";
const snowmanFigureStartGameElementSetAnimationToRemoveColor = "snowmanFigureStartGameElement-setAnimationToRemoveColor";


// snowman figure
const snowmanFigureElementActionFinalSnowballs = "snowmanFigureElementActionFinalSnowballs";
const snowmanFigureElementActionFinalSnowballsColor = "snowmanFigureElementActionFinalSnowballsColor";

// hat
const hatElementInitialPositionForShape = "-hatElementInitialPositionForShape";
const handInitialPositionForShape = "-handInitialPositionForShape";
const hatElementInitialPositionForAnimation = "hatElementInitialPositionForAnimation";
const setAnimationHatFinalColor = "-setAnimationHatFinalColor";
const setHatFinalColor = "-setHatFinalColor";


//eyes
const snowmanFigureElementEyes = "snowmanFigureElementEyes";
const snowmanFigureElementActionFinalEyes = "snowmanFigureElementActionFinalEyes";

//smile
const snowmanFigureElementSmile = "snowmanFigureElementSmile";
const snowmanFigureElementActionAddShapeSmile = "snowmanFigureElementActionAddShapeSmile";
const snowmanFigureElementActionFinalSmile = "snowmanFigureElementActionFinalSmile";

//snowman buttons
const containerSnowmanFigureElementButtonNo = "containerSnowmanFigureElementButtonNo-";
const snowmanFigureElementButtonNo = "snowmanFigureElementButtonNo-";
const snowmanFigureElementActionAddShapeButton = "snowmanFigureElementActionAddShapeButton";
const snowmanFigureElementButton = "snowmanFigureElementButton";
const snowmanFigureElementButtonFinal = "snowmanFigureElementButtonFinal";

//hands
const snowmanFigureElementActionAddShapeHands = "snowmanFigureElementActionAddShapeHands";
const handInitialPositionForAnimation = "handInitialPositionForAnimation";


//game description
const gameSnowmanWordElementTextBuild = "gameSnowmanWordElementTextBuild";
const gameSnowmanDescriptionTextGameOverLoser = "GAME OVER";
const gameSnowmanDescriptionTextGameOverLoserGiveHope = "You did well!";
const gameSnowmanDescriptionTextGameOverWinner = "YOU WIN";
const gameSnowmanDescriptionTextGameOverWinnerCongratulations = "Congratulations!";

const gameSnowmanDescription = "gameSnowmanDescription";

// word to discover
const containerGameSnowmanWord = "containerGameSnowmanWord";
const containerGameSnowmanWordElements = "containerGameSnowmanWordElements";
const containerGameSnowmanWordToDiscover = "containerGameSnowmanWordToDiscover";
const gameSnowmanWordElementToDiscover = "gameSnowmanWordElementToDiscover";

// game lives
const containerGameSnowmanLives = "containerGameSnowmanLives";

// CSS variable
let cssSnowmanFigureColor = "--snowmanFigureColor"

// menu
const sectionMenu = "sectionMenu";
const containerSectionMenu = "containerSectionMenu";
const containerMenuMain = "containerMenuMain";
const containerMenuMainParts = "containerMenuMainParts";
const containerMenuTitleMain = "containerMenuTitleMain";
const menuTitle = "menuTitle";
const menuTitleText = "menuTitleText";
const menuTitleTextDisplay = "Simply Games";

const containerMenuButtonsMain = "containerMenuButtonsMain";
const containerMenuButtonsMainParts = "containerMenuButtonsMainParts";
const containerMenuButtonHomeMain = "containerMenuButtonHomeMain";
const containerMenuButtonHomeClick = "containerMenuButtonHomeClick";
const menuButtonHomeClick = "menuButtonHomeClick";
const menuButtonClick = "menuButtonClick";
const functionNameOnclickCreateSubpageHome = "createSubpageHome";
const containerMenuButtonHome = "containerMenuButtonHome";
const containerMenuButtonHomeText = "containerMenuButtonHomeText";
const containerMenuButtonText = "containerMenuButtonText";
const menuButtonHomeText = "menuButtonHomeText";
const menuButtonText = "menuButtonText";
const menuButtonHomeTextDisplay = "HOME <i class=\"fa-solid fa-igloo\"></i>";
// const menuButtonHomeTextDisplay = "SWEET<i class=\"fa-solid fa-igloo\"></i>";

const containerMenuButtonGameSnowmanBuildMain = "containerMenuButtonGameSnowmanBuildMain";
const containerMenuButtonGameSnowmanBuildText = "containerMenuButtonGameSnowmanBuildText";
const containerMenuButtonGameSnowmanBuild = "containerMenuButtonGameSnowmanBuild";
const containerMenuButtonGameSnowmanBuildClick = "containerMenuButtonGameSnowmanBuildClick";
const menuButtonGameSnowmanBuildClick = "menuButtonGameSnowmanBuildClick";
const menuButtonGameSnowmanBuildText = "menuButtonGameSnowmanBuildText";
// const menuButtonGameSnowmanBuildTextDisplay = "SAVE SNOWMAN";
const menuButtonGameSnowmanBuildTextDisplay = "SAVE <i class=\"fa-solid fa-snowman\"></i>";

const containerMenuButtonGameSnowmanDestroyMain = "containerMenuButtonGameSnowmanDestroyMain";
const containerMenuButtonGameSnowmanDestroyText = "containerMenuButtonGameSnowmanDestroyText";
const containerMenuButtonGameSnowmanDestroy = "containerMenuButtonGameSnowmanDestroy";
const containerMenuButtonGameSnowmanDestroyClick = "containerMenuButtonGameSnowmanDestroyClick";
const menuButtonGameSnowmanDestroyClick = "menuButtonGameSnowmanDestroyClick";
const menuButtonGameSnowmanDestroyText = "menuButtonGameSnowmanDestroyText";
// const menuButtonGameSnowmanDestroyTextDisplay = "DESTROY SNOWMAN";
const menuButtonGameSnowmanDestroyTextDisplay = 'DESTROY <i class=\"fa-solid fa-snowman\"></i>';


//footer
const containerSectionFooter = "containerSectionFooter";
const containerMainFooter = "containerMainFooter";
const containerMainFooterParts = "containerMainFooterParts";
const containerFooterAuthor = "containerFooterAuthor";
const footerAuthor = "footerAuthor";
const footerAuthorData = "&copy 2025 Copyright: Anita Łaszczak";
const containerMainFooterEnvelope = "containerMainFooterEnvelope";
// const footerIconEnvelope = "IvI";
const footerIconEnvelope = '<i class="fa-solid fa-envelope"></i>';
const sectionFooter = "sectionFooter";
const functionNameOnclickCreateSubpageFormContact = "createSubpageFormContact";
const containerFooterButtonEnvelope = "containerFooterButtonEnvelope";
const containerFooterEnvelopeText = "containerFooterEnvelopeText";
const footerButtonEnvelope = "footerButtonEnvelope";
const containerFooterEnvelope = "containerFooterEnvelope";

// contact form
const sectionContactForm = "sectionContactForm";
const containerSectionContactForm = "containerSectionContactForm";
const containerMainContactForm = "containerMainContactForm";