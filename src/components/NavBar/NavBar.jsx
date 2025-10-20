"use client"
import { useEffect, useRef, useState } from "react";
import "./navbar.css";
import Link from "next/link";
import Toggle from "../Toggle/Toggle";

const NavBar = () => {
  const navbarRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbarRef.current.classList.add("fixed");
      } else {
        navbarRef.current.classList.remove("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = (e) => {
    e.preventDefault();
    const dropdownContent = e.currentTarget.nextElementSibling;
    dropdownContent.classList.toggle("show");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar ${menuOpen ? "open" : ""}`} ref={navbarRef}>
      <div className="navigation">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰ 
        </button>
        <div className={`menu-items ${menuOpen ? "show" : ""}`}>
          <div className="btn">
            <Link href="/">Beranda</Link>
          </div>
          <div className="dropdown"  >
            <div className="dropbtn" onClick={toggleDropdown}>Profil</div>
            <div className="dropdown-content">
              <Link href="/sejarah">Sejarah</Link>
              <Link href="/visimisi">Visi dan Misi</Link>
              <Link href="/tujuansasaran">Tujuan dan Sasaran</Link>
              <Link href="/strukturorganisasi">Struktur Organisasi</Link>
              <Link href="/uraiantugas">Uraian Tugas</Link>
              <Link href="/kegiatan">Kegiatan</Link>
              <Link href="/jadwallayanan">Jadwal Layanan</Link>
              <Link href="/staf">Staf Perpustakaan</Link>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn" onClick={toggleDropdown}>Layanan</div>
            <div className="dropdown-content">
              <Link href="/ebook">E-Book</Link>
              <Link href="/keanggotaan">Keanggotaan</Link>
              <Link href="/sirkulasi">Sirkulasi</Link>
              <Link href="/referensi">Referensi</Link>
              <a href="https://ojs.unimal.ac.id/">Akses Jurnal</a>
            </div>
          </div>
          <div className="btn">
            <Link href="/berita">Berita</Link>
          </div>
          <div className="dropdown">
            <div className="dropbtn" onClick={toggleDropdown}>Dokumen</div>
            <div className="dropdown-content">
              <Link href="/renstra">Renstra</Link>
              <Link href="/kebijakan">Kebijakan</Link>
              <Link href="/peraturan">Peraturan</Link>
              <Link href="/sop">SOP</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="toggle">
        <Toggle />
      </div>
    </div>
  );
};

export default NavBar;
