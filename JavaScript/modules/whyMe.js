export default function generateWhyMeSection(data) {
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("whats-netbooks__content");

  contentDiv.innerHTML = `
    <h2 class="section__title">${data.title}</h2>
    <p class="section__subtitle">${data.subtitle}</p>
    <p>
      ${data.description}
    </p>
    <ul>
      ${data.listItems.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;

  const imagesDiv = document.createElement("div");
  imagesDiv.classList.add("whats-netbooks__images");

  data.images.forEach((imageUrl, index) => {
    if (index === 0) {
      imagesDiv.innerHTML += `
        <img src="${imageUrl}" class="whats-netbooks__video" alt="" />
      `;
    } else {
      const altText = `whats-netbooks__images-00${index}`;
      imagesDiv.innerHTML += `
        <img src="${imageUrl}" alt="${altText}" />
      `;
    }
  });

  const section = document.createElement("section");
  section.classList.add("whats-netbooks", "container");
  section.id = "whyMe";

  section.appendChild(contentDiv);
  section.appendChild(imagesDiv);

  const mainElement = document.createElement("main");
  mainElement.appendChild(section);

  const primeContainer = document.querySelector(".prime");
  primeContainer.parentNode.insertBefore(
    mainElement,
    primeContainer.nextSibling
  );
}
