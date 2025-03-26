document.addEventListener("DOMContentLoaded", () => {
    const CARDS = document.querySelectorAll(".glow-card");

    const CONFIG = {
        proximity: 50,
        opacity: 1,
    };

    const UPDATE = (event) => {
        CARDS.forEach((CARD) => {
            const BORDER = CARD.querySelector(".glow-border");
            const BOUNDS = CARD.getBoundingClientRect();

            if (
                event.clientX > BOUNDS.left - CONFIG.proximity &&
                event.clientX < BOUNDS.right + CONFIG.proximity &&
                event.clientY > BOUNDS.top - CONFIG.proximity &&
                event.clientY < BOUNDS.bottom + CONFIG.proximity
            ) {
                BORDER.style.setProperty("--active", CONFIG.opacity);
            } else {
                BORDER.style.setProperty("--active", 0);
            }

            const CENTER_X = BOUNDS.left + BOUNDS.width / 2;
            const CENTER_Y = BOUNDS.top + BOUNDS.height / 2;
            let ANGLE = Math.atan2(event.clientY - CENTER_Y, event.clientX - CENTER_X) * (180 / Math.PI);
            ANGLE = (ANGLE + 90) % 360; // Ajuste l'angle

            BORDER.style.setProperty("--start", `${ANGLE}deg`);
        });
    };

    document.body.addEventListener("mousemove", UPDATE);
});
