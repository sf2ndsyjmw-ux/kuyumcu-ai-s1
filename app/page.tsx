import Link from "next/link";

const navItems = [
  ["⌂", "Genel Bakış", "/"],
  ["✉", "Gelen Kutusu", "/gelen-kutusu", "12"],
  ["♙", "Müşteriler", "/musteriler"],
  ["ϟ", "Satış Fırsatları", "/satis-firsatlari", "8"],
  ["◇", "Ürünler", "/urunler"],
  ["▣", "Stok Yönetimi", "/stok"],
  ["₺", "Fiyat Motoru", "/fiyat-motoru"],
  ["✣", "Kampanyalar", "/kampanyalar"],
  ["▥", "Raporlar & Analitik", "/raporlar"],
  ["◈", "AI Center", "/ai-center"],
  ["◫", "Entegrasyonlar", "/entegrasyonlar"],
  ["⚙", "Ayarlar", "/ayarlar"]
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark"><span>◇</span></div>
        <div><div className="brand-title">KUYUMCU AI</div><div className="brand-sub">SATIŞ ASİSTANI</div></div>
      </div>
      <div className="store"><div className="store-badge">LG</div><div><div className="store-name">Luxe Gold</div><div className="store-sub">Kuyumculuk</div></div><span className="chev">⌄</span></div>
      <nav className="nav">
        {navItems.map((item) => <Link key={item[1]} href={item[2]} className={item[2] === "/" ? "active" : ""}><span className="icon">{item[0]}</span><span>{item[1]}</span>{item[3] ? <span className="badge">{item[3]}</span> : null}</Link>)}
      </nav>
      <div className="plan"><div className="eyebrow">MEVCUT PAKET</div><strong>Pro Gold</strong><div className="plan-row"><span>Sonraki fatura</span><span>20 Eylül 2026</span></div><div className="plan-row"><span>Kullanım</span><span>%68</span></div><div className="meter"><i /></div><button className="upgrade">Paketi Yükselt</button></div>
      <div className="user"><div className="avatar">👤</div><div><b>Ahmet Yılmaz</b><small>Yönetici</small></div><span className="chev">›</span></div>
    </aside>
  );
}

const metrics = [
  ["●", "Toplam Görüşme", "356", "↑ %18.5", "Dün: 301"],
  ["♙", "Yeni Müşteri", "42", "↑ %21.2", "Dün: 34"],
  ["◎", "Satış Fırsatı", "28", "↑ %27.3", "Dün: 22"],
  ["↗", "Web Yönlendirme", "63", "↑ %16.7", "Dün: 54"],
  ["✦", "AI Çözüm Oranı", "%78", "↑ %12.4", "Dün: %70"],
  ["◉", "İnsan Müdahalesi", "8", "↓ %11.1", "Dün: 9"]
];

function Metrics() {
  return <div className="metrics">{metrics.map((m) => <div className="card metric" key={m[1]}><div className="metric-top"><span className="metric-icon">{m[0]}</span><span>{m[1]}</span></div><div className="metric-value">{m[2]}</div><span className={m[3].startsWith("↓") ? "trend down" : "trend"}>{m[3]}</span><span className="previous">{m[4]}</span></div>)}</div>;
}

function Activity() {
  const heights = [28, 38, 52, 43, 70, 57, 82, 64, 96, 76, 88, 84, 91, 67, 84, 62, 49, 31, 22];
  return <div className="panel"><div className="panel-title">AI Asistan Aktivitesi <button className="ghost small">Günlük⌄</button></div><div className="panel-body"><div className="chart">{heights.map((h, i) => <i className="bar" style={{ height: `${h}%` }} key={i} />)}<div className="axis"><span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>24:00</span></div></div></div></div>;
}

function Funnel() {
  return <div className="panel"><div className="panel-title">Satış Hunisi</div><div className="panel-body"><div className="funnel-wrap"><div className="funnel"><i className="f1" /><i className="f2" /><i className="f3" /><i className="f4" /></div><div className="funnel-data"><div><strong>356</strong><span>Görüşme</span></div><div><strong>128</strong><span>Ürün Önerildi</span></div><div><strong>63</strong><span>Web'e Yönlendirildi</span></div><div><strong>28</strong><span>Satışa Dönüştü</span></div></div></div><div className="conversion">Dönüşüm Oranı: %7.9</div></div></div>;
}

const conversations = [
  ["🟢", "Elif Kaya", "Merhaba, pırlanta yüzük modelleri...", "14:32", "2"],
  ["🟣", "burcu_aksu", "Bu bilekliğin fiyatı nedir?", "14:28", "1"],
  ["🟢", "Mehmet Demir", "Kargom ne zaman gelir?", "14:22", ""],
  ["🟣", "seda_altun", "Sarı altın mı beyaz altın mı önerirsiniz?", "14:18", "3"],
  ["🟢", "Ayşe Yıldız", "Yüzük ölçümü nasıl alabilirim?", "14:10", ""]
];
function Conversations() {
  return <div className="panel"><div className="panel-title">Canlı Müşteri Görüşmeleri <span className="live">● 12</span></div><div className="panel-body list">{conversations.map((c) => <div className="item" key={c[1]}><span className="channel">{c[0]}</span><div className="item-main"><strong>{c[1]}</strong><p>{c[2]}</p></div><span className="item-time">{c[3]}</span>{c[4] ? <span className="item-count">{c[4]}</span> : null}</div>)}</div><Link className="all" href="/gelen-kutusu">Tümünü Gör →</Link></div>;
}

