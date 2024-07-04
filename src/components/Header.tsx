"use client";
import Link from "next/link";
import styles from "@/components/Header.module.css";
import { useState } from "react";
import { HeaderContact } from "./HeaderContact";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "O NAS", href: "/about" },
  { label: "WESPRZYJ NAS", href: "/wsparcia" },
  // { label: "WYTWORY", href: "/wytwory" },
  { label: "PRACOWNIE", href: "/pracownie" },
  { label: "REKRUTACIA", href: "/rekrutacja" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <HeaderContact />

      <div className="header__menu container">
        <Link href="/" className="icon header__icon" />
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <ul className="nav__list">
            {navItems.map((link) => {
              //   const isActive = match?.pathname === link.href;

              return (
                <li className="nav-item" key={link.label}>
                  <Link href={link.href} className="nav-link">
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>
        {isMenuOpen && (
          <div className={styles.backdrop} onClick={toggleMenu}></div>
        )}
      </div>
    </header>
  );
};
