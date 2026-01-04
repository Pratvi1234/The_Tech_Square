const HeroSection = () => {
  return (
    <section className="hero_section">
      <div className="hero_container">
        {/* LEFT COLUMN: Text */}
        <div className="hero_text">
          <h1 className="hero_title">Budget Friendly Trusted Tech</h1>
          <p className="hero_lead">
            From the latest smartphones to powerful laptops — we’ve got tech
            that matches your vibe.
          </p>
          <button className="btn hero_btn">Shop Now</button>
        </div>

        {/* RIGHT COLUMN: Image */}
        <div className="hero_image">
          <img
            src="../images/FirstSlid.png"
            alt="Tech Product"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
