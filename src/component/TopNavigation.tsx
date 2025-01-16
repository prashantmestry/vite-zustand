import { Link } from "react-router-dom";

const TopNavigation = () => {
  return (
    <header className="sticky top-0 inset-x-0">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default TopNavigation;
