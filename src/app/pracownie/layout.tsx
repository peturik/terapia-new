"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function LayoutPracownie({
  children,
}: Readonly<{ children: ReactNode }>) {  
  const pathname = usePathname();

  return (
    <div className="main container" id="pracowni">
      <aside className="main__left-side">
        <nav className="nav">
          <ul className="nav__list">
            {navItem.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li className="nav-item" key={item.label}>
                  <Link 
                    href={item.href} 
                    className={isActive ? `nav-link nav-link-hover` : `nav-link`}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <div className="main__content">
        <div className="pracowni-container">{children}</div>
      </div>
    </div>
  );
}
