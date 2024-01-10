// Función para generar el section que sigue después de "Why me?"
export default function generateAchievementSection(data) {
  const mainContent = document.querySelector("main");

  const sectionAfterWhyMe = document.createElement("section");
  sectionAfterWhyMe.classList.add("achievement", "container");

  const sectionAfterWhyMeContent = `
  <article class="card rating">
  <header>
    <h3 class="card__title"><img src="./public/images/ico-star.svg" alt="Outline star icon" /> ${
      data.ratingTitle
    }</h3>
    <p class="card__subtitle">
      <span class="card__avatars">
        ${data.ratingAvatars
          .map((avatar) => `<img src="${avatar}" alt="Avatar" />`)
          .join("")}
      </span>
      <b>${data.ratingSubtitle}</b>&nbsp;Students
    </p>
  </header>
  <p class="card__content">${data.ratingContent}</p>
  <p>
    <a class="link__arrowed" href="${data.ratingLink}">Go To Academy
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5625 5H8.4375" stroke="#4A4A56" stroke-width="1.2" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M5.625 2.1875L8.4375 5L5.625 7.8125" stroke="#4A4A56" stroke-width="1.2" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </a>
  </p>
</article>
<article class="card awards">
  <header>
    <h3 class="card__title"><img src="./public/images/ico-trophy.svg" alt="Outline star icon" /> ${
      data.learningTitle
    }</h3>
    <p class="card__subtitle">${data.learningSubtitle}</p>
  </header>
  <p class="card__content">${data.learningContent}</p>
  <p>
    <a class="link__arrowed" href="${data.learningLink}">Go To Academy
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5625 5H8.4375" stroke="#4A4A56" stroke-width="1.2" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M5.625 2.1875L8.4375 5L5.625 7.8125" stroke="#4A4A56" stroke-width="1.2" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </a>
  </p>
</article>
<div class="achievement__content">
  <h2 class="section__title">My Achievement</h2>
  <p class="section__subtitle">Updated & ready for constant challenge.</p>
  <p>
    My willingness to adapt to change keeps me competitive and prepared to face any situation that comes my way.
  </p>
  <a href="#mySkills" class="btn btn--large">Discover me
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5625 5H8.4375" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round"
        stroke-linejoin="round" />
      <path d="M5.625 2.1875L8.4375 5L5.625 7.8125" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  </a>
</div>
  `;

  sectionAfterWhyMe.innerHTML = sectionAfterWhyMeContent;
  mainContent.appendChild(sectionAfterWhyMe);
}
