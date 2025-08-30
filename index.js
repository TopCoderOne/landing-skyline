document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const burgerMenu = document.getElementById("burger-menu");
    const menuMobile = document.querySelector("nav");
    const overlay = document.getElementById("overlay");

    const toggleActiveClasses = (isActive) => {
        burgerMenu.classList.toggle("active", isActive);
        menuMobile.classList.toggle("active", isActive);
        overlay.classList.toggle("active", isActive);
        document.body.style.overflow = isActive ? "hidden" : "";
    };

    // Активация/деактивация мобильного меню
    burgerMenu.addEventListener("click", () => {
        const isActive = burgerMenu.classList.toggle("active");
        toggleActiveClasses(isActive);
    });

    menuMobile.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            toggleActiveClasses(false);
        }
    });

    // Включает фон для header при скролле
    const handleHeader = () => {
        header.classList.toggle("active", window.scrollY > 50);
    };

    // Отключает мобильное меню при десктопной версии
    const handleDisableMobileMenu = () => {
        if (window.innerWidth > 1024) {
            toggleActiveClasses(false);
        }
    };

    // Смещение скролл на -70px
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Отменяем переход по ссылке

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 70;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        });
    });

    // Обработчик события прокрутки страницы
    window.addEventListener("scroll", handleHeader);
    // Обработчик события изменения размера окна
    window.addEventListener("resize", handleDisableMobileMenu);
});