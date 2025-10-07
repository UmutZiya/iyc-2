// Eğitim merkezi verileri
const egitimMerkezleri = [
    {
        id: 1,
        image: "/images/buhara-main.jpg",
        title: "BUHARA OKUMA EVİ",
        ilce: "İnegöl",
        telefon: "0 (545) 307-4661",
        email: "buharaiyem@iyc.org.tr",
        konum: "Burhaniye Mah. Yeşil Bursa Cad. No:1 İnegöl/Bursa/Türkiye",
        link: "egitim-merkezi-single-page.html?id=1"
    },
    {
        id: 2,
        image: "/images/izniki-main.jpg",
        title: "İZNİK KİTAP-KAHVE",
        ilce: "İznik",
        telefon: "0 (544) 492-2606",
        email: "iznik@iyc.org.tr",
        konum: "Mustafa Kemal Paşa Mah. Göl Sokak No:19 İznik/Bursa/Türkiye",
        link: "egitim-merkezi-single-page.html?id=2"
    },
    {
        id: 3,
        image: "/images/nuribey-main.jpg",
        title: "NURİBEY EĞİTİM MERKEZİ",
        ilce: "Osmangazi",
        telefon: "0 (224) 222-0810",
        email: "nuribeyiyem@iyc.org.tr",
        konum: "İbrahim Paşa Mh. 2.Karabaşı Veli Sk. No:1 Osmangazi/Bursa/Türkiye",
        link: "egitim-merkezi-single-page.html?id=3"
    }
];

// Eğitim merkezlerini ekrana yazdırma fonksiyonu
function renderEgitimMerkezleri(filteredMerkezler = egitimMerkezleri) {
    const merkezlerGrid = document.getElementById('egitim-merkezleri-grid');
    merkezlerGrid.innerHTML = '';

    if (filteredMerkezler.length === 0) {
        merkezlerGrid.innerHTML = '<div class="no-results">Seçtiğiniz kriterlere uygun eğitim merkezi bulunamadı.</div>';
        return;
    }

    filteredMerkezler.forEach(merkez => {
        const merkezCard = document.createElement('div');
        merkezCard.className = 'egitim-merkezi-card';

        merkezCard.innerHTML = `
            <a href="${merkez.link}">
                <img src="${merkez.image}" alt="${merkez.title}" class="egitim-merkezi-image">
                <div class="egitim-merkezi-info">
                    <h3 class="egitim-merkezi-title">${merkez.title}</h3>
                    <div class="egitim-merkezi-details">
                        <div class="egitim-merkezi-contact">
                            <i class="fas fa-phone"></i>
                            <span>${merkez.telefon}</span>
                        </div>
                        <div class="egitim-merkezi-contact">
                            <i class="fas fa-envelope"></i>
                            <span>${merkez.email}</span>
                        </div>
                        <div class="egitim-merkezi-contact">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${merkez.konum}</span>
                        </div>
                        <span class="egitim-merkezi-ilce">${getIlceName(merkez.ilce)}</span>
                    </div>
                </div>
            </a>
        `;

        merkezlerGrid.appendChild(merkezCard);
    });
}

// İlçe kodunu isme çevirme fonksiyonu
function getIlceName(ilceCode) {
    const ilceMap = {
        'nilüfer': 'Nilüfer',
        'osmangazi': 'Osmangazi',
        'yıldırım': 'Yıldırım',
        'mudanya': 'Mudanya',
        'gemlik': 'Gemlik'
    };

    return ilceMap[ilceCode] || capitalizeFirst(ilceCode);
}

// İlk harfi büyük yapma fonksiyonu
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Benzersiz ilçeleri al ve select'i güncelle
function updateIlceFilter() {
    const uniqueIlceler = [...new Set(egitimMerkezleri.map(merkez => merkez.ilce))];
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

// Yeni eğitim merkezi ekleme fonksiyonu
function addEgitimMerkezi(merkezData) {
    // Yeni ID oluştur
    const newId = Math.max(...egitimMerkezleri.map(m => m.id)) + 1;

    // Merkez verisini ekle
    const newMerkez = {
        id: newId,
        image: merkezData.image || "/images/egitim-merkezi-default.jpg",
        title: merkezData.title,
        ilce: merkezData.ilce.toLowerCase(),
        telefon: merkezData.telefon,
        email: merkezData.email,
        konum: merkezData.konum,
        galeri: merkezData.galeri || [merkezData.image],
        link: merkezData.link || `egitim-merkezi-single-page.html?id=${newId}`
    };

    egitimMerkezleri.push(newMerkez);

    // İlçe filtresini güncelle
    updateIlceFilter();

    // Merkezleri yeniden render et
    filterEgitimMerkezleri();

    return newMerkez;
}

// Filtreleme fonksiyonu
function filterEgitimMerkezleri() {
    const selectedIlce = document.getElementById('ilce-filter').value;

    const filteredMerkezler = egitimMerkezleri.filter(merkez => {
        const ilceMatch = selectedIlce === 'hepsi' || merkez.ilce === selectedIlce;
        return ilceMatch;
    });

    renderEgitimMerkezleri(filteredMerkezler);
}

// Sayfa yüklendiğinde eğitim merkezlerini render et
document.addEventListener('DOMContentLoaded', () => {
    // İlçe filtresini güncelle
    updateIlceFilter();

    // Eğitim merkezlerini render et
    renderEgitimMerkezleri();

    // Filtre değişikliklerini dinle
    document.getElementById('ilce-filter').addEventListener('change', filterEgitimMerkezleri);
});

// Örnek kullanım: Yeni eğitim merkezi ekleme
// addEgitimMerkezi({
//     title: "Yeni İlçe Eğitim Merkezi",
//     ilce: "yeniilce",
//     telefon: "(0224) 123 45 67",
//     email: "yeniilce@iyc.org.tr",
//     konum: "Yeni İlçe Mahallesi, Test Caddesi No:123"
// });