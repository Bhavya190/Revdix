"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Facebook, Twitter, Linkedin, Instagram, Quote, Mail, Phone, MapPin, Ship, Package, Search, BarChart3, ShieldCheck, Zap, Globe2, Clock, Heart, Users, Award, CheckCircle2 } from "lucide-react";

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

const reviews = [
  {
    name: "John Miller",
    designation: "CEO, Global Tradings",
    text: "Highly professional service. They made our import process completely hassle-free and ensured quality at every step. Their attention to detail is unmatched in the industry.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    designation: "Procurement Manager, East-West Co.",
    text: "Revdix has been our reliable partner for over two years. Their sourcing expertise helped us find the best Indian spices for our international stores.",
    rating: 5
  },
  {
    name: "Ahmed Hassan",
    designation: "Director, Luxe Furniture",
    text: "Transparent deals and on-time delivery. We highly recommend Revdix for anyone looking for reliable furniture exports from India.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    designation: "Retail Operations, EuroStyle",
    text: "The quality of leather goods we received was exceptional. Their communication throughout the shipping process was proactive and helpful.",
    rating: 5
  }
];

function CarouselSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselItems.length);
    }, 8000);
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
          <div className="hero-overlay"></div>
          <div className="container hero-content" style={{ zIndex: 2 }}>
            <p className="subtitle" style={{ color: 'var(--secondary-color)', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: '800', marginBottom: '1.5rem', fontSize: '1.1rem' }}>{item.subtitle}</p>
            <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', color: '#fff', textShadow: '2px 2px 10px rgba(0,0,0,0.3)' }}>{item.title}</h1>
            <p className="desc" style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto 3rem auto', opacity: '0.95', color: '#fff' }}>{item.desc}</p>
            <div className="btn-group" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <a href="#services" className="btn-premium btn-primary">Our Services</a>
              <a href="#contact" className="btn-premium btn-outline">Contact Us</a>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button onClick={prevSlide} style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer', zIndex: 10, width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s' }} className="carousel-btn">❮</button>
      <button onClick={nextSlide} style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer', zIndex: 10, width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s' }} className="carousel-btn">❯</button>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '1rem', zIndex: 10 }}>
        {carouselItems.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? '40px' : '10px',
              height: '10px',
              borderRadius: '10px',
              background: i === current ? 'var(--primary-color)' : 'rgba(255,255,255,0.3)',
              cursor: 'pointer',
              transition: 'all 0.4s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ReviewSection() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding" style={{ background: '#fcfcfc' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem', userSelect: 'none' }}>
          <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem', letterSpacing: '0.2rem' }}>Testimonials</h4>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)' }}>Client Success Stories</h2>
          <div style={{ width: '60px', height: '3px', background: 'var(--primary-color)', margin: '1rem auto' }}></div>
        </div>

        <div className="reviews-container" style={{ position: 'relative', overflow: 'hidden', minHeight: '480px' }}>
          {reviews.map((review, index) => (
            <div key={index} className={`review-slide ${index === currentReview ? 'active' : ''}`}>
              <div className="testimonial-card">
                <Quote size={50} style={{ color: 'var(--primary-color)', opacity: 0.1, marginBottom: '2rem' }} />
                <p className="testimonial-quote">"{review.text}"</p>
                <div style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
                  {"★".repeat(review.rating)}
                </div>
                <div style={{ fontWeight: '800', fontSize: '1.2rem', color: 'var(--text-dark)' }}>{review.name}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '1px' }}>{review.designation}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Improved Navigation Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginTop: '3rem' }}>
          {reviews.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentReview(i)}
              style={{
                width: i === currentReview ? '32px' : '10px',
                height: '10px',
                borderRadius: '10px',
                background: i === currentReview ? 'var(--primary-color)' : '#e0e0e0',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: i === currentReview ? '0 4px 10px rgba(11, 133, 82, 0.2)' : 'none'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-links">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Mail size={12} /> info@revdixexim.com</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Phone size={12} /> +91 00000 00000</span>
          </div>
          <div className="top-bar-links" style={{ gap: '1rem' }}>
            <a href="#" style={{ opacity: 0.9 }}><Facebook size={14} /></a>
            <a href="#" style={{ opacity: 0.9 }}><Twitter size={14} /></a>
            <a href="#" style={{ opacity: 0.9 }}><Linkedin size={14} /></a>
            <a href="#" style={{ opacity: 0.9 }}><Instagram size={14} /></a>
          </div>
        </div>
      </div>

      {/* Header */}
      <nav className={`glass-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/images/revdix logo wo bg .png"
              alt="Revdix Exim Logo"
              width={150}
              height={50}
              style={{
                objectFit: 'contain',
                filter: scrolled ? 'none' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }}
              priority
            />
          </div>
          <ul style={{ display: 'flex', gap: '2rem', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.85rem', color: scrolled ? 'var(--text-dark)' : '#fff' }}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">What We Do</a></li>
            <li><a href="#export">What We Export</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="btn-premium btn-primary">Enquiry Now</a>
        </div>
      </nav>

      {/* Hero Carousel */}
      <CarouselSection />

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h4 className="text-royal" style={{ marginBottom: '1rem' }}>─── About Revdix ───</h4>
              <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Expert <span className="text-royal">Import Export</span> Solutions</h2>
              <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.05rem', color: 'rgba(0,0,0,0.7)' }}>
                Revdix Exim LLP is a premier export-import company dedicated to bridging the global market.
                With years of industry expertise, we specialize in delivering high-quality products across
                multiple categories, ensuring excellence and reliability in every transaction.
              </p>
              <p style={{ lineHeight: '1.8', marginBottom: '2rem', color: 'rgba(0,0,0,0.7)' }}>
                Our commitment is to facilitate seamless international trade by adhering to global standards
                and building long-term partnerships with our clients worldwide.
              </p>
              <a href="#about" className="btn-premium btn-primary">Read More</a>
            </div>
            <div style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', boxShadow: 'var(--shadow-premium)', height: '450px' }}>
              <Image
                src="/images/company_workspace.jpeg"
                alt="Revdix Company Workspace"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do (Dark Overlay Section) */}
      <section id="services" className="section-padding" style={{ position: 'relative', background: 'url("/images/website-bg.jpg") center/cover fixed' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(11, 133, 82, 0.85)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3.5rem', color: '#fff' }}>What We Do</h2>
            <div style={{ width: '60px', height: '3px', background: '#fff', margin: '1rem auto' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            {[
              { title: "Export", desc: "Global distribution of premium Indian products to international markets.", icon: <Ship size={32} /> },
              { title: "Import", desc: "Sourcing high-quality global goods for domestic consumption.", icon: <Package size={32} /> },
              { title: "Sourcing Agent", desc: "Identifying and vetting the best suppliers for your specific needs.", icon: <Search size={32} /> },
              { title: "Trading & Consultancy", desc: "Expert advice on international trade regulations and logistics.", icon: <BarChart3 size={32} /> }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div className="bg-royal" style={{ color: '#ffffff', width: '60px', height: '60px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: '#fff' }}>{item.title}</h3>
                  <p style={{ opacity: '0.95', lineHeight: '1.6', color: '#fff' }}>{item.desc}</p>
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
            <h2 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>What We <span className="text-royal">Export</span></h2>
            <div className="bg-royal" style={{ width: '80px', height: '4px', margin: '1.5rem auto' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
            {[
              "Fruits & Vegetables", "Food Products", "Spices Products",
              "Household Products", "Handicraft Products", "Paper Products",
              "Apparels & Textile", "Furniture", "Metal Products",
              "Ceramic Products", "Construction Materials", "Packaging Products"
            ].map((product, i) => (
              <div key={i} className="product-card">
                <div className="product-image">
                  <Image
                    src={`/images/${product}${product === 'Furniture' ? '.png' : '.jpg'}`}
                    alt={product}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="product-info">
                  <h3>{product}</h3>
                  <div style={{ borderBottom: '2px solid var(--secondary-color)', width: '40px', margin: '0.5rem auto 1rem auto' }}></div>
                  <a href="#" className="product-link">View Details →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Gallery */}
      <section id="gallery" className="section-padding" style={{ position: 'relative', background: 'url("/images/website-bg.jpg") center/cover fixed', color: '#fff' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(11, 133, 82, 0.85)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#fff' }}>Business Gallery</h2>
            <div style={{ width: '60px', height: '3px', background: '#fff', margin: '1rem auto' }}></div>
          </div>
          <div className="gallery-grid">
            {[
              "Fruits & Vegetables.jpg", "Spices Products.jpg", "Handicraft Products.jpg",
              "Construction Materials.jpg", "Metal Products.jpg", "Food Products.jpg",
              "Ceramic Products.jpg", "Furniture.png"
            ].map((img, i) => (
              <div key={i} className="gallery-item" style={{ position: 'relative', height: '240px', background: 'rgba(255,255,255,0.1)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                <Image
                  src={`/images/${img}`}
                  alt={`Gallery Image ${i + 1}`}
                  fill
                  style={{ objectFit: 'cover', opacity: 0.9 }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)' }}>Why You <span className="text-royal">Choose Us</span></h2>
            <div className="bg-royal" style={{ width: '50px', height: '3px', margin: '1rem auto' }}></div>
          </div>
          <div className="why-grid">
            {[
              { title: "Reliability", desc: "Unwavering commitment to timely deliveries and consistent service quality across all global borders.", icon: <ShieldCheck size={40} /> },
              { title: "Expertise", desc: "Years of specialized experience in international trade regulations and logistics management.", icon: <Award size={40} /> },
              { title: "Global Reach", desc: "A vast network of international partners ensuring seamless export-import operations worldwide.", icon: <Globe2 size={40} /> },
              { title: "Quality Control", desc: "Rigorous inspection and quality assurance protocols to ensure only the best products reach our clients.", icon: <CheckCircle2 size={40} /> },
              { title: "On-time Delivery", desc: "Optimized logistics and supply chain management for the fastest possible shipping turnarounds.", icon: <Clock size={40} /> },
              { title: "Customer Focused", desc: "Tailored solutions and dedicated support to meet the unique needs of every business partner.", icon: <Heart size={40} /> }
            ].map((item, i) => (
              <div key={i} className="why-card">
                <div className="text-royal" style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                <h3 style={{ color: 'var(--text-dark)' }}>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Review Carousel */}
      <ReviewSection />

      {/* Membership & Certification */}
      {/* <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '4rem', color: 'var(--primary-color)' }}>Membership & <span className="text-royal">Certification</span></h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '120px', height: '80px', opacity: 0.8 }}>
              <Image src="/images/revdix logo.png" alt="Certification 1" fill style={{ objectFit: 'contain', filter: 'grayscale(1)' }} />
            </div>
            <div style={{ position: 'relative', width: '120px', height: '80px', opacity: 0.8 }}>
              <Image src="/images/revdix_detail_page.jpeg" alt="Certification 2" fill style={{ objectFit: 'contain', filter: 'grayscale(1)' }} />
            </div>
            <div style={{ position: 'relative', width: '120px', height: '80px', opacity: 0.8 }}>
              <Image src="/images/corousel-4.jpg" alt="Certification 3" fill style={{ objectFit: 'contain', filter: 'grayscale(1)' }} />
            </div>
          </div>
        </div>
      </section> */}

      {/* Expanded Footer */}
      <footer style={{ background: '#0a0a0a', color: '#fff', padding: '6rem 0 3rem 0' }}>
        <div className="container">
          <div className="footer-grid">
            <div>
              <Image
                src="/images/revdix logo wo bg .png"
                alt="Logo"
                width={200}
                height={70}
                style={{
                  objectFit: 'contain',
                  marginBottom: '2rem'
                }}
              />
              <p style={{ opacity: '0.6', lineHeight: '1.8', fontSize: '1rem' }}>
                Your global partner for efficient and reliable import-export services. Connecting businesses beyond borders with excellence and transparency.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '2rem', color: '#fff', fontSize: '1.2rem' }}>Quick Links</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: '0.7' }}>
                <li><a href="#" className="footer-link">Home</a></li>
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#" className="footer-link">Gallery</a></li>
                <li><a href="#" className="footer-link">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '2rem', color: '#fff', fontSize: '1.2rem' }}>Our Services</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: '0.7' }}>
                <li><a href="#" className="footer-link">Import Services</a></li>
                <li><a href="#" className="footer-link">Export Solutions</a></li>
                <li><a href="#" className="footer-link">Global Sourcing</a></li>
                <li><a href="#" className="footer-link">Trade Consultancy</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '2rem', color: '#fff', fontSize: '1.2rem' }}>Contact Info</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', opacity: '0.7' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><MapPin size={18} className="text-secondary" /> Surat, Gujarat, India</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Phone size={18} className="text-secondary" /> +91 000 000 0000</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Mail size={18} className="text-secondary" /> info@revdixexim.com</li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '3rem', marginTop: '1rem', textAlign: 'center', opacity: '0.6', fontSize: '0.95rem' }}>
            © {new Date().getFullYear()} Revdix Exim LLP. All Rights Reserved. Designed with Excellence.
          </div>
        </div>
      </footer>
    </div>
  );
}
