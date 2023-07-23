export default function generateHeaderSection() {
  const headerContent = `
    <header class="header">
      <div class="container header__container">
        <img src="./images/logo.svg"
          alt="Logo for the company Netbook and is a circle split diagonal with orange and yellow section and a line with a dot in the end"
          width="145" height="35" />

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
  primeContainer.innerHTML += headerContent;
}
