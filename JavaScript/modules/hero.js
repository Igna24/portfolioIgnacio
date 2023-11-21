export default function generateHeroSection(data) {
  const heroContent = `
    <section class="hero container">
        <h2 class="hero__title">${data.title}</h2>
        <h3 class="hero__subtitle">${data.subtitle}</h3>
        <p class="hero__description">${data.description}</p>
        <p class="hero__cta">
          <a href="${data.cta1Link}" class="btn btn--large">${data.cta1Text}</a>
          <a href="${data.cta2Link}" class="btn btn__secondary btn--large">${data.cta2Text}</a>
        </p>
    </section>
  `;

  const primeContainer = document.querySelector(".prime");
  primeContainer.innerHTML += heroContent;
}
