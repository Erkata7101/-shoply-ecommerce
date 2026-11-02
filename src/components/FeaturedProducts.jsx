
import './FeaturedProducts.css'

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 85,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 120,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'
    },
    {
      id: 3,
      name: 'Modern Sneakers',
      price: 65,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'
    },
    {
      id: 4,
      name: 'Classic Backpack',
      price: 45,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500'
    }
  ]

  return (
    <section className="featured-products">
      <div className="featured-heading">
        <h2>Featured Products</h2>
        <p>Discover some of our popular products.</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-rating">★ {product.rating}</p>
              <p className="product-price">${product.price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts
