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

// Función para generar el contenido dinámico usando los datos de la API simulada
export default function generateDynamicContent() {
  // Obtener datos simulados desde la API
  const data = getDataFromAPI();

  // Llamar a cada función de los módulos para generar el contenido con los datos de la API simulada
  generateHeaderSection();
  generateHeroSection(data.heroData);
  generateWhyMeSection(data.whyMeData);
  generateAchievementSection(data.achievementData);
  generateSkillsSection(data.skillsData);
  generateInterestsSection(data.interestsData);
  generateContactSection(data.contactData);
  generateNewsSection(data.newsData);
  generateFooterSection(data.footerData);
}
