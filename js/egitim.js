// Eğitim merkezi verileri
const egitimMerkezleri = [
    {
        id: 1,
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

    // Merkezleri yeniden render et
    renderEgitimMerkezleri();

    return newMerkez;
}

// Sayfa yüklendiğinde eğitim merkezlerini render et
document.addEventListener('DOMContentLoaded', () => {
    // Eğitim merkezlerini render et
    renderEgitimMerkezleri();
});

// Örnek kullanım: Yeni eğitim merkezi ekleme
// addEgitimMerkezi({
//     title: "Yeni İlçe Eğitim Merkezi",
//     ilce: "yeniilce",
//     telefon: "(0224) 123 45 67",
//     email: "yeniilce@iyc.org.tr",
//     konum: "Yeni İlçe Mahallesi, Test Caddesi No:123"
// });