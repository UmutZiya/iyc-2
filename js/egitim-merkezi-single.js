// Eğitim merkezi detay verileri
const merkezDetaylar = {
    1: {
        title: "BUHARA OKUMA EVİ",
        ilce: "İnegöl",
        adres: "Burhaniye Mah. Yeşil Bursa Cad. No:1 İnegöl/Bursa/Türkiye",
        telefon: "0 (545) 307-4661",
        email: "buharaiyem@iyc.org.tr",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.703782365183!2d29.503327376389503!3d40.082019075942455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cbcbe0c4362e7b%3A0x1e5b671694ff06c9!2zQnVyaGFuaXllLCBZZcWfaWwgQnVyc2EgQ2QuIE5vOjEsIDE2NDAwIMSwbmVnw7ZsL0J1cnNh!5e0!3m2!1str!2str!4v1759499912595!5m2!1str!2str",
        images: [
            "/images/buhara-main.jpg",
            "/images/buhara-4.jpeg",
            "/images/buhara-5.jpeg",
            "/images/buhara-6.jpeg",
            "/images/buhara-7.jpeg"
        ],
        features: [
            { icon: "fas fa-chalkboard-teacher", text: "Deneyimli Eğitmenler" },
            { icon: "fas fa-book", text: "Kuran-ı Kerim Kursu" },
            { icon: "fas fa-users", text: "Grup Dersleri" },
            { icon: "fas fa-user", text: "Birebir Eğitim" },
            { icon: "fas fa-clock", text: "Esnek Ders Saatleri" },
            { icon: "fas fa-wifi", text: "Ücretsiz WiFi" },
            { icon: "fas fa-coffee", text: "Çay-Kahve İkramı" },
            { icon: "fas fa-parking", text: "Otopark İmkanı" }
        ],
        aciklama: "Buhara Okuma Evi, modern eğitim imkanları ve deneyimli eğitmen kadrosuyla hizmet vermektedir. Kuran-ı Kerim öğretimi, dini eğitim ve kişisel gelişim programları sunmaktadır."
    },
    2: {
        title: "İznik Kitap-Kahve",
        ilce: "İznik",
        adres: "Mustafa Kemal Paşa Mah. Göl Sokak No:19 İznik/Bursa/Türkiye",
        telefon: "0 (544) 492-2606",
        email: "iznik@iyc.org.tr",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.0102514769223!2d29.718479!3d40.430771899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb0b103a0033fd%3A0xcca1c87dd3107e96!2s%C4%B0znik%20Kitap%20Kafe!5e0!3m2!1str!2str!4v1759499756691!5m2!1str!2str",
        images: [
            "/images/izniki-main.jpg",
            "/images/iznik-1.jpeg",
            "/images/iznik-2.jpeg",
            "/images/iznik-3.jpeg",
            "/images/iznik-4.jpeg"
        ],
        features: [
            { icon: "fas fa-chalkboard-teacher", text: "Uzman Eğitmenler" },
            { icon: "fas fa-book-quran", text: "Tecvid Dersleri" },
            { icon: "fas fa-graduation-cap", text: "Sertifikalı Eğitim" },
            { icon: "fas fa-child", text: "Çocuk Kursları" },
            { icon: "fas fa-female", text: "Kadın Kursları" },
            { icon: "fas fa-male", text: "Erkek Kursları" },
            { icon: "fas fa-library", text: "Kütüphane" },
            { icon: "fas fa-wheelchair", text: "Engelli Erişimi" }
        ],
        aciklama: "İznik Kitap-Kahve, geniş kurs yelpazesi ve modern tesisleriyle her yaştan öğrenciye hizmet vermektedir. Tecvid, hafızlık ve dini bilimler alanında eğitim programları düzenlenmektedir."
    },
    3: {
        title: "Nuribey Eğitim Merkezi",
        ilce: "Osmangazi",
        adres: "İbrahim Paşa Mh. 2.Karabaşı Veli Sk. No:1 Osmangazi/Bursa",
        telefon: "0 (224) 222-0810",
        email: "nuribeyiyem@iyc.org.tr",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.313420160969!2d29.063591!3d40.179837899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3de67f078d8b%3A0xc57529209a381e65!2s%C4%B0lim%20Yayma%20Cemiyeti%20Bursa%20%C5%9Eubesi%20Nuri%20Bey%20Kona%C4%9F%C4%B1!5e0!3m2!1str!2str!4v1759500016232!5m2!1str!2str",
        images: [
            "/images/nuribey-main.jpg",
            "/images/nuri-1.jpeg",
            "/images/nuri-2.jpeg",
            "/images/nuri-3.jpeg",
            "/images/nuri-4.jpeg",
            "/images/nuri-5.jpeg"
        ],
        features: [
            { icon: "fas fa-mosque", text: "Mescit" },
            { icon: "fas fa-book-open", text: "Hadis Dersleri" },
            { icon: "fas fa-language", text: "Arapça Kursu" },
            { icon: "fas fa-heart", text: "Ahlak Eğitimi" },
            { icon: "fas fa-users-cog", text: "Aile Danışmanlığı" },
            { icon: "fas fa-microphone", text: "Konferans Salonu" },
            { icon: "fas fa-tree", text: "Bahçe Alanı" },
            { icon: "fas fa-bus", text: "Toplu Taşıma" }
        ],
        aciklama: "Nuribey Eğitim Merkezimiz, tarihi dokusunu modern eğitim anlayışıyla harmanlayarak hizmet vermektedir. Hadis, fıkıh, Arapça ve aile danışmanlığı alanlarında uzmanlaşmış programlar sunmaktadır."
    }
};

