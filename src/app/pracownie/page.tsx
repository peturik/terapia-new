import React from "react";

export default function Pracownie() {
  return (
    <main className="main container site-about">
      <div className="main__content">
        <nav className="nav" id="nav--pracowni">
          <ul className="nav__list">
            <li className="nav-item">
              <a href="#plastyczna" className="nav-link">
                Pracownia Plastyczna
              </a>
            </li>
            <li className="nav-item">
              <a href="#komputerowa" className="nav-link">
                Pracownia komputerowo introligatorska
              </a>
            </li>
            <li className="nav-item">
              <a href="#krawiecka" className="nav-link">
                Pracownia Krawiecka
              </a>
            </li>
            <li className="nav-item">
              <a href="#rzemiosł" className="nav-link">
                Pracownia Rzemiosł różnych
              </a>
            </li>
            <li className="nav-item">
              <a href="#gospodarstwa" className="nav-link">
                Pracownia Gospodarstwa domowego
              </a>
            </li>
            <li className="nav-item">
              <a href="#psycholog" className="nav-link">
                Psycholog
              </a>
            </li>
            <li className="nav-item">
              <a href="#gospodarstwa" className="nav-link">
                Rewalidacja
              </a>
            </li>
          </ul>
        </nav>

        <div className="pracowni-container">
          <div className="pracownia" id="plastyczna">
            <p>
              <b>Pracownia plastyczna</b>: Pracownia plastyczna to miejsce,
              gdzie uczestnicy rozwijają swoje umiejętności artystyczne i
              twórcze. Nauka różnych technik malarskich, rysunku, rzeźby,
              decoupage'u i innych form plastycznych pozwala zdobywać
              umiejętności w zakresie kompozycji, kolorystyki, precyzji i
              wyobraźni artystycznej. Pracownia plastyczna w Warsztatach Terapii
              Zajęciowej daje uczestnikom możliwość rehabilitacji poprzez
              sztukę. Pracownia plastyczna jest ważna dla rozwoju kreatywności i
              wyobraźni. Pomaga rozwijać umiejętności i talenty.{" "}
            </p>
            <img
              className="pracownia__img"
              src="photo\plastyczna.jpg"
              alt="plastyczna.1"
            />
          </div>
          <div className="pracownia" id="komputerowa">
            <p>
              <b>Pracownia komputerowo introligatorska</b>: W tej pracowni
              uczestnicy uczą się obróbki graficznej, składu i przygotowania
              materiałów do druku. Poznają obsługę programów graficznych,
              skanowania, projektowania materiałów reklamowych, jak ulotki,
              plakaty, wizytówki oraz wykonują kartki okolicznościowe. Pracownia
              komputerowo-introligatorska w warsztacie terapii zajęciowej jest
              miejscem, w którym osoby z niepełnosprawnością mają możliwość
              rozwijania umiejętności związanych z obsługą komputera oraz
              introligatorstwem. Pracownia ta zapewnia wsparcie i narzędzia
              potrzebne do nauki różnych technik introligatorskich oraz
              wykorzystania komputera do projektowania i tworzenia różnorodnych
              materiałów.
            </p>
            <img
              className="pracownia__img"
              src="photo\komputerowa.jpg"
              alt="komputerowa.1"
            />
          </div>

          <div className="pracownia" id="krawiecka">
            <p>
              <b>Pracownia krawiecka</b>: Uczestnicy tej pracowni zdobywają
              umiejętności związane z krawiectwem i szyciem. Uczą się m.in.
              obsługi maszyn do szycia, krojenia materiałów, naprawy i szycia
              odzieży. Pracownia krawiecka jest wyposażona w maszyny do szycia,
              stoliki do cięcia materiałów, żelazka, deski do prasowania oraz
              różne narzędzia krawieckie, takie jak nożyczki, szpilki, nici,
              guziki, suwaki itp. Wszystko to umożliwia osobom korzystającym z
              warsztatu wykonywanie różnych zadań związanych z krawiectwem.
            </p>
            <img
              className="pracownia__img"
              src="photo\krawiecka.jpg"
              alt="krawiecka.1"
            />
          </div>

          <div className="pracownia" id="rzemiosł">
            <p>
              <b>Pracownia rzemiosł różnych</b>: uczestnicy mają możliwość
              doskonalenia umiejętności rzemieślniczych, takich jak szlifowanie
              drewnianych elementów czy korzystanie z narzędzi stolarskich.
              Tworzą drewniane skarbonki, wieszaki, ozdoby świąteczne, obrazy
              techniką string-art, dekoracje ze sznurka, kompozycje z kory i
              patyczków.Pracownia rzemiosł różnych w warsztacie terapii
              zajęciowej jest miejscem, w którym uczestnicy mają możliwość
              rozwijania swoich umiejętności manualnych, kreatywności i
              samodzielności.{" "}
            </p>
            <img
              className="pracownia__img"
              src="photo\rzemiosł.jpg"
              alt="rzemiosł.1"
            />
          </div>

          <div className="pracownia" id="gospodarstwa">
            <p>
              <b>Pracownia gospodarstwa domowego</b>: uczestnicy zdobywają
              umiejętności związane z prowadzeniem domu i pracami gospodarskimi,
              takimi jak gotowanie, pieczenie, pranie, prasowanie, dbanie o
              czystość i organizację czasu. Uczą się także zarządzania budżetem
              domowym.
            </p>
            <img
              className="pracownia__img"
              src="photo\gospodarstwa.jpg"
              alt="gospodarstwa.1"
            />
          </div>

          <div className="pracownia" id="psycholog">
            <p>
              <b>Psycholog</b> pomaga uczestnikom w radzeniu sobie z
              trudnościami emocjonalnymi, rozwijaniu umiejętności społecznych i
              osiąganiu swojego pełnego potencjału. Oto kilka zadań i funkcji,
              które może pełnić psycholog
            </p>
            <ol>
              <li>Indywidualne wsparcie</li>
              <li>Grupowe wsparcie:</li>
              <li>Ocena i diagnoza:</li>
              <li>Edukacja i szkolenia</li>
            </ol>
          </div>

          <div className="pracownia" id="rewalidacja">
            <p>
              W Warsztacie Terapii Zajęciowej specjalista do spraw{" "}
              <b>rewalidacji</b> odgrywa istotną rolę w procesie rehabilitacji i
              wsparcia innych uczestników. Oto kilka zadań i funkcji, które może
              pełnić specjalista do spraw rewalidacji w WTZ:
            </p>

            <ol>
              <li>Wsparcie i motywacja.</li>
              <li>Pomoc w nabywaniu umiejętności.</li>
              <li>Budowanie relacji społecznych.</li>
              <li>Promowanie samodzielności.</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
