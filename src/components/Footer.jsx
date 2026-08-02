import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">
        <h2>LUXORA</h2>
        <p>Luxury Streetwear Redefined.</p>
      </div>

      <div className="footer-links">

        <div>
          <h3>Shop</h3>
          <Link href="/shop">Oversized T-Shirts</Link>
          <Link href="/shop">Hoodies</Link>
          <Link href="/shop">Tank Tops</Link>
          <Link href="/shop">Bottoms</Link>
          <Link href="/shop">Accessories</Link>
        </div>

        <div>
          <h3>Company</h3>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </div>

        <div>
          <h3>Follow Us</h3>
          <a href="#" target="_blank">Instagram</a>
          <a href="#" target="_blank">X (Twitter)</a>
          <a href="#" target="_blank">YouTube</a>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 LUXORA. All Rights Reserved.
      </p>

    </footer>
  );
}