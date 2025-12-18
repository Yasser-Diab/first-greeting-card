console.log("JavaScript is connected ✅");
const modals = document.querySelector(".modals");
console.log(modals);
const closeModelBtn = document.querySelector(".close-modal-btn");
const allDialogs = document.querySelectorAll(".modal-content");
const cardButtons = document.querySelectorAll(".card-btn");
closeModelBtn.addEventListener("click", function () {
    modals.classList.remove("show");
});
console.log(cardButtons);
cardButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const modalType = button.dataset.modal;

        modals.classList.add("show");

        allDialogs.forEach(function (dialog) {
            dialog.style.display = "none";
        });

        if (modalType === "send") {
            document.querySelector(".send-card-dialog").style.display = "flex";
        }

        if (modalType === "share") {
            document.querySelector(".share-card-dialog").style.display = "flex";
        }

        if (modalType === "download") {
            document.querySelector(".download-card-dialog").style.display = "flex";
        }
    });
});
