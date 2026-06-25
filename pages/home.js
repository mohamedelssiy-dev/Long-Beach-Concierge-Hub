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

            <h1>Welcome to</h1>
            <h2>Long Beach Resort Hurghada</h2>

            <p>Your Digital Concierge</p>

            <div class="menu">

                <button data-page="concierge">🤖 Ask Concierge</button>

                <button data-page="restaurants">🍽 Restaurants</button>

                <button data-page="bars">🍹 Bars</button>

                <button data-page="live">🎉 Live Entertainment</button>

                <button data-page="events">📅 Events</button>

                <button data-page="roomservice">🛎 Room Service</button>

                <button data-page="information">ℹ️ Resort Information</button>

            </div>

        </main>

    `;

}
