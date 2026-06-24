document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".feature-card");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            const title = card.querySelector("h3").innerText;

            openSection(title);

        });

    });

});

async function openSection(sectionName){

    const app = document.getElementById("app");

    if(sectionName === "Restaurants"){

        const response = await fetch("./data/restaurants.json");
        const restaurants = await response.json();

        let html = `
        <section class="hero">
            <h1>Restaurants</h1>
            <p>Discover our dining venues</p>
        </section>

        <section class="quick-access">
        `;

        restaurants.forEach(restaurant => {

            html += `
            <div class="feature-card">
                <h3>${restaurant.name}</h3>
                <p>${restaurant.type}</p>
                <br>
                <p>${restaurant.description}</p>
                <br>
                <strong>${restaurant.hours}</strong>
            </div>
            `;

        });

        html += `</section>`;

        app.innerHTML = html;

        return;
    }

    app.innerHTML = `
        <section class="hero">
            <h1>${sectionName}</h1>
            <p>Coming Soon</p>
        </section>
    `;
}
