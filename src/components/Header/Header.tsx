import "./Header.css";

function Header() {
  return (
    <header className="header" id="top">
      <div className="header__container">
        <a className="header__logo" href="/" aria-label="Arriva home">
          <span className="header__logo-mark" aria-hidden="true" />
        </a>

        <a className="header__cta" href="#enquiry">
          Enquire now
        </a>
      </div>
    </header>
  );
}

export default Header;
