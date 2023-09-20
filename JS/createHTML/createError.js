export default function createError(error, errorBox) {
    // const errorBox = document.createElement("section");
    errorBox.classList.add("error-box");

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper-error");

    const title = document.createElement("h1");
    title.classList.add("medium-title");
    title.textContent = "WOOPS... Error!";

    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Could not load products due to "; 
    errorMessage.classList.add("error-message");

    const errorSpan = document.createElement("span");
    errorSpan.classList.add("bold");
    errorSpan.textContent = error.statusCode + " " + error.status;

    const refresh = document.createElement("a");
    refresh.setAttribute("id", "refresh"); 

    const refreshBtn = document.createElement("i");
    refreshBtn.classList.add("fa-solid");
    refreshBtn.classList.add("fa-arrows-rotate");

    const refreshText = document.createElement("p");
    refreshText.textContent = "Refresh the page";

    const darkCloud = document.createElement("div");
    darkCloud.classList.add("darkcloud");

    const cloud = document.createElement("img");
    cloud.src = "../IMG/darkcloud.png";
    cloud.alt = "A dark thunder cloud";

    const lightening = document.createElement("div");
    lightening.classList.add("lightening");

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

    errorBox.append(wrapper);
    errorMessage.append(errorSpan);
    wrapper.append(title, errorMessage, refresh, darkCloud, lightening);
    darkCloud.append(cloud);
    lightening.append(lighteningOne, lighteningTwo, lighteningThree);
    refresh.append(refreshBtn, refreshText);

    refresh.addEventListener("click", (e) => {
        location.reload();
    })
}



