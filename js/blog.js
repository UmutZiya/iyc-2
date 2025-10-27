/* ===========================================
   BLOG DATA - İlim Yayma Cemiyeti
   =========================================== */

const blogData = [
    // Blog yazıları
    {
        id: 1,
        image: '/images/kulturden-irfan.jpeg',
        title: 'KÜLTÜRDEN İRFANA GİDEN YOL',
        subtitle: 'İlim Yayma Cemiyeti Bursa Şubesi olarak 15 Mart 2019 tarihinde üstad Cemil MERİÇin kızı olan Prof.Dr. Ümit MERİÇ hanımefendinin konuşmacı olarak katıldığı "KÜLTÜRDEN İRFANA GİDEN YOL" konulu konferansımızı gerçekleştirdik.',
        contentType: 'blog',
        link: 'blog-single-page.html',
        date: '2024-01-15',
        author: 'İlim Yayma Cemiyeti'
    },
    {
        id: 2,
        image: 'images/niyazi.jpeg',
        title: 'NİYAZİ MİSRİNİN ŞİİRLERLERİNDEN BESTELER',
        subtitle: 'İlim Yayma Cemiyeti Keles Kız Öğrenci Yurdu olarak "HER AY BİR NİNEMİZ VAR" isimini verdiğimiz sosyal sorumluluk projesi kapsamında Keles İlçemizde yaşayan yaşlı ninelerimizi evlerinde ziyaret ediyoruz. ',
        contentType: 'blog',
        link: 'blog-single-page.html',
        date: '2024-01-12',
        author: 'İlim Yayma Cemiyeti'
    },
    {
        id: 3,
        image: 'images/nine.jpeg',
        title: 'HER AY BİR NİNEMİZ VAR',
        subtitle: 'Yurtlarımızdan mezun olan öğrencilerimizin başarı hikayelerini sizlerle paylaşıyoruz.',
        contentType: 'blog',
        link: 'blog-single-page.html',
        date: '2024-01-10',
        author: 'İlim Yayma Cemiyeti'
    },

    // Haberler
    {
        id: 4,
        image: 'images/ebsad.jpeg',
        title: 'EBSAD KARİYER ENSTİTÜSÜ PROGRAMI',
        subtitle: 'Abdurrahman Tutan Yükseköğretim Erkek Öğrenci Yurdumuzda EBSAD Kariyer Enstitüsü ANADOLU KARİYER PROGRAMINII uygulamaktadır.Üniversitede okuyan öğrencilere yönelik geliştirilen ve uygulanan bu programda yurdumuzda 18 öğrenci katılmaya hak kazandı.',
        contentType: 'haber',
        link: 'blog-single-page.html',
        date: '2024-01-08',
        author: 'İlim Yayma Cemiyeti'
    },
    {
        id: 5,
        image: 'images/nuribey.jpeg',
        title: 'NURİBEY EĞİTİM VE GENÇLİK MERKEZİ',
        subtitle: 'Geçtiğimiz yıllarda İpekçilikte okuyan başarılı erkek öğencilere ev sahipliği yapan binamız Şaban Güzeler Ortaöğretim Yurdumuzun açılmasıyla boşaltıldı.',
        contentType: 'haber',
        link: 'blog-single-page.html',
        date: '2024-01-05',
        author: 'İlim Yayma Cemiyeti'
    },
    {
        id: 6,
        image: 'images/niyazi.jpeg',
        title: 'NİYAZİ MİSRİNİN ŞİİRLERLERİNDEN BESTELER',
        subtitle: 'İlim Yayma Cemiyeti Keles Kız Öğrenci Yurdu olarak "HER AY BİR NİNEMİZ VAR" isimini verdiğimiz sosyal sorumluluk projesi kapsamında Keles İlçemizde yaşayan yaşlı ninelerimizi evlerinde ziyaret ediyoruz. ',
        contentType: 'haber',
        link: 'blog-single-page.html',
        date: '2024-01-12',
        author: 'İlim Yayma Cemiyeti'
    },

    // Duyurular
    {
        id: 7,
        image: 'images/nine.jpeg',
        title: 'HER AY BİR NİNEMİZ VAR',
        subtitle: 'Yurtlarımızdan mezun olan öğrencilerimizin başarı hikayelerini sizlerle paylaşıyoruz.',
        contentType: 'duyuru',
        link: 'blog-single-page.html',
        date: '2024-01-10',
        author: 'İlim Yayma Cemiyeti'
    },
    {
        id: 8,
        image: 'images/nuribey.jpeg',
        title: 'NURİBEY EĞİTİM VE GENÇLİK MERKEZİ',
        subtitle: 'Geçtiğimiz yıllarda İpekçilikte okuyan başarılı erkek öğencilere ev sahipliği yapan binamız Şaban Güzeler Ortaöğretim Yurdumuzun açılmasıyla boşaltıldı.',
        contentType: 'duyuru',
        link: 'blog-single-page.html',
        date: '2024-01-05',
        author: 'İlim Yayma Cemiyeti'
    },
    {
        id: 1,
        image: '/images/kulturden-irfan.jpeg',
        title: 'KÜLTÜRDEN İRFANA GİDEN YOL',
        subtitle: 'İlim Yayma Cemiyeti Bursa Şubesi olarak 15 Mart 2019 tarihinde üstad Cemil MERİÇin kızı olan Prof.Dr. Ümit MERİÇ hanımefendinin konuşmacı olarak katıldığı "KÜLTÜRDEN İRFANA GİDEN YOL" konulu konferansımızı gerçekleştirdik.',
        contentType: 'duyuru',
        link: 'blog-single-page.html',
        date: '2024-01-15',
        author: 'İlim Yayma Cemiyeti'
    }
];

