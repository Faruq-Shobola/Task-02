let toggle = document.querySelector('.links');
let toggleButton = document.querySelector('.icon');
// let toggleCon = document.querySelector('.hambugerToggle a');

toggleButton.addEventListener('click', () => {
    // toggleCon.preventDefault();
    if (toggle.style.display === "block") {
        toggle.style.display = "none";
    } else {
        toggle.style.display = "block";
    }
});