document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav-link");
  const topBtn = document.getElementById("scrollTop");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
      }
    });
  }, {rootMargin:"-35% 0px -55% 0px", threshold:0});
  sections.forEach(section => observer.observe(section));

  document.querySelectorAll("section, .property-feature, .mini-grid article, .journal-grid article").forEach(el => el.classList.add("fade-in"));
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add("visible"); reveal.unobserve(e.target); }});
  }, {threshold:.12});
  document.querySelectorAll(".fade-in").forEach(el => reveal.observe(el));

  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 500 ? "grid" : "none";
  });
  topBtn.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("mainNav");
      if (nav.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(nav).hide();
    });
  });

  document.querySelector(".enquiry form")?.addEventListener("submit", e => {
    e.preventDefault();
    const btn = e.target.querySelector("button");
    btn.innerHTML = "ENQUIRY RECEIVED ✓";
    btn.disabled = true;
  });
});