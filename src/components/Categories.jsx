
import './Categories.css'

function Categories() {
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      description: 'Phones, laptops and gadgets',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500'
    },
    {
      id: 2,
      name: 'Fashion',
      description: 'Clothing, shoes and bags',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500'
    },
    {
      id: 3,
      name: 'Home & Living',
      description: 'Furniture and decorations',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500'
    },
    {
      id: 4,
      name: 'Beauty',
      description: 'Skincare and cosmetics',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500'
    },
    {
      id: 5,
      name: 'Sports',
      description: 'Fitness and sports equipment',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500'
    },
    {
      id: 6,
      name: 'Appliances',
      description: 'Kitchen and home appliances',
      image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500'
    },
    {
      id: 7,
      name: 'Toys & Kids',
      description: 'Toys and children’s products',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500'
    },
    {
      id: 8,
      name: 'Books & Stationery',
      description: 'Books and office supplies',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500'
    }
  ]

  return (
    <section className="categories">
      <div className="categories-heading">
        <h2>Explore Our Categories</h2>
        <p>Discover everything you need in one place.</p>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <img src={category.image} alt={category.name} />

            <div className="category-info">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <button>Explore Now →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories
