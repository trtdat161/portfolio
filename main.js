/**
 * Portfolio — Tran Tien Dat
 * 1. Section numbering (01, 02...)
 * 2. Scroll reveal với IntersectionObserver
 * 3. Navbar: toggle mobile + active link theo section đang xem
 */
console.log("SCRIPT V2 OK");
document.addEventListener("DOMContentLoaded", () => {
  console.log("JS loaded");

  const translations = {
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.education": "Education",
      "nav.experience": "Experience",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "menu.open": "Open menu",
      "menu.close": "Close menu",
      "backToTop": "Back to top",
      "language.choose": "Choose language",
      "hero.role": "Software Developer",
      "contact.email": "Email:",
      "contact.phone": "Phone:",
      "contact.facebook": "Facebook:",
      "contact.github": "GitHub:",
      "contact.emailShort": "Email",
      "contact.phoneShort": "Phone",
      "contact.youtube": "YouTube",
      "contact.facebookShort": "Facebook",
      "contact.location": "Go Vap, Ho Chi Minh City",
      "introduction.title": "INTRODUCTION",
      "introduction.description":
        "Final-year Information Technology student at Aptech Vietnam with hands-on experience building web applications, from responsive user interfaces to backend services and RESTful API integrations. My work also extends to robotics and IoT, including embedded software and connecting hardware to real-time control systems.",
      "education.title": "EDUCATION",
      "education.degree": "Software Engineering Program (ADSE)",
      "education.field": "Field of Study: Information Technology",
      "education.major": "Major: Software Engineering",
      "experience.eyebrow": "WORK EXPERIENCE",
      "experience.title": "Experience",
      "experience.role": ".NET Developer Intern",
      "experience.company": "Green Space Solutions (GSS)",
      "experience.dates": "Jul 2026 – Oct 2026",
      "experience.description":
        "Contributed to enterprise web application development and maintenance, gaining hands-on experience in feature enhancement, database optimization, debugging, and software testing.",
      "experience.contributions": "Key Contributions",
      "experience.feature": "Feature Enhancement:",
      "experience.featureDescription":
        "Improved map search functionality, integrated external map data, and addressed filtering issues to ensure results matched specified criteria.",
      "experience.database": "Database Optimization:",
      "experience.databaseDescription":
        "Optimized database queries to improve map loading performance and investigated issues affecting search functionality.",
      "experience.validation": "Data Validation:",
      "experience.validationDescription":
        "Developed a script to scan database records and identify valid data for further review.",
      "experience.debugging": "Debugging & Testing:",
      "experience.debuggingDescription":
        "Investigated application issues and tested mobile web functionality, including digital signature compatibility.",
      "experience.export": "Data Export Improvements:",
      "experience.exportDescription":
        "Updated database queries and export logic to support additional data fields and meet filtering requirements.",
      "experience.testing": "Testing & Documentation:",
      "experience.testingDescription":
        "Performed functional testing, investigated reported issues, and prepared technical documentation.",
      "gallery.eyebrow": "MOMENT",
      "gallery.title": "SMART TECH SHOW 2026",
      "gallery.description":
        "Attended Smart Tech Show 2026 — a chance to explore the latest trends in IoT, AI, and real-world software solutions being deployed across the industry.",
      "skills.title": "Technical Skills",
      "skills.frontend": "FRONTEND",
      "skills.backend": "BACKEND (FOCUS)",
      "skills.database": "Database",
      "skills.tools": "Tools",
      "skills.iot": "IoT & Hardware",
      "projects.title": "Projects",
      "projects.robot.title": "Robot Caider (V1)",
      "projects.role": "Role:",
      "projects.robot.description":
        "Frontend, Backend & Embedded Software <br /> Built a real-time robot control system using MQTT, enabling live monitoring and command execution. Developed responsive dashboards with React and RESTful APIs using ASP.NET Core, plus embedded software to connect the robot hardware with the control system and process commands.",
      "projects.tech": "Tech",
      "projects.video": "Video Demo →",
      "projects.techwiz.title": "Techwiz Global Tech Competition",
      "projects.techwiz.description":
        "Participated in international fullstack competition. Built admin panel for pet shelter management system.",
      "projects.nutri.title": "NutriPlanner",
      "projects.nutri.description":
        "Developed admin dashboard and user interface for a nutrition planning system, including statistics overview and user management.",
      "channel.title": "My Channel",
      "footer.title": "Contact",
      "footer.description":
        "Feel free to reach out if you'd like to collaborate, discuss technology, or simply say hello.",
    },
    vi: {
      "nav.home": "Trang chủ",
      "nav.about": "Giới thiệu",
      "nav.education": "Học vấn",
      "nav.experience": "Kinh nghiệm",
      "nav.skills": "Kỹ năng",
      "nav.projects": "Dự án",
      "nav.contact": "Liên hệ",
      "menu.open": "Mở menu",
      "menu.close": "Đóng menu",
      "backToTop": "Về đầu trang",
      "language.choose": "Chọn ngôn ngữ",
      "hero.role": "Lập trình viên phần mềm",
      "contact.email": "Email:",
      "contact.phone": "Điện thoại:",
      "contact.facebook": "Facebook:",
      "contact.github": "GitHub:",
      "contact.emailShort": "Email",
      "contact.phoneShort": "Điện thoại",
      "contact.youtube": "YouTube",
      "contact.facebookShort": "Facebook",
      "contact.location": "Gò Vấp, Thành phố Hồ Chí Minh",
      "introduction.title": "GIỚI THIỆU",
      "introduction.description":
        "Sinh viên năm cuối ngành Công nghệ thông tin tại Aptech Việt Nam, có kinh nghiệm thực tế xây dựng ứng dụng web từ giao diện tương thích nhiều thiết bị đến dịch vụ backend và tích hợp RESTful API. Bên cạnh đó, tôi còn tham gia các dự án robot và IoT, bao gồm phát triển phần mềm nhúng và kết nối phần cứng với hệ thống điều khiển thời gian thực.",
      "education.title": "HỌC VẤN",
      "education.degree": "Chương trình đào tạo Kỹ thuật Phần mềm (ADSE)",
      "education.field": "Lĩnh vực: Công nghệ thông tin",
      "education.major": "Chuyên ngành: Kỹ thuật phần mềm",
      "experience.eyebrow": "KINH NGHIỆM LÀM VIỆC",
      "experience.title": "Kinh nghiệm",
      "experience.role": "Thực tập sinh .NET Developer",
      "experience.company": "Green Space Solutions (GSS)",
      "experience.dates": "Tháng 7/2026 – Tháng 10/2026",
      "experience.description":
        "Tham gia phát triển và bảo trì ứng dụng web doanh nghiệp, tích lũy kinh nghiệm thực tế về cải tiến tính năng, tối ưu cơ sở dữ liệu, gỡ lỗi và kiểm thử phần mềm.",
      "experience.contributions": "Đóng góp chính",
      "experience.feature": "Cải tiến tính năng:",
      "experience.featureDescription":
        "Cải thiện chức năng tìm kiếm bản đồ, tích hợp dữ liệu bản đồ bên ngoài và xử lý lỗi bộ lọc để kết quả khớp với tiêu chí yêu cầu.",
      "experience.database": "Tối ưu cơ sở dữ liệu:",
      "experience.databaseDescription":
        "Tối ưu truy vấn cơ sở dữ liệu để tăng tốc độ tải bản đồ và điều tra các vấn đề ảnh hưởng đến chức năng tìm kiếm.",
      "experience.validation": "Kiểm tra dữ liệu:",
      "experience.validationDescription":
        "Phát triển script quét bản ghi cơ sở dữ liệu và xác định dữ liệu hợp lệ để tiếp tục rà soát.",
      "experience.debugging": "Gỡ lỗi & Kiểm thử:",
      "experience.debuggingDescription":
        "Điều tra lỗi ứng dụng và kiểm thử chức năng web trên thiết bị di động, bao gồm khả năng tương thích với chữ ký số.",
      "experience.export": "Cải tiến xuất dữ liệu:",
      "experience.exportDescription":
        "Cập nhật truy vấn cơ sở dữ liệu và xử lý xuất dữ liệu để hỗ trợ thêm trường thông tin và đáp ứng yêu cầu lọc.",
      "experience.testing": "Kiểm thử & Tài liệu:",
      "experience.testingDescription":
        "Thực hiện kiểm thử chức năng, điều tra các lỗi được báo cáo và chuẩn bị tài liệu kỹ thuật.",
      "gallery.eyebrow": "KHOẢNH KHẮC",
      "gallery.title": "SMART TECH SHOW 2026",
      "gallery.description":
        "Tham dự Smart Tech Show 2026 — cơ hội khám phá những xu hướng mới nhất về IoT, AI và các giải pháp phần mềm thực tế đang được ứng dụng trong ngành.",
      "skills.title": "Kỹ năng chuyên môn",
      "skills.frontend": "GIAO DIỆN",
      "skills.backend": "BACKEND (CHUYÊN MÔN)",
      "skills.database": "Cơ sở dữ liệu",
      "skills.tools": "Công cụ",
      "skills.iot": "IoT & Phần cứng",
      "projects.title": "Dự án",
      "projects.robot.title": "Robot Caider (V1)",
      "projects.role": "Vai trò:",
      "projects.robot.description":
        "Frontend, Backend & Lập trình nhúng <br /> Xây dựng hệ thống điều khiển robot thời gian thực sử dụng MQTT, hỗ trợ giám sát và gửi lệnh trực tiếp. Phát triển dashboard tương thích nhiều thiết bị bằng React và RESTful API với ASP.NET Core, đồng thời viết phần mềm nhúng để kết nối phần cứng robot với hệ thống điều khiển và xử lý lệnh.",
      "projects.tech": "Công nghệ",
      "projects.video": "Video giới thiệu →",
      "projects.techwiz.title": "Cuộc thi công nghệ quốc tế Techwiz",
      "projects.techwiz.description":
        "Tham gia cuộc thi phát triển ứng dụng fullstack quốc tế. Xây dựng trang quản trị cho hệ thống quản lý trung tâm cứu hộ thú cưng.",
      "projects.nutri.title": "NutriPlanner",
      "projects.nutri.description":
        "Phát triển trang quản trị và giao diện người dùng cho hệ thống lập kế hoạch dinh dưỡng, bao gồm tổng quan thống kê và quản lý người dùng.",
      "channel.title": "Kênh của tôi",
      "footer.title": "Liên hệ",
      "footer.description":
        "Hãy liên hệ nếu bạn muốn hợp tác, trao đổi về công nghệ hoặc đơn giản là gửi lời chào.",
    },
  };

  const languageSwitcher = document.getElementById("languageSwitcher");
  const languageSwitcherToggle = document.getElementById(
    "languageSwitcherToggle",
  );
  const languageOptions = document.getElementById("languageOptions");
  let currentLanguage = "en";

  const applyLanguage = (language) => {
    currentLanguage = language;
    document.documentElement.lang = language;
    document.title =
      language === "vi"
        ? "Portfolio của Trần Tiến Đạt"
        : "Tran Tien Dat Portfolio";
    const backToTopButton = document.getElementById("backToTop");
    if (backToTopButton) {
      backToTopButton.setAttribute(
        "aria-label",
        translations[language].backToTop,
      );
    }

    const navToggleButton = document.querySelector(".nav-toggle");
    if (navToggleButton) {
      navToggleButton.setAttribute(
        "aria-label",
        navToggleButton.classList.contains("active")
          ? translations[language]["menu.close"]
          : translations[language]["menu.open"],
      );
    }

    if (languageSwitcherToggle) {
      languageSwitcherToggle.setAttribute(
        "aria-label",
        translations[language]["language.choose"],
      );
    }

    languageOptions
      ?.querySelectorAll("[data-language-select]")
      .forEach((option) => {
        const isSelected = option.dataset.languageSelect === language;
        option.classList.toggle("selected", isSelected);
        option.setAttribute("aria-pressed", String(isSelected));
      });

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const translation = translations[language][element.dataset.i18n];
      if (translation) element.textContent = translation;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const translation = translations[language][element.dataset.i18nHtml];
      if (translation) element.innerHTML = translation;
    });
  };

  applyLanguage(currentLanguage);

  const setLanguageOptionsOpen = (isOpen) => {
    if (!languageOptions || !languageSwitcherToggle) return;
    languageOptions.hidden = !isOpen;
    languageSwitcherToggle.setAttribute("aria-expanded", String(isOpen));
    languageSwitcherToggle.classList.toggle("open", isOpen);
  };

  if (languageSwitcher && languageSwitcherToggle && languageOptions) {
    languageSwitcherToggle.addEventListener("click", () => {
      setLanguageOptionsOpen(languageOptions.hidden);
    });

    languageOptions
      .querySelectorAll("[data-language-select]")
      .forEach((option) => {
        option.addEventListener("click", () => {
          applyLanguage(option.dataset.languageSelect);
          setLanguageOptionsOpen(false);
        });
      });

    document.addEventListener("click", (event) => {
      if (!languageSwitcher.contains(event.target)) {
        setLanguageOptionsOpen(false);
      }
    });
  }

  /* ── 1. Đánh số section tự động ── */
  const sections = document.querySelectorAll("main section");
  sections.forEach((sec, i) => {
    const label = document.createElement("p");
    label.className = "section-index";
    label.textContent = `0${i + 1}`;
    sec.prepend(label);
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

  // Ảnh bên phải (gallery — cùng layout: chữ trái, ảnh phải)
  document
    .querySelectorAll("#gallery > .container > img")
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
    const setMenuOpen = (isOpen) => {
      navLinks.classList.toggle("open", isOpen);
      navToggle.classList.toggle("active", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute(
        "aria-label",
        isOpen
          ? translations[currentLanguage]["menu.close"]
          : translations[currentLanguage]["menu.open"],
      );
    };

    navToggle.addEventListener("click", () => {
      setMenuOpen(!navLinks.classList.contains("open"));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        if (languageOptions && !languageOptions.hidden) {
          languageSwitcherToggle?.focus();
        }
        setLanguageOptionsOpen(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) setMenuOpen(false);
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