// URL'den merkez ID'sini al
function getMerkezIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Ana görseli değiştir
function changeMainImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;

    // Aktif thumbnail'i güncelle
    document.querySelectorAll('.thumbnail-images img').forEach(img => {
        img.classList.remove('active');
        if (img.src === imageSrc) {
            img.classList.add('active');
        }
    });
}

// Harita yükle
function loadMap(mapUrl, title) {
    const mapContainer = document.getElementById('map-container');

    if (mapUrl) {
        // Iframe oluştur
        const iframe = document.createElement('iframe');
        iframe.src = mapUrl;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.style.border = 'none';
        iframe.style.borderRadius = '8px';
        iframe.loading = 'lazy';
        iframe.allowFullscreen = true;
        iframe.referrerPolicy = 'no-referrer-when-downgrade';
        iframe.title = `${title} Konumu`;

        // Placeholder'ı kaldır ve iframe'i ekle
        mapContainer.innerHTML = '';
        mapContainer.appendChild(iframe);
    }
}

// Merkez detaylarını yükle
function loadMerkezDetails(merkezId) {
    const merkez = merkezDetaylar[merkezId];

    if (!merkez) {
        // Merkez bulunamazsa eğitim sayfasına yönlendir
        window.location.href = 'egitim.html';
        return;
    }

    // Sayfa başlığını güncelle
    document.title = `${merkez.title} - İlim Yayma Cemiyeti`;

    // Breadcrumb güncelle
    document.getElementById('breadcrumb-title').textContent = merkez.title;

    // Merkez başlığı
    document.getElementById('merkez-title').textContent = merkez.title;

    // Ana görsel
    const mainImage = document.getElementById('main-image');
    mainImage.src = merkez.images[0];
    mainImage.alt = merkez.title;

    // Thumbnail görseller
    const thumbnailContainer = document.getElementById('thumbnail-images');
    thumbnailContainer.innerHTML = '';

    merkez.images.forEach((imageSrc, index) => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `${merkez.title} - Görsel ${index + 1}`;
        img.onclick = () => changeMainImage(imageSrc);

        if (index === 0) {
            img.classList.add('active');
        }

        thumbnailContainer.appendChild(img);
    });

    // Konum bilgileri
    document.getElementById('merkez-ilce').textContent = merkez.ilce;
    document.getElementById('merkez-adres').textContent = merkez.adres;
    document.getElementById('merkez-telefon').textContent = merkez.telefon;
    document.getElementById('merkez-email').textContent = merkez.email;

    // Özellikler
    const featuresContainer = document.getElementById('features-grid');
    featuresContainer.innerHTML = '';

    merkez.features.forEach(feature => {
        const featureDiv = document.createElement('div');
        featureDiv.className = 'feature-item';
        featureDiv.innerHTML = `
            <i class="${feature.icon}"></i>
            <span>${feature.text}</span>
        `;
        featuresContainer.appendChild(featureDiv);
    });

    // Açıklama
    document.getElementById('merkez-aciklama').textContent = merkez.aciklama;

    // Harita yükle
    loadMap(merkez.mapUrl, merkez.title);
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    const merkezId = getMerkezIdFromUrl();

    if (merkezId) {
        loadMerkezDetails(merkezId);
    } else {
        // ID yoksa eğitim sayfasına yönlendir
        window.location.href = 'egitim.html';
    }
});