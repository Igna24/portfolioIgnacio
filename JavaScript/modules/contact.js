// contact.js
export default function generateContactSection(data) {
  const mainContent = document.querySelector("main");

  const contactSection = document.createElement("section");
  contactSection.classList.add("app");
  contactSection.setAttribute("id", "contact"); // Agregar el ID "contact" al section

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("container");

  const contactSectionContent = `
    <div class="app__content">
      <h2 class="section__title">${data.title}</h2>
      <p class="section__subtitle">${data.subtitle}</p>
      <p>${data.description}</p>
      <p class="app__buttons">
        <a href="${data.linkedinLink}"><img src="./public/images/linkedin-icon.svg" alt="LinkedIn" /></a>
        <a href="${data.githubLink}"><img src="./public/images/github-icon.svg" alt="GitHub" /></a>
      </p>
    </div>

    <div class="app__screenshot">
      <img src="${data.shine}" alt="" class="app__screenshot-shine" />
      <img src="${data.screenshot}" alt="App Screenshot" class="app__screenshot-picture" />
    </div>
  `;

  contactContainer.innerHTML = contactSectionContent;
  contactSection.appendChild(contactContainer);
  mainContent.appendChild(contactSection);
}
