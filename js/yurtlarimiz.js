// Yurt verileri
const yurtlar = [
    {
        id: 1,
        image: "/images/gevher.jpeg",
        title: "GEVHER SÖNMEZ YÜKSEKÖĞRETİM ERKEK ÖĞRENCİ YURDU",
        ilce: "nilüfer",
        cinsiyet: "erkek",
        link: "yurt-single-page.html?id=1"
    },
    {
        id: 2,
        image: "/images/saban-guzeler.jpeg",
        title: "ŞABAN GÜZELER YÜKSEKÖĞRETİM ERKEK ÖĞRENCİ YURDU",
        ilce: "osmangazi",
        cinsiyet: "erkek",
        link: "yurt-single-page.html?id=2"
    },
    {
        id: 3,
        image: "/images/tevfik.jpeg",
        title: "TEVFİK ÇUKA YÜKSEKÖĞRETİM ERKEK ÖĞRENCİ YURDU",
        ilce: "osmangazi",
        cinsiyet: "erkek",
        link: "yurt-single-page.html?id=3"
    },
    {
        id: 4,
        image: "/images/abdurrahman.jpeg",
        title: "ABDURRAHMAN TUTAN YÜKSEKÖĞRETİM KIZ ÖĞRENCİ YURDU",
        ilce: "nilüfer",
        cinsiyet: "erkek",
        link: "yurt-single-page.html?id=4"
    },
    {
        id: 5,
        image: "/images/mehmetakif.jpeg",
        title: "MEHMET AKİF BUHARALI İLAHİYAT KIZ ÖĞRENCİ YURDU",
        ilce: "nilüfer",
        cinsiyet: "kiz",
        link: "yurt-single-page.html?id=5"
    },
    {
        id: 6,
        image: "/images/mihraplı.jpeg",
        title: "MİHRAPLI YÜKSEKÖĞRETİM KIZ ÖĞRENCİ YURDU",
        ilce: "osmangazi",
        cinsiyet: "kiz",
        link: "yurt-single-page.html?id=6"
    },
    {
        id: 7,
        image: "/images/yıldırım.jpeg",
        title: "YILDIRIM YÜKSEKÖĞRETİM KIZ ÖĞRENCİ KONUKEVİ",
        ilce: "yıldırım",
        cinsiyet: "kız",
        link: "yurt-single-page.html?id=7"
    },
    {
        id: 7,
        image: "/images/sükrü.jpeg",
        title: "ŞÜKRÜ EFENDİ ORTAÖĞRETİM ERKEK KURAN KURSU",
        ilce: "nilüfer",
        cinsiyet: "erkek",
        link: "yurt-single-page.html?id=7"
    }
];

// Yurtları ekrana yazdırma fonksiyonu
function renderYurtlar(filteredYurtlar = yurtlar) {
    const yurtlarGrid = document.getElementById('yurtlar-grid');
    yurtlarGrid.innerHTML = '';

    if (filteredYurtlar.length === 0) {
        yurtlarGrid.innerHTML = '<div class="no-results">Seçtiğiniz kriterlere uygun yurt bulunamadı.</div>';
        return;
    }

    filteredYurtlar.forEach(yurt => {
        const yurtCard = document.createElement('div');
        yurtCard.className = 'yurt-card';

        yurtCard.innerHTML = `
                    <a href="${yurt.link}">
                        <img src="${yurt.image}" alt="${yurt.title}" class="yurt-image">
                        <div class="yurt-info">
                            <h3 class="yurt-title">${yurt.title}</h3>
                            <div class="yurt-details">
                                <span>${yurt.cinsiyet === 'kiz' ? 'Kız Yurdu' : 'Erkek Yurdu'}</span>
                                <span class="yurt-ilce">${getIlceName(yurt.ilce)}</span>
                            </div>
                        </div>
                    </a>
                `;

        yurtlarGrid.appendChild(yurtCard);
    });
}

// İlçe kodunu isme çevirme fonksiyonu
function getIlceName(ilceCode) {
    const ilceMap = {
        'merkez': 'Merkez',
        'atakum': 'Atakum',
        'ilkadim': 'İlkadım',
        'canik': 'Canik',
    };

    return ilceMap[ilceCode] || capitalizeFirst(ilceCode);
}

// İlk harfi büyük yapma fonksiyonu
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Benzersiz ilçeleri al ve select'i güncelle
function updateIlceFilter() {
    const uniqueIlceler = [...new Set(yurtlar.map(yurt => yurt.ilce))];
    const ilceFilter = document.getElementById('ilce-filter');
    
    // Mevcut seçili değeri sakla
    const currentValue = ilceFilter.value;
    
    // Select'i temizle
    ilceFilter.innerHTML = '';
    
    // "Tüm İlçeler" seçeneğini ekle
    const allOption = document.createElement('option');
    allOption.value = 'hepsi';
    allOption.textContent = 'Tüm İlçeler';
    ilceFilter.appendChild(allOption);
    
    // Benzersiz ilçeleri alfabetik sıraya koy ve ekle
    uniqueIlceler.sort().forEach(ilce => {
        const option = document.createElement('option');
        option.value = ilce;
        option.textContent = getIlceName(ilce);
        ilceFilter.appendChild(option);
    });
    
    // Eğer önceki seçili değer hala mevcutsa, onu seç
    if (currentValue && [...ilceFilter.options].some(opt => opt.value === currentValue)) {
        ilceFilter.value = currentValue;
    }
}

// Yeni yurt ekleme fonksiyonu
function addYurt(yurtData) {
    // Yeni ID oluştur
    const newId = Math.max(...yurtlar.map(y => y.id)) + 1;
    
    // Yurt verisini ekle
    const newYurt = {
        id: newId,
        image: yurtData.image || "https://via.placeholder.com/300x200?text=Yurt+" + newId,
        title: yurtData.title,
        ilce: yurtData.ilce.toLowerCase(),
        cinsiyet: yurtData.cinsiyet,
        link: yurtData.link || `yurt-single-page.html?id=${newId}`
    };
    
    yurtlar.push(newYurt);
    
    // İlçe filtresini güncelle
    updateIlceFilter();
    
    // Yurtları yeniden render et
    filterYurtlar();
    
    return newYurt;
}

// Filtreleme fonksiyonu
function filterYurtlar() {
    const selectedIlce = document.getElementById('ilce-filter').value;
    const selectedCinsiyet = document.querySelector('input[name="cinsiyet"]:checked').value;

    const filteredYurtlar = yurtlar.filter(yurt => {
        const ilceMatch = selectedIlce === 'hepsi' || yurt.ilce === selectedIlce;
        const cinsiyetMatch = selectedCinsiyet === 'hepsi' || yurt.cinsiyet === selectedCinsiyet;

        return ilceMatch && cinsiyetMatch;
    });

    renderYurtlar(filteredYurtlar);
}

// Sayfa yüklendiğinde yurtları render et
document.addEventListener('DOMContentLoaded', () => {
    // İlçe filtresini güncelle
    updateIlceFilter();
    
    // Yurtları render et
    renderYurtlar();

    // Filtre değişikliklerini dinle
    document.getElementById('ilce-filter').addEventListener('change', filterYurtlar);
    document.querySelectorAll('input[name="cinsiyet"]').forEach(radio => {
        radio.addEventListener('change', filterYurtlar);
    });
});

// Örnek kullanım: Yeni yurt ekleme
// addYurt({
//     title: "Yeni İlçe Erkek Yurdu",
//     ilce: "yeniilce",
//     cinsiyet: "erkek"
// });