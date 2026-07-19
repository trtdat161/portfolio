/**
 * Portfolio — Tran Tien Dat
 * 1. Section numbering (01, 02...)
 * 2. Scroll reveal với IntersectionObserver
 * 3. Navbar: toggle mobile + active link theo section đang xem
 */
document.addEventListener("DOMContentLoaded", () => {
  console.log("JS loaded");

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

  // Ảnh bên phải (about, gallery — cùng layout: chữ trái, ảnh phải)
  document
    .querySelectorAll("#about > .container > img, #gallery > .container > img")
    .forEach((el) => {
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

  /* ── 3. IntersectionObserver cho reveal ── */
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

  /* ── 5. Navbar: toggle menu mobile ── */
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      navToggle.classList.toggle("active");
    });

    // Click vào 1 link thì tự đóng menu (quan trọng cho mobile)
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.classList.remove("active");
      });
    });
  }

  /* ── 6. Navbar: active link theo section đang cuộn qua ── */
  const navAnchors = document.querySelectorAll(".nav-links a");

  if (navAnchors.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navAnchors.forEach((a) => {
              a.classList.toggle(
                "active",
                a.getAttribute("href") === `#${entry.target.id}`,
              );
            });
          }
        });
      },
      // Co vùng quan sát thành 1 lằn ngang giữa màn hình — section nào
      // chạm lằn đó thì coi là "đang xem", đỡ tốn hơn nghe scroll liên tục
      { rootMargin: "-50% 0px -50% 0px" },
    );

    // main section[id] + header[id] (header dùng id="home")
    document
      .querySelectorAll("main section[id], header[id]")
      .forEach((section) => navObserver.observe(section));
  }

  /* ── 7. Scroll progress bar: width tăng theo % đã cuộn ── */
  const scrollProgress = document.getElementById("scrollProgress");

  if (scrollProgress) {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      // docHeight <= 0 khi trang ngắn hơn viewport, tránh chia cho 0
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollProgress.style.width = `${percent}%`;
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress(); // chạy 1 lần khi load, phòng trường hợp trang load ở giữa (F5)
  }

  /* ── 8. Back-to-top: hiện khi cuộn quá 1 màn hình, click thì cuộn mượt lên đầu ── */
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    const toggleBackToTop = () => {
      backToTop.classList.toggle(
        "visible",
        window.scrollY > window.innerHeight,
      );
    };

    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
