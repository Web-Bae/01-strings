// Declaring UI elements
const el_inputColor = document.querySelector("#clothingColor");
const el_inputFood = document.querySelector("#food");
const el_bandNameText = document.querySelector("#bandNameText");
const el_form = document.querySelector("#band-name-form");

function generateBandName(clothingColor, lastFoodEaten) {
    // Initialize bandName to an empty string
    let bandName = "";

    // Function to capitalize the first letter of each word
    function capitalizeFirstLetter(word) {
        if (typeof word === "number") {
            return word.toString();
        } else if (typeof word !== "string" || word === null) {
            return "";
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    }
    // Construct the band name
    bandName = `The ${capitalizeFirstLetter(
        clothingColor
    )} ${capitalizeFirstLetter(lastFoodEaten)}`;

    return bandName;
}

el_form.addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();
    el_bandNameText.innerHTML = generateBandName(
        el_inputColor.value,
        el_inputFood.value
    );
});
