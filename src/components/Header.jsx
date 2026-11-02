
import './Header.css'

function Header() {
  return (
    <header className="header">

      {/* Top section */}
      <div className="header-top">

        {/* Logo */}
        <a href="/" className="logo">
          Shoply<span>.</span>
        </a>

        {/* Search bar */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for products..."
          />
          <button type="button">Search</button>
        </div>

        {/* Header actions */}
        <div className="header-actions">
          <a href="/account">Account</a>
          <a href="/wishlist">♡ Wishlist</a>
          <a href="/cart">🛒 Cart</a>
        </div>

      </div>

      {/* Navigation */}
      <nav className="navigation">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/categories">Categories</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>

    </header>
  )
}

export default Header
