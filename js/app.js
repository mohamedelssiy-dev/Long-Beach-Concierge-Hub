document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".feature-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const title = card.querySelector("h3").innerText;
            openSection(title);
        });
    });

});

function openSection(sectionName){

    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="hero">
            <h1>${sectionName}</h1>
            <p>Coming Soon</p>
        </section>
    `;
}
