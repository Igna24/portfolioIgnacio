// news.js
export default function generateNewsSection(data) {
  const mainContent = document.querySelector("main");

  const newsSection = document.createElement("section");
  newsSection.classList.add("news");

  const newsContainer = document.createElement("div");
  newsContainer.classList.add("container");

  const newsSectionContent = `
    <div class="news__content">
      <h2 class="section__title">${data.title}</h2>
      <p class="section__subtitle">${data.subtitle}</p>
    </div>

    <div class="news__articles">
      <!-- Aquí van los divs con las clases news__article y sus respectivos datos -->
    </div>
  `;

  // Agregar el contenido del section a su contenedor
  newsContainer.innerHTML = newsSectionContent;
  newsSection.appendChild(newsContainer);
  mainContent.appendChild(newsSection);

  // Obtener el contenedor de las noticias
  const newsArticlesContainer = newsSection.querySelector(".news__articles");

  // Generar y agregar cada artículo de las noticias
  data.articles.forEach((article) => {
    const newsArticle = document.createElement("article");
    newsArticle.classList.add("news__article");

    const newsArticleContent = `
      <img src="${article.image}" class="news__article-image" alt="" />
      <div class="news__article-content">
        <h3>${article.title}</h3>
        <p>
          <a class="link__arrowed" href="${article.link}">Take a Look
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5625 5H8.4375" stroke="#4A4A56" stroke-width="1.2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M5.625 2.1875L8.4375 5L5.625 7.8125" stroke="#4A4A56" stroke-width="1.2"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </p>
      </div>
    `;

    // Agregar el contenido del artículo al contenedor de noticias
    newsArticle.innerHTML = newsArticleContent;
    newsArticlesContainer.appendChild(newsArticle);
  });
}
