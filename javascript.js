const header = document.getElementById("header");
const navMenu = document.getElementById("nav-menu");
const hamburger = document.querySelector(".hamburger");
const aside = document.querySelector(".aside");
const body = document.body;
const html = document.documentElement;
const hero = document.querySelector(".hero");
const about = document.getElementById("about");
const container = document.querySelector(".container");
const footer = document.querySelector(".footer");
const bigHeader = document.getElementById("big-heading");
const title = document.querySelector(".title");
const firstNav = document.querySelector(".firstNav");
const numberedHeadings = document.querySelectorAll(".numbered-heading");
const logoDiv = document.querySelector(".logoDiv");
const cursorFlash = document.getElementById("cursor");
const scrollProgress = document.getElementById("scroll-progress");
const backToTop = document.getElementById("back-to-top");
const year = document.getElementById("year");

const modeToggles = document.querySelectorAll(".toggleDarkMode");
const darkModeBg = document.querySelectorAll(".darkModeBg");
const lightModeIcons = document.querySelectorAll(".lightModeIcon");
const darkModeIcons = document.querySelectorAll(".darkModeIcon");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileQuery = window.matchMedia("(max-width: 900px)");

const sectionsToBlur = [container, about, hero, footer].filter(Boolean);
const sectionIds = ["about", "projects", "contact"];

let lastScrollPosition = 0;
let mode = localStorage.getItem("mode");

const addMediaListener = (query, callback) => {
    if (typeof query.addEventListener === "function") {
        query.addEventListener("change", callback);
    } else {
        query.addListener(callback);
    }
};

const getProjectElements = () => ({
    descriptions: document.querySelectorAll(".project-description"),
    titles: document.querySelectorAll(".project-title"),
    techLists: document.querySelectorAll(".project-tech-list"),
    techItems: document.querySelectorAll(".techList"),
});

const setMenuState = (isOpen) => {
    if (!hamburger || !aside || !navMenu) {
        return;
    }

    hamburger.classList.toggle("active", isOpen);
    navMenu.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");

    aside.setAttribute("aria-hidden", String(!isOpen));
    aside.setAttribute("data-visible", String(isOpen));
    aside.style.visibility = isOpen ? "visible" : "hidden";

    body.classList.toggle("menu-open", isOpen);

    if (isOpen) {
        body.style.overflow = "hidden";
        html.style.overflow = "hidden";
    } else {
        body.style.removeProperty("overflow");
        html.style.removeProperty("overflow");
    }

};

const closeHamburgerMenu = () => setMenuState(false);

const setToggleVisualState = (isDark) => {
    modeToggles.forEach((toggle) => {
        toggle.classList.toggle("lightToggle", !isDark);
        toggle.style.background = isDark ? "#fff" : "var(--orange)";
        toggle.style.left = isDark ? "24px" : "0";
    });

    darkModeBg.forEach((background) => {
        background.style.background = isDark ? "var(--orange)" : "#E2E1E7";
    });

    lightModeIcons.forEach((icon) => {
        icon.style.display = isDark ? "block" : "none";
    });

    darkModeIcons.forEach((icon) => {
        icon.style.display = isDark ? "none" : "block";
    });
};

const applyProjectCardColors = (isDark) => {
    const { descriptions, titles, techLists, techItems } = getProjectElements();
    const isMobile = mobileQuery.matches;

    descriptions.forEach((description) => {
        if (isMobile) {
            description.style.background = "transparent";
            description.style.color = isDark ? "var(--light-slate)" : "var(--violet)";
            return;
        }

        description.style.background = isDark ? "var(--light-violet)" : "rgba(255, 255, 255, 0.84)";
        description.style.color = isDark ? "var(--light-slate)" : "var(--violet)";
    });

    titles.forEach((projectTitle) => {
        if (isMobile) {
            projectTitle.style.color = isDark ? "var(--light-slate)" : "var(--light-violet)";
            return;
        }

        if (isDark) {
            projectTitle.style.color = "var(--light-slate)";
            return;
        }

        projectTitle.style.color = "var(--light-violet)";
    });

    techLists.forEach((list) => {
        list.style.color = isMobile ? (isDark ? "var(--light-slate)" : "var(--slate)") : "var(--slate)";
    });

    techItems.forEach((item) => {
        item.style.color = isMobile ? (isDark ? "var(--light-slate)" : "#687798") : "#687798";
    });
};

