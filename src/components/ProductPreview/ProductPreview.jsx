import { Link } from "react-router-dom";
import HatViewer from "../HatViewer/HatViewer";

export default function ProductPreview({ activeCategory }) {
  if (activeCategory !== "hats") return null;

  return (
    <div className="productPreview">
      <div className="productPreview__viewer">
        <HatViewer />
      </div>

      <Link to="/product/classic-hat" className="productPreview__cta">
        View Hat
      </Link>
    </div>
  );
}