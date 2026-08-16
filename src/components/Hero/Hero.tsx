import { useCallback, useEffect, useState } from "react";
import "./Hero.css";

import strathfieldImage from "../../assets/images/strathfield.jpg";
import chippendaleImage from "../../assets/images/chippendale.jpg";
import camperdownImage from "../../assets/images/camperdown.jpg";
import stPetersImage from "../../assets/images/stpeters.jpg";
import homebushImage from "../../assets/images/homebush.jpg";
import beaconsfieldImage from "../../assets/images/beaconsfield.jpg";

const heroCommunities = [
  {
    name: "Strathfield",
    address: "23 Morwick Street | 8 Lyons Street",
    description:
      "A modern sanctuary in Strathfield. Enjoy vibrant community living close to shopping centres and restaurants — ideal for families and professionals alike.",
    image: strathfieldImage,
  },
  {
    name: "Chippendale",
    address: "2 Grafton Street",
    description:
      "Experience the ultimate urban retreat in Chippendale. Rent thoughtfully designed homes tailored for young families, students and city dwellers seeking style and convenience.",
    image: chippendaleImage,
  },
  {
    name: "Camperdown",
    address: "35 Missenden Road",
    description:
      "Discover vibrant living in Camperdown. Rent quality homes suitable for medical practitioners, professionals, students and families seeking convenience and comfort.",
    image: camperdownImage,
  },
  {
    name: "St Peters",
    address: "81 Princes Highway | 60 Applebee Street",
    description:
      "Experience urban living in St Peters. Rent a modern home in the heart of the inner city, perfect for those seeking a vibrant lifestyle close to all amenities.",
    image: stPetersImage,
  },
  {
    name: "Homebush",
    address: "109 Underwood Road",
    description:
      "Enjoy spacious, convenient living in Homebush. Rent ideal homes well suited for professionals and families seeking comfort and accessibility in a thriving community.",
    image: homebushImage,
  },
  {
    name: "Beaconsfield",
    address: "227–229 Queen Street",
    description:
      "A thriving urban precinct with stylish terraces in Beaconsfield. Enjoy modern urban living with city convenience in a vibrant, connected community.",
    image: beaconsfieldImage,
  },
];

const AUTO_CHANGE_DELAY = 5000;
const FADE_DURATION = 350;

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const currentCommunity = heroCommunities[currentIndex];

  const changeSlide = useCallback(
    (direction: number) => {
      if (isFading) {
        return;
      }

      setIsFading(true);

      window.setTimeout(() => {
        setCurrentIndex((currentIndex) => {
          return (
            (currentIndex + direction + heroCommunities.length) %
            heroCommunities.length
          );
        });

        setIsFading(false);
      }, FADE_DURATION);
    },
    [isFading],
  );

  function showPreviousImage() {
    changeSlide(-1);
  }

  function showNextImage() {
    changeSlide(1);
  }

  useEffect(() => {
    if (isFading) {
      return;
    }

    const timer = window.setTimeout(() => {
      changeSlide(1);
    }, AUTO_CHANGE_DELAY);

    return () => {
      window.clearTimeout(timer);
    };
  }, [changeSlide, isFading]);

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">Renting, reimagined.</p>

          <h1 className="hero__title">More than a place to live.</h1>

          <p className="hero__description">
            Thoughtfully designed homes, professionally managed for the long
            term, with community at their heart.
          </p>

          <a className="hero__cta" href="#enquiry">
            Find your next home
          </a>
        </div>

        <div className="hero__carousel">
          <div
            className={`hero__slide ${isFading ? "hero__slide--fading" : ""}`}
          >
            <div className="hero__image-wrapper">
              <img
                className="hero__image"
                src={currentCommunity.image}
                alt={`${currentCommunity.name} arriva community`}
              />
            </div>

            <div className="hero__carousel-footer">
              <h2 className="hero__community-name" aria-live="polite">
                {currentCommunity.name}
              </h2>

              <p className="hero__community-address">
                {currentCommunity.address}
              </p>

              <p className="hero__community-description">
                {currentCommunity.description}
              </p>
            </div>
          </div>

          <button
            className="hero__carousel-button hero__carousel-button--previous"
            type="button"
            onClick={showPreviousImage}
            aria-label="Show previous community"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M15.5 19L8.5 12L15.5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className="hero__carousel-button hero__carousel-button--next"
            type="button"
            onClick={showNextImage}
            aria-label="Show next community"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M8.5 5L15.5 12L8.5 19"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
