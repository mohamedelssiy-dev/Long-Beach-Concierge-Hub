// Long Beach Concierge
// Main Application

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
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

                <button data-page="restaurants">
                    🍽 Restaurants
                </button>

                <button data-page="bars">
                    🍹 Bars
                </button>

                <button data-page="events">
                    🎉 Events
                </button>

                <button data-page="roomservice">
                    🛎 Room Service
                </button>

            </div>

        </main>

    `;

    registerEvents();

}

function registerEvents(){

    document.querySelectorAll("[data-page]").forEach(button=>{

        button.addEventListener("click",()=>{

            alert(button.dataset.page);

        });

    });

}
