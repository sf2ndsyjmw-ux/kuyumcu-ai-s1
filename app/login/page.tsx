"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage(){
  const [show,setShow]=useState(false);
  return <main className="auth-page">
    <div className="auth-card">
      <div className="brand auth-brand"><div className="brand-mark"><span>◇</span></div><div><div className="brand-title">KUYUMCU AI</div><div className="brand-sub">SATIŞ ASİSTANI</div></div></div>
      <div className="kicker">GÜVENLİ GİRİŞ</div>
      <h1>Hoş geldiniz</h1>
      <p className="auth-muted">Kuyumcu AI S1 hesabınıza giriş yapın.</p>
      <label>E-posta adresi<input type="email" placeholder="ornek@kuyumcu.com" /></label>
      <label>Şifre<div className="password"><input type={show?"text":"password"} placeholder="••••••••"/><button type="button" onClick={()=>setShow(!show)}>{show?"Gizle":"Göster"}</button></div></label>
      <div className="auth-row"><label className="check"><input type="checkbox"/> Beni hatırla</label><Link href="/sifre-sifirlama">Şifremi unuttum</Link></div>
      <button className="gold-btn auth-submit">Giriş Yap</button>
      <div className="auth-bottom">Hesabınız yok mu? <Link href="/kayit">Kayıt Ol</Link></div>
    </div>
  </main>
}
