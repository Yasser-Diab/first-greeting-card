console.log("....JavaScript connected....");


const backdrop = document.querySelector(".modal-backdrop");
const modalBox = document.querySelector(".modal-box");
const closeBtn = document.querySelector(".close-modal-btn");


const cardButtons = document.querySelectorAll(".card-btn");
const modalContents = document.querySelectorAll(".modal-content");
const cardContainer = document.querySelector(".card-container");


/* OPEN MODAL WHEN CARD BUTTON IS CLICKED */

cardButtons.forEach(function (button) {

    button.addEventListener("click", function () {
        const modalType = button.dataset.modal;
        backdrop.classList.add("show");
        modalBox.classList.add("show");
        modalContents.forEach(function (content) {
            cardContainer.classList.remove("hov-active");
            content.classList.remove("active");
        });
        if (modalType === "send") {
            document.querySelector(".send-card-dialog").classList.add("active");
        }

        if (modalType === "share") {
            document.querySelector(".share-card-dialog").classList.add("active");
        }

        if (modalType === "download") {
            document.querySelector(".download-card-dialog").classList.add("active");
        }
    });
});


/* CLOSE MODAL (X BUTTON) */

closeBtn.addEventListener("click", closeModal);

function closeModal() {
    backdrop.classList.remove("show");
    modalBox.classList.remove("show");
    modalContents.forEach(function (content) {
        cardContainer.classList.add("hov-active");
        content.classList.remove("active");
    });
}


/* CLOSE MODAL WHEN CLICKING OUTSIDE */

backdrop.addEventListener("click", function (event) {
    if (event.target === backdrop) {
        closeModal();
    }
});


/* PREVENT MODAL FROM CLOSING WHEN CLICKED */

modalBox.addEventListener("click", function (event) {
    event.stopPropagation();
});

const messageBox = document.querySelector(".btn-click-message");

const sendMessage = document.querySelector(".send-btn-intract");
const shareMessage = document.querySelector(".share-btn-intract");
const downloadMessage = document.querySelector(".download-btn-intract");
const copyMessage = document.querySelector(".copy-btn-intract")

function showMessage(type) {

    // hide all messages first
    sendMessage.classList.remove("active");
    shareMessage.classList.remove("active");
    downloadMessage.classList.remove("active");
    copyMessage.classList.remove("active")
    // show message box
    messageBox.classList.add("show");

    // show the correct message
    if (type === "send") {
        sendMessage.classList.add("active");
    }

    if (type === "share") {
        shareMessage.classList.add("active");
    }

    if (type === "download") {
        downloadMessage.classList.add("active");
    }
    if (type === "copy") {
        copyMessage.classList.add("active");
    }
    setTimeout(function () {
        messageBox.classList.remove("show");
    }, 4000);
}

document.querySelectorAll(".send-card-dialog .modal-link")
    .forEach(function (btn) {
        btn.addEventListener("click", function () {
            closeModal();
            showMessage("send");
        });
    });

document.querySelectorAll(".copy-link-btn")
    .forEach(function (btn) {
        btn.addEventListener("click", function () {
            closeModal();
            showMessage("copy");
        });
    });

document.querySelectorAll(".share-card-dialog .modal-link")
    .forEach(function (btn) {
        btn.addEventListener("click", function () {
            closeModal();
            showMessage("share");
        });
    });

document.querySelectorAll(".download-image-btn, .download-pdf-btn")
    .forEach(function (btn) {
        btn.addEventListener("click", function () {
            closeModal();
            showMessage("download");
        });
    });

const copyLinkBtn = document.querySelector(".copy-link-btn");
const CARD_URL = "https://yasser-diab.github.io/first-greeting-card/";

copyLinkBtn.addEventListener("click", function () {

    navigator.clipboard.writeText(CARD_URL)
        .then(function () {
            showMessage("copy");
            closeModal();
        })
        .catch(function () {
            alert("Copy failed. Please try again.");
        });

})

/* EXPORTING */

/* Image Export */

const card = document.querySelector(".card-container");
const downloadImageBtn = document.querySelector(".download-image-btn");

downloadImageBtn.addEventListener("click", function () {
    cardContainer.classList.add("capture-mode")
    html2canvas(card).then(function (canvas) {
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "wedding-card.png";
        link.click();
    });
    cardContainer.classList.remove("capture-mode")

    closeModal();
    showMessage("download");
});

html2canvas(card, {
    useCORS: true,
    scale: 2,
    backgroundColor: null
})

/* ============== */

/* PDF Export */

const downloadPdfBtn = document.querySelector(".download-pdf-btn");

downloadPdfBtn.addEventListener("click", function () {
    cardContainer.classList.add("capture-mode");

    html2canvas(card, {
        scale: 2,
        useCORS: true,
    }).then(function (canvas) {

        const imgData = canvas.toDataURL("image/png");
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = 210;
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 10, pdfWidth, pdfHeight);
        pdf.save("wedding-card.pdf");
        cardContainer.classList.remove("capture-mode");
        closeModal();
        showMessage("download");
    });
});
