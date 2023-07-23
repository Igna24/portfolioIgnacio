// footer.js
export default function generateFooterSection(data) {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const footerContainer = document.createElement("div");
  footerContainer.classList.add("container");

  const footerMain = document.createElement("div");
  footerMain.classList.add("footer__main");

  const footerNav = document.createElement("nav");
  footerNav.setAttribute("aria-label", "Secondary");
  footerNav.classList.add("footer__nav");

  // Generate My Email section
  const myEmailSection = `
    <div>
      <h3>My Email</h3>
      <ul>
        <li><a href="mailto:${data.email}">${data.email}</a></li>
      </ul>
    </div>
  `;
  footerNav.innerHTML += myEmailSection;

  // Generate LinKedin section
  const linkedinSection = `
    <div>
      <h3>LinKedin</h3>
      <ul>
        <li><a href="${data.linkedinLink}">${data.linkedinUsername}</a></li>
      </ul>
    </div>
  `;
  footerNav.innerHTML += linkedinSection;

  // Generate GitHub section
  const githubSection = `
    <div>
      <h3>GitHub</h3>
      <ul>
        <li><a href="${data.githubLink}">${data.githubUsername}</a></li>
      </ul>
    </div>
  `;
  footerNav.innerHTML += githubSection;

  footerMain.appendChild(footerNav);

  const footerSignup = document.createElement("article");
  footerSignup.classList.add("footer_singup");

  const footerSignupContent = `
    <h3>Contact Me</h3>
    <p>${data.contactMessage}</p>
    <form class="footer_singup-form" action="">
      <label class="hide-text" for="email">Email Address</label>
      <input type="email" id="email" placeholder="Email Address" />
      <button type="submit" class="btn btn--dark">Send</button>
    </form>
  `;
  footerSignup.innerHTML = footerSignupContent;

  footerMain.appendChild(footerSignup);

  footerContainer.appendChild(footerMain);
  footer.appendChild(footerContainer);

  const footerSecondary = document.createElement("div");
  footerSecondary.classList.add("footer__secondary");

  const footerSecondaryContainer = document.createElement("div");
  footerSecondaryContainer.classList.add("container");

  const footerSecondaryContent = `
    <div class="footer__secondary-content">
      <p>${data.name}</p>
      <div class="footer__secondary-logo">
        <img src="${data.logo}" alt="" />
      </div>
      <ul class="footer__social-links">
        <li>
          <a href="${data.linkedinLink}">
            <img class="footer__social-img" src="${data.linkedinIcon}" alt="" />
          </a>
        </li>
        <li>
          <a href="${data.githubLink}">
            <img src="${data.githubIcon}" alt="" />
          </a>
        </li>
      </ul>
    </div>
  `;
  footerSecondaryContainer.innerHTML = footerSecondaryContent;

  footerSecondary.appendChild(footerSecondaryContainer);
  footer.appendChild(footerSecondary);

  document.body.appendChild(footer);
}
