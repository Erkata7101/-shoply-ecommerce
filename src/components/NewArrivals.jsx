
import './NewArrivals.css'

function NewArrivals() {
  const newProducts = [
    {
      id: 1,
      name: 'Modern Desk Lamp',
      price: 35,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500'
    },
    {
      id: 2,
      name: 'Leather Handbag',
      price: 95,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500'
    },
    {
      id: 3,
      name: 'Wireless Speaker',
      price: 70,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500'
    },
    {
      id: 4,
      name: 'Comfortable Chair',
      price: 150,
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=500'
    }
  ]

  return (
    <section className="new-arrivals">
      <div className="new-arrivals-heading">
        <h2>New Arrivals</h2>
        <p>Explore the latest products added to Shoply.</p>
      </div>

      <div className="new-arrivals-grid">
        {newProducts.map((product) => (
          <div className="new-arrival-card" key={product.id}>
            <div className="new-arrival-image">
              <span className="new-badge">NEW</span>
              <img src={product.image} alt={product.name} />
            </div>

            <div className="new-arrival-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button>View Product</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewArrivals
