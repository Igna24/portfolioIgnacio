// Función para generar los divs de los intereses de manera dinámica
function generateInterestMembers(interests) {
  return interests
    .map(
      (interest) => `
    <div class="team__member-card">
      <div class="team__member-avatar">
        <img src="./images/avatar-bluecheck.svg" alt="" class="team__member-bluecheck" />
        <img src="./images/team-photo-frame.svg" class="team__member-frame" alt="" />
        <img src="${interest.icon}" class="team__member-picture" alt="${interest.name}" />
      </div>
      <p class="team__member-name">${interest.name}</p>
      <p class="team__member-username">${interest.username}</p>
    </div>
  `,
    )
    .join("");
}

export default function generateInterestsSection(data) {
  const mainContent = document.querySelector("main");

  const interestsSection = document.createElement("section");
  interestsSection.classList.add("team");
  interestsSection.setAttribute("id", "interests"); // Agregar el ID "interests" al section

  const interestsContainer = document.createElement("div");
  interestsContainer.classList.add("container");

  const interestsSectionContent = `
    <div class="team__content">
      <h2 class="section__title">${data.title}</h2>
      <p class="section__subtitle">${data.subtitle}</p>
      <p>${data.description}</p>
    </div>

    <div class="team__tabs">
      <button class="team__tab">Hobbies</button>
      <button class="team__tab">Knowledge</button>
      <button class="team__tab team__tab--active">Books</button>
    </div>

    <div class="team__members">
      ${generateInterestMembers(data.interests)}
    </div>
  `;

  interestsContainer.innerHTML = interestsSectionContent;
  interestsSection.appendChild(interestsContainer);
  mainContent.appendChild(interestsSection);
}
