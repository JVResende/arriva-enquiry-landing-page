import "./Footer.css";
import arrivaLogo from "../../assets/logos/arriva-logo.svg";

function handleBackToTop(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__contact">
          <address className="footer__address">
            <p>G11, 23 Morwick St, Strathfield NSW 2135</p>

            <a href="mailto:home@arriva.com.au">home@arriva.com.au</a>
          </address>
        </div>

        <div className="footer__social-section">
          <p className="footer__social-title">Connect with us</p>

          <div className="footer__socials">
            <a
              className="footer__social-link"
              href="https://www.facebook.com/arriva.au/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Arriva on Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 8H16V5H13.5C10.5 5 9 6.8 9 9.5V11H7V14H9V21H12V14H14.5L15 11H12V9.7C12 8.6 12.4 8 13.5 8Z" />
              </svg>
            </a>

            <a
              className="footer__social-link"
              href="https://au.linkedin.com/company/arriva-au"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Arriva on LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.5 8.5H3.5V20H6.5V8.5ZM5 3.5C4 3.5 3.2 4.3 3.2 5.3C3.2 6.3 4 7.1 5 7.1C6 7.1 6.8 6.3 6.8 5.3C6.8 4.3 6 3.5 5 3.5ZM20.5 13.3C20.5 9.8 18.6 8.2 16.1 8.2C14.1 8.2 13.2 9.3 12.7 10.1V8.5H9.7V20H12.7V13.6C12.7 11.9 13 10.3 15.1 10.3C17.1 10.3 17.2 12.2 17.2 13.7V20H20.2L20.5 13.3Z" />
              </svg>
            </a>

            <a
              className="footer__social-link"
              href="https://www.instagram.com/arriva.au/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Arriva on Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.5 3H16.5C19 3 21 5 21 7.5V16.5C21 19 19 21 16.5 21H7.5C5 21 3 19 3 16.5V7.5C3 5 5 3 7.5 3ZM7.3 5C6 5 5 6 5 7.3V16.7C5 18 6 19 7.3 19H16.7C18 19 19 18 19 16.7V7.3C19 6 18 5 16.7 5H7.3ZM17.4 6.5C18 6.5 18.5 7 18.5 7.6C18.5 8.2 18 8.7 17.4 8.7C16.8 8.7 16.3 8.2 16.3 7.6C16.3 7 16.8 6.5 17.4 6.5ZM12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__brand">
          <a
            className="footer__logo-link"
            href="#top"
            onClick={handleBackToTop}
            aria-label="Back to top"
          >
            <img className="footer__logo" src={arrivaLogo} alt="arriva" />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <p>Copyright © 2026 arriva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
