// pages/AboutPage.tsx
const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1>About LocalHero</h1>
        
        <div className="about-content">
          <section className="mission">
            <h2>🎯 Our Mission</h2>
            <p>
              LocalHero is a platform that connects people who want to help. 
              We create a map of good deeds where everyone can find places that need assistance 
              or add new points requiring attention in their community.
            </p>
          </section>

          <section className="features">
            <h2>✨ What We Offer</h2>
            <ul>
              <li>🗺️ Interactive map of places needing help</li>
              <li>🤝 Find volunteer opportunities nearby</li>
              <li>📱 Easy way to add new help points</li>
              <li>🌍 Coverage across multiple cities</li>
              <li>🎯 Filter by categories and interests</li>
            </ul>
          </section>

          <section className="how-it-works">
            <h2>🚀 How It Works</h2>
            <div className="steps">
              <div className="step">
                <h3>1. Explore</h3>
                <p>Browse the map to find volunteering opportunities in your area</p>
              </div>
              <div className="step">
                <h3>2. Filter</h3>
                <p>Use categories to find causes that match your interests</p>
              </div>
              <div className="step">
                <h3>3. Contribute</h3>
                <p>Add new points to help others discover places that need support</p>
              </div>
            </div>
          </section>

          <section className="contact">
            <h2>📞 Contact Us</h2>
            <p>Email: contact@localhero.org</p>
            <p>Phone: +1 (555) 123-HELP</p>
            <p>Address: 123 Helping Street, Community City</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;