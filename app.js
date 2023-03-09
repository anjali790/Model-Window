"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
// console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", () => {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });
}

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", () => {
//     console.log("A key was pressed")
// });

document.addEventListener("keydown", (e) => {
    // console.log("A key was pressed",e);

    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});