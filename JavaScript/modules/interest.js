function generateInterestMembers(interests) {
  return interests
    .map(
      (interest) => `
        <div class="team__member-card">
          <div class="team__member-avatar">
            <img src="./public/images/avatar-bluecheck.svg" alt="" class="team__member-bluecheck" />
            <img src="./public/images/team-photo-frame.svg" class="team__member-frame" alt="" />
            <img src="${interest.icon}" class="team__member-picture" alt="${interest.name}" />
          </div>
          <p class="team__member-name">${interest.name}</p>
          <p class="team__member-username">${interest.username}</p>
        </div>`
    )
    .join("");
}

function generateInterestsSection(interestsData) {
  const mainContent = document.querySelector("main");

  const interestsSection = document.createElement("section");
  interestsSection.classList.add("team");
  interestsSection.setAttribute("id", "interests");

  const interestsContainer = document.createElement("div");
  interestsContainer.classList.add("container");

  const interestsSectionContent = `
    <div class="team__content">
      <h2 class="section__title">${interestsData.title}</h2>
      <p class="section__subtitle">${interestsData.subtitle}</p>
      <p>${interestsData.description}</p>
    </div>

    <div class="team__tabs">
      ${Object.keys(interestsData.categories)
        .map(
          (category) =>
            `<button class="team__tab" data-category="${category}">${category}</button>`
        )
        .join("")}
    </div>

    <div class="team__members"></div>
  `;

  interestsContainer.innerHTML = interestsSectionContent;
  interestsSection.appendChild(interestsContainer);
  mainContent.appendChild(interestsSection);

  // Configuración de los event listeners para las pestañas
  document.querySelectorAll(".team__tab").forEach((tab) => {
    tab.addEventListener("click", (event) => {
      const category = event.target.getAttribute("data-category");
      const interestsToShow = interestsData.categories[category];
      document.querySelector(".team__members").innerHTML =
        generateInterestMembers(interestsToShow);

      document
        .querySelectorAll(".team__tab")
        .forEach((t) => t.classList.remove("team__tab--active"));
      event.target.classList.add("team__tab--active");
    });
  });

  // Activar la primera pestaña por defecto
  document.querySelector(".team__tab").click();
}

// Exporta la función para que pueda ser utilizada en otros archivos
export default generateInterestsSection;
