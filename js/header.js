/* ===========================================
   MOBILE MENU - HAMBURGER FUNCTIONALITY
   =========================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Element referansları
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const body = document.body;

    // Menüyü aç
    function openMenu() {
        hamburgerBtn.classList.add('active');
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        body.classList.add('menu-open');
        
        // Accessibility için
        hamburgerBtn.setAttribute('aria-expanded', 'true');
    }

    // Menüyü kapat
    function closeMenu() {
        hamburgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
        
        // Accessibility için
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    }

    // Hamburger butonu tıklama
    hamburgerBtn.addEventListener('click', function() {
        if (mobileMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Kapatma butonu tıklama
    closeMenuBtn.addEventListener('click', closeMenu);

    // Overlay tıklama - menüyü kapat
    mobileMenuOverlay.addEventListener('click', closeMenu);

    // Menü linklerine tıklandığında menüyü kapat
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });

    // ESC tuşu ile menüyü kapat
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Window resize - eğer ekran büyürse menüyü kapat
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 992 && mobileMenu.classList.contains('active')) {
                closeMenu();
            }
        }, 250);
    });

    // Touch swipe ile kapatma (sağa kaydırma)
    let touchStartX = 0;
    let touchEndX = 0;

    mobileMenu.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    mobileMenu.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        // Sağa kaydırma - en az 50px
        if (touchEndX > touchStartX + 50) {
            closeMenu();
        }
    }

    // Sayfa yüklendiğinde menünün kapalı olduğundan emin ol
    closeMenu();
});
