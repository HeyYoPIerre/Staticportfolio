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

document.getElementById("contact-form").addEventListener("submit", function (event) {
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

// Terminal

const coder = {
    name: 'Pierre Mitou',
    skills: ['Laravel', 'Livewire', 'NodeJs', 'Git', 'Javascript', 'MySQL', 'Symfony', 'Bootstrap', 'PHP'],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function () {
        return this.hardWorker && this.problemSolver && this.skills.length >= 5;
    }
};

function checkHireable() {
    const resultElement = document.getElementById("hire-result");
    if (coder.hireable()) {
        resultElement.innerHTML = "✅ Bien sûr que oui !";
        resultElement.style.color = "#50fa7b";
    } else {
        resultElement.innerHTML = "❌ Aïe";
        resultElement.style.color = "#ff5f56";
    }
}

// Projects
const projects = [
    {
        name: "Paw",
        description: "Ce jeu en javascript vanilla est une œuvre conceptuelle qui a pour vocation à expliquer comment les chats finissent en surpoids.",
        tools: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/HeyYoPIerre/Paw",
        demo: "https://heyyopierre.github.io/Paw/"
    },
    {
        name: "Strip",
        description: "Projet fonctionnel sans prétention visuelle. Son rôle est de rendre hommage à la serie de reportages Strip Tease avec des portraits d'inconnus et un texte pour les décrire.",
        tools: ["Symfony", "JS", "PHP", "HTML", "CSS"],
        github: "https://github.com/HeyYoPIerre/strip",
        demo: ""
    },
    {
        name: "Mitoupierre.fr",
        description: "Site portfolio et prototype. Front en scss et Javascript avec bootstrap et livewire. Back en php Laravel, gestion d'images et de contacts sous middleware.",
        tools: ["Laravel", "Livewire", "JS", "PHP", "HTML", "CSS"],
        github: "https://github.com/HeyYoPIerre/mitoupierre.fr",
        demo: ""
    },
    {
        name: "ZineTerreursNocturnes",
        description: "Site de présentation du Fanzine Terreurs Nocturnes et des ses artistes.",
        tools: ["Laravel", "Livewire", "JS", "PHP", "HTML", "CSS"],
        github: "https://github.com/HeyYoPIerre/zineterreursnocturnes",
        demo: ""
    },
];

const container = document.getElementById("projects-container");
projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.className = "col-md-6 col-lg-4 mb-4";
    projectCard.innerHTML = `
        <div class="card project-card h-100 border-0 shadow-sm">
            <div class="card-body position-relative">
                <h5 class="card-title text-primary">${project.name}</h5>
                <p class="card-text">${project.description}</p>
                <div class="tags mb-3">
                    ${project.tools.map(tool => `<span class="badge bg-secondary me-1">${tool}</span>`).join('')}
                </div>
                <div class="overlay d-flex flex-column justify-content-center align-items-center">
                    <a href="${project.github}" target="_blank" class="btn btn-light m-1"><i class="fab fa-github"></i> GitHub</a>
                    <a href="${project.demo}" target="_blank" class="btn btn-primary m-1" onclick="return ${project.demo ? 'true' : 'false'}"> <i class="fas fa-external-link-alt"></i> Site Web </a>                
                </div>
            </div>
        </div>
    `;
    container.appendChild(projectCard);
});
