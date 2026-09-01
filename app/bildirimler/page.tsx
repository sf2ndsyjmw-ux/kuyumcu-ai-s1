import Link from "next/link";

const notifications = [
  ["Acil Destek", "Hasan Kara görüşmesinde yetkili personel desteği gerekiyor.", "13:47"],
  ["Satış Fırsatı", "Elif Kaya için yüksek satın alma niyeti tespit edildi.", "13:32"],
  ["Operasyon", "3 siparişte kargo gecikmesi bulunuyor.", "10:20"],
  ["Mesaj", "12 okunmamış müşteri mesajınız var.", "14:32"],
  ["Entegrasyon", "Web sitesi veri senkronizasyonu 5 dakika önce tamamlandı.", "14:25"]
];

export default function Notifications(){return <main className="section-page content" style={{minHeight:"100vh",maxWidth:1250,margin:"0 auto"}}><div className="head"><div><div className="kicker">BİLDİRİMLER</div><h1>Bildirimler</h1><p>Satış, mesaj, operasyon, AI ve sistem uyarılarınızı tek merkezden takip edin.</p></div><Link className="filter" href="/">← Ana Sayfa</Link></div><div className="panel"><div className="panel-title"><span>Tüm Bildirimler</span><span className="badge">7</span></div><div className="panel-body"><div className="list">{notifications.map(([cat,text,time])=><div className="item" key={cat+time}><span className="channel">●</span><div className="item-main"><strong>{cat}</strong><p>{text}</p></div><span className="item-time">{time}</span></div>)}</div></div></div></main>}
