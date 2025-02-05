document.addEventListener("DOMContentLoaded", () => {
    console.log("Popup script yüklendi."); // LOG 1

    try {
        window.trustedTypes.createPolicy("default", { createHTML: (input) => input });
    } catch (e) {
        console.warn("TrustedTypes policy zaten tanımlı, hata göz ardı ediliyor.");
    }

    const analyzeButton = document.getElementById("analyzeButton");
    if (!analyzeButton) {
        console.error("analyzeButton bulunamadı! HTML dosyanı kontrol et.");
        return;
    }

    console.log("Analyze butonu bulundu."); // LOG 2

    analyzeButton.addEventListener("click", async () => {
        console.log("Analyze butonuna tıklandı."); // LOG 3

        let text = document.getElementById("inputText").value;
        console.log("Girilen metin:", text); // LOG 4

        if (!text.trim()) {
            alert("Lütfen bir metin girin!");
            return;
        }

        try {
            console.log("API'ye POST isteği gönderiliyor..."); // LOG 5
            let response = await fetch("http://127.0.0.1:5001/analyze", { 
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text })
            });

            console.log("Sunucudan yanıt alındı, HTTP Status:", response.status); // LOG 6

            if (!response.ok) {
                let errorText = await response.text();
                throw new Error(`HTTP Error ${response.status}: ${errorText}`);
            }

            let data = await response.json();
            console.log("API Yanıtı:", data); // LOG 7
            document.getElementById("result").innerText = data.summary;
        } catch (error) {
            console.error("API Hatası:", error);
            alert(`Bir hata oluştu! Hata detayı: ${error.message}`);
        }
    });
});
