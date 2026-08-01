export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">LUXORA</div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/collections">Collections</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  );
}