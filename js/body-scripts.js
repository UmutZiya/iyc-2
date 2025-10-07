// js/body-scripts.js

/**
 * Belirtilen URL'den bir script'i yükler ve yüklendiğinde bir callback fonksiyonu çalıştırır.
 * @param {string} src - Yüklenecek script'in URL'si.
 * @param {function} [callback] - Script yüklendikten sonra çalıştırılacak opsiyonel fonksiyon.
 */
function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    if (callback) {
        script.onload = callback;
    }
    document.body.appendChild(script);
}

// Bootstrap JS'i yükle
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js");

// AOS JS'i yükle ve yüklendikten sonra başlat
loadScript("https://unpkg.com/aos@2.3.1/dist/aos.js", () => {
    AOS.init({
        duration: 1000, // animasyon süresi (ms)
        once: true      // sadece ilk scroll'da animasyon çalışsın mı?
    });
});