import "./Features.css";

const features = [
  {
    title: "On-site management",
    description:
      "A dedicated team is close by to help with your home and everyday needs.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M3 11.5L12 4L21 11.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M5.5 10.5V20H18.5V10.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M9.5 20V14H14.5V20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Community spaces",
    description:
      "Shared spaces designed to make it easier to connect, relax and feel at home.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle
          cx="9"
          cy="8"
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <circle
          cx="17"
          cy="9"
          r="2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <path
          d="M3.5 19C3.5 15.7 6 13.5 9 13.5C12 13.5 14.5 15.7 14.5 19"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        <path
          d="M14 14.5C14.8 14 15.8 13.7 17 13.7C19.5 13.7 21 15.5 21 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Long-term security",
    description:
      "Homes built and managed for the long term, giving residents greater stability.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3L19 6V11C19 15.7 16.1 19.5 12 21C7.9 19.5 5 15.7 5 11V6L12 3Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M9 12L11 14L15.5 9.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Thoughtful living",
    description:
      "Well-designed homes created around comfort, convenience and everyday life.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 12L12 5L20 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M6 10.5V20H18V10.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M12 16C13.8 13.2 16.3 12.4 18.5 12.7C18.4 15.5 16.6 18 12 19"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function Features() {
  return (
    <section className="features" aria-labelledby="features-title">
      <div className="features__container">
        <div className="features__intro">
          <p className="features__eyebrow">Why arriva</p>

          <h2 id="features-title" className="features__title">
            Renting designed around you.
          </h2>

          <p className="features__description">
            More than just a home, arriva communities are designed to offer
            stability, support and a genuine sense of belonging.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-card__icon">
                {feature.icon}
              </div>

              <div className="feature-card__content">
                <h3 className="feature-card__title">
                  {feature.title}
                </h3>

                <p className="feature-card__description">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;