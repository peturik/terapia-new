import React, { ReactNode } from "react";
import Link from "next/link";

const navItem = [
  { label: "Pracownia Plastyczna", href: "/pracownie/plastyczna" },
  {
    label: "Pracownia komputerowo introligatorska",
    href: "/pracownie/komputerowa",
  },
  { label: "Pracownia Krawiecka", href: "/pracownie/krawiecka" },
  { label: "Pracownia Rzemiosł różnych", href: "/pracownie/rzemiosl" },
  { label: "Pracownia Gospodarstwa domowego", href: "/pracownie/gospodarstwa" },
  { label: "Psycholog", href: "/pracownie/psycholog" },
  { label: "Rewalidacja", href: "/pracownie/rewalidacja" },
];

export default function layoutPracownie({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="main container">
      <aside className="main__left-side">
        <div className="main__img main__img--logo" />
        <div className="main__img main__img--1" />
        <div className="main__img main__img--2" />
        <div className="main__img main__img--3" />
        <div className="main__img main__img--4" />
        <div className="main__img main__img--5" />
        <div className="main__img main__img--6" />
      </aside>
      <div className="main__content">
        <nav className="nav" id="nav--pracowni">
          <ul className="nav__list">
            {navItem.map((item) => {
              return (
                <li className="nav-item" key={item.label}>
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="pracowni-container">{children}</div>
      </div>
    </div>
  );
}
