import Link from "next/link";

const modules: Record<string,string>={
  "gelen-kutusu":"Gelen Kutusu","musteriler":"Müşteriler","satis-firsatlari":"Satış Fırsatları","urunler":"Ürünler","stok":"Stok Yönetimi","fiyat-motoru":"Fiyat Motoru","kampanyalar":"Kampanyalar","raporlar":"Raporlar & Analitik","ai-center":"AI Center","entegrasyonlar":"Entegrasyonlar","ayarlar":"Ayarlar"
};
const nav=[
  ["⌂","Genel Bakış","/"],["✉","Gelen Kutusu","/gelen-kutusu"],["♙","Müşteriler","/musteriler"],["ϟ","Satış Fırsatları","/satis-firsatlari"],["◇","Ürünler","/urunler"],["▣","Stok Yönetimi","/stok"],["₺","Fiyat Motoru","/fiyat-motoru"],["✣","Kampanyalar","/kampanyalar"],["▥","Raporlar & Analitik","/raporlar"],["◈","AI Center","/ai-center"],["◫","Entegrasyonlar","/entegrasyonlar"],["⚙","Ayarlar","/ayarlar"]
];
export default async function Section({params}:{params:Promise<{section:string}>}){
  const {section}=await params; const title=modules[section]??"Kuyumcu AI";
  return <div className="app"><aside className="sidebar"><div className="brand"><div className="brand-mark"><span>◇</span></div><div><div className="brand-title">KUYUMCU AI</div><div className="brand-sub">SATIŞ ASİSTANI</div></div></div><div className="store"><div className="store-badge">LG</div><div><div className="store-name">Luxe Gold</div><div className="store-sub">Kuyumculuk</div></div></div><nav className="nav">{nav.map(([icon,label,href])=><Link key={label} href={href} className={href===`/${section}`?"active":""}><span className="icon">{icon}</span><span>{label}</span></Link>)}</nav></aside><main className="main"><header className="topbar"><Link className="gold-btn" href="/">← Genel Bakış</Link></header><section className="content section-page"><div className="kicker">KUYUMCU AI S1</div><h1>{title}</h1><p>{title} modülü S1 tasarım sistemine bağlı temiz çalışma alanıdır.</p><div className="placeholder"><strong>{title}</strong><p>Bu ekranın fonksiyonları ve gerçek verileri sonraki geliştirme adımında aynı görsel dil korunarak eklenecek. Kritik gram, ayar, stok ve fiyat bilgileri yalnızca kuyumcu tarafından girilen/onaylanan veriden alınacaktır.</p></div></section></main></div>
}