import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroVideo from "../../assets/video/hero.mp4";
import centerLogo from "../../assets/images/logo.png";
import LogoMenu from "../LogoMenu/LogoMenu";
import HatViewer from "../HatViewer/HatViewer";
import ShirtViewer from "../ShirtViewer/ShirtViewer";
import "./Hero.css";

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function handleLogoToggle() {
    setActiveCategory(null);
    setMenuOpen((prev) => !prev);
  }

  function handleSelect(category) {
    setActiveCategory(category);
  }

  return (
    <section className="hero">
      <video
        className="hero__video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div
        className={`hero__darkOverlay ${
          activeCategory ? "active" : ""
        }`}
      />

      <div className="hero__overlay">
        <LogoMenu
          open={menuOpen}
          onToggle={handleLogoToggle}
          onSelect={handleSelect}
        />

        {!activeCategory && (
          <div className="hero__centerLogoWrap">
            <div className="hero__centerLogoOverlay" />
            <img
              src={centerLogo}
              alt="Valcitee"
              className="hero__centerLogo"
            />
          </div>
        )}

        {activeCategory === "hats" && (
  <div className="hero__product">
    <HatViewer />

    <button
      className="hero__cta"
      type="button"
      onClick={() => navigate("/product/classic-hat")}
    >
      View Details
    </button>
  </div>
)}

{activeCategory === "shirts" && (
  <div className="hero__product">
    <ShirtViewer />

    <button
      className="hero__cta"
      type="button"
      onClick={() => navigate("/product/baseball-jersey")}
    >
      View Details
    </button>
  </div>
)}
      </div>
    </section>
  );
}