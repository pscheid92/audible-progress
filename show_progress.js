const elements = document.querySelectorAll(".bc-color-background-progress");

for (let i = 0; i < elements.length; i++) {
    const progress = elements[i].getAttribute("aria-valuenow");
    elements[i].innerHTML = `<p class="bc-text bc-color-secondary">${progress}%</p>`;
}
