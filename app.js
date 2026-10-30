
window.RufflePlayer = window.RufflePlayer || {};

window.RufflePlayer.config = {
    autoplay: "on",
    unmuteOverlay: "visible",
    splashScreen: false,
    showSwfDownload: false
    splashScreen: false,
    showSwfDownload: false
};

window.addEventListener("DOMContentLoaded", async () => {
    const loading = document.getElementById("loading");
    const container = document.getElementById("player-container");
    const error = document.getElementById("error");

    try {
        if (!window.RufflePlayer) {
            throw new Error("Ruffle failed to load. Check the ruffle folder.");
        }

        const ruffle = window.RufflePlayer.newest();
        const player = ruffle.createPlayer();

        player.style.width = "100%";
        player.style.height = "100%";

        container.appendChild(player);

        await player.ruffle().load("./Scratch.swf");

        loading.style.display = "none";

        console.log("Scratch 2.0 SWF loaded.");

    } catch (e) {
        loading.style.display = "none";
        error.hidden = false;
        error.textContent = "Failed to load Scratch 2.0: " + e.message;

        console.error("Scratch 2.0 loading error:", e);
    }
});
