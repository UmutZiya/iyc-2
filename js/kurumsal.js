// Kurumsal Sayfa JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Sidebar menü öğeleri
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const contentSections = document.querySelectorAll('.content-section');
    const sidebarHeader = document.querySelector('.sidebar-header');
    const sidebarNav = document.querySelector('.sidebar-nav');

    // Sidebar link tıklama olayları
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Aktif sidebar item'ı güncelle
            document.querySelectorAll('.sidebar-item').forEach(item => {
                item.classList.remove('active');
            });
            this.parentElement.classList.add('active');
            
            // İlgili içerik bölümünü göster
            const targetId = this.getAttribute('href').substring(1);
            showContentSection(targetId);
            
            // Mobilde sidebar'ı kapat
            if (window.innerWidth < 992) {
                sidebarNav.classList.remove('show');
            }
        });
    });

    // İçerik bölümünü göster
    function showContentSection(targetId) {
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
            
            // Sayfanın üstüne scroll
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    // Mobil sidebar toggle
    if (sidebarHeader && sidebarNav) {
        sidebarHeader.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                sidebarNav.classList.toggle('show');
            }
        });
    }

    // Pencere boyutu değiştiğinde sidebar'ı sıfırla
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
            sidebarNav.classList.remove('show');
        }
    });

    // Sayfa yüklendiğinde URL hash'ini kontrol et
    function initializePage() {
        const hash = window.location.hash;
        
        if (hash) {
            // Hash varsa o bölümü göster
            const targetId = hash.substring(1);
            showContentSection(targetId);
            
            // İlgili sidebar item'ı aktif yap
            document.querySelectorAll('.sidebar-item').forEach(item => {
                item.classList.remove('active');
            });
            
            const targetLink = document.querySelector(`a[href="${hash}"]`);
            if (targetLink && targetLink.parentElement) {
                targetLink.parentElement.classList.add('active');
            }
        } else {
            // Hash yoksa ilk bölümü aktif yap
            const firstSection = document.querySelector('.content-section');
            const firstSidebarItem = document.querySelector('.sidebar-item');
            
            if (firstSection && firstSidebarItem) {
                firstSection.classList.add('active');
                firstSidebarItem.classList.add('active');
            }
        }
    }
    
    // Sayfa yüklendiğinde çalıştır
    initializePage();
    
    // Hash değiştiğinde de çalıştır
    window.addEventListener('hashchange', initializePage);
});