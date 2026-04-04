/**
 * Portfolio — Tran Tien Dat
 * 1. Section numbering (01, 02...)
 * 2. Scroll reveal với IntersectionObserver
 */
document.addEventListener("DOMContentLoaded", () => {
  /* ── 1. Đánh số section tự động ── */
  const sections = document.querySelectorAll("main section");
  sections.forEach((sec, i) => {
    const label = document.createElement("p");
    label.className = "section-index";
    label.textContent = `0${i + 1}`;
    // Chèn vào đầu .content nếu có, hoặc đầu .container
    const target =
      sec.querySelector(".content") || sec.querySelector(".container");
    if (target) target.prepend(label);
  });

  /* ── 2. Gắn reveal class ── */

  // Từng section container
  document.querySelectorAll("section .container").forEach((el) => {
    el.classList.add("reveal");
  });

  // Ảnh bên trái (introduction, education)
  document
    .querySelectorAll(
      "#introduction > .container > img, #education > .container > img",
    )
    .forEach((el) => {
      el.classList.remove("reveal"); // reset nếu có
      el.classList.add("reveal-left");
    });

  // Ảnh about bên phải
  document.querySelectorAll("#about > .container > img").forEach((el) => {
    el.classList.remove("reveal");
    el.classList.add("reveal-right");
  });

  // Content boxes: stagger con
  document.querySelectorAll(".content > *").forEach((el, i) => {
    el.classList.add("reveal", `d${Math.min(i + 1, 3)}`);
  });

  // Project cards: từng cái
  document.querySelectorAll("#projects .project").forEach((card, i) => {
    card.classList.add("reveal");
    card.style.transitionDelay = `${i * 0.08}s`;
  });

  // Skills articles
  document.querySelectorAll("#skills .skills-grid article").forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${i * 0.05}s`;
  });

  // Channel + footer
  document
    .querySelectorAll("#channel .container, footer .container")
    .forEach((el) => {
      el.classList.add("reveal");
    });

  /* ── 3. IntersectionObserver ── */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -50px 0px" },
  );

  document
    .querySelectorAll(".reveal, .reveal-left, .reveal-right")
    .forEach((el) => {
      observer.observe(el);
    });

  /* ── 4. Header: tự reveal ngay khi load ── */
  setTimeout(() => {
    document
      .querySelectorAll("header .title, header .parent, header address")
      .forEach((el, i) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(16px)";
        el.style.transition = `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`;
        // Trigger
        requestAnimationFrame(() => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
      });
  }, 50);
});