/* ===========================================
   BLOG FUNCTIONS
   =========================================== */

// Tab değiştirme fonksiyonu
function switchTab(tabName) {
    // Tüm tab butonlarını deaktif et
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Tüm tab panellerini gizle
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });

    // Seçilen tab'ı aktif et
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.querySelector(`#${tabName}-panel`).classList.add('active');

    // İlgili içeriği yükle
    loadTabContent(tabName);
}

// Tab içeriğini yükle
function loadTabContent(tabName) {
    const panel = document.getElementById(`${tabName}-panel`);
    const cardsContainer = panel.querySelector('.cards-grid');

    // İlgili içerikleri filtrele
    const filteredData = blogData.filter(item => item.contentType === tabName);

    // Kartları oluştur
    cardsContainer.innerHTML = '';

    if (filteredData.length === 0) {
        cardsContainer.innerHTML = `
            <div class="no-content">
                <p>Henüz ${tabName} içeriği bulunmamaktadır.</p>
            </div>
        `;
        return;
    }

    filteredData.forEach(item => {
        const card = createBlogCard(item);
        cardsContainer.appendChild(card);
    });
}

// Blog kartı oluştur
function createBlogCard(item) {
    const card = document.createElement('a');
    card.className = 'blog-card';
    card.href = item.link;
    card.innerHTML = `
        <div class="blog-card-image-container">
            <img src="${item.image}" alt="${item.title}" class="blog-card-image">
        </div>
        <div class="blog-card-content">
            <div class="blog-card-meta">
                <div class="blog-card-date">
                    <i class="fas fa-calendar"></i>
                    <span>${formatDate(item.date)}</span>
                </div>
                <div class="blog-card-author">
                    <i class="fas fa-user"></i>
                    <span>${item.author}</span>
                </div>
            </div>
            <h3 class="blog-card-title">${item.title}</h3>
            <p class="blog-card-subtitle">${item.subtitle}</p>
            <div class="blog-card-footer">
                <span class="blog-card-type ${item.contentType}">${getTypeLabel(item.contentType)}</span>
                <span class="blog-card-link">
                    Devamını Oku <i class="fas fa-arrow-right"></i>
                </span>
            </div>
        </div>
    `;

    return card;
}

// Tarih formatla
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Tip etiketi al
function getTypeLabel(type) {
    const labels = {
        'blog': 'Blog',
        'haber': 'Haber',
        'duyuru': 'Duyuru'
    };
    return labels[type] || type;
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', function () {
    // İlk tab'ı aktif et
    switchTab('blog');

    // Tab butonlarına event listener ekle
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
});
