const left = document.querySelector(".bg1");
const right = document.querySelector(".bg2");
const container = document.querySelector(".container");

left.addEventListener("mouseover", () => container.classList.add("hover-left"));

left.addEventListener("mouseleave", () =>
    container.classList.remove("hover-left")
);
right.addEventListener("mouseover", () =>
    container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
    container.classList.remove("hover-right")
);
