export default function generateSkillsSection(data) {
  const mainContent = document.querySelector("main");

  const skillsSection = document.createElement("section");
  skillsSection.classList.add("community");
  skillsSection.setAttribute("id", "mySkills");

  const skillsContainer = document.createElement("div");
  skillsContainer.classList.add("container");

  // Crear el HTML para el encabezado de la sección
  let skillsSectionContent = `
    <div class="community__content">
      <h2 class="section__title">${data.title}</h2>
      <p class="section__subtitle">${data.subtitle}</p>
      <p>${data.description}</p>
    </div>
    <div class="community__items">
  `;

  // Iterar sobre cada habilidad y agregar el HTML correspondiente
  data.skills.forEach((skill) => {
    skillsSectionContent += `
      <div class="community__card">
        <div class="community__card-icon">
          <img src="${skill.icon}" alt="${skill.name}" width="34" height="34" />
        </div>
        <div class="community__card-content">
          <h3>${skill.name}</h3>
          <p>${skill.description}</p>
        </div>
      </div>
    `;
  });

  // Cerrar el div de los ítems
  skillsSectionContent += `</div>`;

  skillsContainer.innerHTML = skillsSectionContent;
  skillsSection.appendChild(skillsContainer);
  mainContent.appendChild(skillsSection);
}
