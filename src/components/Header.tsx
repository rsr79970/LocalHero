// components/Header.tsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">🌍 LocalHero</Link>
        </div>
        <nav className="nav">
          <Link to="/">Map</Link>
          <Link to="/add-point">Add Point</Link>
          <Link to="/about">About</Link>
          <Link to="/auth">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;