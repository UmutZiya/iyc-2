// Yurt detay verileri
const yurtDetaylar = {
    1: {
        title: "GEVHER SÖNMEZ YÜKSEKÖĞRETİM ERKEK ÖĞRENCİ YURDU",
        ilce: "Nilüfer",
        cinsiyet: "erkek",
        adres: "Nilüfer Mahallesi, Atatürk Caddesi No:123, Bursa",
        telefon: "(0224) 441 50 65",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24370.43328613955!2d28.961232646007183!3d40.22453899112913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca140156f3ca6f%3A0x88f8c986d656d190!2zİlim%20Yayma%20Cemiyeti%20Gevher%20Sönmez%20Yükseköğretim%20Erkek%20Öğrenci%20Yurdu!5e0!3m2!1str!2str!4v1759409446783!5m2!1str!2str",
        images: [
            "/images/gevher.jpeg",
            "/images/gevher-1.jpeg",
            "/images/gevher-2.jpeg",
            "/images/gevher-3.jpeg",
            "/images/gevher-4.jpeg",
            "/images/gevher-5.jpeg"
        ],
        features: [
            { icon: "fas fa-bed", text: "2-3 Kişilik Odalar" },
            { icon: "fas fa-wifi", text: "Ücretsiz WiFi" },
            { icon: "fas fa-utensils", text: "3 Öğün Yemek" },
            { icon: "fas fa-book", text: "Çalışma Salonu" },
            { icon: "fas fa-shield-alt", text: "24/7 Güvenlik" },
            { icon: "fas fa-tv", text: "Ortak Alan TV" },
            { icon: "fas fa-tshirt", text: "Çamaşırhane" },
            { icon: "fas fa-parking", text: "Otopark" }
        ],
        aciklama: "Gevher Sönmez Yükseköğretim Erkek Öğrenci Yurdu, Nilüfer ilçesinde yer alan modern bir tesistir. Öğrencilerimizin konforlu ve güvenli bir ortamda barınması için gerekli tüm imkanları sunmaktadır."
    },
    2: {
        title: "ŞABAN GÜZELER YÜKSEKÖĞRETİM ERKEK ÖĞRENCİ YURDU",
        ilce: "Osmangazi",
        cinsiyet: "erkek",
        adres: "Osmangazi Mahallesi, Cumhuriyet Caddesi No:456, Bursa",
        telefon: "(0224) 234 56 78",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5!2d29.0610!3d40.1885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDExJzE4LjYiTiAyOcKwMDMnMzkuNiJF!5e0!3m2!1str!2str!4v1759409446783!5m2!1str!2str",
        images: [
            "/images/saban-guzeler.jpeg",
            "https://via.placeholder.com/800x400?text=Erkek+Yurdu+Oda",
            "https://via.placeholder.com/800x400?text=Spor+Salonu",
            "https://via.placeholder.com/800x400?text=Bahçe"
        ],
        features: [
            { icon: "fas fa-bed", text: "2-4 Kişilik Odalar" },
            { icon: "fas fa-wifi", text: "Fiber İnternet" },
            { icon: "fas fa-utensils", text: "Açık Büfe Kahvaltı" },
            { icon: "fas fa-dumbbell", text: "Spor Salonu" },
            { icon: "fas fa-shield-alt", text: "Güvenlik Kamerası" },
            { icon: "fas fa-gamepad", text: "Oyun Salonu" },
            { icon: "fas fa-tree", text: "Bahçe Alanı" },
            { icon: "fas fa-bus", text: "Ulaşım İmkanı" }
        ],
        aciklama: "Şaban Güzeler Yükseköğretim Erkek Öğrenci Yurdu, Osmangazi ilçesinde hizmet vermektedir. Modern imkanları ve deneyimli personeliyle öğrencilerimizin eğitim hayatlarına destek olmaktadır."
    },
    3: {
        title: "TEVFİK ÇUKA YÜKSEKÖĞRETİM ERKEK ÖĞRENCİ YURDU",
        ilce: "Osmangazi",
        cinsiyet: "erkek",
        adres: "Osmangazi Mahallesi, Üniversite Caddesi No:789, Bursa",
        telefon: "(0224) 345 67 89",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5!2d29.0610!3d40.1885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDExJzE4LjYiTiAyOcKwMDMnMzkuNiJF!5e0!3m2!1str!2str!4v1759409446783!5m2!1str!2str",
        images: [
            "/images/tevfik.jpeg",
            "https://via.placeholder.com/800x400?text=Erkek+Yurdu+Oda",
            "https://via.placeholder.com/800x400?text=Kütüphane",
            "https://via.placeholder.com/800x400?text=Konferans+Salonu"
        ],
        features: [
            { icon: "fas fa-bed", text: "2-3 Kişilik Odalar" },
            { icon: "fas fa-wifi", text: "Yüksek Hızlı İnternet" },
            { icon: "fas fa-utensils", text: "Kaliteli Yemekler" },
            { icon: "fas fa-book-open", text: "Kütüphane" },
            { icon: "fas fa-users", text: "Konferans Salonu" },
            { icon: "fas fa-medkit", text: "Sağlık Hizmetleri" },
            { icon: "fas fa-coffee", text: "Kafeterya" },
            { icon: "fas fa-bicycle", text: "Bisiklet Parkı" }
        ],
        aciklama: "Tevfik Çuka Yükseköğretim Erkek Öğrenci Yurdu, geniş kütüphanesi ve konferans salonuyla akademik faaliyetleri destekleyen bir tesistir. Öğrencilerimizin başarısı için gerekli tüm imkanları sunmaktadır."
    },
    4: {
        title: "ABDURRAHMAN TUTAN YÜKSEKÖĞRETİM KIZ ÖĞRENCİ YURDU",
        ilce: "Nilüfer",
        cinsiyet: "kiz",
        adres: "Nilüfer Mahallesi, Özlüce Caddesi No:321, Bursa",
        telefon: "(0224) 456 78 90",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5!2d29.0634!3d40.2669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDE2JzAwLjgiTiAyOcKwMDMnNDguMiJF!5e0!3m2!1str!2str!4v1759409446783!5m2!1str!2str",
        images: [
            "/images/abdurrahman.jpeg",
            "https://via.placeholder.com/800x400?text=Kız+Yurdu+Oda",
            "https://via.placeholder.com/800x400?text=Çalışma+Salonu",
            "https://via.placeholder.com/800x400?text=Bahçe"
        ],
        features: [
            { icon: "fas fa-bed", text: "2 Kişilik Odalar" },
            { icon: "fas fa-wifi", text: "Ücretsiz WiFi" },
            { icon: "fas fa-utensils", text: "3 Öğün Yemek" },
            { icon: "fas fa-book", text: "Sessiz Çalışma Alanı" },
            { icon: "fas fa-shield-alt", text: "24/7 Güvenlik" },
            { icon: "fas fa-tv", text: "Ortak Salon" },
            { icon: "fas fa-tshirt", text: "Çamaşırhane" },
            { icon: "fas fa-tree", text: "Bahçe Alanı" }
        ],
        aciklama: "Abdurrahman Tutan Yükseköğretim Kız Öğrenci Yurdu, kız öğrencilerimizin güvenli ve konforlu bir ortamda barınması için özel olarak tasarlanmıştır."
    },
    5: {
        title: "MEHMET AKİF BUHARALI İLAHİYAT KIZ ÖĞRENCİ YURDU",
        ilce: "Nilüfer",
        cinsiyet: "kiz",
        adres: "Nilüfer Mahallesi, İlahiyat Caddesi No:654, Bursa",
        telefon: "(0224) 567 89 01",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5!2d29.0634!3d40.2669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDE2JzAwLjgiTiAyOcKwMDMnNDguMiJF!5e0!3m2!1str!2str!4v1759409446783!5m2!1str!2str",
        images: [
            "/images/mehmetakif.jpeg",
            "https://via.placeholder.com/800x400?text=İlahiyat+Yurdu",
            "https://via.placeholder.com/800x400?text=Dershane",
            "https://via.placeholder.com/800x400?text=Mescit"
        ],
        features: [
            { icon: "fas fa-bed", text: "1-2 Kişilik Odalar" },
            { icon: "fas fa-wifi", text: "İnternet Erişimi" },
            { icon: "fas fa-utensils", text: "Helal Sertifikalı Yemek" },
            { icon: "fas fa-book-quran", text: "Dershane" },
            { icon: "fas fa-mosque", text: "Mescit" },
            { icon: "fas fa-shield-alt", text: "Güvenlik" },
            { icon: "fas fa-female", text: "Sadece Kız Öğrenci" },
            { icon: "fas fa-graduation-cap", text: "İlahiyat Öğrencileri" }
        ],
        aciklama: "Mehmet Akif Buharali İlahiyat Kız Öğrenci Yurdu, ilahiyat fakültesi kız öğrencilerine özel hizmet vermektedir. Dini eğitim ve yaşam tarzına uygun imkanlar sunmaktadır."
    },
    6: {
        title: "MİHRAPLI YÜKSEKÖĞRETİM KIZ ÖĞRENCİ YURDU",
        ilce: "Osmangazi",
        cinsiyet: "kiz",
        adres: "Osmangazi Mahallesi, Mihraplı Caddesi No:987, Bursa",
        telefon: "(0224) 678 90 12",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5!2d29.0610!3d40.1885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDExJzE4LjYiTiAyOcKwMDMnMzkuNiJF!5e0!3m2!1str!2str!4v1759409446783!5m2!1str!2str",
        images: [
            "/images/mihraplı.jpeg",
            "https://via.placeholder.com/800x400?text=Kız+Yurdu+Oda",
            "https://via.placeholder.com/800x400?text=Sosyal+Alan",
            "https://via.placeholder.com/800x400?text=Yemekhane"
        ],
        features: [
            { icon: "fas fa-bed", text: "2-3 Kişilik Odalar" },
            { icon: "fas fa-wifi", text: "Kablosuz İnternet" },
            { icon: "fas fa-utensils", text: "Ev Yemeği Tadında" },
            { icon: "fas fa-users", text: "Sosyal Aktivite Alanı" },
            { icon: "fas fa-shield-alt", text: "Güvenli Ortam" },
            { icon: "fas fa-tv", text: "Televizyon Salonu" },
            { icon: "fas fa-tshirt", text: "Çamaşır İmkanı" },
            { icon: "fas fa-parking", text: "Otopark" }
        ],
        aciklama: "Mihraplı Yükseköğretim Kız Öğrenci Yurdu, Osmangazi ilçesinde kız öğrencilerimize hizmet vermektedir. Aile ortamında sıcak ve güvenli bir yaşam alanı sunmaktadır."
    },
    7: {
        title: "YILDIRIM YÜKSEKÖĞRETİM KIZ ÖĞRENCİ KONUKEVİ",
        ilce: "Yıldırım",
        cinsiyet: "kiz",
        adres: "Yıldırım Mahallesi, Konukevi Sokak No:147, Bursa",
        telefon: "(0224) 789 01 23",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5!2d29.1134!3d40.2045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDEyJzE2LjIiTiAyOcKwMDYnNDguMiJF!5e0!3m2!1str!2str!4v1759409446783!5m2!1str!2str",
        images: [
            "/images/yıldırım.jpeg",
            "https://via.placeholder.com/800x400?text=Konukevi+Oda",
            "https://via.placeholder.com/800x400?text=Lobi",
            "https://via.placeholder.com/800x400?text=Bahçe"
        ],
        features: [
            { icon: "fas fa-bed", text: "Konforlu Odalar" },
            { icon: "fas fa-wifi", text: "WiFi Erişimi" },
            { icon: "fas fa-utensils", text: "Yemek Servisi" },
            { icon: "fas fa-concierge-bell", text: "Resepsiyon Hizmeti" },
            { icon: "fas fa-shield-alt", text: "Güvenlik" },
            { icon: "fas fa-coffee", text: "Kafeterya" },
            { icon: "fas fa-tree", text: "Yeşil Alan" },
            { icon: "fas fa-clock", text: "Esnek Konaklama" }
        ],
        aciklama: "Yıldırım Yükseköğretim Kız Öğrenci Konukevi, kısa ve uzun süreli konaklama ihtiyaçları için hizmet vermektedir. Konuk öğrenciler ve ziyaretçiler için ideal bir seçenektir."
    },
    8: {
        title: "ŞÜKRÜ EFENDİ ORTAÖĞRETİM ERKEK KURAN KURSU",
        ilce: "Nilüfer",
        cinsiyet: "erkek",
        adres: "Nilüfer Mahallesi, Kuran Kursu Sokak No:258, Bursa",
        telefon: "(0224) 890 12 34",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5!2d29.0634!3d40.2669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDE2JzAwLjgiTiAyOcKwMDMnNDguMiJF!5e0!3m2!1str!2str!4v1759409446783!5m2!1str!2str",
        images: [
            "/images/sükrü.jpeg",
            "https://via.placeholder.com/800x400?text=Kuran+Kursu+Sınıf",
            "https://via.placeholder.com/800x400?text=Mescit",
            "https://via.placeholder.com/800x400?text=Bahçe"
        ],
        features: [
            { icon: "fas fa-bed", text: "Yatılı Eğitim" },
            { icon: "fas fa-book-quran", text: "Kuran-ı Kerim Eğitimi" },
            { icon: "fas fa-utensils", text: "3 Öğün Yemek" },
            { icon: "fas fa-mosque", text: "Mescit" },
            { icon: "fas fa-chalkboard-teacher", text: "Deneyimli Hocalar" },
            { icon: "fas fa-shield-alt", text: "Güvenli Ortam" },
            { icon: "fas fa-male", text: "Sadece Erkek Öğrenci" },
            { icon: "fas fa-graduation-cap", text: "Ortaöğretim" }
        ],
        aciklama: "Şükrü Efendi Ortaöğretim Erkek Kuran Kursu, ortaöğretim çağındaki erkek öğrencilere Kuran-ı Kerim eğitimi vermektedir. Dini eğitim ve kişilik gelişimi odaklı bir program sunmaktadır."
    }
};