const disableDarkMode = () => {
    if (logoDiv) {
        logoDiv.style.background = "#f7f4fb";
    }

    if (cursorFlash) {
        cursorFlash.style.visibility = "hidden";
    }

    if (bigHeader) {
        bigHeader.style.color = "#373550";
    }

    if (title) {
        title.style.color = "rgb(55, 53, 80)";
    }

    if (aside) {
        aside.style.background = "#f8f5fb";
        aside.style.color = "var(--violet)";
    }

    if (firstNav) {
        firstNav.style.color = "var(--violet)";
    }

    numberedHeadings.forEach((element) => {
        element.style.color = "var(--light-violet)";
    });

    body.classList.add("lightBody");
    html.classList.add("lightRoot");

    if (header) {
        header.classList.add("lightHeader");
    }

    if (navMenu) {
        navMenu.classList.add("lightNav");
    }

    setToggleVisualState(false);
    applyProjectCardColors(false);

    localStorage.setItem("mode", "disabled");
};

const enableDarkMode = () => {
    if (logoDiv) {
        logoDiv.style.background = "var(--violet)";
    }

    if (cursorFlash) {
        cursorFlash.style.visibility = "visible";
    }

    if (bigHeader) {
        bigHeader.style.color = "var(--white)";
    }

    if (title) {
        title.style.color = "var(--lightest-slate)";
    }

    if (aside) {
        aside.style.background = "#221e39";
        aside.style.color = "var(--lightest-slate)";
    }

    if (firstNav) {
        firstNav.style.color = "var(--lightest-slate)";
    }

    numberedHeadings.forEach((element) => {
        element.style.color = "var(--lightest-slate)";
    });

    body.classList.remove("lightBody");
    html.classList.remove("lightRoot");

    if (header) {
        header.classList.remove("lightHeader");
    }

    if (navMenu) {
        navMenu.classList.remove("lightNav");
    }

    setToggleVisualState(true);
    applyProjectCardColors(true);

    localStorage.setItem("mode", "enabled");
};

const toggleMode = () => {
    mode = localStorage.getItem("mode");

    if (mode !== "enabled") {
        enableDarkMode();
        return;
    }

    disableDarkMode();
};

