"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const carouselItems = [
  {
    title: "REVDIX EXIM LLP",
    subtitle: "Welcome to Excellence",
    desc: "Your premier partner for global trade and seamless logistics solutions.",
    image: "/images/corousel-1.jpg"
  },
  {
    title: "Furniture Export",
    subtitle: "We Are Here To Export",
    desc: "Connecting you with premium manufacturers and suppliers across the world.",
    image: "/images/corousel-2.jpg"
  },
  {
    title: "Jewelry Export",
    subtitle: "We Are Here To Export",
    desc: "Ensuring your cargo reaches its destination safely and on time, every time.",
    image: "/images/corousel-3.jpg"
  },
  {
    title: "Indian Spices Export",
    subtitle: "We Are Here To Export",
    desc: "Rigorous standards and inspections to guarantee the best products for your market.",
    image: "/images/corousel-4.jpg"
  },
  {
    title: "Leather Export",
    subtitle: "We Are Here To Export",
    desc: "Building long-term success through transparent and efficient international trade.",
    image: "/images/corousel-5.jpg"
  }
];

function CarouselSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselItems.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % carouselItems.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);

  const getSlideClass = (index: number) => {
    if (index === current) return "active";
    if (index === (current - 1 + carouselItems.length) % carouselItems.length) return "prev";
    return "next";
  };

  return (
    <div className="hero-carousel">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`hero-slide ${getSlideClass(index)}`}
        >
          <div
            className="hero-slide-bg"
            style={{ backgroundImage: `url("${item.image}")` }}
          />
          <div className="hero-overlay" style={{ background: 'rgba(0,0,0,0.5)' }}></div>
          <div className="container" style={{ zIndex: 2 }}>
            <p style={{ color: 'var(--secondary-color)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '1rem' }}>{item.subtitle}</p>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>{item.title}</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem auto', opacity: '0.9' }}>{item.desc}</p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <a href="#services" className="btn-premium btn-primary">Our Services</a>
              <a href="#contact" className="btn-premium btn-outline">Contact Us</a>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button onClick={prevSlide} style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', zIndex: 10, padding: '1rem', borderRadius: '50%' }}>❮</button>
      <button onClick={nextSlide} style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', zIndex: 10, padding: '1rem', borderRadius: '50%' }}>❯</button>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '1rem', zIndex: 10 }}>
        {carouselItems.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: i === current ? 'var(--secondary-color)' : 'rgba(255,255,255,0.3)',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-links">
            <span>📧 info@revdixexim.com</span>
            <span>📞 +91 00000 00000</span>
          </div>
          <div className="top-bar-links">
            <a href="#">FB</a>
            <a href="#">TW</a>
            <a href="#">LN</a>
            <a href="#">IG</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <nav className="glass-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '90px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/images/revdix logo wo bg .png"
              alt="Revdix Exim Logo"
              width={160}
              height={55}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <ul style={{ display: 'flex', gap: '2rem', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.9rem' }}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">What We Do</a></li>
            <li><a href="#export">What We Export</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="btn-premium btn-primary" style={{ padding: '0.6rem 1.8rem' }}>Enquiry Now</a>
        </div>
      </nav>

      {/* Hero Carousel */}
      <CarouselSection />

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h4 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>─── About Revdix ───</h4>
              <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Expert Import Export Solutions</h2>
              <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                Revdix Exim LLP is a premier export-import company dedicated to bridging the global market.
                With years of industry expertise, we specialize in delivering high-quality products across
                multiple categories, ensuring excellence and reliability in every transaction.
              </p>
              <p style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
                Our commitment is to facilitate seamless international trade by adhering to global standards
                and building long-term partnerships with our clients worldwide.
              </p>
              <a href="#about" className="btn-premium btn-primary">Read More</a>
            </div>
            <div style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', boxShadow: 'var(--shadow-premium)' }}>
              {/* Placeholder for About Image */}
              <div style={{ background: '#f0f0f0', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.2rem', color: '#999' }}>[Company Workspace Image]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do (Dark Overlay Section) */}
      <section id="services" className="section-padding" style={{ position: 'relative', background: 'url("/images/website-bg.jpg") center/cover fixed' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,31,63,0.85)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem' }}>What We Do</h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--secondary-color)', margin: '1rem auto' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            {[
              { title: "Export", desc: "Global distribution of premium Indian products to international markets.", icon: "🚢" },
              { title: "Import", desc: "Sourcing high-quality global goods for domestic consumption.", icon: "📦" },
              { title: "Sourcing Agent", desc: "Identifying and vetting the best suppliers for your specific needs.", icon: "🔍" },
              { title: "Trading & Consultancy", desc: "Expert advice on international trade regulations and logistics.", icon: "📈" }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--secondary-color)', width: '60px', height: '60px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>{item.title}</h3>
                  <p style={{ opacity: '0.8', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Export Section */}
      <section id="export" className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>What We Export</h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--secondary-color)', margin: '1rem auto' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              "Fruits & Vegetables", "Food Products", "Spices Products",
              "Household Products", "Handicraft Products", "Paper Products",
              "Apparels & Textile", "Furniture", "Metal Products",
              "Ceramic Products", "Construction Materials", "Packaging Products"
            ].map((product, i) => (
              <div key={i} className="product-card">
                <div className="product-image">
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc' }}>
                    [Image: {product}]
                  </div>
                </div>
                <div className="product-info">
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>{product}</h3>
                  <div style={{ borderBottom: '2px solid var(--secondary-color)', width: '40px', margin: '0.5rem auto 1rem auto' }}></div>
                  <a href="#" style={{ color: 'var(--secondary-color)', fontSize: '0.9rem', fontWeight: 'bold' }}>View Details →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Gallery */}
      <section id="gallery" className="section-padding" style={{ background: 'var(--primary-color)', color: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Business Gallery</h2>
          </div>
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i} style={{ height: '200px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}></div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)' }}>Why You Choose Us</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
            {[
              { title: "Reliability", icon: "🤝" },
              { title: "Expertise", icon: "💎" },
              { title: "Global Reach", icon: "🌎" },
              { title: "Quality Control", icon: "⚖️" },
              { title: "On-time Delivery", icon: "⏱️" },
              { title: "Customer Focused", icon: "❤️" }
            ].map((item, i) => (
              <div key={i} className="why-card">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.2rem' }}>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding" style={{ background: 'url("/images/website-bg.jpg") center/cover fixed' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem', color: '#fff' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Love from Clients</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[1, 2, 3].map(i => (
              <div key={i} className="testimonial-card">
                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', opacity: '0.8' }}>
                  "Highly professional service. They made our import process completely hassle-free and ensured quality at every step."
                </p>
                <div style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>★★★★★</div>
                <div style={{ fontWeight: 'bold' }}>Client Name</div>
                <div style={{ fontSize: '0.8rem', opacity: '0.6' }}>Business Owner</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership & Certification */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '4rem' }}>Membership & Certification</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', opacity: '0.5' }}>
            <span style={{ fontSize: '3rem' }}>📜</span>
            <span style={{ fontSize: '3rem' }}>🎖️</span>
            <span style={{ fontSize: '3rem' }}>🏛️</span>
          </div>
        </div>
      </section>

      {/* Expanded Footer */}
      <footer style={{ background: '#0a0a0a', color: '#fff', padding: '6rem 0 2rem 0' }}>
        <div className="container">
          <div className="footer-grid">
            <div>
              <Image src="/images/revdix logo wo bg .png" alt="Logo" width={140} height={50} style={{ filter: 'brightness(0) invert(1)', marginBottom: '1.5rem' }} />
              <p style={{ opacity: '0.6', lineHeight: '1.8' }}>
                Your global partner for efficient and reliable import-export services. Connecting businesses beyond borders.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>Quick Links</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: '0.7' }}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>Our Services</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: '0.7' }}>
                <li><a href="#">Import</a></li>
                <li><a href="#">Export</a></li>
                <li><a href="#">Sourcing</a></li>
                <li><a href="#">Consultancy</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>Contact Us</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: '0.7' }}>
                <li>📍 Surat, Gujarat, India</li>
                <li>📞 +91 000 000 0000</li>
                <li>📧 info@revdixexim.com</li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', opacity: '0.5', fontSize: '0.9rem' }}>
            © 2026 Revdix Exim LLP. Created with Excellence.
          </div>
        </div>
      </footer>
    </div>
  );
}
