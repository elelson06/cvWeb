let selectedProfile = null;
let content = {};

// Función para cargar el archivo JSON según el idioma seleccionado
function loadLanguageFile(language) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `./lang/${language}.json`, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            content = JSON.parse(xhr.responseText);
            updateContent();
        }
    };
    xhr.send();
}

// Función para cambiar el contenido de la página basado en el idioma cargado
function updateContent() {
    document.getElementById('about-me').innerText = content.aboutMe;
    document.getElementById('tech-title').innerText = content.technologies.title;
    document.getElementById('programLanguages').innerText = content.technologies.programLanguages;
    document.getElementById('frameworks').innerText = content.technologies.frameworks;
    document.getElementById('tools').innerText = content.technologies.tools;
    document.getElementById('softSkills-title').innerText = content.softSkills.title;
    document.getElementById('teamLeadership').innerText = content.softSkills.teamLeadership;
    document.getElementById('effectiveCommunication').innerText = content.softSkills.effectiveCommunication;
    document.getElementById('teamWork').innerText = content.softSkills.teamWork;
    document.getElementById('troubleshooting').innerText = content.softSkills.troubleshooting;
    document.getElementById('timeManagement').innerText = content.softSkills.timeManagement;
    document.getElementById('criticalThinking').innerText = content.softSkills.criticalThinking;
    document.getElementById('experience-title').innerText = content.experience.title;
    document.getElementById('projectLeader').innerText = content.profiles.projectLeader.title;
    document.getElementById('analystProgrammer').innerText = content.profiles.analystProgrammer.title;
    document.getElementById('fullstackDeveloper').innerText = content.profiles.fullstackDeveloper.title;
    document.getElementById('languages-title').innerText = content.languages.title;
    document.getElementById('languageES').innerText = content.languages.languageES;
    document.getElementById('languageEN').innerText = content.languages.languageEN;
    // Si hay un perfil seleccionado, actualizamos también el contenido del perfil
    if (selectedProfile) {
        showProfile(selectedProfile);
    }
}

// Función para manejar el cambio de idioma
function changeLanguage() {
    const language = document.getElementById('languageDropdown').value;
    loadLanguageFile(language);
}

// Función para mostrar el perfil seleccionado
function showProfile(profile) {
    selectedProfile = profile;

    const profileContent = content.profiles[profile];
    document.getElementById('profile-content').innerHTML = `
        <h3>${profileContent.title}</h3>
        <p>${profileContent.description}</p>
        <h4>Proyectos:</h4>
        <p>${profileContent.proyectos}</p>
        `;
}

// Cargamos el idioma por defecto (español) al inicio
window.onload = function() {
    loadLanguageFile('es');
};
