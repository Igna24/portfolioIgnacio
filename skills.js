// Función para generar el section de My Skills
export function generateSkillsSection(data) {
  const mainContent = document.querySelector('main');

  const skillsSection = document.createElement('section');
  skillsSection.classList.add('community');
  skillsSection.setAttribute('id', 'mySkills');

  const skillsContainer = document.createElement('div');
  skillsContainer.classList.add('container');

  const skillsSectionContent = `
    <div class="community__content">
      <h2 class="section__title">${data.title}</h2>
      <p class="section__subtitle">${data.subtitle}</p>
      <p>${data.description}</p>
    </div>

    <div class="community__items">
      <div class="community__card community__members">
        <div class="community__card-icon">
          <img src="${data.skills[0].icon}" alt="" width="34" height="34" />
        </div>
        <div class="community__card-content">
          <h3>${data.skills[0].name}</h3>
          <p>${data.skills[0].description}</p>
        </div>
      </div>
      <div class="community__card community__groups">
        <div class="community__card-icon">
          <img src="${data.skills[1].icon}" alt="" width="34" height="34" />
        </div>
        <div class="community__card-content">
          <h3>${data.skills[1].name}</h3>
          <p>${data.skills[1].description}</p>
        </div>
      </div>
      <div class="community__card community__forum">
        <div class="community__card-icon">
          <img src="${data.skills[2].icon}" alt="" width="34" height="34" />
        </div>
        <div class="community__card-content">
          <h3>${data.skills[2].name}</h3>
          <p>${data.skills[2].description}</p>
        </div>
      </div>
      <div class="community__card community__custom">
        <div class="community__card-icon">
          <img src="${data.skills[3].icon}" alt="" width="34" height="34" />
        </div>
        <div class="community__card-content">
          <h3>${data.skills[3].name}</h3>
          <p>${data.skills[3].description}</p>
        </div>
      </div>
      <div class="community__card community__builder">
        <div class="community__card-icon">
          <img src="${data.skills[4].icon}" alt="" width="34" height="34" />
        </div>
        <div class="community__card-content">
          <h3>${data.skills[4].name}</h3>
          <p>${data.skills[4].description}</p>
        </div>
      </div>
      <div class="community__card community__scroll">
        <div class="community__card-icon">
          <img src="${data.skills[5].icon}" alt="" width="34" height="34" />
        </div>
        <div class="community__card-content">
          <h3>${data.skills[5].name}</h3>
          <p>${data.skills[5].description}</p>
        </div>
      </div>
    </div>
  `;

  skillsContainer.innerHTML = skillsSectionContent;
  skillsSection.appendChild(skillsContainer);
  mainContent.appendChild(skillsSection);
}
