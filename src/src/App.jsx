import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="app">

      <header className="header">
        <div>
          <h1>İDDAA ORAN ANALİZ SİSTEMİ</h1>
          <p>Tarihsel oran ve sonuç karşılaştırma platformu</p>
        </div>
      </header>

      <nav className="nav">
        <button
          className={activeTab === "dashboard" ? "active" : ""}
          onClick={() => setActiveTab("dashboard")}
        >
          Günün Maçları
        </button>

        <button
          className={activeTab === "history" ? "active" : ""}
          onClick={() => setActiveTab("history")}
        >
          Tarihsel Veriler
        </button>

        <button
          className={activeTab === "analysis" ? "active" : ""}
          onClick={() => setActiveTab("analysis")}
        >
          Oran Analizi
        </button>

        <button
          className={activeTab === "backtest" ? "active" : ""}
          onClick={() => setActiveTab("backtest")}
        >
          Backtest
        </button>
      </nav>

      <main className="content">

        {activeTab === "dashboard" && (
          <section>
            <div className="pageTitle">
              <div>
                <h2>Günün Maçları</h2>
                <p>
                  Günün maçlarını ve oranlarını tarihsel verilerle
                  karşılaştıracağız.
                </p>
              </div>

              <button className="primaryButton">
                Günün Maçlarını Getir
              </button>
            </div>

            <div className="emptyState">
              <div className="emptyIcon">⚽</div>

              <h3>Henüz maç verisi yok</h3>

              <p>
                Bir sonraki aşamada canlı maç ve oran veri kaynağını
                bağlayacağız.
              </p>
            </div>
          </section>
        )}

        {activeTab === "history" && (
          <section>
            <div className="pageTitle">
              <div>
                <h2>Tarihsel Veriler</h2>
                <p>
                  Son 5-6 yıllık maç, oran ve sonuç verileri burada
                  tutulacak.
                </p>
              </div>
            </div>

            <div className="infoGrid">

              <div className="infoCard">
                <span>📅</span>
                <strong>Maç Tarihi</strong>
                <p>Her maçın oynandığı tarih.</p>
              </div>

              <div className="infoCard">
                <span>⚽</span>
                <strong>Maç Sonucu</strong>
                <p>1 - X - 2 ve gerçek skor.</p>
              </div>

              <div className="infoCard">
                <span>📊</span>
                <strong>Bahis Oranları</strong>
                <p>MS, KG, Alt/Üst ve diğer marketler.</p>
              </div>

              <div className="infoCard">
                <span>🔎</span>
                <strong>Tam Eşleşme</strong>
                <p>Aynı oran kombinasyonlarını bulma.</p>
              </div>

            </div>
          </section>
        )}

        {activeTab === "analysis" && (
          <section>
            <div className="pageTitle">
              <div>
                <h2>Oran Analizi</h2>
                <p>
                  Bugünkü oranların geçmişteki birebir eşleşmelerini
                  inceleyeceğiz.
                </p>
              </div>
            </div>

            <div className="emptyState">
              <div className="emptyIcon">🔎</div>

              <h3>Tam eşleşme motoru hazırlanıyor</h3>

              <p>
                Örneğin 1.85 / 3.40 / 3.10 oran kombinasyonu geçmişte
                kaç kez oluşmuş, hangi sonuçlarla bitmiş göreceğiz.
              </p>
            </div>
          </section>
        )}

        {activeTab === "backtest" && (
          <section>
            <div className="pageTitle">
              <div>
                <h2>Backtest</h2>
                <p>
                  Sistemin geçmiş veriler üzerinde nasıl sonuç verdiğini
                  test edeceğiz.
                </p>
              </div>
            </div>

            <div className="emptyState">
              <div className="emptyIcon">📈</div>

              <h3>Backtest motoru henüz aktif değil</h3>

              <p>
                Önce tarihsel veri tabanını oluşturacağız.
              </p>
            </div>
          </section>
        )}

      </main>

      <footer className="footer">
        bykr0g · Tarihsel İddaa Oran ve Sonuç Analiz Sistemi
      </footer>

    </div>
  );
}

export default App;
