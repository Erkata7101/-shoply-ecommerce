import './Hero.css'
function Hero(){
return(
    <section className="hero">
    <div classsName="hero-content">
        <p className="hero-label">WELCOME TO SHOPLY</p>
        <h1>
  Discover Your
  <span> Perfect Style</span>
</h1>
<button className="shop-button">
  Shop Now →
</button>
    </div>
         <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900"
          alt="Modern fashion store"
        />
      </div>
    </section>
)
}
export default Hero