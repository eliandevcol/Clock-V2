
const $ = (selector) => {
    return document.querySelector(selector);
};

const hour = $(".hour");
const dot = $(".dot");
const min = $(".min");
const week = $(".week");
const sec = $(".sec");
const ampm = $(".ampm");
let showDot = true;

function update() {
    showDot = !showDot;
    const now = new Date();

    if (showDot) {
        dot.classList.add("invisible");
    } else {
        dot.classList.remove("invisible");
    }

    let hours = now.getHours();
    const amPmText = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    hour.textContent = String(hours).padStart(2, "0");
    min.textContent = String(now.getMinutes()).padStart(2, "0");
    sec.textContent = String(now.getSeconds()).padStart(2, "0");
    ampm.textContent = amPmText;

    Array.from(week.children).forEach((ele) => {
        ele.classList.remove("active");
    });
    week.children[now.getDay()].classList.add("active");
}

setInterval(update, 500);
