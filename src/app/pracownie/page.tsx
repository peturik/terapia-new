import React from "react";
import Link from "next/link";

const navItem = [
  { label: "Pracownia Plastyczna", href: "/pracownie/plastyczna" },
  { label: "Pracownia komputerowo introligatorska", href: "komputerowa" },
  { label: "Pracownia Krawiecka", href: "/pracownie/krawiecka" },
  { label: "Pracownia Rzemiosł różnych", href: "/pracownie/rzemiosł" },
  { label: "Pracownia Gospodarstwa domowego", href: "/pracownie/gospodarstwa" },
  { label: "Psycholog", href: "/pracownie/psycholog" },
  { label: "Rewalidacja", href: "/pracownie/gospodarstwa" },
];

export default function Pracownie() {
  return <div className="pracownia">
    <h2> Uczestnicy Warsztatu Terapii Zajęciowej mają możliwość pracy w różnych pracowniach, gdzie zdobywają różnorodne umiejętności zawodowe. W każdej z tych pracowni uczestnicy zdobywają ogólne umiejętności potrzebne do podjęcia pracy, takie jak precyzja, cierpliwość, umiejętność pracy w zespole, organizacja pracy, kreatywność i samodzielność. Te umiejętności są nie tylko przydatne w ramach warsztatu, ale również mogą być wykorzystane w różnych zawodach i branżach.</h2>
</div>;
}
