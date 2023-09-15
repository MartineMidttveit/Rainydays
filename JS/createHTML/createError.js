export default function createError() {
    const errorBox = document.createElement("section");
    errorBox.classList.add("error-box");

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper-error");

    const title = document.createElement("h1");
    title.classList.add("medium-title");
    title.textContent = "WOOPS... Error!";

    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Could not load products due to " + error.errorMessage; // SJEKKE AT DENNE ER OK

    const refresh = document.createElement("a"); // denne er for å refreshe siden.

    const refreshBtn = document.createElement("i");
    refreshBtn.classList.add("fa-solid fa-arrows-rotate");
    refreshBtn.textContent = "Refresh the page";

    const darkCloud = document.createElement("div");
    darkCloud.classList.add("darkcloud");

    const cloud = document.createElement("img");
    cloud.src = "../IMG/darkcloud.png";
    cloud.alt = "A dark thunder cloud";

    const lighteningOne = document.createElement("img");
    lighteningOne.classList.add("light");
    lighteningOne.src = "../IMG/lightening-1.png";
    lighteningOne.alt = "Yellow, spiked lightening";

    const lighteningTwo = document.createElement("img");
    lighteningTwo.classList.add("light");
    lighteningTwo.src = "../IMG/lightening-2.png";
    lighteningTwo.alt = "Yellow, spiked lightening";

    const lighteningThree = document.createElement("img");
    lighteningThree.classList.add("light");
    lighteningThree.src = "../IMG/lightening-3.png";
    lighteningThree.alt = "Yellow, spiked lightening";
}