// URL'den yurt ID'sini al
function getYurtIdFromUrl() {
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

// Yurt detaylarını yükle
function loadYurtDetails(yurtId) {
    const yurt = yurtDetaylar[yurtId];
    
    if (!yurt) {
        // Yurt bulunamazsa yurtlar sayfasına yönlendir
        window.location.href = 'yurtlarimiz.html';
        return;
    }
    
    // Sayfa başlığını güncelle
    document.title = `${yurt.title} - İlim Yayma Cemiyeti`;
    
    // Breadcrumb güncelle
    document.getElementById('breadcrumb-title').textContent = yurt.title;
    
    // Yurt başlığı
    document.getElementById('yurt-title').textContent = yurt.title;
    
    // Ana görsel
    const mainImage = document.getElementById('main-image');
    mainImage.src = yurt.images[0];
    mainImage.alt = yurt.title;
    
    // Thumbnail görseller
    const thumbnailContainer = document.getElementById('thumbnail-images');
    thumbnailContainer.innerHTML = '';
    
    yurt.images.forEach((imageSrc, index) => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `${yurt.title} - Görsel ${index + 1}`;
        img.onclick = () => changeMainImage(imageSrc);
        
        if (index === 0) {
            img.classList.add('active');
        }
        
        thumbnailContainer.appendChild(img);
    });
    
    // Konum bilgileri
    document.getElementById('yurt-ilce').textContent = yurt.ilce;
    document.getElementById('yurt-adres').textContent = yurt.adres;
    document.getElementById('yurt-telefon').textContent = yurt.telefon;
    
    // Özellikler
    const featuresContainer = document.getElementById('features-grid');
    featuresContainer.innerHTML = '';
    
    yurt.features.forEach(feature => {
        const featureDiv = document.createElement('div');
        featureDiv.className = 'feature-item';
        featureDiv.innerHTML = `
            <i class="${feature.icon}"></i>
            <span>${feature.text}</span>
        `;
        featuresContainer.appendChild(featureDiv);
    });
    
    // Açıklama
    document.getElementById('yurt-aciklama').textContent = yurt.aciklama;
    
    // Harita yükle
    loadMap(yurt.mapUrl, yurt.title);
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    const yurtId = getYurtIdFromUrl();
    
    if (yurtId) {
        loadYurtDetails(yurtId);
    } else {
        // ID yoksa yurtlar sayfasına yönlendir
        window.location.href = 'yurtlarimiz.html';
    }
});