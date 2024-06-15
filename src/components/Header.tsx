"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  // { label: "Home", href: "/" },
  { label: "O NAS", href: "/about" },
  { label: "WESPRZYJ NAS", href: "/wsparcia" },
  { label: "WYTWORY", href: "/wytwory" },
  { label: "PRACOWNIE", href: "/pracownie" },
  { label: "REKRUTACIA", href: "/rekrutacja" },
];

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <div className="header__contacts">
        <ul className="header__contacts-list container">
          <li className="header__contact">
            <a
              href="https://www.google.com/maps/place/Ul.+Truskawkowa+4,+24-100+G%C3%B3ra+Pu%C5%82awska/@51.3991545,21.9293073,21z/data=!4m6!3m5!1s0x47227934c16031c1:0xf19cdb62d7eaeb30!8m2!3d51.3991645!4d21.9293896!16s%2Fg%2F11srbbn29x?authuser=0&entry=ttu"
              className="header__contact-link"
            >
              🚩 ul. Truskawkowa 4, 31-985 Kraków (Krakow-Nowa-Huta)
            </a>
          </li>
          <li className="header__contact">
            <a href="tel:+126810477" className="header__contact-link">
              ☎ (12) 681 04 77
            </a>
          </li>
          <li className="header__contact">
            <a
              href="mailto:wtztpdtruskawkowa4@gmail.com"
              className="header__contact-link"
            >
              ✉ wtztpdtruskawkowa4@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div className="header__menu container">
        <Link href="/" className="icon header__icon" />
        <nav className="nav">
          <ul className="nav__list">
            {navItems.map((link) => {
              const isActive = pathname === link.href;
              console.log(isActive);
              return (
                <li className="nav-item" key={link.label}>
                  <Link
                    href={link.href}
                    className={isActive ? `nav-link-hover` : `nav-link`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
