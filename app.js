// Card glow
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
            ANGLE = (ANGLE + 90) % 360;

            BORDER.style.setProperty("--start", `${ANGLE}deg`);
        });
    };

    document.body.addEventListener("mousemove", UPDATE);
});

// Skills
        // Sélection du conteneur
        const skillsContainer = document.querySelector('.skills-container');

        // Arrêter le défilement au survol
        skillsContainer.addEventListener('mouseenter', () => {
            skillsContainer.style.animationPlayState = 'paused';
        });

        // Reprendre le défilement quand la souris quitte
        skillsContainer.addEventListener('mouseleave', () => {
            skillsContainer.style.animationPlayState = 'running';
        });

// CONTACT Form

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let isValid = true;

    // Vérification Nom
    if (name.value.trim() === "") {
        name.classList.add("is-invalid");
        isValid = false;
    } else {
        name.classList.remove("is-invalid");
    }

    // Vérification Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        email.classList.add("is-invalid");
        isValid = false;
    } else {
        email.classList.remove("is-invalid");
    }

    // Vérification Message
    if (message.value.trim() === "") {
        message.classList.add("is-invalid");
        isValid = false;
    } else {
        message.classList.remove("is-invalid");
    }

    // Affichage message de succès
    if (isValid) {
        alert("Message envoyé avec succès !");
        this.reset();
    }
});
