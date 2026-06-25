document.addEventListener("DOMContentLoaded", init);

function init() {
    renderHome();
}

function renderHome() {

    const app = document.getElementById("app");

    app.innerHTML = `
        <header class="main-header">
            <div class="logo">
                <h1>LONG BEACH</h1>
                <h2>CONCIERGE</h2>
            </div>
        </header>

        <main class="home">

            <h1>Welcome</h1>

            <p>Your Digital Concierge</p>

            <div class="menu">

                <button id="restaurantsBtn">🍽 Restaurants</button>

                <button id="barsBtn">🍹 Bars</button>

                <button id="eventsBtn">🎉 Events</button>

                <button id="roomBtn">🛎 Room Service</button>

            </div>

        </main>
    `;

    document.getElementById("restaurantsBtn").onclick = () => alert("Restaurants");
    document.getElementById("barsBtn").onclick = () => alert("Bars");
    document.getElementById("eventsBtn").onclick = () => alert("Events");
    document.getElementById("roomBtn").onclick = () => alert("Room Service");
}
