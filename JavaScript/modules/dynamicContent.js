// Importa todas las funciones de generación de secciones específicas
import generateHeaderSection from "./header.js";
import generateHeroSection from "./hero.js";
import generateWhyMeSection from "./whyMe.js";
import generateAchievementSection from "./achievement.js";
import generateSkillsSection from "./skills.js";
import generateInterestsSection from "./interest.js";
import generateContactSection from "./contact.js";
import generateNewsSection from "./news.js";
import generateFooterSection from "./footer.js";
import getDataFromAPI from "./api.js";

// Esta función invoca todas las funciones específicas de sección con los datos correspondientes
export default function generateDynamicContent() {
  const data = getDataFromAPI();

  // Aquí se generan las secciones individuales de la página
  generateHeaderSection(data.headerData); // Asegúrate de que headerData esté definido en tus datos de la API
  generateHeroSection(data.heroData);
  generateWhyMeSection(data.whyMeData);
  generateAchievementSection(data.achievementData);
  generateSkillsSection(data.skillsData);
  generateInterestsSection(data.interestsData);
  generateContactSection(data.contactData);
  generateNewsSection(data.newsData);
  generateFooterSection(data.footerData);
}
