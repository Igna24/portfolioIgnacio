export default function generateHeaderSection() {
  const headerContent = `
    <header class="header">
      <div class="container header__container">
        <img src="./public/images/logo.svg" alt="Logo" width="145" height="35" />
        <div class="menu-hamburguesa" onclick="toggleMenu()">☰</div>
        <nav aria-label="Primary" class="header__nav">
          <ul>
            <li><a href="#" class="active">Home</a></li>
            <li><a href="#mySkills">Skills</a></li>
            <li><a href="#interests">Interests</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;

  const primeContainer = document.querySelector(".prime");
  primeContainer.innerHTML = headerContent;

  function toggleMenu() {
    const menu = document.querySelector(".header__nav ul");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

  function handleResize() {
    const screenWidth = window.innerWidth;
    const menu = document.querySelector(".header__nav ul");
    if (screenWidth > 600) {
      menu.style.display = "";
    }
  }

  window.addEventListener("resize", handleResize);
  window.toggleMenu = toggleMenu;
}