function LowerPanels() {
  return <div className="lower">
    <div className="panel"><div className="panel-title">İnsan Müdahalesi Gerekenler <span className="badge">5</span></div><div className="panel-body list"><div className="item"><span className="channel">🟢</span><div className="item-main"><strong>Hasan Kara <em>Şikayet</em></strong><p>Ürünüm istediğim gibi gelmedi...</p></div><span className="item-time">13:47</span></div><div className="item"><span className="channel">🟣</span><div className="item-main"><strong>zeynep_inan <em>İade</em></strong><p>Aldığım bilekliği iade etmek istiyorum.</p></div><span className="item-time">13:15</span></div><div className="item"><span className="channel">🟢</span><div className="item-main"><strong>Ahmet Yıldız <em>Kargo</em></strong><p>Kargom nerede, bilgi alabilir miyim?</p></div><span className="item-time">12:50</span></div></div><Link className="all" href="/gelen-kutusu">Tümünü Gör →</Link></div>
    <div className="panel"><div className="panel-title">Kargo & Operasyon Bildirimleri <span className="badge">4</span></div><div className="panel-body list"><div className="item"><span className="channel">🚚</span><div className="item-main"><strong>Kargo Gecikmesi</strong><p>3 sipariş gecikmiş durumda</p></div><span className="item-time">10:20</span></div><div className="item"><span className="channel">◷</span><div className="item-main"><strong>İade Talebi</strong><p>2 yeni iade talebi var</p></div><span className="item-time">09:15</span></div><div className="item"><span className="channel">▣</span><div className="item-main"><strong>Ödeme Bekleniyor</strong><p>5 sipariş ödemesi beklemede</p></div><span className="item-time">08:40</span></div></div><Link className="all" href="/stok">Tümünü Gör →</Link></div>
    <div className="panel"><div className="panel-title">Entegrasyon & Veri Senkronizasyonu</div><div className="panel-body list"><div className="item"><span className="channel">◉</span><div className="item-main"><strong>WhatsApp Business</strong><p>Bağlı · Aktif</p></div><span className="ok">✓</span></div><div className="item"><span className="channel">◎</span><div className="item-main"><strong>Instagram</strong><p>Bağlı · Aktif</p></div><span className="ok">✓</span></div><div className="item"><span className="channel">◉</span><div className="item-main"><strong>Web Sitesi</strong><p>Son senkronizasyon: 5 dk önce</p></div><span className="ok">✓</span></div><div className="item"><span className="channel">▣</span><div className="item-main"><strong>Ürün Verileri</strong><p>Son senkronizasyon: 5 dk önce</p></div><span className="ok">✓</span></div></div><Link className="all" href="/entegrasyonlar">Tümünü Gör →</Link></div>
    <div className="panel ai-summary"><div className="panel-title ai-title">◉ AI Asistan Özeti</div><div className="panel-body"><div className="summary-big">Merhaba Ahmet! 👋</div><p>Bugün 356 görüşme gerçekleştirdim. 28 satış fırsatı yakaladım ve 63 müşteriyi web sitesine yönlendirdim.</p><div className="summary-row"><span>Öğrenilen Yeni Bilgi</span><strong>24</strong></div><div className="summary-row"><span>Otomatik Yanıtlanan</span><strong>256</strong></div><div className="summary-row"><span>İnsan Devredilen</span><strong>52</strong></div><div className="summary-row"><span>Satışa Dönüşen</span><strong>28</strong></div></div><Link className="all" href="/ai-center">AI Center'a Git →</Link></div>
  </div>;
}

export default function Home() {
  return <div className="app"><Sidebar /><main className="main"><header className="topbar"><button className="gold-btn">＋ Hızlı İşlem</button><button className="ghost">ⓘ Yardım</button><button className="ghost">♧</button></header><section className="content"><div className="head"><div><div className="kicker">GENEL BAKIŞ</div><h1>Günaydın, Ahmet Bey 👋</h1><p>Bugünkü performansınızı ve AI satış asistanınızın aktivitelerini takip edin.</p></div><div className="filters"><button className="filter">▣ 1 Eylül 2026⌄</button><button className="filter">☷ Filtrele</button></div></div><Metrics /><div className="grid"><Activity /><Funnel /><Conversations /></div><LowerPanels /><div className="footer"><span>🔒 Tüm verileriniz güvende. ISO 27001 standartlarına uygun altyapı ile korunmaktadır.</span><span>Gizlilik Politikası　•　Kullanım Koşulları　•　Destek</span></div></section></main></div>;
}
