/* ===========================================
   PROJELER DATA - İlim Yayma Cemiyeti
   =========================================== */

const projelerData = [
    {
        id: 1,
        image: './images/ism.png',
        link: 'proje-single.html'
    },
    {
        id: 2,
        image: './images/fsm.png',
        link: 'proje-single.html'
    },
    {
        id: 3,
        image: './images/adil-hukuk.png',
        link: 'proje-single.html'
    },
    {
        id: 4,
        image: './images/lisans-akademi.png',
        link: 'proje-single.html'
    },
    {
        id: 5,
        image: './images/tip-akademi.png',
        link: 'proje-single.html'
    },
    {
        id: 6,
        image: './images/gelecegin-egitimcileri.png',
        link: 'proje-single.html'
    },
    {
        id: 7,
        image: './images/psikoloji.png',
        link: 'proje-single.html'
    },
    {
        id: 8,
        image: './images/marifet-okulu.png',
        link: 'proje-single.html'
    },
    {
        id: 9,
        image: './images/seman-turkiye.png',
        link: 'proje-single.html'
    },
    {
        id: 10,
        image: './images/refik-kesif.png',
        link: 'proje-single.html'
    },
    {
        id: 11,
        image: './images/sefer-lise.png',
        link: 'proje-single.html'
    },
    {
        id: 12,
        image: './images/yurt-yonetici.png',
        link: 'proje-single.html'
    }
];

/* ===========================================
   PROJELER FUNCTIONS
   =========================================== */

// Proje kartı oluştur
function createProjectCard(project) {
    const link = document.createElement('a');
    link.href = project.link;
    link.className = 'image-link-pg';
    
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = `Proje ${project.id}`;
    img.className = 'grid-image-pg';
    
    link.appendChild(img);
    return link;
}

// Projeleri yükle
function loadProjects() {
    const gridContainer = document.querySelector('.grid-pg');
    
    if (!gridContainer) return;
    
    // Mevcut içeriği temizle
    gridContainer.innerHTML = '';
    
    // Projeleri ekle
    projelerData.forEach(project => {
        const projectCard = createProjectCard(project);
        gridContainer.appendChild(projectCard);
    });
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
});