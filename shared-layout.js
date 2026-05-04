(() => {
  const mastheadMount = document.getElementById("site-masthead");
  const sidebarMount = document.getElementById("site-sidebar");
  const footerMount = document.getElementById("site-footer");
  const pageKey = document.body.dataset.sitePage || "";

  const navItems = [
    { key: "about", href: "index.html", label: "Home" },
    { key: "publications", href: "publications.html", label: "Publications" },
    { key: "journey", href: "journey.html", label: "Journey" },
    { key: "cv", href: "cv.html", label: "CV" },
  ];

  const navHtml = navItems
    .map((item) => {
      const active = item.key === pageKey ? ' class="is-active"' : "";
      return `<li class="masthead__menu-item"><a href="${item.href}"${active}>${item.label}</a></li>`;
    })
    .join("");

  if (mastheadMount) {
    mastheadMount.innerHTML = `
<div class="masthead">
  <div class="masthead__inner-wrap">
    <div class="masthead__menu">
      <nav id="site-nav" class="greedy-nav" aria-label="Main navigation">
        <button type="button" class="hidden greedy-nav__toggle" tabindex="-1" aria-hidden="true"><span class="navicon"></span></button>
        <ul class="visible-links">
          ${navHtml}
        </ul>
        <ul class="hidden-links hidden" hidden></ul>
      </nav>
</div>`;
  }

  if (sidebarMount) {
    sidebarMount.innerHTML = `
<div itemscope itemtype="https://schema.org/Person" class="profile_box">
  <div class="author__avatar" align="center">
    <img src="img/huiyuan.png" class="author__avatar" alt="Huiyuan Lai">
  </div>
  <div class="author__content">
    <h3 class="author__name" align="center"><a href="/">Huiyuan Lai</a></h3>
    <h3 class="author__name" align="center"><a href="/">赖辉源</a></h3>
    <p class="author__bio" align="center">Postdoctoral Researcher<br>
      Center for Language and Cognition<br>
      <a href="https://www.rug.nl" target="_blank" rel="noopener noreferrer">University of Groningen</a></p>
  </div>
  <div class="author__urls-wrapper">
    <ul class="author__urls social-icons">
      <li><div class="sidebar-spacer"></div></li>
      <li><a href="https://scholar.google.com/citations?hl=en&amp;user=8iMbL5oAAAAJ&amp;view_op=list_works&amp;sortby=pubdate" target="_blank" rel="noopener noreferrer"><i class="fas fa-fw fa-graduation-cap"></i> Google Scholar</a></li>
      <li><a href="https://x.com/huiyuanlai" target="_blank" rel="noopener noreferrer"><i class="fab fa-fw fa-x-twitter" aria-hidden="true"></i> X</a></li>
      <li><a href="https://github.com/laihuiyuan" target="_blank" rel="noopener noreferrer"><i class="fab fa-fw fa-github" aria-hidden="true"></i> Github</a></li>
      <li><i class="fas fa-fw fa-envelope" aria-hidden="true"></i> huiyuanlai dot l AT gmail.com</li>
      <li><i class="fas fa-fw fa-desktop" aria-hidden="true"></i> Harmonie Complex, 1311.417</li>
      <li><i class="fas fa-fw fa-location-dot" aria-hidden="true"></i> Groningen, the Netherlands</li>
    </ul>
  </div>
</div>`;
  }

  if (footerMount) {
    footerMount.innerHTML = `
<footer class="site-footer-panel">
  <div class="site-footer-panel__inner">
    <div class="site-footer-panel__block">
      <p>Center for Language and Cognition (CLCG)</p>
      <p>University of Groningen</p>
      <p>9712 EK Groningen, the Netherlands</p>
    </div>
    <div class="site-footer-panel__block">
      <p>Office: Harmonie Complex, Room 1311.417</p>
      <p class="footer-meta-inline">&copy; Huiyuan Lai · Last updated: May 2026</p>
      <p class="footer-counter-slot"><span class="counter-slot" aria-label="Visitor counter"></span></p>
    </div>
  </div>
</footer>`;

    const slot = footerMount.querySelector(".counter-slot");
    if (slot) {
      const counterScript = document.createElement("script");
      counterScript.type = "text/javascript";
      counterScript.id = "clstr_globe";
      counterScript.src =
        "//clustrmaps.com/globe.js?d=Ye-Cfi6k793O1ouD4V00QreMBb89Ahgg9qvLanQpJlU";
      slot.appendChild(counterScript);
    }
  }
})();
