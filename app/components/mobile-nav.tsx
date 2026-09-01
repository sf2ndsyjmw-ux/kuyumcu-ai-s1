import Link from "next/link";

const items = [
  ["⌂", "Genel Bakış", "/"],
  ["✉", "Gelen Kutusu", "/gelen-kutusu"],
  ["＋", "Hızlı İşlem", "/hizli-islem"],
  ["♙", "Müşteriler", "/musteriler"],
  ["⋯", "Daha Fazla", "/ayarlar"],
];

export default function MobileNav() {
  return <nav className="mobile-nav">{items.map(([icon, label, href], i) => <Link href={href} key={label} className={i === 2 ? "mobile-action" : ""}><span>{icon}</span><small>{label}</small></Link>)}</nav>;
}