const updateNavState = (activeId) => {
    document.querySelectorAll(".nav-link[href^='#']").forEach((link) => {
        const isActive = link.getAttribute("href") === `#${activeId}`;
        link.classList.toggle("active-link", isActive);
        if (isActive) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
};

const initScrollSpy = () => {
    const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

    if (!sections.length || typeof IntersectionObserver === "undefined") {
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            const visibleSections = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (visibleSections.length) {
                updateNavState(visibleSections[0].target.id);
            }
        },
        {
            threshold: [0.25, 0.5, 0.75],
            rootMargin: "-20% 0px -45% 0px",
        }
    );

    sections.forEach((section) => observer.observe(section));
};

const updateActiveSectionByScroll = () => {
    const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

    if (!sections.length) {
        return;
    }

    const headerOffset = header ? header.offsetHeight : 0;
    const marker = window.scrollY + headerOffset + 24;
    const aboutTop = about ? about.offsetTop : Number.POSITIVE_INFINITY;

    if (marker < aboutTop) {
        updateNavState("");
        return;
    }

    let activeId = sections[0].id;
    sections.forEach((section) => {
        if (marker >= section.offsetTop) {
            activeId = section.id;
        }
    });

    updateNavState(activeId);
};

const updateScrollUI = () => {
    const currentScroll = window.scrollY;

    if (header) {
        const hasScrolled = currentScroll > 1;
        header.classList.toggle("is-scrolled", hasScrolled);

        if (hasScrolled) {
            header.style.boxShadow = "0 8px 24px -18px rgba(0, 0, 0, 0.6)";
        } else {
            header.style.boxShadow = "none";
        }

        if (lastScrollPosition < currentScroll && currentScroll > 80) {
            header.classList.remove("slideDown");
            header.classList.add("slideUp");
        } else if (lastScrollPosition > currentScroll) {
            header.classList.remove("slideUp");
            header.classList.add("slideDown");
        }
    }

    if (scrollProgress) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
        scrollProgress.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 100) / 100})`;
    }

    if (backToTop) {
        backToTop.classList.toggle("show", currentScroll > 600);
    }

    updateActiveSectionByScroll();

    lastScrollPosition = currentScroll;
};

const initCursor = () => {
    const cursor = document.getElementById("cursor");

    if (!cursor) {
        return;
    }

    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (!finePointer || prefersReducedMotion.matches) {
        cursor.style.display = "none";
        return;
    }

    let pointerX = 0;
    let pointerY = 0;
    let rafId = null;

    const drawCursor = () => {
        cursor.style.left = `${pointerX}px`;
        cursor.style.top = `${pointerY}px`;
        rafId = null;
    };

    document.addEventListener(
        "mousemove",
        (event) => {
            pointerX = event.clientX;
            pointerY = event.clientY;

            if (!rafId) {
                rafId = requestAnimationFrame(drawCursor);
            }
        },
        { passive: true }
    );
};

const initMenu = () => {
    if (!hamburger || !aside) {
        return;
    }

    hamburger.addEventListener("click", () => {
        if (!mobileQuery.matches) {
            return;
        }

        const isOpen = aside.getAttribute("aria-hidden") === "true";
        setMenuState(isOpen);
    });

    document.querySelectorAll(".aside a").forEach((link) => {
        link.addEventListener("click", closeHamburgerMenu);
    });

    document.addEventListener("click", (event) => {
        if (!mobileQuery.matches || aside.getAttribute("aria-hidden") === "true") {
            return;
        }

        if (aside.contains(event.target) || hamburger.contains(event.target)) {
            return;
        }

        closeHamburgerMenu();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && aside.getAttribute("aria-hidden") === "false") {
            closeHamburgerMenu();
        }
    });

    addMediaListener(mobileQuery, (event) => {
        applyProjectCardColors(localStorage.getItem("mode") === "enabled");

        if (!event.matches) {
            closeHamburgerMenu();
        }
    });

    setMenuState(false);
};

const initTheme = () => {
    mode = localStorage.getItem("mode");

    if (mode === "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    modeToggles.forEach((toggle) => {
        toggle.addEventListener("click", toggleMode);
    });
};

const initBackToTop = () => {
    if (!backToTop) {
        return;
    }

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion.matches ? "auto" : "smooth",
        });
    });
};

const initSplash = () => {
    if (!logoDiv) {
        return;
    }

    if (prefersReducedMotion.matches) {
        logoDiv.style.display = "none";
        return;
    }

    const splashDuration = 1400;
    const removeDuration = 450;

    setTimeout(() => {
        logoDiv.classList.add("hidden");
    }, splashDuration);

    setTimeout(() => {
        logoDiv.style.display = "none";
    }, splashDuration + removeDuration);
};

const initYear = () => {
    if (year) {
        year.textContent = new Date().getFullYear();
    }
};

window.addEventListener(
    "scroll",
    () => {
        updateScrollUI();
    },
    { passive: true }
);

initSplash();
initCursor();
initMenu();
initTheme();
initBackToTop();
updateScrollUI();
initYear();
