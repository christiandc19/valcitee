import logo from "../../assets/images/logo.png";
import hatIcon from "../../assets/icons/hat.svg";
import shirtIcon from "../../assets/icons/shirt.svg";
import hoodieIcon from "../../assets/icons/hoodie.svg";
import beanieIcon from "../../assets/icons/beanie.svg";
import "./LogoMenu.css";

export default function LogoMenu({ open, onToggle, onSelect }) {
  return (
    <div className="logoMenu">
      <button className="logoMenu__logoBtn" onClick={onToggle} type="button">
        <img src={logo} alt="Logo" className="logoMenu__logo" />
      </button>

      <div className={`logoMenu__items ${open ? "open" : ""}`}>
        <button
          className="logoMenu__item"
          type="button"
          onClick={() => onSelect("hats")}
        >
          <img src={hatIcon} alt="Hats" className="logoMenu__icon" />
          <span>Hats</span>
        </button>

        <button
          className="logoMenu__item"
          type="button"
          onClick={() => onSelect("shirts")}
        >
          <img src={shirtIcon} alt="Shirts" className="logoMenu__icon" />
          <span>Shirts</span>
        </button>

        <button
          className="logoMenu__item"
          type="button"
          onClick={() => onSelect("hoodies")}
        >
          <img src={hoodieIcon} alt="Hoodies" className="logoMenu__icon" />
          <span>Hoodies</span>
        </button>

        <button
          className="logoMenu__item"
          type="button"
          onClick={() => onSelect("beanies")}
        >
          <img src={beanieIcon} alt="Beanies" className="logoMenu__icon" />
          <span>Beanies</span>
        </button>
      </div>
    </div>
  );
}